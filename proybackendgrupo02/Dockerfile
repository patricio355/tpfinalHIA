# Usa la imagen de Node como base
FROM node:16-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto que usa Angular (4200)
EXPOSE 4200

# Comando para iniciar Angular
CMD ["npm", "run", "start"]
