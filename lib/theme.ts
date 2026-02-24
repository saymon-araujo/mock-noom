import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';

export const NAV_THEME: Record<'light' | 'dark', Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: 'hsl(0 0% 100%)',
      border: 'hsl(0 0% 90%)',
      card: 'hsl(0 0% 100%)',
      notification: 'hsl(3 78% 58%)',
      primary: 'hsl(182 80% 25%)',
      text: 'hsl(0 0% 10%)',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: 'hsl(0 0% 7%)',
      border: 'hsl(0 0% 18%)',
      card: 'hsl(0 0% 10%)',
      notification: 'hsl(3 70% 55%)',
      primary: 'hsl(182 65% 38%)',
      text: 'hsl(0 0% 96%)',
    },
  },
};
