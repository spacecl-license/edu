import React from 'react';
import styled from 'styled-components';
import special from '../../assets/images/special.png';
import Track1Card from './track1Card';
import Track1Intro from './track1Intro';
import Track1Time from './track1Time';
import Track1Program from './track1Program';
import Track1Location from './track1_location';
import { Desktop, Mobile } from '../responsive';
import Track1CardMobile from './track1Card_mobile';
import Track1IntroMobile from './track1Intro_mobile';
import Track1TimeMobile from './track1Time_mobile';
import Track1ProgramMobile from './track1Program_mobile';
import SpecialLineup from './special_lineup';
import Track1LocationMobile from './track1_location_mobile';

export default function Track1() {
  return (
    <RootWrapper>
      {/* 상단 버튼, 카드 */}
      <Desktop>
        <Track1Card />
      </Desktop>
      <Mobile>
        <Track1CardMobile />
      </Mobile>

      {/* 교육과정 소개 */}
      {/* <Desktop>
        <Track1Intro />
      </Desktop>
      <Mobile>
        <Track1IntroMobile />
      </Mobile> */}

      {/* 할당 시간 */}
      <Desktop>
        <Track1Time />
      </Desktop>
      <Mobile>
        <Track1TimeMobile />
      </Mobile>

      {/* 프로그램 특징 */}
      <Desktop>
        <Track1Program />
      </Desktop>
      <Mobile>
        <Track1ProgramMobile />
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
      <Mobile>
        <SpecialTextMobile>연수생 특전</SpecialTextMobile>
        <SpecialLineup />
      </Mobile>

      {/* 찾아오시는 길 */}
      <Desktop>
        <Track1Location />
      </Desktop>
      <Mobile>
        <Track1LocationMobile />
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
  font-size: 32px;
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
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  margin-top: 50px;
`;

const RootWrapper = styled.div`
  width: 100%;
  position: relative;
`;
