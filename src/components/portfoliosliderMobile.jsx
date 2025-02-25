import React, { useRef, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import blockchain1 from '../assets/images/blockchain1.svg';
import blockchain2 from '../assets/images/blockchain2.svg';
import nail1 from '../assets/images/nail1.svg';
import nail2 from '../assets/images/nail2.svg';
import nft1 from '../assets/images/nft1.svg';
import car1 from '../assets/images/car1.svg';
import car2 from '../assets/images/car2.svg';
import wallet1 from '../assets/images/wallet1.svg';
import wallet2 from '../assets/images/wallet2.svg';
import art1 from '../assets/images/art1.svg';
import art2 from '../assets/images/art2.svg';
import art3 from '../assets/images/art3.svg';
import market1 from '../assets/images/market1.svg';
import portfolioBackground from '../assets/images/portfolioBackground.svg';

export default function PortfolioSliderMobile () {
	const slickRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		focusOnSelect: true,
		autoplay: true,
		arrows: false,
		beforeChange: (current, next) => {
      setActiveSlide(next);
    },
	};
	return (
		<Wrapper>
			<TitleWrap>
				<PortfolioTitle>스페이스씨엘 포트폴리오</PortfolioTitle>
				<Portfolio>PORTFOLIO</Portfolio>
			</TitleWrap>
			<div>
			<Slider {...settings} ref={slickRef}>
				<div>
					<Card>
						<TextWrap>
							<Title>
								블록체인 거래소
							</Title>
							<Text>
								KDEX 블록체인 거래소 관련하여<br/>
								안드로이드, iOS APP 개발
							</Text>
						</TextWrap>
						<div>
							<Img src={blockchain1} />
							<Img src={blockchain2} />
						</div>
					</Card>
				</div>
				<div>
					<Card>
						<TextWrap>
							<Title>
								Nailpop App 개발
							</Title>
							<Text>
								앱으로 자기만의 네일 이미지 및<br/>
								디자인을 꾸며 하드웨어 프린트 기기와<br/>
								연동하여 인쇄 작업 App 개발
							</Text>
						</TextWrap>
						<div>
							<Img src={nail1} />
							<Img src={nail2} />
						</div>
					</Card>
				</div>
				<div>
					<Card style={{ gap: '20px'}}>
						<TextWrap>
							<Title>
								차량관리시스템
							</Title>
							<Text>
								일본 소프트뱅크사의 차량관리 시스템<br/>
								구축 및 유지보수 작업
							</Text>
						</TextWrap>
						<div>
							<Col>
								<Img src={car1} style={{ width: '250px', height: '120px'}} />
								<Img src={car2} style={{ width: '250px', height: '120px'}} />
							</Col>
						</div>
					</Card>
				</div>
				<div>
					<Card>
						<TextWrap>
							<Title>
								블록체인 지갑
							</Title>
							<Text>
								탈중화 블록체인 지갑 서비스 개발
							</Text>
						</TextWrap>
						<div>
							<Img src={wallet1} />
							<Img src={wallet2} />
						</div>
					</Card>
				</div>
				<div>
					<Card>
						<TextWrap>
							<Title>
								도쿄국립예술단 구축
							</Title>
							<Text>
								도쿄국립예술단의 전시예약, 결제등의<br/>
								업무를 위한 시스템 개발 진행
							</Text>
						</TextWrap>
						<div>
							<Col>
								<Img src={art1} style={{ width: '250px', height: '120px'}} />
								<Row style={{ justifyContent: 'center'}}>
									<Img src={art2} style={{ width: '100px', height: '120px'}} />
									<Img src={art3} style={{ width: '100px', height: '120px'}} />
								</Row>
							</Col>
						</div>
					</Card>
				</div>
				<div>
					<Card>
						<TextWrap>
							<Title>
								마켓플레이스 구축
							</Title>
							<Text>
								폴리곤 기반의 NFT 민팅 이벤트 페이지<br/>
								제작. 민팅은 에어드랍 또는 Matic을<br/>
								사용해 제너레이티브 아트 형태로 랜덤 생성
							</Text>
						</TextWrap>
						<div>
							<Img src={market1} style={{ width: '270px', height: '120px'}} />
						</div>
					</Card>
				</div>
				<div>
					<Card>
						<TextWrap>
							<Title>
								NFT 이벤트 페이지_케이포춘
							</Title>
							<Text>
								폴리곤 기반의 NFT 민팅 이벤트 페이지<br/>
								제작. 민팅은 에어드랍 또는 Matic을<br/>
								사용해 제너레이티브 아트 형태로 랜덤 생성
							</Text>
						</TextWrap>
						<div>
							<Img src={nft1} style={{ width: '270px', height: '120px'}} />
						</div>
					</Card>
				</div>
			</Slider>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 640px;
	background-image: url(${portfolioBackground}?${Date.now()});

	.slick-slide {
		display: flex;
		justify-content: center;
	}
`;

const Row = styled.div`
	display: flex;
	gap: 10px;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Title = styled.span`
	color: rgb(34, 34, 34);
	text-overflow: ellipsis;
	font-size: 1.25rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Text = styled.span`
	color: rgb(34, 34, 34);
	font-size: 0.95rem;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	line-height: 150%;
	text-align: left;
`;

const TitleWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 4rem;
	margin-bottom: 1.75rem;
	padding-top: 2.75rem;
`;

const PortfolioTitle = styled.span`
	color: #0A3177;
	text-overflow: ellipsis;
	font-size: 1.5rem;
	font-family: Pretendard, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Portfolio = styled.span`
	color: #0A3177;
	text-overflow: ellipsis;
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	text-align: left;
`;

const TextWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
`;

const Card = styled.div`
  width: 312px;
	height: 444px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px rgba(103, 111, 137, 0.1);
	backdrop-filter: blur(30px);
	display: flex;
	align-items: start;
	flex-direction: column;
	gap: 50px;
	padding: 30px 20px;

  > div {
    display: flex;
    gap: 25px;
  }
`;

const Img = styled.img`
	width: 119px;
	height: 235px;
`;