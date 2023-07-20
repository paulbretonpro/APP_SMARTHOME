import { dbClient } from "../utils";

export default defineEventHandler(async (event) => {
  const { humidity, temperature, wind } = await readBody(event);

  return await dbClient.weather.create({
    data: {
      humidity: humidity,
      temperature: temperature,
      wind: wind,
    },
  });
});
