import React from 'react';
import styled from 'styled-components';
import location1 from '../../assets/images/location1.svg';
import location2 from '../../assets/images/location2.svg';
import location3 from '../../assets/images/map2.png';
import locationBackground from '../../assets/images/locationBackground.svg';
import map from '../../assets/images/map.png';

export default function Location() {
  return (
    <Wrapper>
      <TopTextWrap>
        <LocationTitle>찾아오시는 길</LocationTitle>
        <Loca>LOCATION</Loca>
      </TopTextWrap>

      <ImageWrap>
        <LocationImage1 src={location3} alt="map" />
        <LocationIcon>
          {/* <LocationImage2 src={location2} alt="location2"/> */}
        </LocationIcon>
        {/* 구글맵 임베드 */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3166.7410872363866!2d126.88575077629334!3d37.46683462983833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1712895628934!5m2!1sko!2skr" width="1200" height="520" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </ImageWrap>

      <BottomTextWrap>
        <div>
          <Address>주소</Address>
          <Phone>전화</Phone>
          <Subway>지하철</Subway>
        </div>
        <div>
          <AddressText>
            서울특별시 금천구 가산동 60-26 가산퍼블릭 제B동 2015호 2016호
            (주)스페이스씨엘
          </AddressText>
          <PhoneNumber>02) 6958-8204</PhoneNumber>
          <SubwayText>
            1호선 또는 7호선 가산디지털단지역 6번 출구 도보 5분
          </SubwayText>
        </div>
      </BottomTextWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 1080px;
  background-color: rgb(248, 249, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-image: url(${locationBackground}?${Date.now()});
`;

const TopTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5.75rem;
  width: 1200px;
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 1200px;
`;

const BottomTextWrap = styled.div`
  display: flex;
  gap: 9rem;
  padding-bottom: 5.75rem;
  width: 1200px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Loca = styled.span`
  color: rgb(86, 86, 86);
  text-overflow: ellipsis;
  font-size: 32px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const AddressText = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const Address = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
`;

const Phone = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
`;

const Subway = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
`;

const PhoneNumber = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const SubwayText = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const LocationTitle = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 48px;
  font-family: Pretendard, sans-serif;
  font-weight: 800;
  text-align: left;
`;

const LocationImage1 = styled.img`
  object-fit: cover;
`;

const LocationIcon = styled.div`
  width: 188px;
  height: 47px;
  position: absolute;
  top: 35%;
  left: 43%;
`;

const LocationImage2 = styled.img`
  width: 188px;
  height: 47px;
  object-fit: cover;
`;
