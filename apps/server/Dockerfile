# Stage 1: Builder - Create pruned workspace
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat && apk update
WORKDIR /app
RUN npm install -g pnpm turbo
COPY . .
RUN turbo prune --scope=server --docker

# Stage 2: Installer - Install dependencies
FROM node:20-alpine AS installer
RUN apk add --no-cache libc6-compat && apk update
WORKDIR /app
RUN npm install -g pnpm

# Copy pruned package files
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy full source code
COPY --from=builder /app/out/full/ .
COPY turbo.json .

# Build the server
RUN pnpm turbo run build --filter=server...

# Stage 3: Runner - Production image
FROM node:20-alpine AS runner
WORKDIR /app
RUN npm install -g pnpm

# Create non-root user
RUN addgroup --system --gid 1001 nestjs && \
    adduser --system --uid 1001 nestjs

# Copy production files
COPY --from=installer /app/apps/server/dist ./dist
COPY --from=installer /app/apps/server/package.json .
COPY --from=installer /app/node_modules ./node_modules

# Set permissions
USER nestjs
ENV NODE_ENV=production
EXPOSE 4636
# CMD ["node", "dist/main.js"]
CMD node apps/server/dist/main.js
