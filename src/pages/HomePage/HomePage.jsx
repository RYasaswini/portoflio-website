import Navbar from "../../Components/Navbar/Navbar.jsx";
import style from "./HomePage.module.css";
import HeroImage from "../../assets/heroImage.png";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        exit={{ opacity: 0 }}
        className={style.hero_component}
      >
        <div className={style.left_side}>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.upper_text_style}
          >
            Hello I'm Yasaswini
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.bottom_text_style}
          >
            &lt;Software Engineer/&gt;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "1",
              delay: "1.5",
            }}
            className={style.detail_text}
          >
          Aspiring Software Engineer and MERN Stack Developer
          A highly motivated and enthusiastic fresher with a strong foundation in Java, Data Structures & Algorithms (DSA), and full-stack web development using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. 
          Passionate about learning new technologies and building efficient, user-friendly web applications. Eager to apply my skills in a dynamic environment to contribute to meaningful projects and further develop my expertise.



          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: "-7vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{ delay: 2.5, stiffness: 40, duration: 0.7 }}
            className={style.download_btn}
          >
            <a
              className="link_under_button"
              target="_blank"
              href="https://drive.google.com/file/d/1pPiHwdm-Pv1dUqxPkjY995jsyWrXEzW8/view?usp=drivesdk"
            >
            
              Download CV
            </a>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, stiffness: 40, duration: 1 }}
          className={style.right_section}
        >
          <div className={style.img_section}>
            <img src={HeroImage} alt="Yasaswini" className={style.hero_image} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
