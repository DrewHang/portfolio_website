import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineFilePdf, AiFillLinkedin } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import ReactTooltip from "react-tooltip";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <HiFire size="3rem" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/DrewHang">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/andrew-hang/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons>
        <a
          href="/Andrew Hang Resume v2.pdf"
          style={{ color: "inherit" }}
          download
        >
          <AiOutlineFilePdf size="3rem" data-tip data-for="registerTip" />
        </a>
      </SocialIcons>
      <ReactTooltip id="registerTip" place="bottom" effect="solid">
        Click to download resume!
      </ReactTooltip>
    </Div3>
  </Container>
);

export default Header;
