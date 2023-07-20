import dbClient from "../utils";

export default defineEventHandler(async () => {
  const data = await dbClient.sensor.findMany({
    orderBy: {
      datetime: "desc",
    },
    take: 10,
  });
  return data;
});
