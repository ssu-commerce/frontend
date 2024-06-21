/* eslint-disable */
/* tslint:disable */

/**
 * Mock Service Worker.
 * @see https://github.com/mswjs/msw
 * - Please do NOT modify this file.
 * - Please do NOT serve this file on production.
 */

const PACKAGE_VERSION = "2.2.12";
const INTEGRITY_CHECKSUM = "26357c79639bfa20d64c0efca2a87423";
const IS_MOCKED_RESPONSE = Symbol("isMockedResponse");
const activeClientIds = new Set();

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", async function (event) {
  const clientId = event.source.id;

  if (!clientId || !self.clients) {
    return;
  }

  const client = await self.clients.get(clientId);

  if (!client) {
    return;
  }

  const allClients = await self.clients.matchAll({
    type: "window",
  });
  if (event.data !== "KEEPALIVE_REQUEST") {
    console.log(
      "-------------------------------- Mocking : Message Event --------------------------------",
      event.source.url,
      event,
      event.data,
    );
  }
  switch (event.data) {
    case "KEEPALIVE_REQUEST": {
      console.log(
        "-------------------------------- Mocking : 11111. sendToClient  --------------------------------",
        client.url,
        client,
      );
      sendToClient("KEEPALIVE_RESPONSE", client, {
        type: "KEEPALIVE_RESPONSE",
      });
      break;
    }

    case "INTEGRITY_CHECK_REQUEST": {
      console.log(
        "-------------------------------- Mocking : 22222. sendToClient  --------------------------------",
        client.url,
        client,
      );
      sendToClient("INTEGRITY_CHECK_RESPONSE", client, {
        type: "INTEGRITY_CHECK_RESPONSE",
        payload: {
          packageVersion: PACKAGE_VERSION,
          checksum: INTEGRITY_CHECKSUM,
        },
      });
      break;
    }

    case "MOCK_ACTIVATE": {
      activeClientIds.add(clientId);
      console.log(
        "-------------------------------- Mocking : 33333. sendToClient  --------------------------------",
        client.url,
        client,
      );
      sendToClient("MOCKING_ENABLED", client, {
        type: "MOCKING_ENABLED",
        payload: true,
      });
      break;
    }

    case "MOCK_DEACTIVATE": {
      activeClientIds.delete(clientId);
      break;
    }

    case "CLIENT_CLOSED": {
      activeClientIds.delete(clientId);

      const remainingClients = allClients.filter((client) => {
        return client.id !== clientId;
      });

      // Unregister itself when there are no more clients
      if (remainingClients.length === 0) {
        self.registration.unregister();
      }

      break;
    }
  }
});

self.addEventListener("fetch", function (event) {
  const { request } = event;

  // Bypass navigation requests.
  // if (request.mode === "navigate") {
  //   console.log(
  //     "-------------------------------- Mocking : 0. fetch - navigate --------------------------------",
  //     request.url,
  //   );
  //   return;
  // }

  // Opening the DevTools triggers the "only-if-cached" request
  // that cannot be handled by the worker. Bypass such requests.
  if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
    return;
  }
  // console.log(request.headers.has("x-msw-use"));

  // if (!request.headers.has("x-msw-use")) return;

  // if (request.url.includes("/book")) {
  //   console.log(
  //     "fetch event msw",
  //     request.url,
  //     activeClientIds,
  //     activeClientIds.size,
  //   );
  // }
  // Bypass all requests when there are no active clients.
  // Prevents the self-unregistered worked from handling requests
  // after it's been deleted (still remains active until the next reload).
  if (activeClientIds.size === 0) {
    return;
  }

  // Generate unique request ID.
  const requestId = crypto.randomUUID();

  // console.log(
  //   "-------------------------------- Mocking : 1. fetch - request.url --------------------------------",
  //   request.url,
  // );

  event.respondWith(handleRequest(event, requestId));
});

async function handleRequest(event, requestId) {
  const client = await resolveMainClient(event);

  // console.log(
  //   "-------------------------------- Mocking : 2. handleRequest - client, event, response --------------------------------",
  //   event.request.url,
  //   client,
  // );

  const response = await getResponse(event, client, requestId);

  // console.log(
  //   "-------------------------------- Mocking : 4. handleRequest - client, event, response --------------------------------",
  //   response.url,
  //   response,
  // );

  // Send back the response clone for the "response:*" life-cycle events.
  // Ensure MSW is active and ready to handle the message, otherwise
  // this message will pend indefinitely.

  if (client && activeClientIds.has(client.id)) {
    (async function () {
      const responseClone = response.clone();
      console.log(
        "-------------------------------- Mocking : 55555. sendToClient  --------------------------------",
        client.url,
        responseClone,
      );
      sendToClient(
        "RESPONSE",
        client,
        {
          type: "RESPONSE",
          payload: {
            requestId,
            isMockedResponse: IS_MOCKED_RESPONSE in response,
            type: responseClone.type,
            status: responseClone.status,
            statusText: responseClone.statusText,
            body: responseClone.body,
            headers: Object.fromEntries(responseClone.headers.entries()),
          },
        },
        [responseClone.body],
      );
    })();
  }

  return response;
}

// Resolve the main client for the given event.
// Client that issues a request doesn't necessarily equal the client
// that registered the worker. It's with the latter the worker should
// communicate with during the response resolving phase.
async function resolveMainClient(event) {
  const client = await self.clients.get(event.clientId);

  if (client?.frameType === "top-level") {
    return client;
  }

  const allClients = await self.clients.matchAll({
    type: "window",
  });

  return allClients
    .filter((client) => {
      // Get only those clients that are currently visible.
      return client.visibilityState === "visible";
    })
    .find((client) => {
      // Find the client ID that's recorded in the
      // set of clients that have registered the worker.
      return activeClientIds.has(client.id);
    });
}

async function getResponse(event, client, requestId) {
  const { request } = event;

  // Clone the request because it might've been already used
  // (i.e. its body has been read and sent to the client).
  const requestClone = request.clone();

  function passthrough() {
    const headers = Object.fromEntries(requestClone.headers.entries());

    // Remove internal MSW request header so the passthrough request
    // complies with any potential CORS preflight checks on the server.
    // Some servers forbid unknown request headers.
    delete headers["x-msw-intention"];

    console.log(
      "-------------------------------- Mocking : 3--1. passthrough - headers --------------------------------",
      request.url,
      client,
    );

    return fetch(requestClone, { headers });
  }

  // console.log(
  //   "-------------------------------- Mocking : 3-1. getResponse - client --------------------------------",
  //   request.url,
  //   client,
  // );

  // Bypass mocking when the client is not active.
  if (!client) {
    return passthrough();
  }

  // console.log(
  //   "-------------------------------- Mocking : 3-2. getResponse - activeClientIds.has(client.id) --------------------------------",
  //   request.url,
  //   activeClientIds.has(client.id),
  // );

  // Bypass initial page load requests (i.e. static assets).
  // The absence of the immediate/parent client in the map of the active clients
  // means that MSW hasn't dispatched the "MOCK_ACTIVATE" event yet
  // and is not ready to handle requests.
  if (!activeClientIds.has(client.id)) {
    return passthrough();
  }

  // Notify the client that a request has been intercepted.
  const requestBuffer = await request.arrayBuffer();

  // console.log(
  //   "-------------------------------- Mocking : 3-3. getResponse - object --------------------------------",
  //   request.url,
  //   {
  //     type: "REQUEST",
  //     payload: {
  //       id: requestId,
  //       url: request.url,
  //       mode: request.mode,
  //       method: request.method,
  //       headers: Object.fromEntries(request.headers.entries()),
  //       cache: request.cache,
  //       credentials: request.credentials,
  //       destination: request.destination,
  //       integrity: request.integrity,
  //       redirect: request.redirect,
  //       referrer: request.referrer,
  //       referrerPolicy: request.referrerPolicy,
  //       body: requestBuffer,
  //       keepalive: request.keepalive,
  //     },
  //   },
  // );
  console.log(
    "-------------------------------- Mocking : 66666666666666666666666666666. sendToClient  --------------------------------",
    client,
    {
      type: "REQUEST",
      payload: {
        id: requestId,
        url: request.url,
        mode: request.mode,
        method: request.method,
        headers: Object.fromEntries(request.headers.entries()),
        cache: request.cache,
        credentials: request.credentials,
        destination: request.destination,
        integrity: request.integrity,
        redirect: request.redirect,
        referrer: request.referrer,
        referrerPolicy: request.referrerPolicy,
        body: requestBuffer,
        keepalive: request.keepalive,
      },
    },
    [requestBuffer],
  );
  const clientMessage = await sendToClient(
    "REQUEST",
    client,
    {
      type: "REQUEST",
      payload: {
        id: requestId,
        url: request.url,
        mode: request.mode,
        method: request.method,
        headers: Object.fromEntries(request.headers.entries()),
        cache: request.cache,
        credentials: request.credentials,
        destination: request.destination,
        integrity: request.integrity,
        redirect: request.redirect,
        referrer: request.referrer,
        referrerPolicy: request.referrerPolicy,
        body: requestBuffer,
        keepalive: request.keepalive,
      },
    },
    [requestBuffer],
  );

  // console.log(
  //   "-------------------------------- Mocking : 3-4. getResponse - clientMessage.type --------------------------------",
  //   request.url,
  //   clientMessage,
  // );

  switch (clientMessage.type) {
    case "MOCK_RESPONSE": {
      return respondWithMock(clientMessage.data);
    }

    case "PASSTHROUGH": {
      return passthrough();
    }
  }

  return passthrough();
}

function sendToClient(where, client, message, transferrables = []) {
  console.log("--------------=============", where);
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel();

    // 콜 스택을 로그로 출력

    channel.port1.onmessage = (event) => {
      console.log(
        "-------------------------------- Mocking : 1. sendToClient - event  --------------------------------",
        client.url,
        event,
        where,
      );
      if (event.data && event.data.error) {
        return reject(event.data.error);
      }

      resolve(event.data);
    };

    console.log(
      "-------------------------------- Mocking : 2. postMessage - event  --------------------------------",
      client.url,
      message,
      [channel.port2].concat(transferrables.filter(Boolean)),
    );

    client.postMessage(
      message,
      [channel.port2].concat(transferrables.filter(Boolean)),
    );
  });
}

async function respondWithMock(response) {
  // Setting response status code to 0 is a no-op.
  // However, when responding with a "Response.error()", the produced Response
  // instance will have status code set to 0. Since it's not possible to create
  // a Response instance with status code 0, handle that use-case separately.
  if (response.status === 0) {
    return Response.error();
  }

  const mockedResponse = new Response(response.body, response);

  Reflect.defineProperty(mockedResponse, IS_MOCKED_RESPONSE, {
    value: true,
    enumerable: true,
  });

  return mockedResponse;
}
