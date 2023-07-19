import dbClient from "../utils";

export default defineEventHandler(async () => {
  const data = await dbClient.sensor.findMany({
    orderBy: {
      datetime: "desc",
    },
  });
  return data;
});
