export function messageAndExit(msg) {
  console.log(msg)
  process.exit(1)
}

export const APP_CONFIG = {
  port: process.env.port || messageAndExit("port not found in env"),
  mongo_url: process.env.mongo_url || messageAndExit("mongo_url not found in env"),
  show() {
    console.log("----counter-service Config----", this)
  },
  debug: process.env.debug === "enable"
}
