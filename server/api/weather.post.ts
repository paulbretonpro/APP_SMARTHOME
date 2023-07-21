import { dbClient } from "../utils";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = dbClient.weather.create({
    data: {
      humidity: parseFloat(body.humidity),
      temperature: parseFloat(body.temperature),
      wind: parseFloat(body.wind),
    },
  });
  return data;
});
