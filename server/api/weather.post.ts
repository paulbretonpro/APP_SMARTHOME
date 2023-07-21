import { dbClient } from "../utils";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const datetime = new Date();
  datetime.setSeconds(0);
  datetime.setMinutes(0);
  datetime.setMilliseconds(0);

  try {
    const data = dbClient.weather.create({
      data: {
        datetime: datetime,
        humidity: parseFloat(body.humidity),
        temperature: parseFloat(body.temperature),
        wind: parseFloat(body.wind),
      },
    });
    return data;
  } catch (error) {
    return {
      error,
    };
  }
});
