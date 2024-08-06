import PageHead from "@/components/shared/PageHead";
import AboutSection from "@/components/specific/home/About-section";
import HeroSection from "@/components/specific/home/Hero-section";
import IndustrySection from "@/components/specific/home/IndustrySection";
import TeamSection from "@/components/specific/home/TeamSection";

export default function Home() {
  return (
    <>
      <PageHead />
      <HeroSection />
      <AboutSection />
      <IndustrySection />
      <TeamSection />
    </>
  );
}
