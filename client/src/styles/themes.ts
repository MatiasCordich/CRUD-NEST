export enum Mode {
  Light = "light",
  Dark = "dark"
}

export interface Theme {
  colors : {
    background: string;
    text: string;
  }
}

export const LightTheme: Theme = {
  colors: {
    background: "white",
    text: "balck"
  }
}

export const DarkTheme: Theme = {
  colors: {
    background: "black",
    text: "white"
  }
}
