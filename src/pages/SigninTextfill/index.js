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

const SigninTextfillPage = () => {
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
      <Row className="bg-red_51 font-inter items-center mx-[auto] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] w-[100%]">
        <Column className="items-center lg:ml-[37px] xl:ml-[47px] 2xl:ml-[52px] 3xl:ml-[63px] w-[47%]">
          <Text className="columnmanageyourwor" as="h1" variant="h1">
            Manage your work more effectively
          </Text>
          <Img
            src="images/img_workingtime_483X627.svg"
            className="lg:h-[284px] xl:h-[355px] 2xl:h-[400px] 3xl:h-[480px] xl:mt-[108px] 2xl:mt-[121px] 3xl:mt-[145px] lg:mt-[86px] w-[80%]"
            alt="WorkingTime"
          />
          <Text
            className="font-medium xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[149px] lg:mt-[88px] text-bluegray_800 w-[auto]"
            as="h6"
            variant="h6"
          >
            <span className="text-bluegray_800 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
              You don’t have an account yet?
            </span>
            <span className="text-bluegray_800 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
              {" "}
            </span>
            <span className="text-bluegray_701 font-inter underline lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
              Sign up
            </span>
          </Text>
        </Column>
        <Column className="bg-white_A700 items-center lg:mb-[15px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] lg:mr-[142px] xl:mr-[178px] 2xl:mr-[200px] 3xl:mr-[241px] lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius20 shadow-bs1 w-[35%]">
          <Text className="columnlogintoavori" as="h2" variant="h2">
            Login to Avori
          </Text>
          <Row
            className="common-pointer bg-white_A700 border border-indigo_51 border-solid items-center lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-radius4 w-[85%]"
            onClick={googleSignIn}
          >
            <Img
              src="images/img_google_18X18.svg"
              className="google"
              alt="google"
            />
            <Text className="rowgoogle" as="h6" variant="h6">
              Login with Google
            </Text>
          </Row>
          <Row className="items-start justify-center lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[88%]">
            <Line className="bg-indigo_51 h-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[38%]" />
            <Text
              className="lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] rowline"
              as="h6"
              variant="h6"
            >
              Or
            </Text>
            <Line className="bg-indigo_51 h-[1px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[38%]" />
          </Row>
          <Column className="justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] w-[85%]">
            <Column className="justify-start w-[100%]">
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
              className="font-medium lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] text-bluegray_800 w-[auto]"
              as="h6"
              variant="h6"
            >
              Password
            </Text>
            <Input
              className="placeholder:text-bluegray_800 email_One1"
              wrapClassName="2xl:mt-[9px] 3xl:mt-[11px] flex lg:mt-[7px] w-[100%] xl:mt-[8px]"
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
          </Column>
          <Column className="items-center justify-start 3xl:mt-[114px] lg:mt-[67px] xl:mt-[84px] 2xl:mt-[95px] w-[85%]">
            <Row className="items-start justify-between w-[99%]">
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
              className="font-bold lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
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
    </>
  );
};

export default SigninTextfillPage;
