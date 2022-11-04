import React from "react";

import {
  Row,
  Column,
  Text,
  Img,
  Line,
  Input,
  CheckBox,
  Button,
} from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SignupWrongemailPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Row className="bg-lime_50 font-inter items-start mx-[auto] lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
        <Column className="justify-start lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[48%]">
          <Text
            className="lg:leading-[23px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[39px] lg:ml-[32px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] text-bluegray_900 text-center w-[33%]"
            as="h1"
            variant="h1"
          >
            Manage your work more effectively
          </Text>
          <Img
            src="images/img_workingtime_1.svg"
            className="lg:h-[284px] xl:h-[355px] 2xl:h-[400px] 3xl:h-[479px] xl:mr-[105px] 2xl:mr-[118px] 3xl:mr-[142px] lg:mr-[84px] xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[139px] lg:mt-[82px] w-[81%]"
            alt="WorkingTime"
          />
        </Column>
        <Column className="bg-white_A700 items-center justify-end lg:mr-[130px] xl:mr-[163px] 2xl:mr-[184px] 3xl:mr-[221px] lg:p-[29px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] rounded-radius20 shadow-bs1 w-[35%]">
          <Text className="columnlogintoavori1" as="h2" variant="h2">
            Login to Avori
          </Text>
          <Column className="justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[92%]">
            <Row
              className="common-pointer bg-white_A700 border border-indigo_51 border-solid items-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-radius4 w-[95%]"
              onClick={googleSignIn}
            >
              <Img
                src="images/img_google.svg"
                className="google"
                alt="google"
              />
              <Text className="rowgoogle" as="h6" variant="h6">
                Login with Google
              </Text>
            </Row>
            <Row className="items-start justify-between lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[97%]">
              <Line className="bg-indigo_51 h-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[38%]" />
              <Text className="rowline" as="h6" variant="h6">
                Or
              </Text>
              <Line className="bg-indigo_51 h-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[38%]" />
            </Row>
            <Column className="justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[95%]">
              <Text
                className="font-medium text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <Input
                className="placeholder:text-bluegray_800 email_One1"
                wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[7px] w-[100%] xl:mt-[8px]"
                type="email"
                name="email One"
                placeholder="Ackermanlhn@gmail.com"
                prefix={
                  <Img
                    src="images/img_mail.svg"
                    className="ml-[4px] lg:w-[11px] lg:h-[12px] lg:mr-[9px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                    alt="mail"
                  />
                }
                shape="RoundedBorder4"
                size="xl"
                variant="OutlineIndigo51"
              ></Input>
            </Column>
            <Text
              className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-red_600 w-[auto]"
              variant="body1"
            >
              Please enter a valid email address
            </Text>
            <Text
              className="font-medium lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] text-bluegray_800 w-[auto]"
              as="h6"
              variant="h6"
            >
              Password
            </Text>
            <Input
              className="placeholder:text-bluegray_800 email_One1"
              wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[7px] w-[95%] xl:mt-[8px]"
              type="password"
              name="password"
              placeholder="************"
              prefix={
                <Img
                  src="images/img_lock_20X20.svg"
                  className="ml-[1px] lg:w-[11px] lg:h-[12px] lg:mr-[9px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                  alt="lock"
                />
              }
              shape="RoundedBorder4"
              size="lg"
              variant="OutlineIndigo51"
            ></Input>
            <Row className="items-start justify-end ml-[auto] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[52px] 3xl:mt-[63px] w-[95%]">
              <CheckBox
                className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-bluegray_800"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="Remember"
                label="Remember"
                size="sm"
              ></CheckBox>
              <Text className="lg:ml-[113px] xl:ml-[141px] 2xl:ml-[159px] 3xl:ml-[191px] rowremember">
                Forgot password?
              </Text>
            </Row>
            <Button
              className="font-bold lg:mt-[48px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[95%]"
              shape="CircleBorder28"
              size="xl"
              variant="FillDeeporange300"
            >
              LOGIN
            </Button>
            <Text
              className="lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] test_1060StarkHoll"
              as="h6"
              variant="h6"
            >
              <span className="text-bluegray_800 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                You don’t have an account yet?
              </span>
              <span className="text-bluegray_800 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                {" "}
              </span>
              <span className="text-deep_orange_300 font-inter underline lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                Sign up
              </span>
            </Text>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default SignupWrongemailPage;
