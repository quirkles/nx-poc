export const colors = {
  black: "#212529",
  gray: "#545863",
  blue: "#00E8FC",
  green: "#447604",
  orange: "#F96E46",
  yellow: "#F9C846",
  red: "#92140C",
  pink: "#FFE3E3",
  purple: "#918EF4",
  white: "#FEFEFE",
} as const

export type Color = keyof typeof colors
