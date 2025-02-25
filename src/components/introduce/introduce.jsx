import React from "react";
import styled from "styled-components";
import PortfolioSlider from "../portfolioslider";
import IntroduceTitle from "./introduce_title";
import IntroduceGroup from "./introduce_group";
import IntroduceHistory from "./introduce_history";
import { Desktop, Mobile } from "../responsive";
import PortfolioSliderMobile from "../portfoliosliderMobile";
import LocationMobile from "../main/location_mobile";
import Location from "../main/location";
import IntroduceTitleMobile from "./introduce_title_mobile";
import IntroduceGroupMobile from "./introduce_group_mobile";
import IntroduceHistoryMobile from "./introduce_history_mobile";

export default function Introduce() {
  return (
    <RootWrapper>
      {/* 타이틀 */}
      <Desktop><IntroduceTitle/></Desktop>
			<Mobile><IntroduceTitleMobile/></Mobile>

      {/* 조직도*/}
      <Desktop><IntroduceGroup/></Desktop>
			<Mobile><IntroduceGroupMobile/></Mobile>

      {/* History */}
      <Desktop><IntroduceHistory/></Desktop>
			<Mobile><IntroduceHistoryMobile/></Mobile>

			{/* 포트폴리오 */}
      <Desktop><PortfolioSlider/></Desktop>
			<Mobile><PortfolioSliderMobile/></Mobile>
      
      {/* 찾아오시는 길 */}
      <Desktop><Location/></Desktop>
			<Mobile><LocationMobile /></Mobile>

    </RootWrapper>
  )
}

const RootWrapper = styled.div`
	min-height: 100vh;
	background-color: white;
`;