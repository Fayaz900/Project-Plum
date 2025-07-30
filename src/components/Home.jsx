import MainSection from './MainSection';
import CategorySection from './CategorySection';
import ProductSection from './ProductSection';
import ResultsSection from './ResultsSection';
import FooterSection from './FooterSection';
import BottomBannerSection from './BottomBannerSection/BottomBannerSection';
import TrendingSection from './TrendingSection';
import FeaturedProducts from './FeaturedProducts';

export const Home = () => {
  return (
    <>
      <MainSection />
      <CategorySection />
      <ProductSection/>
      <ResultsSection />
      <TrendingSection />
      <FeaturedProducts />
      <BottomBannerSection />
      <FooterSection />

    </>
  );
};
