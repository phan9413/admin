import React from "react";

import { Column, Row, Line, Text, Img, Button } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";

const EKYCBeginPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar className="w-[17%]" />
          <Line className="bg-indigo_51 3xl:h-[1141px] lg:h-[676px] xl:h-[846px] 2xl:h-[951px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Row className="items-start justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                <Text className="eKYC" as="h3" variant="h3">
                  eKYC
                </Text>
                <Text className="SettingeKYC" as="h5" variant="h5">
                  <span className="text-bluegray_400 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Setting/
                  </span>
                  <span className="text-bluegray_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    {" "}
                    eKYC
                  </span>
                </Text>
              </Row>
              <Column className="bg-white_A700 items-center justify-start mb-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] xl:p-[110px] 2xl:p-[124px] 3xl:p-[148px] lg:p-[88px] rounded-radius4 shadow-bs w-[100%]">
                <Img
                  src="images/img_paywithcredit.svg"
                  className="lg:h-[160px] xl:h-[200px] 2xl:h-[225px] 3xl:h-[269px] lg:w-[159px] xl:w-[199px] 2xl:w-[224px] 3xl:w-[268px]"
                  alt="paywithcredit"
                />
                <Column className="items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] p-[3px] w-[29%]">
                  <Text className="Accountinfo" as="h4" variant="h4">
                    eKYC Verification
                  </Text>
                  <Text
                    className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-bluegray_900 text-center w-[94%]"
                    as="h6"
                    variant="h6"
                  >
                    Your information has been verified to ensure your payment
                    safely
                  </Text>
                </Column>
                <Button
                  className="font-bold xl:mb-[104px] 2xl:mb-[118px] 3xl:mb-[141px] lg:mb-[83px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Verify now
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCBeginPage;
