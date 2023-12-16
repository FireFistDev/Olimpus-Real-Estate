FROM node:latest as build 

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

ENV VITE_BASE_API_URL=https://olimpus.ge/api/
COPY client .

RUN npm run build


FROM node:latest as Prod


WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY server .
RUN npx prisma generate
RUN npm run build

ENV DATABASE_URL="mongodb+srv://info:MMgXKgAZ4MwAkxEU@olimpusrealestate.hgwswbq.mongodb.net/OlimpusRealEsate"
ENV PORT=3000
ENV JWT_EXPIRES_TIME=1h
ENV JWT_SECRET_KEY='jwt-secret-312312-23123212'

COPY --from=build /app/client/dist /app/client/dist
EXPOSE 3000

CMD ["node", "dist/src/main.js"]