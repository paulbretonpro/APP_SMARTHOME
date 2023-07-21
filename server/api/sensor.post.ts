import { dbClient } from "../utils";

export default defineEventHandler(async (event) => {
  const { temperature, humidity } = await readBody(event);
  const datetime = new Date();
  datetime.setSeconds(0);
  datetime.setMinutes(0);
  datetime.setMilliseconds(0);
  try {
    const data = await dbClient.sensor.create({
      data: {
        datetime: datetime,
        humidity: parseFloat(humidity),
        temperature: parseFloat(temperature),
      },
    });
    return data;
  } catch (error) {
    return {
      error,
    };
  }
});
