import Button from '../Button';
import HomeServices from './HomeServices';

import { IoStar as StarIcon } from 'react-icons/io5';
import { HiOutlineArrowLongRight as ChevronRightIcon } from 'react-icons/hi2';

import mockup from '../../assets/hero_product_img.svg';

const HomeHeroSection = () => {
  return (
    <section className="min-h-[calc(100svh-5.75rem)] flex flex-col gap-2">
      <div className="flex-1 flex gap-4 items-center bg-gray-100 rounded-lg px-4 md:px-8">
        <div className="relative flex-1 text-text-primary">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
            SHOP COMPUTERS
            <span className="block">&amp; ACCESSORIES</span>
          </h1>

          <p className="text-md mt-4 max-w-md">
            shop desktops, laptops, monitors, tablets, PC components, hard drives and storage,
            accessories and more
          </p>

          <div className="mt-8">
            <Button to="/products" buttonRole="primary" className="inline-flex gap-2 items-center">
              <span>Shop Now</span>
              <ChevronRightIcon className="text-2xl" />
            </Button>
          </div>
        </div>

        <div className="text-right relative flex-1">
          <div className="absolute text-left py-4 pl-4 pr-24 rounded-lg bottom-0 left-0 bg-white">
            <h2 className="text-sm font-semibold">Best Seller</h2>
            <h3 className="text-text-primary text-2xl font-semibold">Razer Kraken X</h3>

            <div className="text-lg flex items-end gap-2">
              <div className="">
                <StarIcon className="text-amber-400 inline" />
                <StarIcon className="text-amber-400 inline" />
                <StarIcon className="text-amber-400 inline" />
                <StarIcon className="text-amber-400 inline" />
                <StarIcon className="text-amber-400 inline" />
              </div>

              <span className="text-sm">1245 reviews</span>
            </div>

            <div className="flex gap-2 items-end">
              <p className="text-2xl text-text-primary mt-2 font-semibold leading-none">$129.99</p>
              <p className="text-sm text-gray-500 line-through leading-none">$149.99</p>
            </div>

            <Button buttonRole="secondary" className="mt-4">
              View Product
            </Button>
          </div>

          <div className="inline-block max-w-52 sm:max-w-64 lg:max-w-[20rem] pl-4 pr-4 lg:pr-12">
            <img src={mockup} alt="Hero mockup image" className="w-full transform rotate-12" />
          </div>
        </div>
      </div>

      <HomeServices />
    </section>
  );
};
export default HomeHeroSection;
