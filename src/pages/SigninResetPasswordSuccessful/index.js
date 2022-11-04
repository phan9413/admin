import React from "react";

import { Column, Img, Text, Button, Row } from "components";

const SigninResetPasswordSuccessfulPage = () => {
  return (
    <>
      <Column className="bg-red_52 font-inter items-center justify-end mx-[auto] lg:p-[42px] xl:p-[52px] 2xl:p-[59px] 3xl:p-[71px] w-[100%]">
        <Column className="bg-white_A700 items-center justify-end mt-[1px] lg:p-[48px] xl:p-[60px] 2xl:p-[68px] 3xl:p-[82px] rounded-radius20 shadow-bs1 w-[38%]">
          <Img
            src="images/img_group5.svg"
            className="2xl:h-[110px] 3xl:h-[131px] lg:h-[78px] xl:h-[97px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[34%]"
            alt="GroupFive"
          />
          <Text
            className="lg:leading-[18px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[159px] xl:mt-[199px] 2xl:mt-[223px] 3xl:mt-[268px] text-bluegray_800 text-center w-[50%]"
            as="h2"
            variant="h2"
          >
            Password has been recovered
          </Text>
          <Button
            className="font-bold lg:mt-[52px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[93%]"
            shape="CircleBorder28"
            size="xl"
            variant="FillDeeporange300"
          >
            LOGIN
          </Button>
          <Row className="items-start justify-center lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] pr-[1px] pt-[1px] w-[29%]">
            <Img
              src="images/img_arrowleft_20X20.svg"
              className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
              alt="arrowleft"
            />
            <Text
              className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] mr-[1px] mt-[4px] text-indigo_400 w-[auto]"
              as="h6"
              variant="h6"
            >
              Back to Sign in
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SigninResetPasswordSuccessfulPage;
