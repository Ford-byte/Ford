import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./blocks/Banner"));
const Experience = dynamic(() => import("./blocks/Experience"));
const Skill = dynamic(() => import("./blocks/Skill"));
const Footer = dynamic(() => import("./layout/Footer"));

export default function Home() {
  return (
    <>
      <Banner />
      <Experience />
      <Skill />
      <Footer />
    </>
  );
}
