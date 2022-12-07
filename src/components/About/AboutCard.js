import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sathiskumar Nidharshan </span>
            from <span className="purple"> Vavuniya, SriLanka.</span>
            <br />
            <br/>I am a <span className="purple">National Diploma Technology in Information Technology</span> student of <span className="purple">Instiute of Technology University of Moratuwa.</span>
            <br/>
            <br />I wish to specialized in <span className="purple">Full Stack Software Engineer.</span>
            <br/>
            <br />I have collabrate with others, when i working with any project.
            <br/>
            <br/>I can speack in English, Sinhala, and Tamil.
            <br/>
            <br/>Personal skills
            <ul>
            <li className="about-activity">
              <ImPointRight /> Team Work
            </li>
            <li className="about-activity">
              <ImPointRight /> Communication
            </li>
            <li className="about-activity">
              <ImPointRight /> Flexibility
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
          </ul>
          <br/>
            Apart from this, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Works
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
