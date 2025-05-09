import { useThemeContext } from '../../context/ThemeContext';

export function useThemeHook() {
  const { isDark, toggleTheme } = useThemeContext();
  return { isDark, toggleTheme };
}
