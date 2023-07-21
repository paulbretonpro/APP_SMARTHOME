import { dbClient } from "../utils";

export default defineEventHandler(async (event) => {
  const { last } = getQuery(event);
  if (last) {
    return await dbClient.weather.findFirst({
      orderBy: {
        id: "desc",
      },
    });
  } else {
    return await dbClient.weather.findMany({
      orderBy: {
        datetime: "desc",
      },
    });
  }
});
