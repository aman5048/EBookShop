import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Faq } from "./components/Faq";
import { Testimonials } from "./components/Testimonial";
import { useTitle } from "../../hooks/useTitle";
export const HomePage = (params) => {
  useTitle("Home");
  return (
    <>
      <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
      </main>
    </>
  );
};
