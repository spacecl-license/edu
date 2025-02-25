import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="image of Logo" />
      </Link>
      <Wrapper>
        <Nav>
          <Link to="/introduce" style={{ textDecoration: 'none' }}>
            <Text active={location.pathname === '/introduce'}>
              교육센터 소개
            </Text>
          </Link>
          <Link to="/track" style={{ textDecoration: 'none' }}>
            <Text
              active={
                location.pathname === '/track1' ||
                location.pathname === '/track2' ||
                location.pathname === '/track'
              }
            >
              일본취업 교육과정
            </Text>
          </Link>
          <Link to="/support" style={{ textDecoration: 'none' }}>
            <Text active={location.pathname === '/support'}>취업지원 센터</Text>
          </Link>
          <Link to="/consulting" style={{ textDecoration: 'none' }}>
            <Text active={location.pathname === '/consulting'}>
              교육과정 신청
            </Text>
          </Link>
          <Link to="/inquiry" style={{ textDecoration: 'none' }}>
            <Text active={location.pathname === '/inquiry'}>온라인 상담</Text>
          </Link>
          {/* <Text>
							커뮤니티
						</Text> */}
        </Nav>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 3.75rem;
  position: relative;
  border-bottom: 1px solid rgb(229, 229, 229);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: cover;
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
`;

const Nav = styled.div`
  display: flex;
  gap: 3.25rem;
`;

const Text = styled.span`
  color: ${(props) => (props.active ? 'rgb(38, 116, 255)' : 'rgb(34, 34, 34)')};
  text-overflow: ellipsis;
  font-size: 1.13rem;
  font-family: Pretendard, sans-serif;
  font-weight: 600;
  text-align: left;
`;
