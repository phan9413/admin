import React from "react";

import { Column, Row, Img, Text, Input, Button } from "components";

const SigninResetPasswordPage = () => {
  return (
    <>
      <Column className="bg-red_52 font-inter items-center justify-start mx-[auto] lg:p-[44px] xl:p-[55px] 2xl:p-[61px] 3xl:p-[74px] w-[100%]">
        <Row className="bg-white_A700 items-start lg:p-[28px] xl:p-[35px] 2xl:p-[39px] 3xl:p-[47px] rounded-radius20 shadow-bs1 w-[40%]">
          <Img
            src="images/img_arrowleft.svg"
            className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] arrowright1"
            alt="arrowleft"
          />
          <Column className="items-center justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[75%]">
            <Img
              src="images/img_group_182X168.svg"
              className="lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] w-[41%]"
              alt="Group"
            />
            <Column className="items-center justify-start lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[78px] xl:ml-[97px] text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Forgot Password
                </Text>
                <Text
                  className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[61px] 3xl:mt-[74px] not-italic text-bluegray_800 text-center w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Enter the email address you used when you joined and we’ll
                  send you instructions to reset your password.
                  <br />
                  For security reasons, we do NOT store your password. So rest
                  assured that we will never send your password via email.
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[100%]">
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
              <Button
                className="font-bold 3xl:mt-[101px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                SEND RESET INSTRUCTIONS
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SigninResetPasswordPage;
