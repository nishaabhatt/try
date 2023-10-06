
import Testimonial from "../components/Testimonial";
// import Hero from "../components/Hero";
import TopTrendingCategories from "../components/TopTrendingCategories";
import BannerPortion1 from "../components/BannerPortion1";
import BannerPortion2 from "../components/BannerPortion2";
import TopTrendingItems from "../components/TopTrendingItems";
import HotNewPicks from "../components/HotNewPicks";
import TopSunglasses from "../components/TopSunglasses";
import Hero from "@/components/HeroSection";


export default function Home() {
  return(
    <main>
       <Hero />
      {/* <HeroPage /> */}
      <TopTrendingCategories/>
      <HotNewPicks />
      <TopTrendingItems/>
      <BannerPortion1 />
      <TopSunglasses />
      <BannerPortion2 />
      <Testimonial />
  
    </main>
  ) ;
}
