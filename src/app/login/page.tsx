'use client';

import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
`;

const Form = styled.form`
  display: flex;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: auto;
  gap: 4px;
`;
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  flex-grow: 1;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  justify-content: space-between;
`;

const LabelText = styled.span`
  min-width: 140px;
  display: inline-block;
`;
const PasswordInput = styled.input`
  padding: 10px;
  flex-grow: 1;
  border: none;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
const ToggleButton = styled.button`
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  padding-left: 10px;
`;
const Text = styled.p`
  text-align: center;
  color: grey;
`;

function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   alert('비밀번호가 일치하지 않습니다.');
    // } else {
    //   console.log({
    //     email,
    //     id,
    //     password,
    //     name,
    //     birthDate,
    //     phoneNumber,
    //     role,
    //     interestedRegion,
    //   });
    // }
  };

  return (
    <>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LabelText>아이디</LabelText>
          <Input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Label>
        <Label>
          <LabelText>비밀번호</LabelText>
          <InputContainer>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </ToggleButton>
          </InputContainer>
        </Label>
        <Button type="submit">로그인</Button>
        <Text>비밀번호 찾기</Text>
      </Form>
    </>
  );
}

export default Login;
