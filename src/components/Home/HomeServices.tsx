import { BsBoxSeam as BoxIcon, BsCreditCard2Back as CreditCardIcon } from 'react-icons/bs';
import { RiExchangeDollarLine as DollarIcon } from 'react-icons/ri';
import { LuHeadphones as HeadphonesIcon } from 'react-icons/lu';

const services = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $150',
    icon: BoxIcon,
  },
  {
    id: 2,
    title: 'Flexible Payment',
    description: 'Pay with multiple payment methods',
    icon: CreditCardIcon,
  },
  {
    id: 3,
    title: 'Money Guarantee',
    description: 'Within 30 days for an exchange or refund',
    icon: DollarIcon,
  },
  {
    id: 4,
    title: 'Online Support',
    description: '24/7 customer support',
    icon: HeadphonesIcon,
  },
];

const HomeServices = () => {
  return (
    <ul className="p-4 sm:p-8 bg-primary-50 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {services.map((service) => (
        <li key={service.id} className="text-text-primary flex sm:flex-col gap-4">
          <service.icon className="text-2xl text-primary-500" />

          <div>
            <h3 className="text-lg font-medium leading-none mb-1">{service.title}</h3>
            <p className="text-xs text-text-secondary">{service.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default HomeServices;
