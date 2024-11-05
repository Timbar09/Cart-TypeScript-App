import { CartItemType } from '../../context/CartProvider';
import { ReducerAction, ReducerActionType } from '../../context/CartProvider';

import { GrFormAdd as AddIcon, GrFormSubtract as SubtractIcon } from 'react-icons/gr';

type CartLineItemStepperProps = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  size?: string;
};

const CartLineItemStepper = ({
  item,
  dispatch,
  REDUCER_ACTIONS,
  size = 'md',
}: CartLineItemStepperProps): JSX.Element => {
  const onStepperClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;

    if (id === 'decrement' && item.quantity > 1) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...item, quantity: item.quantity - 1 },
      });
    }

    if (id === 'increment' && item.quantity < 20) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...item, quantity: item.quantity + 1 },
      });
    }
  };

  const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: Number(e.target.value) },
    });
  };

  return (
    <div className="flex items-center gap-1">
      <label htmlFor="quantity" className="sr-only">
        Quantity
      </label>

      <button
        className={`stepperButton border hover:bg-primary-100 hover:text-primary active:bg-primary-200 ${
          size === 'md' ? 'w-5 h-5' : 'w-8 h-8'
        } grid place-items-center rounded-full`}
        type="button"
        id="decrement"
        aria-label="Decrement quantity"
        onClick={onStepperClick}
      >
        <SubtractIcon />
      </button>
      <input
        className={`${
          size === 'md' ? 'w-8' : 'w-10 leading-9 text-lg'
        } text-center border border-gray-200 rounded-md cursor-default`}
        type="number"
        id="quantity"
        value={item.quantity}
        max={20}
        min={1}
        readOnly
        onChange={onChangeQuantity}
      />
      <button
        className={`stepperButton border hover:bg-primary-100 hover:text-primary active:bg-primary-200 ${
          size === 'md' ? 'w-5 h-5' : 'w-8 h-8'
        } grid place-items-center rounded-full`}
        type="button"
        id="increment"
        aria-label="Increment quantity"
        onClick={onStepperClick}
      >
        <AddIcon />
      </button>
    </div>
  );
};
export default CartLineItemStepper;
