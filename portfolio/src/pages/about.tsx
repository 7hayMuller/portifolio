import UxUiImage from "../../public/assets/uxImage.png";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import Carousel from "./components/Carousel";
import ModelViewer from "./components/ModalViewer";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <div className="relative z-10 pt-16">
        <Section
          id="section1"
          title="Me, Myself & I"
          imgClassName="animate-spin"
          content="I'm a frontend developer based in Brazil, Rio de Janeiro with 3+ years of experience in development of interfaces, bug resolution, and more..."
          reverse
          animation={
            <ModelViewer
              src="https://solarsystem.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBblVRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--abda6331ea1271cb16bf7b8b08f42b0ad49115b2/Sun_1_1391000.glb?disposition=inline"
              alt="A 3D model of the sun"
              ar
              autoRotate
              cameraControls
            />
          }
        />
        <Section
          action={
            <div
              className="flex justify-end items-center mt-8 cursor-pointer"
              onClick={() => router.push("/frontend-projects")}
            >
              <BsArrowLeft className="text-[#55d6be] mr-2 text-[20px]" />
              <p className="text-[15px] underline text-[#55d6be] font-bold">
                Ver mais
              </p>
            </div>
          }
          id="section2"
          title="Frontend Projects"
          content="Here are some of the projects I've worked on, showcasing my skills in frontend development and UX/UI design."
          animationClassName="absolute left-[60px] top-[200px]"
          animation={<Carousel />}
          reverse
        />
        <Section
          action={
            <div className="flex justify-end items-center mt-8 cursor-pointer">
              <p
                className="text-[15px] underline text-[#55d6be] font-bold"
                onClick={() => router.push("/uxui-projects")}
              >
                Ver mais
              </p>
              <BsArrowRight className="text-[#55d6be] ml-2 text-[20px]" />
            </div>
          }
          id="section3"
          title="UX/UI Projects"
          content="Here are some of the projects I've worked on, showcasing my skills in frontend development and UX/UI design."
          imageSrc={UxUiImage}
          imgClassName="mt-[30px]"
        />
        <Section
          id="section4"
          title="Contact Me"
          content="Feel free to reach out to me for any project collaborations or inquiries. Let's build something amazing together!"
          hasForm
        />
      </div>
    </>
  );
};

export default About;
