import { useState } from 'react';
import {
  SiMastercard as MastercardIcon,
  SiVisa as VisaIcon,
  SiDiscover as DiscoverIcon,
} from 'react-icons/si';

type CheckoutProps = {
  handlePlaceOrderClick: () => void;
  onSubmitOrder: () => void;
  isCardDetailsOpen: boolean;
};

const cards = [
  {
    name: 'Mastercard',
    icon: MastercardIcon,
  },
  {
    name: 'Visa',
    icon: VisaIcon,
  },
  {
    name: 'Discover',
    icon: DiscoverIcon,
  },
];

const Checkout = ({ handlePlaceOrderClick, isCardDetailsOpen, onSubmitOrder }: CheckoutProps) => {
  const [activeCard, setActiveCard] = useState('Mastercard');

  const handleCardClick = (cardName: string) => {
    setActiveCard(cardName);
  };

  return (
    <div
      className={`overflow-hidden fixed md:relative bg-gray-950 self-stretch flex-${
        isCardDetailsOpen ? '[1.5] lg:flex-1 inset-0 md:inset-auto' : '0 hidden md:flex'
      } transition-[flex] duration-500`}
    >
      <div className={`${isCardDetailsOpen ? 'flex flex-col justify-between h-full' : 'hidden'}`}>
        <div className="p-4">
          <header className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-normal text-primary">Payment Details</h2>

            <button type="button" onClick={handlePlaceOrderClick} aria-label="Close">
              Close
            </button>
          </header>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-100">Select Card Type</h3>

            <ul className="flex gap-4 pt-4">
              {cards.map((card) => (
                <li
                  key={card.name}
                  onClick={() => handleCardClick(card.name)}
                  className={`hover:bg-gray-900 h-14 px-4 rounded ${
                    activeCard === card.name ? 'bg-gray-800' : ''
                  }`}
                >
                  <card.icon className="text-5xl text-gray-100" />
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-100">Card Number</h3>

            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              className="w-full h-12 bg-gray-800 text-gray-100"
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="">Expiry date</div>

            <div className="">CVV</div>
          </div>
        </div>

        <button
          type="button"
          onClick={onSubmitOrder}
          className="flex items-center justify-center w-full h-12 bg-primary text-text-primary py-8"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Checkout;
