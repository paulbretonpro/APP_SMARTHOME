import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { schedule } from "@netlify/functions";

const fetch = require("node-fetch");

const myHandler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/weather?city=hanoi",
      {
        headers: { "X-Api-Key": "vlq7dkvbzK2lPyKj4Dzr8A==VIEjzOKKidA6NUUm" },
        contentType: "application/json",
      }
    );

    if (!response.ok) {
      throw new Error(
        `API WEATHER request failed with status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("API Weather Response:", data);
    console.log("Temp: ", data.temp);
    console.log("Humidity: ", data.humidity);
    console.log("Wind: ", data.wind_speed);

    const responseApp = await fetch(
      "https://smarthome-sensors.netlify.app/api/weather",
      {
        method: "POST",
        body: {
          temperature: data.temp,
          humidity: data.humidity,
          wind: data.wind_speed,
        },
      }
    );

    if (!responseApp.ok) {
      throw new Error(
        `API SMARTHOME request failed with status: ${await responseApp.text()}`
      );
    }

    const dataApp = await response.json();
    console.log("API SMARTHOME Response:", dataApp);

    return {
      statusCode: 200,
    };
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return {
      statusCode: 500,
    };
  }
};

const handler = schedule("@hourly", myHandler);

export { handler };
