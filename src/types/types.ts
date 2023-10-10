export interface City {
  city: string;
}

export interface Error {
  error: string;
}

export interface Loading {
  isLoading: boolean;
}

export interface Day {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

export interface CurrentDay {
  condition: {
    text: string;
    code: number;
  };
  humidity: number;
  temp_c: number;
  uv: number;
  wind_kph: number;
  is_day: number;
}

export interface Data {
  data: {
    current: [CurrentDay];
    forecast: {
      forecastday: [Day];
    };
  };
}
