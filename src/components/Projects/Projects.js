import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Management from "../../Assets/Projects/Management.png";
import wenbato from "../../Assets/Projects/wenbatto.png";
import graph from "../../Assets/Projects/graph.png";
import saa from "../../Assets/Projects/saa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TinyBlog"
              description="TinyBlog is a web application to manage one or more blogs. The idea is that a visitor to the website can see the posts and the author of the blog can log on to the site to administer the blog i.e. add, delete or modify posts."
              ghLink="https://github.com/Wassimkr/TinyBlog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Linked List"
              description="This project implements a simple linked list data structure in Pharo. A linked list is a collection of nodes that are linked together in a linear sequence. Each node contains a value and a reference to the next node in the list."
              ghLink="https://github.com/Wassimkr/LinkedList"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wenbato}
              isBlog={false}
              title="Wenbato"
              description="Wenbato is developing a platform to help people who are looking for accommodations in specific locales , by offering a large variety of accommodations."
              ghLink="https://github.com/Wassimkr/Wenbato-SOON"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Management}
              isBlog={false}
              title="Application Profile & Management Dashboard"
              description="This project aims to develop an ontology-based model and a management dashboard for microservices-based applications. The ontology-based model captures the entities, relationships, and attributes of the application, which can be used to enhance its scalability, interoperability, and maintainability. The management dashboard provides a user-friendly interface for monitoring and managing the microservices, as well as for analyzing the performance and usage of the application. The project follows a structured approach that includes defining the application profile, developing the ontology-based model, implementing the model in a suitable technology, and developing the management dashboard."
              ghLink="https://github.com/miloudbagaa/semanticWebApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="Graph-Coloring"
              description="This project implements a graph coloring problem in which we aim to find a valid coloring for a given graph with a minimum number of colors, using optimization methods. Graph coloring is a well-known problem in computer science and optimization, with applications in many fields, including scheduling, map coloring, and register allocation."
              ghLink="https://github.com/0xdia/graph-coloring"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saa}
              isBlog={false}
              title="Saa-Biskra"
              description="Saa-Biskra is a web application to manage the clients profiles, store their information, display information... Developed using React.js and Firebase."
              ghLink="https://github.com/Wassimkr/saa-assurance"
              demoLink="https://saa-assurance.web.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Implementation of a Kubernetes cluster"
              description="In this project I putted two web applications in a container. Then I developed a Kubernetes cluster."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Se7ati"
              description="In this project I have developped a mobile application for managing the health of users to protect them from the corona virus epedimy. The application provides a statistics, advices, form to contact the hospitals..."
              ghLink="https://github.com/zinef/Se7ti"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
