import React from "react";
import styled from "styled-components";
import backImage from "../../assets/images/backImage6_mobile.svg";
import ConsultingContents from "./consulting_contents";
import { Desktop, Mobile } from "../responsive";
import ConsultingContentsMobile from "./consulting_contents_mobile";

export default function Consulting() {
  return (
    <RootWrapper>
			{/* 타이틀 */}
			<Desktop>
				<TitleWrapper>
					<img src={backImage} alt="img" style={{ width: '34px', height: '34px'}} />
					<Title>
						수강신청
					</Title>
				</TitleWrapper>
			</Desktop>
			<Mobile>
				<TitleWrapper style={{ marginTop: '3rem'}}>
					<Title style={{ fontSize: '1.25rem'}}>
						수강신청
					</Title>
				</TitleWrapper>
			</Mobile>

			{/* 컨텐츠 */}
			<Desktop><ConsultingContents/></Desktop>
			<Mobile><ConsultingContentsMobile/></Mobile>

    </RootWrapper>
  )
}

const RootWrapper = styled.div`
	min-height: 100vh;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
`;

const TitleWrapper = styled.div`
	display: flex;
	margin-top: 5rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const Title = styled.span`
	color: rgb(59, 66, 79);
	font-size: 2rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	text-align: center;
`;