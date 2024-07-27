# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instala pnpm
RUN npm install -g pnpm

# Instala las dependencias del proyecto
RUN pnpm install

# Copia el resto de los archivos del proyecto
COPY . .

# Compila el proyecto
RUN pnpm run build

# Limpia las dependencias de desarrollo
RUN pnpm prune --production

# Expone el puerto que tu aplicación usa (opcional)
# EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["pnpm", "start"]
