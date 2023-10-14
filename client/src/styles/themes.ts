export enum Mode {
  Light = "light",
  Dark = "dark",
  Barbie = "barbie"
}

export interface Theme {
  colors : {
    backgroundBody: string;
    text: string;
    title: string;
    backgroundBox: string,
    label: string;
    line: string;
    buttonBackground: string;
    buttonText: string;
  }
}

export const LightTheme: Theme = {
  colors: {
    backgroundBody: "var(--white-p)",
    text: "var(--black)",
    title: "var(--green)",
    backgroundBox: "var(--white)",
    label: "var(--black)",
    line: "none",
    buttonBackground: "var(--green)",
    buttonText: "var(--black)",
  }
}

export const DarkTheme: Theme = {
  colors: {
    backgroundBody: "var(--black-background)",
    text: "var(--white-p)",
    title: "var(--green)",
    backgroundBox: "var(--black-box)",
    label: "var(--white-p)",
    line: "var(--black-line)",
    buttonBackground: "var(--green)",
    buttonText: "var(--white-p)",
  }
}

export const BarbieTheme: Theme = {
  colors: {
    backgroundBody: "var(--pink-b)",
    text: "var(--white-p)",
    title: "var(--pink-xl)",
    backgroundBox: "var(--pink-l)",
    label: "var(--white-p)",
    line: "none",
    buttonBackground: "var(--pink-xl)",
    buttonText: "var(--white-p)",
  }
}