FROM node:16-alpine3.14 as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

# RUN apk add git
RUN yarn

COPY . .
RUN yarn build

FROM node:16-alpine3.14

COPY --from=builder /app/.next/standalone/. /app/.
COPY --from=builder /app/.next/static/. /app/.next/static/.
COPY --from=builder /app/public/. /app/public/.

WORKDIR /app

ARG PORT
ENV PORT "${PORT}"
EXPOSE "${PORT}"

CMD ["node","server.js"]

# token: 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


# https://HasanJahidul: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@github.com/HasanJahidul/ttt-portfolio.git