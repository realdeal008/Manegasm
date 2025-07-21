import { useContext } from 'react';
import { CartContext } from './cartContextObject';

export const useCart = () => {
  return useContext(CartContext);
};
