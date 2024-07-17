import { motion } from "framer-motion";
import { useEffect } from "react";

const FrontEndProjects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const triggerBottom = (window.innerHeight / 5) * 4;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="home-container">
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading">Welcome to Format-3</h1>
          <p className="paragraph">
            Creating the digital future with visionaries and industry leaders.
          </p>
        </motion.div>
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading">Welcome to Format-3</h1>
          <p className="paragraph">
            Creating the digital future with visionaries and industry leaders.
          </p>
        </motion.div>
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading">Welcome to Format-3</h1>
          <p className="paragraph">
            Creating the digital future with visionaries and industry leaders.
          </p>
        </motion.div>
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading">Welcome to Format-3</h1>
          <p className="paragraph">
            Creating the digital future with visionaries and industry leaders.
          </p>
        </motion.div>
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading">Welcome to Format-3</h1>
          <p className="paragraph">
            Creating the digital future with visionaries and industry leaders.
          </p>
        </motion.div>
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading">Welcome to Format-3</h1>
          <p className="paragraph">
            Creating the digital future with visionaries and industry leaders.
          </p>
        </motion.div>
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading">Welcome to Format-3</h1>
          <p className="paragraph">
            Creating the digital future with visionaries and industry leaders.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default FrontEndProjects;
