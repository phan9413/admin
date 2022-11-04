import React from "react";

import {
  Stack,
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

const SigninDefaultPage = () => {
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
      <Stack className="bg-white_A700 font-inter 3xl:h-[1011px] lg:h-[599px] xl:h-[749px] 2xl:h-[842px] mx-[auto] w-[100%]">
        <div className="absolute bg-red_50 3xl:h-[1022px] lg:h-[605px] xl:h-[757px] 2xl:h-[852px] w-[100%]"></div>
        <Row className="absolute h-[max-content] inset-y-[0] items-start left-[6%] my-[auto] w-[78%]">
          <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[58%]">
            <Text className="columnmanageyourwor" as="h1" variant="h1">
              Manage your work more effectively
            </Text>
            <Img
              src="images/img_workingtime.svg"
              className="lg:h-[284px] xl:h-[355px] 2xl:h-[400px] 3xl:h-[479px] xl:mt-[107px] 2xl:mt-[121px] 3xl:mt-[145px] lg:mt-[86px] w-[80%]"
              alt="WorkingTime"
            />
          </Column>
          <Column className="bg-white_A700 items-center justify-end lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius20 shadow-bs1 w-[42%]">
            <Text className="columnlogintoavori" as="h2" variant="h2">
              Login to Avori
            </Text>
            <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[88%]">
              <Row
                className="common-pointer bg-white_A700 border border-indigo_51 border-solid items-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-radius4 w-[97%]"
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
              <Row className="items-start justify-between lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[100%]">
                <Line className="bg-indigo_51 h-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[38%]" />
                <Text className="rowline" as="h6" variant="h6">
                  Or
                </Text>
                <Line className="bg-indigo_51 h-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[38%]" />
              </Row>
              <Column className="justify-start lg:mt-[32px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] w-[97%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Input
                  className="placeholder:text-bluegray_400 email_One"
                  wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  type="email"
                  name="email One"
                  placeholder="Infor@gmail.com"
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
              <Column className="justify-start lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[97%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Password
                </Text>
                <Input
                  className="placeholder:text-bluegray_400 email_One"
                  wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  type="password"
                  name="password"
                  placeholder="************"
                  prefix={
                    <Img
                      src="images/img_lock.svg"
                      className="ml-[1px] lg:w-[11px] lg:h-[12px] lg:mr-[9px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                      alt="lock"
                    />
                  }
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineIndigo51"
                ></Input>
              </Column>
              <Row className="items-start justify-between 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[93px] w-[98%]">
                <CheckBox
                  className="font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-bluegray_800"
                  inputClassName="mr-[5px] w-[undefinedpx]"
                  name="Remember"
                  label="Remember"
                  size="sm"
                ></CheckBox>
                <Text className="rowremember">Forgot password?</Text>
              </Row>
              <Button
                className="font-bold lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[97%]"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                LOGIN
              </Button>
              <Text className="columngoogle" as="h6" variant="h6">
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
      </Stack>
    </>
  );
};

export default SigninDefaultPage;
