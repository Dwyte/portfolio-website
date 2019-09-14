import React from "react";
import Social from "./Social";
import Section from "../common/Section";


const socials = [
  { icon: "fab fa-twitter", link: "https://www.twitter.com" },
  { icon: "fab fa-github", link: "https://www.github.com" },
  { icon: "fab fa-youtube", link: "https://www.youtube.com" },
  { icon: "fab fa-stack-overflow", link: "https://www.stackoverflow.com" },
  { icon: "fab fa-hackerrank", link: "https://www.hackerrank.com" }
];

const Footer = () => {
  return (
    <Section id="footer">
        {socials.map(social => <Social {...social}/>)}
    </Section>
  );
};

export default Footer;
