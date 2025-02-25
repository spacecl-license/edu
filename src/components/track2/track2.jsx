import React from 'react';
import styled from 'styled-components';
import special from '../../assets/images/special.jpg';
import Track2Card from '../track2/track2Card';
import Track2Intro from '../track2/track2Intro';
import Track2Time from '../track2/track2Time';
import Track2Program from '../track2/track2Program';
import Track2Location from '../track2/track2_location';
import { Desktop, Mobile } from '../responsive';
import Track2CardMobile from '../track2/track2Card_mobile';
import Track2IntroMobile from '../track2/track2Intro_mobile';
import Track2TimeMobile from '../track2/track2Time_mobile';
import Track2ProgramMobile from '../track2/track2Program_mobile';
import SpecialLineup from '../track/special_lineup';
import Track2LocationMobile from '../track2/track2_location_mobile';
export default function Track2() {
  return (
    <RootWrapper>
      {/* 상단 버튼, 카드 */}
      <Desktop>
        <Track2Card />
      </Desktop>
      <Mobile>
        <Track2CardMobile />
      </Mobile>

      <Mobile>
        <SpecialTextMobile>연수생 특전</SpecialTextMobile>
        <SpecialLineup />
      </Mobile>

      {/* 교육과정 소개 */}
      <Desktop>
        <Track2Intro />
      </Desktop>
      <Mobile>
        <Track2IntroMobile />
      </Mobile>

      {/* 할당 시간 */}
      <Desktop>
        <Track2Time />
      </Desktop>
      <Mobile>
        <Track2TimeMobile />
      </Mobile>

      {/* 프로그램 특징 */}
      <Desktop>
        <Track2Program />
      </Desktop>
      <Mobile>
        <Track2ProgramMobile />
      </Mobile>

      {/* absolute로 비워진 공간 채움 */}
      <Desktop>
        <SquareBack2 />
      </Desktop>

      {/* 연수생 특전 */}
      <Desktop>
        <SpecialText>연수생 특전</SpecialText>
        <SpecialWrap>
          <SpecialImage src={special} />
        </SpecialWrap>
      </Desktop>

      {/* 찾아오시는 길 */}
      <Desktop>
        <Track2Location />
      </Desktop>
      <Mobile>
        <Track2LocationMobile />
      </Mobile>
    </RootWrapper>
  );
}

const SquareBack2 = styled.div`
  width: 100%;
  height: 765px;
  background-color: white;
`;

const SpecialWrap = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10rem;
  margin-top: 5rem;
`;
const SpecialImage = styled.img`
  width: 1200px;
  height: 904px;
`;

const SpecialText = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(118, 118, 118);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
`;

const SpecialTextMobile = styled.div`
  width: 100%;
  height: 62px;
  background-color: rgb(118, 118, 118);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  margin-top: 50px;
`;

const RootWrapper = styled.div`
  width: 100%;
  position: relative;
`;
