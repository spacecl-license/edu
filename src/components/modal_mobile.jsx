import { 
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
} from "@chakra-ui/react"
import FormMobile from "./form_mobile"

export default function OpenModalMobile({onClose, isOpen}) {


  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxH="1400px" maxW="792px" padding='5px 23px 10px 23px'>
          <ModalHeader sx={{
            fontSize: '1rem',
            fontWeight: '800',
            color: '#rgb(59, 66, 79)',
            textAlign: 'center',
          }}>지원하기</ModalHeader>
          <ModalCloseButton sx={{ margin: '20px'}} />
          <ModalBody pb={6}>
            <FormMobile onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}