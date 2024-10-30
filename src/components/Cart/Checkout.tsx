import { useState } from 'react';

import {
  SiMastercard as MastercardIcon,
  SiVisa as VisaIcon,
  SiDiscover as DiscoverIcon,
} from 'react-icons/si';
import { CgClose as CloseIcon } from 'react-icons/cg';

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitOrder();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`overflow-hidden fixed md:relative bg-gray-950 self-stretch flex-${
        isCardDetailsOpen ? '[1.5] lg:flex-[.75] inset-0 md:inset-auto' : '0 hidden md:flex'
      } transition-[flex] duration-500`}
    >
      <div className={`${isCardDetailsOpen ? 'flex flex-col justify-between h-full' : 'hidden'}`}>
        <div className="px-4 pt-12 pb-4  max-w-96 mx-auto">
          <header className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-normal text-primary">Payment Details</h2>

            <button
              type="button"
              className="rounded hover:text-gray-200 hover:bg-gray-900 p-2 "
              onClick={handlePlaceOrderClick}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </header>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-200">Select Card Type</h3>

            <ul className="flex gap-4 pt-4">
              {cards.map((card) => (
                <li key={card.name} className="flex items-center">
                  <input
                    type="radio"
                    id={card.name}
                    name="cardType"
                    value={card.name}
                    checked={activeCard === card.name}
                    onChange={() => handleCardClick(card.name)}
                    className="hidden"
                  />
                  <label
                    htmlFor={card.name}
                    className={`hover:bg-gray-900 h-14 px-4 rounded cursor-pointer flex items-center justify-center ${
                      activeCard === card.name ? 'bg-gray-800 text-gray-200' : ''
                    }`}
                  >
                    <card.icon className="text-5xl" />
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-200">Card Number</h3>

            <input
              type="text"
              placeholder="_________ _________ ________ ________"
              className="w-full h-12 bg-transparent border-b border-transparent text-gray-200 p-2"
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex flex-col w-1/2">
              <h3 className="text-lg font-medium text-gray-200">Expiry Date</h3>

              <input
                type="text"
                placeholder="_______ / _______"
                className="w-full h-12 bg-transparent border-b border-transparent text-gray-200 p-2"
                required
              />
            </div>

            <div className="flex flex-col w-1/2">
              <h3 className="text-lg font-medium text-gray-200 m-0">CVV</h3>

              <input
                type="text"
                placeholder="_________"
                className="w-full bg-transparent border-b border-transparent text-gray-200 px-2 pt-1 outline-none active:border-b active:border-gray-200"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full h-12 bg-primary text-text-primary py-8"
        >
          Checkout
        </button>
      </div>
    </form>
  );
};
export default Checkout;
