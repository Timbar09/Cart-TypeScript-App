import { createContext, useMemo, useReducer, ReactElement } from 'react';

export type WishlistItemType = {
  sku: string;
  name: string;
  price: number;
};

type WishlistStateType = { wishlist: WishlistItemType[] };

const initWishlistState: WishlistStateType = { wishlist: [] };

const WISHLIST_ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

export type WishlistReducerActionType = typeof WISHLIST_ACTION_TYPE;

export type WishlistReducerAction = {
  type: string;
  payload?: WishlistItemType;
};

const reducer = (state: WishlistStateType, action: WishlistReducerAction): WishlistStateType => {
  switch (action.type) {
    case WISHLIST_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload missing from ADD action');
      }

      const { sku, name, price } = action.payload;
      const filteredWishlist: WishlistItemType[] = state.wishlist.filter(
        (item) => item.sku !== sku
      );

      return { ...state, wishlist: [...filteredWishlist, { sku, name, price }] };
    }
    case WISHLIST_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload missing from REMOVE action');
      }

      const { sku } = action.payload;
      const filteredWishlist: WishlistItemType[] = state.wishlist.filter(
        (item) => item.sku !== sku
      );

      return { ...state, wishlist: filteredWishlist };
    }
    default:
      throw new Error('Undefined reducer action type');
  }
};

const useWishlistContext = (initWishlistState: WishlistStateType) => {
  const [state, dispatch] = useReducer(reducer, initWishlistState);

  const WISHLIST_ACTIONS = useMemo(() => {
    return WISHLIST_ACTION_TYPE;
  }, []);

  const totalItems = state.wishlist.length;

  const wishlist = state.wishlist.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));

    return itemA - itemB;
  });

  return { dispatch, WISHLIST_ACTIONS, totalItems, wishlist };
};

export type UseWishlistContextType = ReturnType<typeof useWishlistContext>;

const initWishlistContextState: UseWishlistContextType = {
  dispatch: () => {},
  WISHLIST_ACTIONS: WISHLIST_ACTION_TYPE,
  totalItems: 0,
  wishlist: [],
};

export const WishlistContext = createContext<UseWishlistContextType>(initWishlistContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const WishlistProvider = ({ children }: ChildrenType): ReactElement => {
  const value = useWishlistContext(initWishlistState);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export default WishlistContext;
