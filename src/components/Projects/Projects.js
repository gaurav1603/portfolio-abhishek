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
import studynotion from "../../Assets/Projects/studynotion.png";
import eye from "../../Assets/Projects/eye.png";
import facial1 from "../../Assets/Projects/facial1.jpeg";
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
              imgPath={studynotion}
              isBlog={false}
              title="SQL Data Analysis of Netflix Content"
              description="Analyzed Netflix’s movies and TV shows dataset using SQL to extract insights on content distribution, ratings, and
              geographical trends. Developed SQL queries to identify the most common ratings, top content-producing countries, and the longest movies. 
              Presented findings to inform content strategy and enhance understanding of regional content distribution."
              ghLink="https://github.com/igabhi04/Netflix-Prime-Hotstar-Dashboard-Power-BI"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eye}
              isBlog={false}
              title="Super Store Annual Sales Report"
              description="Built an interactive Power BI dashboard to track KPIs like sales, profit, and customer trends. Enabled stakeholders to
explore data dynamically through filters and slicers. Cleaned and transformed raw data using Power Query and structured it into an efficient star schema. Ensured optimized
performance and clarity in data relationships."
              ghLink="https://github.com/igabhi04/Power-Bi-Superstore-Sales"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink="https://github.com/gaurav1603/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facial1}
              isBlog={false}
              title="Road Accident Analysis Dashboard"
              description="Designed an interactive Road Accident Analysis Dashboard to visualize accident trends, identify high-risk factors, and support data-driven road safety decisions."
              // ghLink="https://github.com/gaurav1603/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
