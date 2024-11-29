# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto donde corre tu aplicación
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["npm", "start"]
