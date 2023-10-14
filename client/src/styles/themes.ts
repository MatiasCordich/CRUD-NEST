export enum Mode {
  Light = "light",
  Dark = "dark"
}

export interface Theme {
  colors : {
    backgroundBody: string;
    text: string;
    backgroundBox: string,
    label: string;
    line: string;
  }
}

export const LightTheme: Theme = {
  colors: {
    backgroundBody: "var(--white-p)",
    text: "var(--black)",
    backgroundBox: "var(--white)",
    label: "var(--black)",
    line: "none"
  }
}

export const DarkTheme: Theme = {
  colors: {
    backgroundBody: "var(--black-background)",
    text: "var(--white-p)",
    backgroundBox: "var(--black-box)",
    label: "var(--white-p)",
    line: "var(--black-line)"
  }
}
