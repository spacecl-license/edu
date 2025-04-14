import React from 'react';
import styled from 'styled-components';
import location1 from '../../assets/images/map.png';
import location2 from '../../assets/images/woorim.svg';
import location3 from '../../assets/images/map2.png';
import locationBackground from '../../assets/images/locationBackground.svg';
import rectangle from '../../assets/images/rectangle.svg';

export default function LocationMobile() {
  return (
    <Wrapper>
      <Rectangle src={rectangle} />
      <TopTextWrap>
        <LocationTitle>찾아오시는 길</LocationTitle>
        <Loca>LOCATION</Loca>
      </TopTextWrap>

      <ImageWrap>
        <LocationImage1 src={location3} alt="location1" />
        <LocationIcon>
          {/* <LocationImage2 src={location2} alt="location2"/> */}
        </LocationIcon>
      </ImageWrap>

      <BottomTextWrap>
        <div>
          <Address>
            주소
            <br />
            <div style={{ visibility: 'hidden' }}>a</div>
          </Address>
          <Phone>전화</Phone>
          <Subway>지하철</Subway>
        </div>
        <div>
          <AddressText>
            서울특별시 금천구 가산동 60-26 <br /> 가산퍼블릭 제B동 2015호 2016호
          </AddressText>
          <PhoneNumber>02) 6958-8204</PhoneNumber>
          <SubwayText>
            1호선 또는 7호선 가산디지털단지역 <br />
            6번 출구 도보 5분
          </SubwayText>
        </div>
      </BottomTextWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  background-color: rgb(248, 249, 250);
  display: flex;
  flex-direction: column;
  background-image: url(${locationBackground}?${Date.now()});
`;

const TopTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.5rem;
  padding-top: 5.75rem;
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 2.5rem;
`;

const BottomTextWrap = styled.div`
  display: flex;
  gap: 2rem;
  padding-left: 2.5rem;
  padding-bottom: 5.75rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Loca = styled.span`
  color: rgb(86, 86, 86);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const AddressText = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const Address = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
`;

const Phone = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
`;

const Subway = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
`;

const PhoneNumber = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const SubwayText = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  text-align: left;
`;

const LocationTitle = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1.13rem;
  font-family: Pretendard, sans-serif;
  font-weight: 800;
  text-align: left;
`;

const LocationImage1 = styled.img`
  object-fit: cover;
`;

const LocationIcon = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
`;

const LocationImage2 = styled.img`
  object-fit: cover;
`;

const Rectangle = styled.img`
  width: 138px;
  height: 220px;
  position: absolute;
  right: 0;
  top: 12%;
`;
