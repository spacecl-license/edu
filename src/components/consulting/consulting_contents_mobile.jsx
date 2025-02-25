import React from 'react';
import styled from 'styled-components';
import kakao from '../../assets/images/kakao.svg';
import ConsultingFormMobile from './consultingForm_mobile';

export default function ConsultingContentsMobile() {
  return (
    <Group>
      {/* 입력 폼 */}
      <InputFrame>
        <ConsultingFormMobile />
      </InputFrame>

      {/* 상담하기 */}
      {/* <ImageFrame>
      	<Kakao src={kakao} />
			</ImageFrame> */}
    </Group>
  );
}

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 3rem;
`;

const InputFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`;

const ImageFrame = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

const Kakao = styled.img``;
