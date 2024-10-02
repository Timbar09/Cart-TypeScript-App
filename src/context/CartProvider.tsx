import { createContext, useMemo, useReducer } from 'react';

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  QUANTITY: 'QUANTITY',
  SUBMIT: 'SUBMIT',
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload missing from ADD action');
      }

      const { sku, name, price } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);
      const itemExists: CartItemType | undefined = state.cart.find((item) => item.sku === sku);
      const quantity = itemExists ? itemExists.quantity + 1 : 1;

      return { ...state, cart: [...filteredCart, { sku, name, price, quantity }] };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload missing from REMOVE action');
      }

      const { sku } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);

      return { ...state, cart: filteredCart };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error('action.payload missing from QUANTITY action');
      }

      const { sku, quantity } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);
      const itemExists: CartItemType | undefined = state.cart.find((item) => item.sku === sku);

      if (!itemExists) {
        throw new Error('Item does not exist in cart');
      }

      return { ...state, cart: [...filteredCart, { ...itemExists, quantity }] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT:
      return { ...state, cart: [] };
    default:
      throw new Error('Undefined reducer action type');
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems = state.cart.reduce((prev, curr) => prev + curr.quantity, 0);
  const totalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(state.cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0));

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));

    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: '',
  cart: [],
};

export const CartContext = createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: React.ReactElement | React.ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): React.ReactElement => {
  const value = useCartContext(initCartState);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
