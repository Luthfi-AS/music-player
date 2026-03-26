# Ganti dari 18 ke 20
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Cache layer ini akan tetap bekerja, tapi dengan engine Node 20
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]