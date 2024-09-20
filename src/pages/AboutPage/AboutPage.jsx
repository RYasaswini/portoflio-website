import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2018 - 2019"}
                  timeline_title={"High School "}
                  location={"Z.P High School,Settipalli"}
                  details={
                    "Completed my High School Degree from State Board with 100%."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2019 - 2021"}
                  timeline_title={"Pre University Course(PUC)"}
                  location={"RGUKT-A.P,RK Valley(Idupulapaya)"}
                  details={
                    "Completed My Pre University course with 9.5 cgpa from RGUKT, RK Valley, 516330."
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2021 - 2025"}
                  timeline_title={"B.Tech in Computer Science & Engineering "}
                  location={"RGUKT-A.P,RK Valley(Idupulapaya)"}
                  details={"Currently Pursuing B.tech Final year in Computer Science & Engineering with 8.6 cgpa from Rajiv Gandhi University of Knowledge Technologies-rk valley."}
                  img={
                    "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
