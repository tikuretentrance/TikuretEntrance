FROM node:20.0.0 AS base

FROM base AS build

WORKDIR /tikuretentrance-base

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . . 
COPY .env .env

RUN npm run build

FROM node:20.0.0 AS production

WORKDIR /tikuretentrance-base

COPY --from=build /tikuretentrance-base/package.json /tikuretentrance-base/package-lock.json ./
RUN npm ci --only=production --legacy-peer-deps

COPY --from=build /tikuretentrance-base/dist ./dist

ENV NODE_ENV=production

EXPOSE 4635

CMD ["npm", "run", "start:prod"]
