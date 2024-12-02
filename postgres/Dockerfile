# ---- Base Node ----
FROM node:20.11.1-alpine as base
RUN apt-get update
RUN apt-get install openssl
LABEL image=timothyjmiller/prisma-studio:latest 

#
# ---- Dependencies ----
FROM base AS dependencies
COPY package.json ./
COPY *.lock ./

RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production

#
# ---- Release ----
FROM base AS release
COPY --from=dependencies /node_modules ./node_modules
COPY prisma-introspect.sh .
RUN chmod +x prisma-introspect.sh
EXPOSE $PRISMA_STUDIO_PORT
ENTRYPOINT ["/bin/sh", "prisma-introspect.sh"]