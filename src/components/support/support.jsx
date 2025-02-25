import React from "react";
import styled from "styled-components";
import SupportMatching from "./support_matching";
import SupportMethod from "./support_method";
import { Desktop, Mobile } from "../responsive";
import SupportMatchingMobile from "./mobile/support_matching_mobile";
import SupportMethodMobile from "./mobile/support_method_mobile";
import PartnerSlideMobile from "./mobile/partnerSlideMobile";
import PartnerSlide from "./mobile/partnerSlide";

export default function Support() {
  return (
    <RootWrapperNaN>
      
      {/* 연수생 구인처 수요 매칭 */}
      <Desktop><SupportMatching/></Desktop>
			<Mobile><SupportMatchingMobile/></Mobile>

			{/* absolute로 비워진 공간 채움 */}
			<Desktop><SquareBack1/></Desktop>

      {/* 연수생 취업지원 */}
      <Desktop><SupportMethod/></Desktop>
			<Mobile><SupportMethodMobile/></Mobile>

      {/* 협력기업 */}
      <Desktop><PartnerSlide/></Desktop>
			<Mobile><PartnerSlideMobile/></Mobile>

    </RootWrapperNaN>
  )
}

const RootWrapperNaN = styled.div`
	min-height: 100vh;
	background-color: white;
	position: relative;
`;

const SquareBack1 = styled.div`
	width: 100%;
	height: 500px;
	background-color: white;
`;