import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import company1 from '../../../assets/images/company1.svg';
import company2 from '../../../assets/images/company2.svg';
import company3 from '../../../assets/images/company3.svg';
import company4 from '../../../assets/images/company4.svg';
import company5 from '../../../assets/images/company5.svg';
import company6 from '../../../assets/images/company6.svg';
import company7 from '../../../assets/images/company7.svg';
import company8 from '../../../assets/images/company8.svg';
import company9 from '../../../assets/images/company9.svg';
import company10 from '../../../assets/images/company10.svg';
import company11 from '../../../assets/images/company11.svg';
import company12 from '../../../assets/images/company12.svg';
import company13 from '../../../assets/images/company13.svg';
import company14 from '../../../assets/images/company14.svg';
import employment from '../../../assets/images/employment.png';

export default function PartnerSlide() {
  const slickRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 5000,
    autoplaySpeed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: 'linear',
    centerPadding: '10px',
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Company>협력기업</Company>
        <Partnership>PARTNERSHIP</Partnership>
      </TitleWrapper>
      <Image src={employment} alt="employment" />
      {/* <Slider {...settings} ref={slickRef}>
				<div><Image src={company1} alt="company1"/></div>
				<div><Image src={company2} alt="company2"/></div>
				<div><Image src={company3} alt="company3"/></div>
				<div><Image src={company4} alt="company4"/></div>
				<div><Image src={company5} alt="company5"/></div>
				<div><Image src={company6} alt="company6"/></div>
				<div><Image src={company7} alt="company7"/></div>
				<div><Image src={company8} alt="compan8"/></div>
				<div><Image src={company9} alt="company9"/></div>
				<div><Image src={company10} alt="company10"/></div>
				<div><Image src={company11} alt="company11"/></div>
				<div><Image src={company12} alt="company12"/></div>
				<div><Image src={company13} alt="company13"/></div>
				<div><Image src={company14} alt="company14"/></div>
			</Slider> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 4rem;
  padding-bottom: 5rem;
`;

const Image = styled.img`
  object-fit: fit;
`;

const Company = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 2rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
`;

const Partnership = styled.span`
  color: rgb(210, 215, 225);
  text-overflow: ellipsis;
  font-size: 1.5rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;
