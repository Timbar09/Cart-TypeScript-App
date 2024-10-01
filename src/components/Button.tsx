/**
 * Button component
 * @param {Function} handleClick - Function to handle button click
 * @param {React.ReactNode} children - Button content to display
 * @param {string} [className=''] - Additional classes to apply to button
 * @param {string} [type='button'] - Button type attribute
 *
 * @returns {JSX.Element} - Button component
 */

type ButtonProps = {
  handleClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ handleClick, children, className = '', type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-gray-100 py-1 px-4 rounded hover:bg-gray-200 text-text-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
