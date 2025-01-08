import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./blocks/Banner"));
const Experience = dynamic(() => import("./blocks/Experience"));
const Skill = dynamic(() => import("./blocks/Skill"));
const Footer = dynamic(() => import("./layout/Footer"));
const IsScrolled = dynamic(() => import("./layout/isScrolled"));

export default function Home() {
  return (
    <>
      <IsScrolled />
      <Banner />
      <Experience />
      <Skill />
      <Footer />
    </>
  );
}
