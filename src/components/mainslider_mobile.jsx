import React, { useRef } from 'react';
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
import { SITE_COPY } from '../constants/siteCopy';

const MS = SITE_COPY.mainSlider;
const JP = MS.japanesePanel;

const SLIDE_SRC = {
  slide1,
  slide2,
  slide3,
};

export default function MainSliderMobile() {
  const slickRef = useRef(null);

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

  const slideCount = MS.slides.length;

  const settings = {
    infinite: slideCount > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: slideCount > 1,
  };

  const renderJapanesePanel = () => (
    <SlideTextJapanese>
      <JapaneseTitle>{JP.title}</JapaneseTitle>
      <JapaneseDivider />
      <div>
        {JP.bullets.map((line, i) => (
          <SlideTextJapaneseText key={i}>{line}</SlideTextJapaneseText>
        ))}
      </div>
    </SlideTextJapanese>
  );

  return (
    <Wrapper>
      <Slider {...settings} ref={slickRef}>
        {MS.slides.map((s) => {
          const imgSrc = SLIDE_SRC[s.image];
          if (!imgSrc) return null;
          return (
            <div key={s.id}>
              <SlideWrap>
                <SlideImg src={imgSrc} alt="" />
                <SlideText>
                  {s.kind === 'recruiting' ? (
                    <>
                      <BigText>{MS.recruiting.bigText}</BigText>
                      <SmallText>{MS.recruiting.smallText}</SmallText>
                      <span>{MS.mobileOnly.recruitingBadge}</span>
                    </>
                  ) : (
                    <>
                      <BigText>
                        {MS.trend.bigTextMobileLines[0]}
                        <br />
                        {MS.trend.bigTextMobileLines[1]}
                      </BigText>
                      <SmallText>
                        {MS.trend.smallLine1}
                        <br />
                        {MS.trend.smallLine2}
                      </SmallText>
                    </>
                  )}
                  <ButtonWrapper>
                    <Link to="/track">
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
                  {renderJapanesePanel()}
                </SlideText>
              </SlideWrap>
            </div>
          );
        })}
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
  font-size: 22px;
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
