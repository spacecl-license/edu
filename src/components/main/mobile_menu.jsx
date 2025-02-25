import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  DrawerBody,
} from '@chakra-ui/react';
import menu from '../../assets/images/menu.svg';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');

  return (
    <>
      <div onClick={onOpen}>
        <img src={menu} alt="" style={{ cursor: 'pointer' }} />
      </div>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent
          sx={{ backgroundColor: '#0A3177', padding: '100px 40px' }}
        >
          <DrawerCloseButton sx={{ color: 'white' }} />
          <DrawerBody
            sx={{
              color: 'white',
              fontSize: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Link
              to="/introduce"
              style={{ textDecoration: 'none' }}
              onClick={onClose}
            >
              교육센터 소개
            </Link>
            <Link
              to="/track"
              style={{ textDecoration: 'none' }}
              onClick={onClose}
            >
              일본취업 교육과정
            </Link>
            <Link
              to="/support"
              style={{ textDecoration: 'none' }}
              onClick={onClose}
            >
              취업지원 센터
            </Link>
            <Link
              to="/consulting"
              style={{ textDecoration: 'none' }}
              onClick={onClose}
            >
              교육과정 신청
            </Link>
            <Link
              to="/inquiry"
              style={{ textDecoration: 'none' }}
              onClick={onClose}
            >
              온라인 상담
            </Link>
            {/* <Link to="/community" style={{ textDecoration: 'none'}} onClick={onClose}>
              커뮤니티
            </Link> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
