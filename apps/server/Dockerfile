# Use multi-stage build to reduce image size
FROM node:20-alpine AS base

# Install pnpm globally
RUN npm install -g pnpm

# Build stage
FROM base AS build
WORKDIR /app

# Copy only package files for better layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/server/package.json ./apps/server/package.json
COPY packages/ ./packages/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the server app
RUN pnpm run build --filter=server

# Production stage
FROM base AS production
WORKDIR /app

# Copy production dependencies
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/server/dist ./dist
COPY --from=build /app/apps/server/package.json ./

# Environment variables
ENV NODE_ENV=production
EXPOSE 4636

CMD ["npm", "run", "start:prod"]
