import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import company1 from '../../../assets/images/company/Frame1370.png';
import company2 from '../../../assets/images/company/Frame1371.png';
import company3 from '../../../assets/images/company/Frame1372.jpg';
import company4 from '../../../assets/images/company/Frame1373.png';
import company5 from '../../../assets/images/company/Frame1374.png';
import company6 from '../../../assets/images/company/Frame1375.png';
import company7 from '../../../assets/images/company/Frame1376.png';
import company8 from '../../../assets/images/company/Frame1377.png';
import company9 from '../../../assets/images/company/Frame1378.png';
import company10 from '../../../assets/images/company/Frame1379.png';
import company11 from '../../../assets/images/company/Frame1380.png';
import company12 from '../../../assets/images/company/Frame1381.png';
import company13 from '../../../assets/images/company/Frame1382.png';
import company14 from '../../../assets/images/company/Frame1383.png';
import company15 from '../../../assets/images/company/Frame1384.png';
import company16 from '../../../assets/images/company/Frame1385.png';
import company17 from '../../../assets/images/company/Frame1386.png';
import company18 from '../../../assets/images/company/Frame1387.png';
import company19 from '../../../assets/images/company/Frame1388.png';
import company20 from '../../../assets/images/company/Frame1389.png';
import company21 from '../../../assets/images/company/Frame1390.png';
import company22 from '../../../assets/images/company/Frame1391.png';
import company23 from '../../../assets/images/company/Frame1392.png';

export default function PartnerSlideMobile() {
  const slickRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 2000,
    autoplaySpeed: 0,
    slidesToShow: 3,
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
      <Slider {...settings} ref={slickRef}>
        {[
          company1,
          company2,
          company3,
          company4,
          company5,
          company6,
          company7,
          company8,
          company9,
          company10,
          company11,
          company12,
          company13,
          company14,
          company15,
          company16,
          company17,
          company18,
          company19,
          company20,
          company21,
          company22,
          company23,
        ].map((company, index) => (
          <SlideItem key={index}>
            <Image src={company} alt={`company${index + 1}`} />
          </SlideItem>
        ))}
      </Slider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 3rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 4rem;
  padding-bottom: 3rem;
`;

const SlideItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  width: 150px;
  height: 80px;
  object-fit: contain;
`;

const Company = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1.25rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
`;

const Partnership = styled.span`
  color: rgb(210, 215, 225);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;
