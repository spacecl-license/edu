import React from 'react';
import styled from 'styled-components';
import location3 from '../../assets/images/map_real.png';
import locationBackground from '../../assets/images/locationBackground.svg';
import { SITE_COPY } from '../../constants/siteCopy';

const H = SITE_COPY.hq;
const HL = H.labels;

export default function Track1Location() {
  return (
    <Wrapper>
      <TopTextWrap>
        <LocationTitle>{H.pageTitle}</LocationTitle>
        <Loca>{H.subtitles.en}</Loca>
      </TopTextWrap>

      <ImageWrap>
        <LocationImage1 src={location3} alt="location3" />
      </ImageWrap>

      <BottomTextWrap>
        <div>
          <Address>{HL.address}</Address>
          <Phone>{HL.phone}</Phone>
          <Subway>{HL.subway}</Subway>
        </div>
        <div>
          <AddressText>{H.desktop.address}</AddressText>
          <PhoneNumber>{H.desktop.phone}</PhoneNumber>
          <SubwayText>{H.desktop.subway}</SubwayText>
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
  width: 1200px;
`;

const LocationIcon = styled.div`
  width: 228px;
  height: 47px;
  position: absolute;
  top: 55%;
  left: 28%;
`;

const LocationImage2 = styled.img`
  width: 228px;
  height: 47px;
  object-fit: cover;
`;
