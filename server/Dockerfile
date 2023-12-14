FROM node:latest as build

WORKDIR /app
COPY package*.json ./
# Install dependencies

RUN npm install

# Copy the rest of the application code
COPY . .

RUN npx prisma generate
RUN npm run build
# Second stage


ENV DATABASE_URL="mongodb+srv://info:MMgXKgAZ4MwAkxEU@olimpusrealestate.hgwswbq.mongodb.net/OlimpusRealEsate"
ENV PORT=3000
ENV JWT_EXPIRES_TIME=1h
ENV JWT_SECRET_KEY='jwt-secret-312312-23123212'

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
