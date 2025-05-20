FROM node:22

# Crear directorio de la app
WORKDIR /usr/src/app

# Copiar los archivos de dependencias desde la raíz
COPY package*.json ./

# Instalar dependencias
RUN npm install
# Si solo quieres dependencias de producción, descomenta la siguiente línea:
# RUN npm ci --only=production

# Copiar el resto del código de la app desde la raíz
COPY . .

# Exponer el puerto (ajusta si tu app usa otro puerto)
EXPOSE 8080

# Comando para iniciar la app
CMD [ "node", "index.js" ] 