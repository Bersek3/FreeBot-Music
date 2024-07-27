# Etapa de construcción
FROM ghcr.io/hazmi35/node:18-dev-alpine AS build-stage

# Prepara pnpm
RUN corepack enable && corepack prepare pnpm@latest

# Copia archivos de configuración
COPY package.json pnpm-lock.yaml *.npmrc ./

# Instala dependencias y construye el proyecto
RUN pnpm fetch
RUN pnpm install --offline --frozen-lockfile
COPY . .
RUN pnpm run build || { echo "Build failed"; exit 1; }
RUN pnpm prune --production

# Imagen para producción
FROM ghcr.io/hazmi35/node:18-alpine

LABEL name="rawon"
LABEL maintainer="Stegripe Development <support@stegripe.org>"

# Instala ffmpeg y python
RUN apk add --no-cache ffmpeg python3 && ln -sf python3 /usr/bin/python

# Copia archivos necesarios desde la etapa de construcción
COPY --from=build-stage /tmp/build/package.json .
COPY --from=build-stage /tmp/build/node_modules ./node_modules
COPY --from=build-stage /tmp/build/dist ./dist
COPY --from=build-stage /tmp/build/yt-dlp-utils ./yt-dlp-utils
COPY --from=build-stage /tmp/build/lang ./lang
COPY --from=build-stage /tmp/build/index.js ./index.js

# Configura el entorno
ENV NODE_ENV="production"

# Comando de inicio
CMD ["node", "--es-module-specifier-resolution=node", "index.js"]
