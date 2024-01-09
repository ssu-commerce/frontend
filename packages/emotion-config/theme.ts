import { css } from "@emotion/react";

export type TypoType = typeof typo;

export type TypoKey = keyof TypoType;

export const typo = {
  SEMI_BOLD_20: css`
    font-family: Apple SD Gothic Neo;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px; /* 140% */
  `,
  SEMI_BOLD_18: css`
    font-family: Apple SD Gothic Neo;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px; /* 144.444% */
  `,
  SEMI_BOLD_17: css`
    font-family: Apple SD Gothic Neo;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
  `,
  MEDIUM_32: css`
    font-size: 32px;
    font-weight: 500;
    line-height: 44px; /* 137.5% */
  `,
  REGULAR_20: css`
    font-family: Apple SD Gothic Neo;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px; /* 140% */
  `,
  REGULAR_16: css`
    font-family: Apple SD Gothic Neo;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  `,
  REGULAR_12: css`
    font-family: Apple SD Gothic Neo;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px; /* 150% */
  `,
};

export const Red = {
  ["red-50"]: "#FFF5F5",
  ["red-100"]: "#FFE3E3",
  ["red-200"]: "#FFC9C9",
  ["red-300"]: "#FFA8A8",
  ["red-400"]: "#FF8787",
  ["red-500"]: "#FF6B6B",
  ["red-600"]: "#FA5252",
  ["red-700"]: "#F03E3E",
  ["red-800"]: "#E03131",
  ["red-900"]: "#C92A2A",
};

export const Green = {
  ["green-50"]: "#EBFBEE",
  ["green-100"]: "#D3F9D8",
  ["green-200"]: "#B2F2BB",
  ["green-300"]: "#8CE99A",
  ["green-400"]: "#69DB7C",
  ["green-500"]: "#51CF66",
  ["green-600"]: "#40C057",
  ["green-700"]: "#37B24D",
  ["green-800"]: "#2F9E44",
  ["green-900"]: "#2B8A3E",
};

export const Blue = {
  ["blue-50"]: "#E7F5FF",
  ["blue-100"]: "#D0EBFF",
  ["blue-200"]: "#A5D8FF",
  ["blue-300"]: "#74C0FC",
  ["blue-400"]: "#4DABF7",
  ["blue-500"]: "#339AF0",
  ["blue-600"]: "#228BE6",
  ["blue-700"]: "#1C7ED6",
  ["blue-800"]: "#1971C2",
  ["blue-900"]: "#1864AB",
};

export const Yellow = {
  ["yellow-50"]: "#FFF9DB",
  ["yellow-100"]: "#FFF3BF",
  ["yellow-200"]: "#FFEC99",
  ["yellow-300"]: "#FFE066",
  ["yellow-400"]: "#FFD43B",
  ["yellow-500"]: "#FCC419",
  ["yellow-600"]: "#FAB005",
  ["yellow-700"]: "#F59F00",
  ["yellow-800"]: "#F08C00",
  ["yellow-900"]: "#E67700",
};

export const Pink = {
  ["pink-50"]: "#FFF0F6",
  ["pink-100"]: "#FFDEEB",
  ["pink-200"]: "#FCC2D7",
  ["pink-300"]: "#FAA2C1",
  ["pink-400"]: "#F783AC",
  ["pink-500"]: "#F06595",
  ["pink-600"]: "#E64980",
  ["pink-700"]: "#D6336C",
  ["pink-800"]: "#C2255C",
  ["pink-900"]: "#A61E4D",
};

export const Grape = {
  ["grape-50"]: "#F8F0FC",
  ["grape-100"]: "#F3D9FA",
  ["grape-200"]: "#EEBEFA",
  ["grape-300"]: "#E599F7",
  ["grape-400"]: "#DA77F2",
  ["grape-500"]: "#CC5DE8",
  ["grape-600"]: "#BE4BDB",
  ["grape-700"]: "#AE3EC9",
  ["grape-800"]: "#9C36B5",
  ["grape-900"]: "#862E9C",
};

export const Violet = {
  ["violet-50"]: "#F3F0FF",
  ["violet-100"]: "#E5DBFF",
  ["violet-200"]: "#D0BFFF",
  ["violet-300"]: "#B197FC",
  ["violet-400"]: "#9775FA",
  ["violet-500"]: "#845EF7",
  ["violet-600"]: "#7950F2",
  ["violet-700"]: "#7048E8",
  ["violet-800"]: "#6741D9",
  ["violet-900"]: "#5F3DC4",
};

export const Indigo = {
  ["indigo-50"]: "#F8F9FA",
  ["indigo-100"]: "#F5F6F7",
  ["indigo-200"]: "#E9ECEF",
  ["indigo-300"]: "#DEE2E6",
  ["indigo-400"]: "#CED4DA",
  ["indigo-500"]: "#ADB5BD",
  ["indigo-600"]: "#868E96",
  ["indigo-700"]: "#495057",
  ["indigo-800"]: "#343A40",
  ["indigo-900"]: "#212529",
};

export const Cyan = {
  ["cyan-50"]: "#E3FAFC",
  ["cyan-100"]: "#C5F6FA",
  ["cyan-200"]: "#99E9F2",
  ["cyan-300"]: "#66D9E8",
  ["cyan-400"]: "#3BC9DB",
  ["cyan-500"]: "#22B8CF",
  ["cyan-600"]: "#15AABF",
  ["cyan-700"]: "#1098AD",
  ["cyan-800"]: "#0C8599",
  ["cyan-900"]: "#0B7285",
};

export const Teal = {
  ["teal-50"]: "#E6FCF5",
  ["teal-100"]: "#C3FAE8",
  ["teal-200"]: "#96F2D7",
  ["teal-300"]: "#63E6BE",
  ["teal-400"]: "#38D9A9",
  ["teal-500"]: "#20C997",
  ["teal-600"]: "#12B886",
  ["teal-700"]: "#0CA678",
  ["teal-800"]: "#099268",
  ["teal-900"]: "#087F5B",
};

export const Lime = {
  ["lime-50"]: "#F4FCE3",
  ["lime-100"]: "#E9FAC8",
  ["lime-200"]: "#D8F5A2",
  ["lime-300"]: "#C0EB75",
  ["lime-400"]: "#A9E34B",
  ["lime-500"]: "#94D82D",
  ["lime-600"]: "#82C91E",
  ["lime-700"]: "#74B816",
  ["lime-800"]: "#66A80F",
  ["lime-900"]: "#5C940D",
};

export const Orange = {
  ["orange-50"]: "#FFF4E6",
  ["orange-100"]: "#FFE8CC",
  ["orange-200"]: "#FFD8A8",
  ["orange-300"]: "#FFC078",
  ["orange-400"]: "#FFA94D",
  ["orange-500"]: "#FF922B",
  ["orange-600"]: "#FD7E14",
  ["orange-700"]: "#F76707",
  ["orange-800"]: "#E8590C",
  ["orange-900"]: "#D9480F",
};

export const Gray = {
  "gray-50": "#F8F9FA",
  "gray-80": "#F5F6F7",
  "gray-100": "#F1F3F5",
  "gray-200": "#E9ECEF",
  "gray-300": "#DEE2E6",
  "gray-400": "#CED4DA",
  "gray-500": "#ADB5BD",
  "gray-600": "#868E96",
  "gray-700": "#495057",
  "gray-800": "#343A40",
  "gray-900": "#212529",
};

export const BlackAndWhite = {
  white: "#FFFFFF",
  black: "#000000",
};

export const Guide = {
  guide: "#00C8FF",
};
