import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.svg';
import mainSlideButton1 from '../assets/images/mainSlideButton1.svg';
import mainSlideButton2 from '../assets/images/mainSlideButton2.svg';
import mainSlideButton3 from '../assets/images/mainSlideButton3.svg';
import { Link } from 'react-router-dom';

export default function MainSliderMobile() {
  const slickRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const kakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('cc070c6c13d3847a59320562ae6d84bb');
      }
    }

    window.Kakao.Channel.chat({
      channelPublicId: '_xnYuNG',
    });
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };
  return (
    <Wrapper>
      <Slider {...settings} ref={slickRef}>
        <div>
          <SlideWrap>
            <SlideImg src={slide1} />
            <SlideText>
              <BigText>일본어 무료 클래스 오픈</BigText>
              <SmallText>2025년 K-Move 일본취업연수과정 연계</SmallText>
              <span>연수생 모집중</span>
              <ButtonWrapper>
                <Link to="/track1">
                  <MainSliderButton src={mainSlideButton1} />
                </Link>
                <MainSliderButton
                  src={mainSlideButton2}
                  style={{ width: '6.5rem' }}
                  onClick={kakao}
                />
                <MainSliderButton
                  src={mainSlideButton3}
                  onClick={() => (document.location.href = 'tel:0269588204')}
                />
              </ButtonWrapper>
              <SlideTextJapanese>
                <JapaneseTitle>일본어사전클래스 개설</JapaneseTitle>
                <JapaneseDivider />
                <div>
                  <SlideTextJapaneseText>
                    · 일본어 초중급 CLASS 3월 개강
                    <SlideTextSmall>(주3회 2주 클래스)</SlideTextSmall>
                  </SlideTextJapaneseText>
                  <SlideTextJapaneseText>
                    · 전액 무료 / 교육생 모집중
                  </SlideTextJapaneseText>
                </div>
              </SlideTextJapanese>
            </SlideText>
          </SlideWrap>
        </div>
        <div>
          <SlideWrap>
            <SlideImg src={slide2} />
            <SlideText>
              <BigText>일본어 무료 클래스 오픈</BigText>
              <SmallText>
                2025년 K-Move 일본취업연수과정 연계 IT•SW•ICT
              </SmallText>
              <span>연수생 모집중</span>
              <ButtonWrapper>
                <Link to="/track1">
                  <MainSliderButton src={mainSlideButton1} />
                </Link>
                <MainSliderButton
                  src={mainSlideButton2}
                  style={{ width: '6.5rem' }}
                  onClick={kakao}
                />
                <MainSliderButton
                  src={mainSlideButton3}
                  onClick={() => (document.location.href = 'tel:0269588204')}
                />
              </ButtonWrapper>
              <SlideTextJapanese>
                <JapaneseTitle>일본어사전클래스 개설</JapaneseTitle>
                <JapaneseDivider />
                <div>
                  <SlideTextJapaneseText>
                    · 일본어 초중급 CLASS 3월 개강
                    <SlideTextSmall>(주3회 2주 클래스)</SlideTextSmall>
                  </SlideTextJapaneseText>
                  <SlideTextJapaneseText>
                    · 전액 무료 / 교육생 모집중
                  </SlideTextJapaneseText>
                </div>
              </SlideTextJapanese>
            </SlideText>
          </SlideWrap>
        </div>
        <div>
          <SlideWrap>
            <SlideImg src={slide3} />
            <SlideText>
              <BigText>
                국내외 최신 트렌드에 맞춘
                <br />
                IT 핵심기술을 반영
              </BigText>
              <SmallText>
                기업형 글로벌 아카데미 스페이스씨엘
                <br />
                맞춤형 교육으로 글로벌 취업의 첫걸음!
              </SmallText>
              <ButtonWrapper>
                <Link to="/track1">
                  <MainSliderButton src={mainSlideButton1} />
                </Link>
                <MainSliderButton
                  src={mainSlideButton2}
                  style={{ width: '6.5rem' }}
                  onClick={kakao}
                />
                <MainSliderButton
                  src={mainSlideButton3}
                  onClick={() => (document.location.href = 'tel:0269588204')}
                />
              </ButtonWrapper>
              <SlideTextJapanese>
                <JapaneseTitle>일본어사전클래스 개설</JapaneseTitle>
                <JapaneseDivider />
                <div>
                  <SlideTextJapaneseText>
                    · 일본어 초중급 CLASS 3월 개강
                    <SlideTextSmall>(주3회 2주 클래스)</SlideTextSmall>
                  </SlideTextJapaneseText>
                  <SlideTextJapaneseText>
                    · 전액 무료 / 교육생 모집중
                  </SlideTextJapaneseText>
                </div>
              </SlideTextJapanese>
            </SlideText>
          </SlideWrap>
        </div>
      </Slider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SlideWrap = styled.div`
  width: 100%;
  height: 671px;
  position: relative;
`;

const SlideText = styled.div`
  width: 370px;
  position: absolute;
  top: 8rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  > span {
    font-weight: 700;
    color: white;
  }
`;

const BigText = styled.div`
  font-size: 1.38rem;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  color: white;
  text-align: left;
`;

const SmallText = styled.div`
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  color: ${(props) => (props.activeSlide === 0 ? 'rgb(34, 34, 34)' : 'white')};
  text-align: left;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MainSliderButton = styled.img`
  width: 5rem;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 677px;
  object-fit: cover;
`;

const SlideTextJapanese = styled.div`
  margin-top: 20px;
  width: 300px;
  position: relative;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const JapaneseTitle = styled.div`
  font-size: 24px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  color: #a7e3f9;
  line-height: 40.57px;
`;

const JapaneseDivider = styled.div`
  width: 100%;
  height: 1px;
  /* background-color: #ffffff; */
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

const SlideTextJapaneseText = styled.div`
  font-size: 14px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: white;
`;

const SlideTextSmall = styled.div`
  font-size: 12px;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
  line-height: 30px;
  padding-left: 8px;
  padding-bottom: 10px;
  margin-top: -5px;
`;
