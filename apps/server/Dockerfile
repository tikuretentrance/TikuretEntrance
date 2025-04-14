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

# Copy package files from the pruned output
COPY --from=builder /app/out/json/ .

# Copy the server-specific package.json and pnpm-lock.yaml from the project root
COPY ../../apps/server/package.json ./apps/server/package.json
COPY ../../apps/server/pnpm-lock.yaml ./apps/server/pnpm-lock.yaml

# Install only production dependencies for the server
RUN cd apps/server && pnpm install --frozen-lockfile --prod

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
COPY --from=installer /app/apps/server/package.json ./package.json
COPY --from=installer /app/apps/server/node_modules ./node_modules

# Set permissions
USER nestjs
ENV NODE_ENV=production
EXPOSE 4636
CMD node dist/main.js