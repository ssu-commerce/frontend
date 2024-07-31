FROM node:18-alpine AS base

RUN npm install -g pnpm

# builder base 생성
FROM base AS builder
# 패키지 목록 업데이트 및 설치
RUN apk add --no-cache libc6-compat
RUN apk update

# set working dir
WORKDIR /app
RUN npm install -g turbo@1.12.4
COPY . .
# package-lock이 프로젝트간에 간섭을 일으키는 경우를 위한 해결책
RUN turbo prune --scope=@sc/commerce --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# dependencies 처음 설치
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN npm install -g pnpm
RUN npm install -g turbo
RUN pnpm install ---frozen-lockfile

# build project
COPY --from=builder /app/out/full/ .
RUN turbo run build --filter=@sc/commerce...

FROM base as runner
WORKDIR /app

# pr은 root 로 실행하지 말것
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/commerce/next.config.js .
COPY --from=installer /app/apps/commerce/package.json .

# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/commerce/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/commerce/.next/static ./apps/commerce/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/commerce/public ./apps/commerce/public

CMD node apps/commerce/server.js