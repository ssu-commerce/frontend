FROM node:20-alpine AS alpine

# builder base 생성
# 패키지 목록 업데이트 및 설치
RUN apk add --no-cache libc6-compat
RUN apk update

# set working dir
FROM alpine AS base
# RUN npm install -g pnpm@8.15.3 turbo@1.12.4
RUN yarn global add pnpm@8.15.3 turbo@1.12.4
RUN pnpm config set store-dir ~/.pnpm-store

FROM base AS pruner
WORKDIR /app
COPY . .
# package-lock이 프로젝트간에 간섭을 일으키는 경우를 위한 해결책
RUN turbo prune --scope=@sc/commerce --docker

FROM base AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN --mount=type=cache,id=pnpm,target=~/.pnpm/store pnpm install --frozen-lockfile

# build project
COPY --from=pruner /app/out/full/ .
RUN pnpm build --filter=@sc/commerce

FROM alpine
WORKDIR /app

# pr은 root 로 실행하지 말것
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/apps/commerce/next.config.js .
COPY --from=builder /app/apps/commerce/package.json .

# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/apps/commerce/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/commerce/.next/static ./apps/commerce/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/commerce/public ./apps/commerce/public

CMD node apps/commerce/server.js