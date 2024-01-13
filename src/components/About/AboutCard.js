import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gautam Baraiya </span>
            from <span className="purple"> Bhavnagar, Gujarat.</span>
            <br />
            Currently pursuing B.Com at Maharaja Krishnakumarsinhji Bhavnagar University.
            <br />
            I completed my Higher Secondary Education at Ekta High School
            <br />
            <br />
            I am passionate about ..
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Management
            </li>
            <li className="about-activity">
              <ImPointRight /> Finance
            </li>
            <li className="about-activity">
              <ImPointRight /> Economics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is no substitute for hard work!"{" "}
          </p>
          <footer className="blockquote-footer">Thomas Edison</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
