import React from 'react';
import styled from 'styled-components';
import location from '../../assets/images/map_real.png';
import locationBackground from '../../assets/images/locationBackground.svg';
import rectangle from '../../assets/images/rectangle.svg';
import { SITE_COPY } from '../../constants/siteCopy';

const H = SITE_COPY.hq;
const HL = H.labels;

export default function Track1LocationMobile() {
  return (
    <Wrapper>
      <Rectangle src={rectangle} />
      <TopTextWrap>
        <LocationTitle>{H.pageTitle}</LocationTitle>
        <Loca>{H.subtitles.en}</Loca>
      </TopTextWrap>

      <ImageWrap>
        <LocationImage1 src={location} alt="location" />
      </ImageWrap>

      <BottomTextWrap>
        <div>
          <Address>
            {HL.address}
            <br />
            <div style={{ visibility: 'hidden' }}>a</div>
          </Address>
          <Phone>{HL.phone}</Phone>
          <Subway>{HL.subway}</Subway>
        </div>
        <div>
          <AddressText>{H.mobile.address}</AddressText>
          <PhoneNumber>{H.mobile.phone}</PhoneNumber>
          <SubwayText>{H.mobile.subway}</SubwayText>
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
  gap: 1.75rem;
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
  margin-top: 24px;
`;

const Subway = styled.span`
  color: rgb(34, 34, 34);
  text-overflow: ellipsis;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
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
  z-index: 1;
`;

const LocationImage1 = styled.img`
  object-fit: cover;
  height: 240px;
`;

const LocationIcon = styled.div`
  position: absolute;
  top: 57%;
  left: 35%;
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
