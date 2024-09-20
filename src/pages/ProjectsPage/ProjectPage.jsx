import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import teamtrackrIMG from "../../assets/teamtrackrIMG.png";
import bookstoreIMG from "../../assets/bookstoreIMG.png";
import travelHookIMG from "../../assets/travelhookIMG.png";
import safecamIMG from "../../assets/safecamIMG.png";
import quizIMG from "../../assets/quizIMG.png";
import weatherAppImg from '../../assets/weaht.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://ryasaswini.github.io/Quiz-App/"}
              githubLink={"https://github.com/RYasaswini/Quiz-App"}
              projectName={"React Quiz App"}
              projectDetails={
                "React Quiz App: Answer React questions, get results. Fun way to test React knowledge. Simple, interactive, and informative!"
              }
              demoImage={quizIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
             // previewLink={"https://ryasaswini.github.io/Quiz-App/"}
              githubLink={"https://github.com/RYasaswini/Organicfarm"}
              projectName={"Organic_Farm"}
              projectDetails={
                "The Organic Farm project is an e-commerce website designed to facilitate the purchase of organic vegetables, fruits, millets, milk, and spices.it providing a user-friendly interface for browsing and buying organic products."


              }
              demoImage={weatherAppImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://seeklogo.com/images/P/PHP-logo-0B2FDC4529-seeklogo.com.png",
                //"https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
              ]}
            />

            <ProjectCard
              //previewLink={"https://ryasaswini.github.io/Quiz-App/"}
              githubLink={"https://github.com/RYasaswini/Hospital_Management_System"}
              projectName={"Hospital Management System"}
              projectDetails={
                "This HMS is designed to streamline the operations of a healthcare facility. It features role-based access control for different user roles such as Admin, Patient, Receptionist, and Doctor."
              }
              demoImage={teamtrackrIMG}
              key={"Hospital Management System"}
              skill_img={[
                //"https://cdn.worldvectorlogo.com/logos/react-2.svg",
                  "https://cdn.worldvectorlogo.com/logos/java-4.svg",
                  "https://cdn.worldvectorlogo.com/logos/mysql-2.svg",
                //"https://cdn.worldvectorlogo.com/logos/html-1.svg",
                //"https://cdn.worldvectorlogo.com/logos/css-3.svg",
                //"https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              //previewLink={"https://glistening-shortbread-4a11c7.netlify.app/"}
              githubLink={
                "https://github.com/RYasaswini/BookStore"
              }
              projectName={"BookStore App"}
              projectDetails={
                "Bookstore app features categories like story, music, comedy, horror, drama, and food. Users must log in, select a book from a category, and complete the purchase."
              }
              demoImage={bookstoreIMG}
              key={"BookStore App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            {/*<ProjectCard
              previewLink={"https://travelhook.netlify.app/"}
              githubLink={"https://github.com/shivam1611/travel-hook"}
              projectName={"Travel Hook Webpage"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
              demoImage={travelHookIMG}
              key={"Travel Hook Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://kaleidoscopic-nougat-c405ab.netlify.app/"}
              githubLink={
                "https://github.com/shivam1611/safe-cams-static-website"
              }
              projectName={"SafeCam Webpage"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
              demoImage={safecamIMG}
              key={"SafeCam Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />*/}
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
