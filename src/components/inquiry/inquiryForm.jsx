import React, { useState, useRef } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
} from '@chakra-ui/react';
import emailjs from "emailjs-com";

const CustomInput = (props) => {
  return (
    <Input sx={{ border: 'none', backgroundColor: 'rgb(248, 249, 250)'}} {...props} />
  );
}

export default function InquiryForm() {
  const formRef = useRef();

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactChange = (event) => {
    const { value } = event.target;
    const formattedInput = value.replace(/[^0-9]/g, '').slice(0, 11);
    const formattedNumber = formattedInput.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    setContact(formattedNumber);
  };


  const handleInquiryChange = (event) => {
    setInquiry(event.target.value);
  };


  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_INQUIRY,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          alert('신청이 완료되었습니다.');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form onSubmit={sendEmail} ref={formRef}>
        <FormControl mt={10} isRequired>
          <FormLabel>이름</FormLabel>
          <CustomInput value={name} name="name" onChange={handleNameChange} />
        </FormControl>
        <FormControl mt={10} isRequired>
          <FormLabel>연락처</FormLabel>
          <CustomInput value={contact} name="contact" onChange={handleContactChange} />
        </FormControl>
        <FormControl mt={10}>
          <FormLabel>내용 / 문의사항</FormLabel>
          <Textarea value={inquiry} name="inquiry" onChange={handleInquiryChange} resize={'none'} sx={{ border: 'none', backgroundColor: 'rgb(248, 249, 250)'}} />
        </FormControl>
        <Box mt={10}>
        * 담당자가 문의내용 확인 후 문자로 답변 드리겠습니다. 
        </Box>
        <Box
          mt={60}
          width={'100%'}
        >
          <Button type='submit' sx={{
            backgroundColor: 'rgb(10, 49, 119)',
            borderRadius: '6px',
            width: '100%',
            height: '64px',
            color: 'white',
            _hover: {
              backgroundColor: '#0050E0',
              cursor: 'pointer'
            }
          }}>
            온라인 상담 신청하기
          </Button>
        </Box>
      </form>
    </>
  );
}
