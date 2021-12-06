import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Andrew!
        </SectionTitle>
        <SectionTitle>
          <img
            src="/images/profilepic.jpeg"
            style={{
              minWidth: "220px",
              minHeight: "200px",
              maxWidth: "20%",
              maxHeight: "20%",
              borderRadius: "30%",
            }}
          />
        </SectionTitle>
        <SectionText>
          A former Excel whiz turned Full-Stack Software Engineer and recent
          Hack Reactor Graduate looking to fuel my passion for the tech industry
          through developing full stack applications to simplify the life of
          others.
        </SectionText>
        <Link href="#projects">
          <Button>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
