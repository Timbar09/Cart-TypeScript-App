import Container from './Container';

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <header>
      <Container className="flex justify-between items-center py-4">
        <h1>React Shop</h1>

        <div className="flex items-center gap-1">
          <button
            className="bg-gray-100 py-1 px-4 rounded hover:bg-gray-200 text-text-primary"
            onClick={() => setViewCart(!viewCart)}
          >
            {viewCart ? 'Back to Products' : 'View Cart'}
          </button>

          <div className="text-xs text-text-secondary flex flex-col justify-between">
            <p>
              <>Items:</> <span className="text-text-primary font-bold">0</span>
            </p>

            <p>
              <>Total:</> <span className="text-text-primary font-bold">$0.00</span>
            </p>
          </div>
        </div>
      </Container>
    </header>
  );

  return content;
};

export default Header;
