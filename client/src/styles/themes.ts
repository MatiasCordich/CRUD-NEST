export interface ThemeProps {
  background: string;
  text: string;
}

export const lightTheme: ThemeProps = {
  background: "var(--white-p)",
  text: "var(--black)",
};

export const darkTheme: ThemeProps = {
  background: "var(--black)",
  text: "var(--white-p)",
};
