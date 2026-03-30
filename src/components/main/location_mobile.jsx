import React from 'react';
import styled from 'styled-components';
import location3 from '../../assets/images/map2.png';
import locationBackground from '../../assets/images/locationBackground.svg';
import rectangle from '../../assets/images/rectangle.svg';
import { SITE_COPY } from '../../constants/siteCopy';

const D = SITE_COPY.directions;
const DL = D.labels;

export default function LocationMobile() {
  return (
    <Wrapper>
      <Rectangle src={rectangle} />
      <TopTextWrap>
        <LocationTitle>{D.title}</LocationTitle>
        <Loca>{D.subtitle}</Loca>
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
            {DL.address}
            <br />
            <div style={{ visibility: 'hidden' }}>a</div>
          </Address>
          <Phone>{DL.phone}</Phone>
          <Subway>{DL.subway}</Subway>
        </div>
        <div>
          <AddressText>{D.mobile.address}</AddressText>
          <PhoneNumber>{D.mobile.phone}</PhoneNumber>
          <SubwayText>{D.mobile.subway}</SubwayText>
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
  rounded: 10px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
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
