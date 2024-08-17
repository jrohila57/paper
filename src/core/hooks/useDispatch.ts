 
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { setLoading, setTheme, toggleTheme } from '../../module/home/redux';

const useDispatches = () => {
  const dispatch: AppDispatch = useDispatch();

  // Theme dispatch
  const toggleThemeDispatch = () => dispatch(toggleTheme());
  const setThemeDispatch = (payload: boolean) => dispatch(setTheme(payload));
  const setThemeLoading = (payload: boolean) => dispatch(setLoading(payload));

  return {
    toggleThemeDispatch,
    setThemeDispatch,
    setThemeLoading,
  };
};

export default useDispatches;
