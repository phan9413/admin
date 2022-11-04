import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const SignupVerificationPage = () => {
  return (
    <>
      <Column className="bg-lime_51 font-inter items-center justify-end mx-[auto] lg:p-[39px] xl:p-[49px] 2xl:p-[55px] 3xl:p-[66px] w-[100%]">
        <Row className="bg-white_A700 items-start mt-[1px] lg:p-[28px] xl:p-[35px] 2xl:p-[39px] 3xl:p-[47px] rounded-radius20 shadow-bs1 w-[39%]">
          <Img
            src="images/img_arrowleft.svg"
            className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] arrowright1"
            alt="arrowleft"
          />
          <Column className="items-center justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[79%]">
            <Img
              src="images/img_group_1.svg"
              className="lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] w-[41%]"
              alt="Group"
            />
            <Column className="items-center justify-start lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[100%]">
              <Column className="items-center justify-start pr-[3px] py-[3px] w-[100%]">
                <Text
                  className="mt-[3px] text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  2-Step Vertification
                </Text>
                <Text
                  className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] mb-[2px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] not-italic text-bluegray_800 text-center w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  We sent a vertìication code to your email. Enter the code from
                  the email in the field below
                </Text>
              </Column>
              <div className="2xl:mt-[102px] 3xl:mt-[122px] lg:mt-[72px] xl:mt-[91px] w-[92%]"></div>
              <Button
                className="font-bold 3xl:mt-[102px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[85px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[100%]"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                SEND RESET INSTRUCTIONS
              </Button>
              <Text
                className="font-medium lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] text-indigo_400 w-[auto]"
                as="h6"
                variant="h6"
              >
                You haven’t received it? Resend a new code
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SignupVerificationPage;
