import React from "react";
import Social from "./Social";
import Section from "../common/Section";


const socials = [
  { icon: "fab fa-twitter", link: "https://twitter.com/DwyteMartin", color: "#1DA1F2" },
  { icon: "fab fa-github", link: "https://github.com/Dwyte", color: "#3A284D" },
  { icon: "fab fa-youtube", link: "https://www.youtube.com/channel/UCUCy0AuQOjJuJETyxaOm8aQ", color: "#FF0000" },
  { icon: "fab fa-stack-overflow", link: "https://www.stackoverflow.com", color: "#F48024" },
  { icon: "fab fa-hackerrank", link: "https://www.hackerrank.com/dwytemartin?hr_r=1", color: "#2EC262" }
];

const Footer = () => {
  return (
    <Section id="footer">
        {socials.map(social => <Social key={socials.indexOf(social)} {...social}/>)}
    </Section>
  );
};

export default Footer;
