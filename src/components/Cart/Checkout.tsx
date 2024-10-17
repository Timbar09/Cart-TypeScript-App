type CheckoutProps = {
  handlePlaceOrderClick: () => void;
  onSubmitOrder: () => void;
  isCardDetailsOpen: boolean;
};

const Checkout = ({ handlePlaceOrderClick, isCardDetailsOpen, onSubmitOrder }: CheckoutProps) => {
  return (
    <div
      className={`overflow-hidden fixed md:relative bg-gray-950 self-stretch flex-${
        isCardDetailsOpen ? '[1.5] lg:flex-1 inset-0 md:inset-auto' : '0 hidden md:flex'
      } transition-[flex] duration-500`}
    >
      <div
        className={`${isCardDetailsOpen ? 'flex flex-col justify-between h-full' : 'hidden'} p-4`}
      >
        <header className="flex items-center justify-between p-4">
          <h2>Payment Details</h2>

          <button type="button" onClick={handlePlaceOrderClick} aria-label="Close">
            Close
          </button>
        </header>

        <button
          type="button"
          onClick={onSubmitOrder}
          className="flex items-center justify-center w-full h-12 bg-primary text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Checkout;
