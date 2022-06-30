import styled from "styled-components";
import React from "react";

import Section from "../common/Section";
import Social from "./Social";

const FooterText = styled.p`
  color: ${({ theme }) => theme.fontColorSecondary};
  font-size: 0.75rem;
  margin: 0;
`;

const socials = [
  {
    icon: "fab fa-twitter",
    link: "https://twitter.com/dwytex",
    color: "#1DA1F2",
  },
  { icon: "fab fa-github", link: "https://github.com/Dwyte", color: "#3A284D" },
  {
    icon: "fab fa-youtube",
    link: "https://www.youtube.com/channel/UCUCy0AuQOjJuJETyxaOm8aQ",
    color: "#FF0000",
  },
  {
    icon: "fab fa-stack-overflow",
    link: "https://stackoverflow.com/users/story/10594994",
    color: "#F48024",
  },
  {
    icon: "fab fa-hackerrank",
    link: "https://www.hackerrank.com/dwytemartin?hr_r=1",
    color: "#2EC262",
  },
];

const Footer = () => {
  return (
    <Section id="footer" isLast={true}>
      {socials.map((social) => (
        <Social key={socials.indexOf(social)} {...social} />
      ))}
      <FooterText className="mt-3">v2022.06.30</FooterText>
    </Section>
  );
};

export default Footer;
