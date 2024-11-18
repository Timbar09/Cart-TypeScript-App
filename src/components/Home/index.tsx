import HomeHeroSection from './HomeHeroSection';
import HomeFeaturedSection from './HomeFeaturedSection';
import HomeProductListSection from './HomeProductListSection';

const Home = () => {
  return (
    <div className="relative pt-20 pb-10">
      <HomeHeroSection />

      <HomeFeaturedSection />

      <HomeProductListSection />
    </div>
  );
};
export default Home;
