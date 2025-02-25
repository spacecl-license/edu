import React, { useRef, useCallback, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import blockchain1 from '../assets/images/blockchain1.svg';
import blockchain2 from '../assets/images/blockchain2.svg';
import blockchain3 from '../assets/images/blockchain3.svg';
import nail1 from '../assets/images/nail1.svg';
import nail2 from '../assets/images/nail2.svg';
import nail3 from '../assets/images/nail3.svg';
import nft1 from '../assets/images/nft1.svg';
import nft2 from '../assets/images/nft2.svg';
import nft3 from '../assets/images/nft3.svg';
import car1 from '../assets/images/car1.svg';
import car2 from '../assets/images/car2.svg';
import car3 from '../assets/images/car3.svg';
import wallet1 from '../assets/images/wallet1.svg';
import wallet2 from '../assets/images/wallet2.svg';
import wallet3 from '../assets/images/wallet3.svg';
import wallet4 from '../assets/images/wallet4.svg';
import art1 from '../assets/images/art1.svg';
import art2 from '../assets/images/art2.svg';
import art3 from '../assets/images/art3.svg';
import market1 from '../assets/images/market1.svg';
import market2 from '../assets/images/market2.svg';
import market3 from '../assets/images/market3.svg';
import slideLeftIcon from '../assets/images/slide_left_icon.svg';
import slideRightIcon from '../assets/images/slide_right_icon.svg';
import portfolioBackground from '../assets/images/portfolioBackground.svg';

export default function PortfolioSlider () {
	const slickRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);


	const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), [])

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '340px',
		focusOnSelect: true,
		autoplay: true,
		beforeChange: (current, next) => {
      setActiveSlide(next);
    },
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					infinite: true,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '100px',
					centerMode: true,
					focusOnSelect: true,
					autoplay: true,
					beforeChange: (current, next) => {
						setActiveSlide(next);
					},
				}
			},
		]
	};
	return (
		<Wrapper>
			<TitleWrap>
				<PortfolioTitle>스페이스씨엘 포트폴리오</PortfolioTitle>
				<Portfolio>PORTFOLIO</Portfolio>
			</TitleWrap>
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
							<Img src={blockchain3} />
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
								앱으로 자기만의 네일 이미지 및 디자인을<br/>
								꾸며 하드웨어 프린트 기기와 연동하여<br/>
								인쇄 작업  App 개발
							</Text>
						</TextWrap>
						<div>
							<Img src={nail1} />
							<Img src={nail2} />
							<Img src={nail3} />
						</div>
					</Card>
				</div>
				<div>
					<Card>
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
								<Img src={car1} />
								<ColImage style={{ gap:"15px"}}>
									<Img src={car2} />
									<Img src={car3} />
								</ColImage>
							</Col>
						</div>
					</Card>
				</div>
				<div>
					<Card style={{ gap:"20px"}}>
						<TextWrap style={{ padding:"50px"}}>
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
							<Img src={wallet3} />
							<Img src={wallet4} />
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
							<Row>
								<Img src={art1} />
								<RowImage>
									<Img src={art2} />
									<Img src={art3} />
								</RowImage>
							</Row>
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
								폴리곤 기반의 NFT 민팅 이벤트 페이지 제작.<br/>
								민팅은 에어드랍 또는 Matic을 사용해<br/>
								제너레이티브 아트 형태로 랜덤 생성
							</Text>
						</TextWrap>
						<div>
							<Col>
								<Img src={market1} />
								<ColImage style={{ gap: '15px'}}>
									<Img src={market2} />
									<Img src={market3} />
								</ColImage>
							</Col>
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
								폴리곤 기반의 NFT 민팅 이벤트 페이지 제작.<br/>
								민팅은 에어드랍 또는 Matic을 사용해<br/>
								제너레이티브 아트 형태로 랜덤 생성
							</Text>
						</TextWrap>
						<div>
							<Col>
								<Img src={nft1} />
								<ColImage>
									<Img src={nft2} />
									<Img src={nft3} />
								</ColImage>
							</Col>
						</div>
					</Card>
				</div>
			</Slider>
			<SlideNumber>
				<span>{activeSlide+1} </span> / 7
			</SlideNumber>
			<div>
				<ArrowWrap>
					<div onClick={previous}>
						<SlideLeftIcon
							src={slideLeftIcon}
							alt={"pre-arrow"}
						/>
					</div>
					<div onClick={next}>
						<SlideRightIcon
							src={slideRightIcon}
							alt={"next-arrow"}
						/>
					</div>
				</ArrowWrap>
      </div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 976px;
	background-image: url(${portfolioBackground}?${Date.now()});
`;

const Row = styled.div`
	display: flex;
	gap: 10px;
`;

const RowImage = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ColImage = styled.div`
	display: flex;
	gap: 10px;
`;

const Title = styled.span`
	color: rgb(34, 34, 34);
	text-overflow: ellipsis;
	font-size: 1.5rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Text = styled.span`
	color: rgb(34, 34, 34);
	text-overflow: ellipsis;
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 400;
	line-height: 150%;
	text-align: left;
`;

const TitleWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 22.5rem;
	margin-bottom: 3.75rem;
	padding-top: 5.75rem;
`;

const PortfolioTitle = styled.span`
	color: #0A3177;
	text-overflow: ellipsis;
	font-size: 3rem;
	font-family: Pretendard, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Portfolio = styled.span`
	color: #0A3177;
	text-overflow: ellipsis;
	font-size: 2rem;
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
	padding-left: 80px;
`;

const Card = styled.div`
  width: 1200px;
	height: 600px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px rgba(103, 111, 137, 0.1);
	backdrop-filter: blur(30px);
	display: flex;
	align-items: center;
	gap: 100px;

  > div {

    display: flex;
    gap: 25px;
  }
`;

const Img = styled.img`

`;

const ArrowWrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	position: absolute;
	left: 75%;
	top: 10%;
`;

const SlideLeftIcon = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	cursor: pointer;
`;

const SlideRightIcon = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	cursor: pointer;
`;

const SlideNumber = styled.div`
	width: 72px;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.6);
	color: white;
	font-size: 1rem;
	font-family: Pretendard, sans-serif;
	font-weight: 600;
	text-align: center;
	line-height: 42px;
	border-radius: 20px;
	position: absolute;
	left: 69%;
	top: 10%;
	z-index: 1;
`;
