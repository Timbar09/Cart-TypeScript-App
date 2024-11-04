import { Link } from 'react-router-dom';

import useCart from '../../hooks/useCart';

import { MdOutlineCircle as PlaceholderIcon } from 'react-icons/md';

type HeaderNavLinkProps = {
  to: string;
  linkName: string;
  icon?: React.ReactNode;
};

const HeaderNavLink = ({
  linkName,
  to,
  icon = <PlaceholderIcon className=" text-lg" />,
}: HeaderNavLinkProps) => {
  const { totalItems } = useCart();

  const iconContent = () => {
    if (linkName !== 'Your Cart') return icon;

    return (
      <div className="relative ">
        {icon}

        {totalItems > 0 && (
          <span
            className="absolute top-[-0.45rem] right-[-0.65rem] bg-red-500 text-background-primary text-[0.55rem] font-bold w-4 h-4 grid place-items-center rounded-full"
            aria-label="Total items in cart"
          >
            {totalItems}
          </span>
        )}
      </div>
    );
  };

  return (
    <Link
      to={to}
      className="flex items-center gap-1 py-2 px-2 md:px-3 bg-primary-100 hover:bg-primary-50 text-primary hover:text-primary-800 rounded-md cursor-pointer"
    >
      <span className="hidden md:inline-block text-sm">{linkName}</span>
      {iconContent()}
    </Link>
  );
};

export default HeaderNavLink;
