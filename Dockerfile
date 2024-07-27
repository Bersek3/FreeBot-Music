FROM ghcr.io/hazmi35/node:18-dev-alpine AS build-stage

# Prepara pnpm con corepack (característica experimental)
RUN corepack enable && corepack prepare pnpm@latest

# Copia package.json, lockfile y archivos de configuración de npm
COPY package.json pnpm-lock.yaml *.npmrc  ./

# Descarga las dependencias al almacenamiento virtual
RUN pnpm fetch

# Instala las dependencias
RUN pnpm install --offline --frozen-lockfile

# Copia los archivos del proyecto
COPY . .

# Construye el proyecto TypeScript
RUN pnpm run build || { echo "Build failed"; exit 1; }

# Elimina las dependencias de desarrollo
RUN pnpm prune --production

# Prepara el contenedor para producción
FROM ghcr.io/hazmi35/node:18-alpine

LABEL name="rawon"
LABEL maintainer="Stegripe Development <support@stegripe.org>"

# Instala ffmpeg
RUN apk add --no-cache ffmpeg python3 && ln -sf python3 /usr/bin/python

# Copia los archivos necesarios
COPY --from=build-stage /tmp/build/package.json .
COPY --from=build-stage /tmp/build/node_modules ./node_modules
COPY --from=build-stage /tmp/build/dist ./dist
COPY --from=build-stage /tmp/build/yt-dlp-utils ./yt-dlp-utils
COPY --from=build-stage /tmp/build/lang ./lang
COPY --from=build-stage /tmp/build/index.js ./index.js

# Variables de entorno adicionales
ENV NODE_ENV="production"

# Inicia la aplicación con node
CMD ["node", "--es-module-specifier-resolution=node", "index.js"]
