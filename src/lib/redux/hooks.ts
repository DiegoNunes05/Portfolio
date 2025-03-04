import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Adicionando um tipo de seletor específico para o estado do portfólio
export const usePortfolioSelector = () => {
  return useAppSelector((state) => state.portfolio);
};