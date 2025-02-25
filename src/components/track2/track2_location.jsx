
import React from "react";
import styled from "styled-components";
import location5 from "../../assets/images/location5.svg";
import location6 from "../../assets/images/location6.svg";
import locationBackground from "../../assets/images/locationBackground.svg";

export default function Track2Location() {
  return (
    <Wrapper>
      <TopTextWrap>
        <LocationTitle>
          (충무로점) 아시아경제 교육센터 안내
        </LocationTitle>
        <Loca>
          LOCATION
        </Loca>
      </TopTextWrap>

      <ImageWrap>
        <LocationImage1 src={location5} alt="location5"/>
        <LocationIcon>
          <LocationImage2 src={location6} alt="location6"/>
        </LocationIcon>
      </ImageWrap>

      <BottomTextWrap>
        <div>
          <Address>
            주소
          </Address>
          <Phone>
            전화
          </Phone>
          <Subway>
            지하철
          </Subway>
        </div>
        <div>
          <AddressText>
            서울시 중구 퇴계로 166 흥국빌딩 아시아경제 교육센터 2층
          </AddressText>
          <PhoneNumber>
            02) 6958-8204
          </PhoneNumber>
          <SubwayText>
            3호선 또는 4호선 충무로역 4번 출구 도보 5분
          </SubwayText>
        </div>
      </BottomTextWrap>
    </Wrapper>
  )
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
`;

const LocationIcon = styled.div`
  position: absolute;
  top: 38%;
  left: 55%;
`;

const LocationImage2 = styled.img`
	object-fit: cover;
`;