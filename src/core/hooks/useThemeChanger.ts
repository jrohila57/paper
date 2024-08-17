import { CombinedDarkTheme, CombinedDefaultTheme } from '../../resources/theme';
import useSelectors from './useSelectors';

const useThemeChanger = () => {
  const { isThemeDark } = useSelectors();

  return {
    theme: isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme,
  };
};
export default useThemeChanger;
