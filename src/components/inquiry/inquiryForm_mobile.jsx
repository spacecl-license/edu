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

const CustomLabel = (props) => {
  return (
    <FormLabel sx={{ fontSize: '1rem', color: 'rgb(34, 34, 34)'}} {...props} />
  );
}

export default function InquiryFormMobile() {
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
      <form onSubmit={sendEmail} ref={formRef} style={{ width: '100%'}}>
        <FormControl mt={10} isRequired>
          <CustomLabel>이름</CustomLabel>
          <CustomInput value={name} name="name" onChange={handleNameChange} />
        </FormControl>

        <FormControl mt={10} isRequired>
          <CustomLabel>연락처</CustomLabel>
          <CustomInput value={contact} name="contact" onChange={handleContactChange} />
        </FormControl>
        <FormControl mt={10}>
          <CustomLabel>내용 / 문의사항</CustomLabel>
          <Textarea value={inquiry} name="inquiry" onChange={handleInquiryChange} resize={'none'} sx={{ border: 'none', backgroundColor: 'rgb(248, 249, 250)'}} />
        </FormControl>
        <Box mt={10}>
        * 담당자가 문의내용 확인 후 문자로 답변 드리겠습니다. 
        </Box>
        <Button type='submit' sx={{
          backgroundColor: 'rgb(10, 49, 119)',
          borderRadius: '6px',
          width: '100%',
          height: '64px',
          color: 'white',
          mt: '50px',
          fontSize: '1.25rem',

          _hover: {
            backgroundColor: '#0050E0',
            cursor: 'pointer'
          }
        }}>
          온라인 상담 신청하기
        </Button>
      </form>
    </>
  );
}
