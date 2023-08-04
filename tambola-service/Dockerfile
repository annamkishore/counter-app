FROM golang:1.20-alpine

WORKDIR /app

COPY go.mod go.sum /app/
RUN go mod download

COPY . /app/

RUN go build -o app .

ARG mongo_url
ARG port

EXPOSE ${port}

# Start the microservice
CMD ["./app"]
