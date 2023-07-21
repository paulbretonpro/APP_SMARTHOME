import { dbClient } from "../utils";

export default defineEventHandler(async (event) => {
  const { temperature, humidity } = await readBody(event);
  const data = await dbClient.sensor.create({
    data: {
      humidity: parseFloat(humidity),
      temperature: parseFloat(temperature),
    },
  });
  return data;
});
