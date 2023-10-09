export enum Mode {
  Light = "light",
  Dark = "dark"
}

export interface Theme {
  colors : {
    backgroundBody: string;
    text: string;
    backgroundBox: string
  }
}

export const LightTheme: Theme = {
  colors: {
    backgroundBody: "var(--white-p)",
    text: "#040303",
    backgroundBox: "var(--white)"
  }
}

export const DarkTheme: Theme = {
  colors: {
    backgroundBody: "#191A19",
    text: "white",
    backgroundBox: "#222222"
  }
}
