# Usa una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Expone el puerto que usa tu app (ajusta si usás otro)
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "start"]