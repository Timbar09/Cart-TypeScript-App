/**
 * Button component
 * @param {Function} handleClick - Function to handle button click
 * @param {React.ReactNode} children - Button content to display
 * @param {string} [className=''] - Additional classes to apply to button
 * @param {string} [type='button'] - Button type attribute
 * @param {boolean} [disabled=false] - Button disabled attribute
 * @param {string} [ariaLabel=''] - Button aria-label attribute
 * @param {string} [title=''] - Button title attribute
 * @param {boolean} [hasText=true] Does button contain text?
 *
 * @returns {JSX.Element} - Button component
 */

type ButtonProps = {
  handleClick?: () => void;
  children: React.ReactNode;
  buttonRole?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  title?: string;
};

const buttonRoles = {
  primary: 'bg-primary hover:bg-primary-400 text-gray-50',
  secondary: 'bg-primary-100 hover:bg-primary-50 text-primary hover:text-primary-800',
  tertiary: 'bg-gray-100 hover:bg-gray-200 text-primary-900',
};

const Button = ({
  handleClick,
  children,
  buttonRole = 'tertiary',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel = '',
  title = '',
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`py-2 px-3 rounded-md  cursor-pointer ${buttonRoles[buttonRole]} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
