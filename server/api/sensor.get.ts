export default defineEventHandler(async (event) => {
  const params = getQuery(event);
  const data = await $fetch(process.env.URL + "api/sensor", { params });
  return data;
});
