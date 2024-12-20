import AboutSection from "@/component/about/AboutSection";
import ActivitySection from "@/component/activity/ActivitySection";
import BannerSection from "@/component/banner/BannerSection";
import BlogSection from "@/component/blog/BlogSection";
import CategorySection from "@/component/category/CategorySection";
import EventSection from "@/component/event/EventSection";
import FaqSection from "@/component/faq/FaqSection";
import FooterSection from "@/component/footer/FooterSection";
import VideoModal from "@/component/modal/VideoModal";
import NavbarSection from "@/component/navbar/NavbarSection";
import TestimonialSection from "@/component/testimonial/TestimonialSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import VideoSection from "@/component/video/VideoSection";
import WorkSection from "@/component/work/WorkSection";

export const metadata = {
  title: "Academia Balance Demo",
  description: "Stefano Quiroz - Nebulabs",
};

export default function Home() {
  return (
    <>
      <NavbarSection style="" logo="images/logo-academia.svg" />
      <BannerSection />
      {/* <CategorySection /> */}
      {/* <AboutSection /> */}
      <EventSection section="tf__event mt_95" startIndex={0} endIndex={4} />
      {/* <FaqSection img='images/faq_person.png' /> */}
      <WorkSection />
      <TestimonialSection />
      {/* <ActivitySection /> */}
      <FaqSection img="images/faq_person.png" />
      {/* <VideoSection /> */}
      {/* <BlogSection /> */}
      <FooterSection />
      {/* <VideoModal /> */}
      <ScrollToTopButton style="" />
    </>
  );
}
