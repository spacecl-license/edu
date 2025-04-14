import React, { useRef, useCallback, useState } from 'react';
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
import slideLeftIcon from '../assets/images/slide_left_icon.svg';
import slideRightIcon from '../assets/images/slide_right_icon.svg';
import { Link } from 'react-router-dom';

export default function MainSlider() {
  const slickRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

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
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };
  return (
    <Wrapper>
      <SlideNumber>
        <span>{activeSlide + 1} </span> / 3
      </SlideNumber>
      <Slider {...settings} ref={slickRef}>
        <div>
          <SlideWrap>
            <SlideImg src={slide1} />=
            <SlideText>
              <SlideTextFirst>
                <BigText>일본취업 연수과정 연수생 모집 중</BigText>
                <SmallText>
                  2025년 K-Move 일본취업 IT·SW 전문가 양성과정(트랙Ⅰ)
                  <br />
                  2025년 K-Move 일본취업 클라우드 웹개발자 과정(모집마감)
                </SmallText>
                <ButtonWrapper>
                  <Link to="/track">
                    <MainSliderButton src={mainSlideButton1} />
                  </Link>
                  <MainSliderButton src={mainSlideButton2} onClick={kakao} />
                  <MainSliderButton src={mainSlideButton3} />
                </ButtonWrapper>
              </SlideTextFirst>
              <SlideTextJapanese>
                <JapaneseTitle>K-Move스쿨 일본취업반</JapaneseTitle>
                <JapaneseDivider />
                <div>
                  <SlideTextJapaneseText>
                    · IT Programming+일본어
                  </SlideTextJapaneseText>
                  <SlideTextJapaneseText>
                    · 채용약정기업 추천매칭
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
              <SlideTextFirst>
                <BigText>일본취업 연수과정 연수생 모집 중</BigText>
                <SmallText>
                  2025년 K-Move 일본취업 IT·SW 전문가 양성과정(트랙Ⅰ)
                  <br />
                  2025년 K-Move 일본취업 클라우드 웹개발자 과정(모집마감)
                </SmallText>
                <ButtonWrapper>
                  <Link to="/track">
                    <MainSliderButton src={mainSlideButton1} />
                  </Link>
                  <MainSliderButton src={mainSlideButton2} onClick={kakao} />
                  <MainSliderButton src={mainSlideButton3} />
                </ButtonWrapper>
              </SlideTextFirst>
              <SlideTextJapanese>
                <JapaneseTitle>K-Move스쿨 일본취업반</JapaneseTitle>
                <JapaneseDivider />
                <div>
                  <SlideTextJapaneseText>
                    · IT Programming+일본어
                  </SlideTextJapaneseText>
                  <SlideTextJapaneseText>
                    · 채용약정기업 추천매칭
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
              <SlideTextFirst>
                <BigText>
                  국내, 일본 최신 트렌드에 맞춘 IT 핵심 기술을 반영한 연수과정
                </BigText>
                <SmallText>
                  기업형 글로벌 아카데미 스페이스씨엘
                  <br />
                  맞춤형 교육으로 글로벌 취업의 첫걸음!
                </SmallText>
                <ButtonWrapper>
                  <Link to="/track">
                    <MainSliderButton src={mainSlideButton1} />
                  </Link>
                  <MainSliderButton src={mainSlideButton2} onClick={kakao} />
                  <MainSliderButton src={mainSlideButton3} />
                </ButtonWrapper>
              </SlideTextFirst>
              <SlideTextJapanese>
                <JapaneseTitle>K-Move스쿨 일본취업반</JapaneseTitle>
                <JapaneseDivider />
                <div>
                  <SlideTextJapaneseText>
                    · IT Programming+일본어
                  </SlideTextJapaneseText>
                  <SlideTextJapaneseText>
                    · 채용약정기업 추천매칭
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
      <div>
        <div onClick={previous}>
          <SlideLeftIcon src={slideLeftIcon} alt={'pre-arrow'} />
        </div>
        <div onClick={next}>
          <SlideRightIcon src={slideRightIcon} alt={'next-arrow'} />
        </div>
      </div>
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
  width: 100%;
  position: absolute;
  top: 8rem;
  padding: 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SlideTextFirst = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SlideTextJapanese = styled.div`
  width: 404px;
  position: relative;
  padding: 40px;
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
  font-size: 32px;
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
  font-size: 24px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: white;
  line-height: 36px;
`;

const BigText = styled.div`
  font-size: 2rem;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  color: white;
  text-align: left;
`;

const SmallText = styled.div`
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  color: white;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const MainSliderButton = styled.img``;

const SlideImg = styled.img`
  width: 100%;
  height: 677px;
  object-fit: cover;
`;

const SlideLeftIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  position: absolute;
  left: 77%;
  top: 82%;
  cursor: pointer;
`;

const SlideRightIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  position: absolute;
  left: 80%;
  top: 82%;
  cursor: pointer;
`;

const SlideNumber = styled.div`
  width: 72px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: center;
  line-height: 42px;
  border-radius: 20px;
  position: absolute;
  left: 71%;
  top: 82%;
  z-index: 1;

  > span {
    color: rgb(37, 105, 227);
  }
`;

const SlideTextSmall = styled.div`
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 300;
  line-height: 30px;
  padding-left: 13px;
  padding-bottom: 10px;
  margin-top: -5px;
`;
