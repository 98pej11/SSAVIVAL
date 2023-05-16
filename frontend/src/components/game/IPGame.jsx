import React, { useState } from "react";
import styled from "styled-components";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
} from "@mui/material";

function IPgame() {
  const [answer, setAnswer] = useState({
    ipAddress: "123.123.123.123",
    subnetMask: "123.123.123.123",
    gateway: "123.123.123.123",
    defaultDns: "123.123.123.123",
    subDns: "123.123.123.123",
  });
  const [inputs, setInputs] = useState({
    ipAddress: "",
    subnetMask: "",
    gateway: "",
    defaultDns: "",
    subDns: "",
  });

  const onChangeHandler = (event, index) => {
    event.preventDefault();
    const { name, value } = event.target;
    let newValue = value.replace(/[^0-9]/g, "");
    newValue = value.replace(/(\d{3})(\d)/, "$1.$2");
    const nextInputs = { ...inputs, [name]: newValue };
    setInputs(nextInputs);
    if (event.target.value.length === event.target.maxLength) {
      const nextIndex = index + 1;
      const nextInput = document.querySelector(`[tabindex="${nextIndex}"]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const submit = () => {
    if (JSON.stringify(inputs) === JSON.stringify(answer)) {
      alert("PASS");
    } else {
      alert("FAIL");
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.keyCode === 13) {
      const nextIndex = index + 1;
      const nextInput = document.querySelector(`[tabindex="${nextIndex}"]`);
      if (nextInput) {
        nextInput.focus();
        if (nextInput === 6) {
          submit();
        }
      }
    }
  };

  const cancel = () => {
    setInputs({
      ipAddress: "",
      subnetMask: "",
      gateway: "",
      defaultDns: "",
      subDns: "",
    });
  };

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>인터넷 프로토콜 버전 4(TCP/IPv4) 속성</HeaderTitle>
        <HeaderRight>X</HeaderRight>
      </Header>
      <Body>
        <Tab>일반</Tab>
        <Content>
          <ContentTop>
            네트워크가 IP 자동 설정기능을 지원하면 IP 설정이 자동으로 할당되도록
            할 수 있습니다.
          </ContentTop>
          <ContentMain>
            <StyledRadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="non-auto"
              name="radio-buttons-group"
            >
              <StyledFormControlLabel
                value="auto"
                control={<Radio />}
                label="자동으로 IP 주소 받기(O)"
                disabled
              />

              <fieldset>
                <legend>
                  <StyledFormControlLabel
                    value="non-auto"
                    control={<Radio />}
                    label="다음 IP 주소 사용(S)"
                  />
                </legend>
                <InputForm>
                  <div>IP 주소(I):</div>
                  <input
                    type="text"
                    minLength="7"
                    maxLength="15"
                    pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                    value={inputs.ipAddress}
                    name="ipAddress"
                    tabIndex="1"
                    onChange={(e) => onChangeHandler(e, 1)}
                    onKeyDown={(e) => handleKeyPress(e, 1)}
                  />
                </InputForm>
                <InputForm>
                  <div>서브넷 마스크(U):</div>
                  <input
                    type="text"
                    minLength="7"
                    maxLength="15"
                    pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                    value={inputs.subnetMask}
                    name="subnetMask"
                    tabIndex="2"
                    onChange={(e) => onChangeHandler(e, 2)}
                    onKeyDown={(e) => handleKeyPress(e, 2)}
                  ></input>
                </InputForm>
                <InputForm>
                  <div>기본 게이트웨이(D):</div>
                  <input
                    type="text"
                    minLength="7"
                    maxLength="15"
                    pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                    value={inputs.gateway}
                    name="gateway"
                    tabIndex="3"
                    onChange={(e) => onChangeHandler(e, 3)}
                    onKeyDown={(e) => handleKeyPress(e, 3)}
                  ></input>
                </InputForm>
              </fieldset>
            </StyledRadioGroup>
            {/* <StyledRadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="non-auto"
              name="radio-buttons-group"
            >
              <fieldset>
                <legend>
                  <StyledFormControlLabel
                    value="non-auto"
                    control={<Radio />}
                    label="다음 DNS 서버 주소 사용(E)"
                  />
                </legend>
                <InputForm>
                  <div>기본 설정 DNS 서버(P):</div>
                  <input
                    type="text"
                    minLength="7"
                    maxLength="15"
                    pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                    value={inputs.defaultDns}
                    tabIndex="4"
                    name="defaultDns"
                    onChange={(e) => onChangeHandler(e, 4)}
                    onKeyDown={(e) => handleKeyPress(e, 4)}
                  ></input>
                </InputForm>
                <InputForm>
                  <div>보조 DNS 서버(A):</div>
                  <input
                    type="text"
                    minLength="7"
                    maxLength="15"
                    pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                    value={inputs.subDns}
                    tabIndex="5"
                    name="subDns"
                    onChange={(e) => onChangeHandler(e, 5)}
                    onKeyDown={(e) => handleKeyPress(e, 5)}
                  ></input>
                </InputForm>
              </fieldset>
            </StyledRadioGroup> */}
          </ContentMain>
          <Footer>
            <Button
              tabIndex="6"
              onClick={submit}
              onKeyPress={(e) => handleKeyPress(e, 6)}
            >
              확인
            </Button>
            <Button onClick={cancel}>취소</Button>
          </Footer>
        </Content>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70%;
  height: 55vh;
  background-color: lightgrey;
  font-size: 14px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  background-color: white;
`;
const HeaderTitle = styled.div`
  margin: 5px auto 5px 8px;
`;
const HeaderRight = styled.div`
  margin: 5px 8px;
`;
const Body = styled.div`
  height: 100%;
  width: 95%;
  margin: 15px auto;
`;
const Tab = styled.div`
  background-color: white;
  border-top: 0.5px solid lightgrey;
  border-left: 0.5px solid lightgrey;
  border-right: 0.5px solid lightgrey;
  padding: 2px 5px 2px 4px;
  width: 15%;
`;
const Content = styled.div`
  background-color: white;
  height: auto;
`;
const ContentTop = styled.div`
  padding: 10px;
`;
const ContentMain = styled.div`
  padding: 10px;
`;
const StyledRadioGroup = styled(RadioGroup)`
  .MuiFormControlLabel-label {
    font-size: 14px;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiTypography-root {
    font-size: 12px;
    line-height: 7px;
  }
`;

const InputForm = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: -5px;
  padding: 8px;
  div {
    margin-right: auto;
  }
`;
const Footer = styled.div`
  float: right;
  margin-top: 2px;
  margin-right: 5px;
`;
const Button = styled.button`
  margin: 10% 8px;
  padding: 3px 30px;
`;
export default IPgame;
