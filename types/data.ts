export type TColumns = {
  label: string;
  name: string;
};

export type TWeather = {
  feels_like: number;
  humidity: number;
  temperature: number;
  wind_speed: number;
  datetime: Date;
};

export type TSensor = {
  temperature: number;
  humidity: number;
  datetime: Date;
};

export type TCaptor = {
  consumption: number;
  datetime: Date;
};

export type TExport = {
  datetime: Date;
  temperature_in: number;
  temperature_out: number;
  humidity_in: number;
  humidity_out: number;
  feels_like: number;
  wind_speed: number;
};
