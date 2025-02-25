import React from "react";
import styled from "styled-components";
import kakao from "../../assets/images/kakao.svg";
import InquiryForm from "./inquiryForm";

export default function InquiryContents() {
  return (
    <Group>
      {/* 입력 폼 */}
      <InputFrame>
	  	<InquiryForm/>
      </InputFrame>

      {/* 상담하기 */}
      <Kakao src={kakao} />
    </Group>
  )
}

const Kakao = styled.img``;

const Group = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	gap: 3rem;
`;

const InputFrame = styled.div`
	width: 792px;
	height: 803px;
	background-color: rgba(255, 255, 255, 0.4);
	border-radius: 20px;
	backdrop-filter: blur(30px);
	padding: 40px 94px 40px 94px;
	border: 1px solid rgba(0, 0, 0, 0.1);
`;
