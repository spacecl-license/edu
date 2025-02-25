import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import MobileMenu from "./main/mobile_menu";

export default function HeaderMobile() {

  return (
    <Wrapper>
			<Link to="/">
      	<Logo src={logo} alt="image of Logo"/>
			</Link>
			<MobileMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
	width: 100%;
	height: 3.75rem;
	background-color: rgba(255, 255, 255, 0.6);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem 0 1rem;
	border-bottom: 1px solid rgb(229, 229, 229);
`;

const Logo = styled.img`
	width: 115px;
	height: 34px;
	object-fit: cover;
`;