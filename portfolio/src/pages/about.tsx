import SideImage from "../../public/assets/organicImage.png";
import Cube from "./components/Cube";
import Navbar from "./components/NavBar";
import Section from "./components/Section";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="relative z-10 pt-16">
        <Section
          id="section1"
          title="Me, Myself & I"
          content="I'm a frontend developer based in Brazil, Rio de Janeiro with 3+ years of experience in development of interfaces, bug resolution, and more..."
          imageSrc={SideImage}
        />
        <Section
          id="section2"
          title="Frontend Projects"
          content="Here are some of the projects I've worked on, showcasing my skills in frontend development and UX/UI design."
          animation={
            <Cube className="absolute left-0 mt-[100px] mr-[50px] scale-75 " />
          }
          reverse
        />
        <Section
          id="section3"
          title="UX/UI Projects"
          content="Here are some of the projects I've worked on, showcasing my skills in frontend development and UX/UI design."
          imageSrc={SideImage}
        />
        <Section
          id="section4"
          title="Contact Me"
          content="Feel free to reach out to me for any project collaborations or inquiries. Let's build something amazing together!"
          imageSrc={SideImage}
        />
      </div>
    </>
  );
};

export default About;
