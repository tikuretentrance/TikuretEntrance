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

# Install turbo globally
RUN npm install -g turbo

# Install nestjs/cli globally
RUN npm install -g @nestjs/cli

# Copy package files from the pruned output
COPY --from=builder /app/out/json/ .
COPY turbo.json .

# Copy the server-specific package.json to the correct location
COPY --from=builder /app/out/full/apps/server/package.json ./apps/server/package.json

# Generate a server-specific pnpm-lock.yaml in the root directory
RUN cd apps/server && pnpm install --frozen-lockfile --prod --lockfile-dir=/app

# Copy the generated server-specific lockfile
COPY pnpm-lock.yaml ./pnpm-lock.yaml

# Copy full source code (we might not need this fully anymore, but let's keep it for now)
COPY --from=builder /app/out/full/ .

# Build the server using turbo
RUN pnpm turbo run build --filter=server...

# Stage 3: Runner - Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Create non-root user
RUN addgroup --system --gid 1001 nestjs && \
    adduser --system --uid 1001 nestjs

# Copy the server's package.json
COPY --from=installer /app/apps/server/package.json ./package.json

# Install production dependencies at the root level
RUN pnpm install --prod

# Copy the built application
COPY --from=installer /app/apps/server/dist ./dist

# Set permissions
USER nestjs
ENV NODE_ENV=production
EXPOSE 4636
CMD node dist/main.js
