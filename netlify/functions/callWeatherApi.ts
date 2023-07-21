import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { schedule } from "@netlify/functions";

const fetch = require("node-fetch");

const fetchWeatherApi: Handler = async (
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

    const params = {
      temperature: data.temp,
      humidity: data.humidity,
      wind: data.wind_speed,
    };

    const responseApp = await fetch(
      "https://smarthome-sensors.netlify.app/api/weather",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: Object.keys(params)
          .map((key) => {
            return (
              encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
            );
          })
          .join("&"),
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
    return {
      statusCode: 500,
    };
  }
};

export { fetchWeatherApi };
