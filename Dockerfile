FROM node:22-alpine AS build

ARG VITE_COMMIT_SHA=local
ARG VITE_COMMIT_DATE=lokale-build
ENV VITE_COMMIT_SHA=$VITE_COMMIT_SHA
ENV VITE_COMMIT_DATE=$VITE_COMMIT_DATE

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runtime

ENV HOST=0.0.0.0
ENV PORT=5175
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY scripts ./scripts

EXPOSE 5175

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT || 5175) + '/health').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["npm", "start"]
