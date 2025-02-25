import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
} from '@chakra-ui/react';
import Form from './form';

export default function OpenModal({ onClose, isOpen }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxH="1400px" maxW="792px" padding="20px 94px 40px 94px">
          <ModalHeader
            sx={{
              fontSize: '16px',
              fontWeight: '800',
              color: '#rgb(59, 66, 79)',
              textAlign: 'center',
            }}
          >
            지원하기
          </ModalHeader>
          <ModalCloseButton sx={{ margin: '20px' }} />
          <ModalBody pb={6}>
            <Form onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
