import { useSelector } from 'react-redux';
import { RootState } from '../store';

const useSelectors = () => {
  const isThemeDark = useSelector((state: RootState) => state.theme);
  return {
    isThemeDark,
  };
};
export default useSelectors;
