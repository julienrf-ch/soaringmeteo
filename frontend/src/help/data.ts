import { DetailedForecast, DetailedForecastData, LocationForecasts, LocationForecastsData } from "../data/Forecast";
import { ForecastMetadata } from "../data/ForecastMetadata";

const metadata = {
  h: 0,
  initS: '2030-05-14T00',
  init: '2030-05-14T00:00:00Z',
  latest: 42
};

export const groundLevel = 964;
export const maxDepth = 1979;
export const maxIso = 4231;

const detailedData: DetailedForecastData = {
  "t": "2022-11-05T12:00:00Z",
  "bl": { "h": 1979, "u": -1, "v": 4 },
  "v": 25,
  "p": [{ "h": 1022, "t": 20.4, "dt": 5.70, "u": -10, "v": 8, "c": 0 }, { "h": 1511, "t": 15.3, "dt": 4.63, "u": -6, "v": 7, "c": 0 }, { "h": 2020, "t": 10.4, "dt": 3.63, "u": 1, "v": 3, "c": 0 }, { "h": 2553, "t": 5.42, "dt": 2.52, "u": 6, "v": 1, "c": 0 }, { "h": 3113, "t": 2.79, "dt": -6.07, "u": 18, "v": -2, "c": 0 }, { "h": 3713, "t": 2.06, "dt": -13.9, "u": 18, "v": 4, "c": 0 }, { "h": 4355, "t": -1.11, "dt": -13.1, "u": 23, "v": 12, "c": 0 }, { "h": 5045, "t": -4.08, "dt": -16.8, "u": 37, "v": 25, "c": 0 }, { "h": 5791, "t": -7.92, "dt": -30.2, "u": 38, "v": 31, "c": 0 }, { "h": 6601, "t": -13.4, "dt": -27.8, "u": 44, "v": 46, "c": 0 }, { "h": 7484, "t": -21.0, "dt": -30.7, "u": 54, "v": 59, "c": 0 }, { "h": 9550, "t": -34.8, "dt": -37.2, "u": 63, "v": 60, "c": 2 }, { "h": 12233, "t": -58.1, "dt": -59.8, "u": 69, "v": 75, "c": 3 }],
  "s": { "t": 22.2, "dt": 6.19, "u": -12, "v": 8 },
  "iso": 4135,
  "r": { "t": 0, "c": 0 },
  "mslet": 1012
};

const locationData: LocationForecastsData = {
  "h": groundLevel,
  "d": [
    {
      "th": 0,
      "h": [
        {
          "t": "2022-11-02T09:00:00Z",
          "bl": { "h": 1746, "u": -17, "v": -9 },
          "v": 22,
          "p": [{ "h": 1013, "t": 21.4, "dt": 6.91, "u": -15, "v": -8, "c": 0 }, { "h": 1504, "t": 16.2, "dt": 5.89, "u": -17, "v": -8, "c": 0 }, { "h": 2015, "t": 11.2, "dt": 4.89, "u": -18, "v": -8, "c": 0 }, { "h": 2549, "t": 6.52, "dt": 3.50, "u": -17, "v": -11, "c": 4 }, { "h": 3113, "t": 2.91, "dt": 0.390, "u": -18, "v": -21, "c": 5 }, { "h": 3709, "t": -1.69, "dt": -2.43, "u": -19, "v": -17, "c": 71 }, { "h": 4342, "t": -5.23, "dt": -5.88, "u": -20, "v": -12, "c": 99 }, { "h": 5019, "t": -10.6, "dt": -11.6, "u": -13, "v": -14, "c": 80 }, { "h": 5747, "t": -14.4, "dt": -15.1, "u": 0, "v": -28, "c": 91 }, { "h": 6539, "t": -19.3, "dt": -19.3, "u": 9, "v": -49, "c": 100 }, { "h": 7404, "t": -25.8, "dt": -25.8, "u": 22, "v": -57, "c": 100 }, { "h": 9416, "t": -42.4, "dt": -42.5, "u": 40, "v": -75, "c": 69 }, { "h": 12063, "t": -53.2, "dt": -67.5, "u": 56, "v": -17, "c": 0 }],
          "s": { "t": 23.3, "dt": 7.27, "u": -14, "v": -8 },
          "iso": 3480,
          "r": { "t": 0, "c": 0 },
          "mslet": 1011
        },
        {
          "t": "2022-11-02T12:00:00Z",
          "bl": { "h": 415, "u": -7, "v": 5 },
          "v": 12,
          "p": [{ "h": 1006, "t": 16.9, "dt": 10.8, "u": -5, "v": 4, "c": 1 }, { "h": 1491, "t": 12.7, "dt": 9.20, "u": -10, "v": 8, "c": 9 }, { "h": 1998, "t": 9.25, "dt": 6.93, "u": -17, "v": 14, "c": 25 }, { "h": 2530, "t": 5.08, "dt": 3.56, "u": -22, "v": 14, "c": 68 }, { "h": 3090, "t": 1.29, "dt": 0.778, "u": -18, "v": 0, "c": 89 }, { "h": 3685, "t": -1.04, "dt": -1.38, "u": -6, "v": -19, "c": 99 }, { "h": 4321, "t": -4.30, "dt": -4.65, "u": 11, "v": -38, "c": 100 }, { "h": 5001, "t": -8.30, "dt": -8.63, "u": 22, "v": -55, "c": 100 }, { "h": 5734, "t": -12.7, "dt": -13.1, "u": 15, "v": -57, "c": 98 }, { "h": 6530, "t": -17.5, "dt": -18.1, "u": 2, "v": -51, "c": 78 }, { "h": 7401, "t": -24.0, "dt": -25.4, "u": -2, "v": -42, "c": 43 }, { "h": 9430, "t": -40.2, "dt": -45.6, "u": -8, "v": -66, "c": 10 }, { "h": 12078, "t": -54.8, "dt": -65.9, "u": 27, "v": -34, "c": 0 }],
          "s": { "t": 17.9, "dt": 10.8, "u": -5, "v": 3 },
          "iso": 3413,
          "r": { "t": 2, "c": 1 },
          "mslet": 1010
        },
        {
          "t": "2022-11-02T15:00:00Z",
          "bl": { "h": 1021, "u": -15, "v": 21 },
          "v": 17,
          "p": [{ "h": 991, "t": 18.6, "dt": 9.73, "u": -14, "v": 17, "c": 0 }, { "h": 1477, "t": 13.7, "dt": 8.25, "u": -15, "v": 21, "c": 0 }, { "h": 1984, "t": 9.96, "dt": 5.01, "u": -19, "v": 22, "c": 0 }, { "h": 2520, "t": 8.27, "dt": 1.22, "u": -5, "v": 19, "c": 0 }, { "h": 3086, "t": 4.47, "dt": -0.759, "u": 15, "v": 5, "c": 0 }, { "h": 3686, "t": 0.366, "dt": -8.52, "u": 26, "v": -18, "c": 0 }, { "h": 4322, "t": -4.04, "dt": -20.6, "u": 22, "v": -27, "c": 0 }, { "h": 5002, "t": -8.73, "dt": -26.5, "u": 21, "v": -26, "c": 0 }, { "h": 5732, "t": -13.7, "dt": -33.0, "u": 23, "v": -37, "c": 0 }, { "h": 6525, "t": -18.9, "dt": -42.6, "u": 18, "v": -55, "c": 0 }, { "h": 7391, "t": -24.8, "dt": -50.7, "u": 19, "v": -53, "c": 0 }, { "h": 9412, "t": -41.2, "dt": -56.7, "u": 12, "v": -48, "c": 0 }, { "h": 12073, "t": -53.7, "dt": -67.6, "u": 28, "v": -55, "c": 0 }],
          "s": { "t": 19.8, "dt": 10.0, "u": -13, "v": 15 },
          "iso": 3739,
          "r": { "t": 2, "c": 0 },
          "mslet": 1009
        }
      ]
    },
    {
      "th": 0,
      "h": [
        {
          "t": "2022-11-04T09:00:00Z",
          "bl": { "h": 1463, "u": -4, "v": 13 },
          "v": 21,
          "p": [{ "h": 998, "t": 18.6, "dt": 10.3, "u": -5, "v": 14, "c": 0 }, { "h": 1484, "t": 13.6, "dt": 9.12, "u": -5, "v": 14, "c": 0 }, { "h": 1991, "t": 8.90, "dt": 7.97, "u": -4, "v": 12, "c": 19 }, { "h": 2523, "t": 5.21, "dt": 4.80, "u": -4, "v": 8, "c": 69 }, { "h": 3085, "t": 2.79, "dt": -0.419, "u": -9, "v": 1, "c": 2 }, { "h": 3681, "t": -0.526, "dt": -6.54, "u": -16, "v": 5, "c": 0 }, { "h": 4317, "t": -3.96, "dt": -10.6, "u": -20, "v": 14, "c": 0 }, { "h": 5000, "t": -6.94, "dt": -21.7, "u": -22, "v": 28, "c": 0 }, { "h": 5737, "t": -11.0, "dt": -33.5, "u": -15, "v": 39, "c": 0 }, { "h": 6537, "t": -16.6, "dt": -37.3, "u": -16, "v": 43, "c": 0 }, { "h": 7411, "t": -22.5, "dt": -44.4, "u": -25, "v": 48, "c": 0 }, { "h": 9457, "t": -38.8, "dt": -45.3, "u": -26, "v": 63, "c": 0 }, { "h": 12123, "t": -55.5, "dt": -68.9, "u": -26, "v": 62, "c": 0 }],
          "s": { "t": 20.1, "dt": 10.6, "u": -5, "v": 14 },
          "iso": 3595,
          "r": { "t": 0, "c": 0 },
          "mslet": 1010
        },
        {
          "t": "2022-11-04T12:00:00Z",
          "bl": { "h": 1777, "u": 2, "v": 12 },
          "v": 22,
          "p": [{ "h": 992, "t": 20.5, "dt": 9.94, "u": 1, "v": 12, "c": 0 }, { "h": 1482, "t": 15.5, "dt": 8.82, "u": 2, "v": 12, "c": 0 }, { "h": 1992, "t": 10.6, "dt": 7.75, "u": 2, "v": 11, "c": 0 }, { "h": 2526, "t": 6.16, "dt": 6.07, "u": 3, "v": 10, "c": 83 }, { "h": 3089, "t": 3.28, "dt": 0.389, "u": -1, "v": 7, "c": 0 }, { "h": 3687, "t": 0.386, "dt": -6.22, "u": -7, "v": 9, "c": 0 }, { "h": 4325, "t": -3.26, "dt": -10.0, "u": -13, "v": 17, "c": 0 }, { "h": 5008, "t": -7.58, "dt": -13.8, "u": -12, "v": 26, "c": 0 }, { "h": 5744, "t": -11.4, "dt": -36.9, "u": -15, "v": 37, "c": 0 }, { "h": 6544, "t": -16.2, "dt": -34.1, "u": -16, "v": 41, "c": 0 }, { "h": 7421, "t": -21.5, "dt": -30.5, "u": -20, "v": 42, "c": 0 }, { "h": 9471, "t": -37.6, "dt": -58.9, "u": -24, "v": 70, "c": 0 }, { "h": 12146, "t": -57.8, "dt": -66.3, "u": -27, "v": 83, "c": 0 }],
          "s": { "t": 21.7, "dt": 10.2, "u": 0, "v": 12 },
          "iso": 3767,
          "r": { "t": 0, "c": 0 },
          "mslet": 1008
        },
        {
          "t": "2022-11-04T15:00:00Z",
          "bl": { "h": 1092, "u": 0, "v": 19 },
          "v": 14,
          "p": [{ "h": 993, "t": 19.6, "dt": 10.9, "u": -1, "v": 19, "c": 0 }, { "h": 1481, "t": 14.9, "dt": 9.85, "u": 0, "v": 19, "c": 0 }, { "h": 1991, "t": 10.1, "dt": 8.69, "u": 2, "v": 15, "c": 8 }, { "h": 2525, "t": 6.90, "dt": 5.36, "u": 9, "v": 5, "c": 14 }, { "h": 3090, "t": 3.25, "dt": 1.98, "u": 10, "v": 6, "c": 55 }, { "h": 3689, "t": 1.24, "dt": -5.87, "u": 1, "v": 13, "c": 0 }, { "h": 4329, "t": -2.11, "dt": -11.2, "u": -4, "v": 19, "c": 0 }, { "h": 5015, "t": -6.16, "dt": -24.0, "u": -6, "v": 26, "c": 0 }, { "h": 5754, "t": -10.9, "dt": -23.9, "u": -5, "v": 34, "c": 0 }, { "h": 6556, "t": -15.1, "dt": -26.9, "u": -12, "v": 50, "c": 0 }, { "h": 7435, "t": -21.8, "dt": -40.9, "u": -5, "v": 57, "c": 0 }, { "h": 9489, "t": -36.7, "dt": -51.3, "u": -12, "v": 77, "c": 0 }, { "h": 12166, "t": -58.6, "dt": -63.0, "u": -8, "v": 99, "c": 3 }],
          "s": { "t": 20.3, "dt": 11.1, "u": -2, "v": 18 },
          "iso": 3926,
          "r": { "t": 0, "c": 0 },
          "mslet": 1009
        }
      ]
    },
    {
      "th": 0,
      "h": [
        {
          "t": "2022-11-05T09:00:00Z",
          "bl": { "h": 1312, "u": -2, "v": 7 },
          "v": 21,
          "p": [{ "h": 1032, "t": 17.3, "dt": 6.78, "u": -5, "v": 8, "c": 0 }, { "h": 1516, "t": 12.2, "dt": 5.67, "u": -3, "v": 7, "c": 0 }, { "h": 2020, "t": 7.49, "dt": 4.31, "u": 0, "v": 5, "c": 0 }, { "h": 2549, "t": 6.14, "dt": -8.57, "u": 9, "v": -1, "c": 0 }, { "h": 3111, "t": 3.88, "dt": -21.7, "u": 9, "v": 0, "c": 0 }, { "h": 3710, "t": 1.37, "dt": -23.9, "u": 11, "v": 6, "c": 0 }, { "h": 4351, "t": -1.30, "dt": -13.3, "u": 15, "v": 15, "c": 0 }, { "h": 5040, "t": -4.16, "dt": -16.1, "u": 33, "v": 23, "c": 0 }, { "h": 5786, "t": -7.73, "dt": -21.2, "u": 32, "v": 42, "c": 0 }, { "h": 6597, "t": -13.6, "dt": -32.3, "u": 49, "v": 58, "c": 0 }, { "h": 7479, "t": -20.8, "dt": -28.8, "u": 46, "v": 61, "c": 0 }, { "h": 9544, "t": -35.4, "dt": -39.5, "u": 56, "v": 55, "c": 3 }, { "h": 12223, "t": -58.5, "dt": -61.2, "u": 66, "v": 73, "c": 0 }],
          "s": { "t": 19.1, "dt": 7.24, "u": -6, "v": 8 },
          "iso": 4064,
          "r": { "t": 0, "c": 0 },
          "mslet": 1014
        },
        detailedData,
        {
          "t": "2022-11-05T15:00:00Z",
          "bl": { "h": 1446, "u": -7, "v": 12 }, 
          "v": 22,
          "p": [{ "h": 1016, "t": 20.7, "dt": 6.82, "u": -12, "v": 16, "c": 0 }, { "h": 1506, "t": 15.8, "dt": 5.77, "u": -9, "v": 14, "c": 0 }, { "h": 2016, "t": 11.0, "dt": 4.83, "u": -5, "v": 9, "c": 0 }, { "h": 2551, "t": 6.31, "dt": 3.60, "u": 3, "v": -1, "c": 0 }, { "h": 3113, "t": 2.28, "dt": 1.01, "u": 18, "v": -10, "c": 23 }, { "h": 3711, "t": 2.35, "dt": -10.0, "u": 28, "v": 4, "c": 0 }, { "h": 4355, "t": -0.659, "dt": -12.4, "u": 27, "v": 12, "c": 0 }, { "h": 5045, "t": -3.79, "dt": -22.0, "u": 37, "v": 18, "c": 0 }, { "h": 5792, "t": -7.99, "dt": -27.4, "u": 42, "v": 26, "c": 0 }, { "h": 6601, "t": -13.5, "dt": -34.0, "u": 49, "v": 45, "c": 0 }, { "h": 7484, "t": -20.6, "dt": -33.6, "u": 62, "v": 56, "c": 0 }, { "h": 9552, "t": -35.3, "dt": -35.3, "u": 55, "v": 65, "c": 90 }, { "h": 12238, "t": -58.1, "dt": -58.1, "u": 95, "v": 83, "c": 100 }],
          "s": { "t": 22.1, "dt": 7.25, "u": -12, "v": 15 },
          "iso": 4231,
          "r": { "t": 0, "c": 0 },
          "mslet": 1011
        }
      ]
    }
  ]
};

export const locationForecasts =
  new LocationForecasts(locationData, new ForecastMetadata(metadata), -33.25, 19.75);

export const detailedForecast =
  new DetailedForecast(detailedData, groundLevel);