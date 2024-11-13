// import { Link } from 'react-router-dom';

import mockup from '../../assets/hero_product_img.svg';

const Home = () => {
  return (
    <div className="relative p-4">
      <div className="min-h-[80vh] bg-hero-bg bg-cover bg-center bg-no-repeat before:bg-gradient-to-r before:from-white from-5% before:to-[rgba(255,255,255,0.95)] before:absolute before:inset-0 before:content-['']">
        <div className="relative pt-20 pb-10">
          <h1>Home</h1>
          {/* <Link to="/products">Products</Link> */}
        </div>

        <div className="relative max-w-xs mx-auto px-4">
          <img src={mockup} alt="Hero mockup image" className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default Home;
