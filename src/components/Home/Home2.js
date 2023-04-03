import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook, FaDiscord } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a final year student at the Higher School of Computer Science
              at ESI (ex. INI) Algiers, Algeria, specializing in computer
              systems.
              <br />
              <br /> I have a strong passion for{" "}
              <i>
                <b className="purple"> object-oriented programming </b>
              </i>{" "}
              and a wide range of{" "}
              <i>
                <b className="purple"> programming languages. </b>
              </i>
              <br />
              <br />
              Throughout my academic career, I have developed a strong
              foundation in{" "}
              <b className="purple">software engineering principles</b>,
              including{" "}
              <b className="purple">agile development methodologies</b> and{" "}
              <b className="purple">continuous integration and delivery.</b>
              <br />
              <br />I have gained valuable experience in{" "}
              <b className="purple">designing, building, and deploying</b>{" "}
              automated infrastructure solutions to support software development
              teams. I enjoy collaborating with developers and other
              stakeholders to optimize{" "}
              <b className="purple">software development workflows</b> and
              improve product delivery.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Wassimkr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/wassim.khan.3114/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wassim-kribaa-72369319a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
