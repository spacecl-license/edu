import React, { useState, useRef } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  RadioGroup,
  Radio,
  VStack,
  Button,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const CustomInput = (props) => {
  return (
    <Input
      sx={{ border: 'none', backgroundColor: 'rgb(248, 249, 250)' }}
      {...props}
    />
  );
};

const CustomLabel = (props) => {
  return (
    <FormLabel sx={{ fontSize: '1rem', color: 'rgb(34, 34, 34)' }} {...props} />
  );
};

export default function ConsultingFormMobile() {
  const formRef = useRef();

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [source, setSource] = useState('');
  const [another, setAnother] = useState('');
  const [level, setLevel] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactChange = (event) => {
    const { value } = event.target;
    const formattedInput = value.replace(/[^0-9]/g, '').slice(0, 11);
    const formattedNumber = formattedInput.replace(
      /(\d{3})(\d{4})(\d{4})/,
      '$1-$2-$3',
    );
    setContact(formattedNumber);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleInquiryChange = (event) => {
    setInquiry(event.target.value);
  };

  const handleAnotherChange = (event) => {
    if (source === '기타') {
      setAnother(event.target.value);
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_CONSULTING,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID,
      )
      .then(
        (result) => {
          alert('신청이 완료되었습니다.');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <form onSubmit={sendEmail} ref={formRef} style={{ width: '100%' }}>
        <input value={'상담신청'} name="title" hidden />
        <FormControl mt={10} isRequired>
          <CustomLabel>이름</CustomLabel>
          <CustomInput value={name} name="name" onChange={handleNameChange} />
        </FormControl>

        <FormControl mt={10} isRequired>
          <CustomLabel>연락처</CustomLabel>
          <CustomInput
            value={contact}
            name="contact"
            onChange={handleContactChange}
          />
        </FormControl>

        {/* <FormControl mt={10} isRequired>
          <CustomLabel>나이</CustomLabel>
          <CustomInput value={age} name="age" onChange={handleAgeChange} />
        </FormControl> */}

        <FormControl mt={10} isRequired>
          <CustomLabel>지원하는 연수과정은 무엇입니까?</CustomLabel>
          <Select
            value={course}
            name="course"
            onChange={handleCourseChange}
            placeholder="선택해주세요"
            sx={{ border: 'none', backgroundColor: 'rgb(248, 249, 250)' }}
          >
            {/* <option>일본어 클래스(3월 개강)</option> */}
            {/* <option>
              일본취업 클라우드 기반 풀스택 웹개발자 양성과정(4월 개강)
            </option> */}
            <option>일본취업 산업융합 IT•SW 전문가 양성과정(6월 개강)</option>
          </Select>
        </FormControl>

        <FormControl mt={10} isRequired>
          <FormLabel>일본어 수준</FormLabel>
          <Select
            value={level}
            name="level"
            onChange={handleLevelChange}
            placeholder="선택해주세요"
            sx={{ border: 'none', backgroundColor: 'rgb(248, 249, 250)' }}
          >
            <option>없음</option>
            <option>입문</option>
            <option>기초</option>
          </Select>
        </FormControl>

        {/* <FormControl mt={10} isRequired>
          <CustomLabel>최종학력 (대학 / 전공)</CustomLabel>
          <CustomInput
            value={education}
            name="education"
            onChange={handleEducationChange}
          />
        </FormControl>

        <FormControl mt={10}>
          <CustomLabel>관련 분야 / 실무경력</CustomLabel>
          <CustomInput
            value={experience}
            name="experience"
            onChange={handleExperienceChange}
            placeholder="예시: (IT개발/1년), (없음/신입)"
          />
        </FormControl> */}

        <FormControl mt={10}>
          <CustomLabel>추가 문의사항</CustomLabel>
          <Textarea
            value={inquiry}
            name="inquiry"
            onChange={handleInquiryChange}
            resize={'none'}
            sx={{ border: 'none', backgroundColor: 'rgb(248, 249, 250)' }}
          />
        </FormControl>

        {/* <FormControl mt={10}>
          <CustomLabel as="legend">유입경로</CustomLabel>
          <RadioGroup value={source} name="source" onChange={setSource}>
            <VStack spacing="3px" align="stretch">
              <Radio value="월드잡플러스">월드잡플러스</Radio>
              <Radio value="인터넷 검색">인터넷 검색</Radio>
              <Radio value="블로그, 카페">블로그, 카페</Radio>
              <Radio value="SNS (페이스북, 인스타그램)">
                SNS (페이스북, 인스타그램)
              </Radio>
              <Radio value="교내정보(대학/학과 게시판 등)">
                교내정보(대학/학과 게시판 등)
              </Radio>
              <Radio value="온라인 배너광고">온라인 배너광고</Radio>
              <Radio value="지인소개">지인소개</Radio>
              <Radio value="기타">기타</Radio>
              <CustomInput
                value={another}
                name="another"
                onChange={handleAnotherChange}
                placeholder="직접 입력"
              />
            </VStack>
          </RadioGroup>
        </FormControl> */}

        <Button
          type="submit"
          sx={{
            backgroundColor: 'rgb(10, 49, 119)',
            borderRadius: '6px',
            width: '100%',
            height: '64px',
            color: 'white',
            mt: '50px',
            fontSize: '1.25rem',

            _hover: {
              backgroundColor: '#0050E0',
              cursor: 'pointer',
            },
          }}
        >
          신청하기
        </Button>
      </form>
    </>
  );
}
