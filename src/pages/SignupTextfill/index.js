import React from "react";

import { Row, Column, Text, Img, Line, Input, Button } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SignupTextfillPage = () => {
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
      <Row className="bg-red_53 font-inter items-start mx-[auto] lg:p-[40px] xl:p-[50px] 2xl:p-[57px] 3xl:p-[68px] w-[100%]">
        <Column className="justify-start lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[48%]">
          <Text className="columndontworryabo" as="h1" variant="h1">
            Don't worry about overwhelming tasks
          </Text>
          <Img
            src="images/img_group7_597X493.svg"
            className="lg:h-[351px] xl:h-[439px] 2xl:h-[494px] 3xl:h-[592px] lg:mr-[159px] xl:mr-[199px] 2xl:mr-[223px] 3xl:mr-[268px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[86px] w-[65%]"
            alt="GroupSeven"
          />
        </Column>
        <Column className="bg-white_A700 items-center justify-end lg:mr-[110px] xl:mr-[138px] 2xl:mr-[156px] 3xl:mr-[187px] mt-[1px] lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] rounded-radius20 shadow-bs1 w-[36%]">
          <Text
            className="mt-[2px] text-bluegray_800 w-[auto]"
            as="h2"
            variant="h2"
          >
            Sign up to Avori
          </Text>
          <Row
            className="common-pointer bg-white_A700 border border-indigo_51 border-solid items-center justify-center lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-radius4 w-[84%]"
            onClick={googleSignIn}
          >
            <Img
              src="images/img_google_18X18.svg"
              className="google"
              alt="google"
            />
            <Text
              className="font-medium lg:ml-[57px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[97px] 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[71px] xl:mr-[89px] text-bluegray_800 w-[auto]"
              as="h6"
              variant="h6"
            >
              Sign up with Google
            </Text>
          </Row>
          <Row className="items-start justify-center lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[87%]">
            <Line className="bg-indigo_51 h-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[38%]" />
            <Text
              className="lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] rowline"
              as="h6"
              variant="h6"
            >
              Or
            </Text>
            <Line className="bg-indigo_51 h-[1px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] w-[38%]" />
          </Row>
          <Column className="items-center justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[84%]">
            <Input
              className="placeholder:text-bluegray_800 email_One1"
              wrapClassName="flex w-[100%]"
              name="Textinput"
              placeholder="Avo Lee"
              prefix={
                <Img
                  src="images/img_user.svg"
                  className="ml-[1px] lg:w-[11px] lg:h-[12px] lg:mr-[9px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                  alt="user"
                />
              }
              shape="RoundedBorder4"
              size="lg"
              variant="OutlineIndigo51"
            ></Input>
            <Input
              className="placeholder:text-bluegray_800 email_One1"
              wrapClassName="2xl:mt-[43px] 3xl:mt-[52px] flex lg:mt-[31px] w-[100%] xl:mt-[38px]"
              type="email"
              name="email"
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
            <Input
              className="placeholder:text-bluegray_800 email_One1"
              wrapClassName="2xl:mt-[35px] 3xl:mt-[42px] flex lg:mt-[25px] w-[100%] xl:mt-[31px]"
              name="Textinput One"
              placeholder="Avoooo21"
              prefix={
                <Img
                  src="images/img_lock_20X20.svg"
                  className="ml-[1px] lg:w-[11px] lg:h-[12px] lg:mr-[9px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                  alt="lock"
                />
              }
              suffix={
                <Img
                  src="images/img_eye_20X20.svg"
                  className="mr-[1px] lg:w-[11px] lg:h-[12px] lg:ml-[20px] xl:w-[14px] xl:h-[15px] xl:ml-[25px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[28px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[34px] my-[auto]"
                  alt="eye"
                />
              }
              shape="RoundedBorder4"
              size="lg"
              variant="OutlineIndigo51"
            ></Input>
            <Text
              className="font-medium lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] text-bluegray_800 text-center w-[76%]"
              as="h6"
              variant="h6"
            >
              <span className="text-bluegray_400 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                By clicking “SIGN UP" button, I agree with your
              </span>
              <span className="text-bluegray_800 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                {" "}
              </span>
              <span className="text-bluegray_800 font-inter underline lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                Term and Policy
              </span>
            </Text>
            <Button
              className="font-bold lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
              shape="CircleBorder28"
              size="xl"
              variant="FillDeeporange300"
            >
              SIGN UP
            </Button>
            <Text className="columnconfirmation" as="h6" variant="h6">
              <span className="text-bluegray_800 font-inter font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                You have an account already?
              </span>
              <span className="text-bluegray_800 font-inter lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                {" "}
              </span>
              <span className="text-deep_orange_300 font-inter underline lg:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px]">
                Sign in
              </span>
            </Text>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default SignupTextfillPage;
