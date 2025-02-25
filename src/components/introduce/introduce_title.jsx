import React from "react";
import styled from "styled-components";
import intro_logo from "../../assets/images/introduce_logo.svg";
import intro_logo_radial from "../../assets/images/introduce_logo_radial.svg";
import intro_arrow from "../../assets/images/intro_arrow.svg";
import introduceTitleIcon1 from "../../assets/images/introduceTitleIcon1.svg";
import introduceTitleIcon2 from "../../assets/images/introduceTitleIcon2.svg";
import introduceTitleIcon3 from "../../assets/images/introduceTitleIcon3.svg";
import introduceTitleIcon4 from "../../assets/images/introduceTitleIcon4.svg";
import introduceArrowBox1 from "../../assets/images/introduce_arrow_box1.svg";
import introduceArrowBox2 from "../../assets/images/introduce_arrow_box2.svg";
import introduceArrowBox3 from "../../assets/images/introduce_arrow_box3.svg";

export default function IntroduceTitle() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          차별화된 <span style={{ color: '#2674FF'}}>IT 기술 글로벌 인재 양성</span>을 통한 성과 창출
        </Title>
        <Line/>
      </TitleWrapper>

      <Wrap>
        {/* 스페이스씨엘 로고 주변 동그라미 */}
        <IntroLogo src={intro_logo} />
        <IntroLogoRadial src={intro_logo_radial} />

        <Box1>
          <ThingTitle>
            <Icon src={introduceTitleIcon1} />
          </ThingTitle>
          <div>
            <ThingLeftTitle>수요</ThingLeftTitle>
            <ThingLeft>
              일본 산업계 인력 수급 매칭 기업<br/>
              및 국가수요기술 분석
            </ThingLeft>
          </div>
        </Box1>

        <Box2>
          <div>
            <ThingLeftTitle>공급</ThingLeftTitle>
            <ThingRight>
              일본 기업 핵심기술 교육<br/>
              청년층 우수일자리 취업
            </ThingRight>
          </div>
          <ThingTitle>
            <Icon src={introduceTitleIcon2} />
          </ThingTitle>
        </Box2>
      
        <Box3>
          <ThingTitle>
            <Icon src={introduceTitleIcon3} />
          </ThingTitle>
          <div>
            <ThingLeftTitle>성장</ThingLeftTitle>
            <ThingLeft>
              글로벌 인재 경쟁력 강화<br/>
              ITㆍSW 산업생태계 활성화
            </ThingLeft>
          </div>
        </Box3>

        <Box4>
          <div>
            <ThingLeftTitle>기술</ThingLeftTitle>
            <ThingRight>
              IT 원천기술 성과 확산<br/>
              디지털 선도기술 개발
            </ThingRight>
          </div>
          <ThingTitle>
            <Icon src={introduceTitleIcon4} />
          </ThingTitle>
        </Box4>
      </Wrap>

      <BottomWrap>
        {/* 큰화살표 이미지 */}
        <BigArrow src={intro_arrow} alt="image of BigArrow"/>

        <Frame194>
          <Group1>
            <TitleBox>
              교육사업 역량
            </TitleBox>
            <Material>
              시스템 개발 및 플랫폼 구축 기업<br/>
              다양한 IT 서비스, R&D 수행경험<br/>
              일본 현지 자사 네트워크 보유<br/>
              (주)아시아경제 / KOSMO 컨소시엄
            </Material>
          </Group1>
          <Group2>
            <TitleBox>
              일본취업 특화교육
            </TitleBox>
            <Material>
              일본 산업계 IT 특화기술 교육<br/>
              IT/일본어 전문인력 투입<br/>
              일본 취업 직무특화 기술코칭<br/>
              AWS, 스페이스 Data-Set 지원
            </Material>
          </Group2>
          <Group3>
            <TitleBox>
              성과확산
            </TitleBox>
            <Material>
              차별화된 프로젝트 산출물<br/>
              글로벌 전문인재 커리어 육성<br/>
              클라우드 / Web 개발 취업확대<br/>
              협약, 발굴기업 네트워크 확대
            </Material>
          </Group3>
        </Frame194>
      </BottomWrap>
    </Wrapper>
  )
}

const Icon = styled.img``;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;

const Wrap = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.span`
	font-size: 32px;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	line-height: 150%;
	text-align: center;
`;

const Line = styled.div`
	width: 59px;
	height: 0px;
	border-top: solid 1px rgb(60, 60, 60);
`;

const IntroLogo = styled.img`
  z-index: 1;
`;

const IntroLogoRadial = styled.img`
  position: absolute;
`;

const Box2 = styled.div`
	display: flex;
	align-items: center;
  justify-content: space-between;
	gap: 24px;
	width: 430px;
	height: 140px;
  border-radius: 80px;
	position: absolute;
  background: linear-gradient(90deg, #3F1D89, #4654FF);
	left: 720px;
	top: 0px;
  padding: 0 20px 0 73px;
  z-index: 2;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const ThingTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
	height: 108px;
	box-shadow: 0px 0px 30px 0px rgba(82, 101, 149, 0.1);
	background-color: white;
	border-radius: 108px / 108px;
`;

const ThingLeftTitle = styled.span`
  color: white;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
`;

const ThingLeft = styled.span`
	color: white;
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	line-height: 150%;
	text-align: left;
`;

const Box1 = styled.div`
	display: flex;
	justify-content: start;
  align-items: center;
	gap: 24px;
	width: 430px;
	height: 140px;
  border-radius: 80px;
  background: linear-gradient(90deg, #4654FF, #3F1D89);
  position: absolute;
	left: 50px;
	top: 0px;
  padding-left: 20px;
  z-index: 2;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const ThingRight = styled.span`
	color: white;
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	line-height: 150%;
	text-align: left;
`;

const Box3 = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
	width: 430px;
	height: 140px;
  border-radius: 80px;
	position: absolute;
  background: linear-gradient(90deg, #4654FF, #3F1D89);
	left: 50px;
	top: 220px;
  padding-left: 20px;
  z-index: 2;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Box4 = styled.div`
	display: flex;
	align-items: center;
  justify-content: space-between;
	gap: 24px;
	width: 430px;
	height: 140px;
  border-radius: 80px;
	position: absolute;
  background: linear-gradient(90deg, #3F1D89, #4654FF);
	left: 720px;
	top: 220px;
  padding: 0 20px 0 73px;
  z-index: 2;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const BigArrow = styled.img`
  width: 546px;
  hegith: 142px;
	object-fit: cover;
`;

const Frame194 = styled.div`
	display: flex;
	gap: 24px;
	width: 1200px;
	height: 259px;
	box-sizing: border-box;
`;

const Group1 = styled.div`
	width: 383px;
	height: 190px;
	box-shadow: 0px 4px 30px 0px rgba(82, 101, 149, 0.1);
	background-color: white;
	border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-image: url(${introduceArrowBox1}?${Date.now()});
`;

const Group2 = styled.div`
	width: 383px;
	height: 190px;
	box-shadow: 0px 4px 30px 0px rgba(82, 101, 149, 0.1);
	background-color: white;
	border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-image: url(${introduceArrowBox2}?${Date.now()});
`;

const Group3 = styled.div`
	width: 383px;
	height: 190px;
	box-shadow: 0px 4px 30px 0px rgba(82, 101, 149, 0.1);
	background-color: white;
	border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-image: url(${introduceArrowBox3}?${Date.now()});
`;

const Material = styled.span`
	color: white;
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	text-align: center;
`;

const TitleBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	width: 339px;
	height: 38px;
	background-color: rgb(255, 255, 255, 0.2);
	padding: 8px 112px;
  color: white;
	font-size: 1.25rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	text-align: center;
  white-space: nowrap;
`;