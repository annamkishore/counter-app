let counterServiceUrl = process.env.NEXT_PUBLIC_counter_service_url
console.log("counter-service host: ", counterServiceUrl)

export let CounterEndpoints = {
  increment: `${counterServiceUrl}/increment`,
  decrement: `${counterServiceUrl}/decrement`,
  current: `${counterServiceUrl}/current`,
}
