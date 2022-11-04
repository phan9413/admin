import React from "react";

import { Column, Row, Line, Text, Img, Button } from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import Header from "components/Header/Header";

const EKYCSuccessfulPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar2 className="w-[17%]" />
          <Line className="bg-indigo_51 3xl:h-[1145px] lg:h-[678px] xl:h-[848px] 2xl:h-[954px] w-[1px]" />
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
              <Column className="bg-white_A700 items-center justify-start mb-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] 2xl:p-[103px] 3xl:p-[123px] lg:p-[73px] xl:p-[91px] rounded-radius4 shadow-bs w-[100%]">
                <Img
                  src="images/img_group18034.svg"
                  className="lg:h-[153px] xl:h-[192px] 2xl:h-[216px] 3xl:h-[259px] w-[22%]"
                  alt="Group18034"
                />
                <Column className="items-center justify-start xl:mb-[115px] 2xl:mb-[130px] 3xl:mb-[156px] lg:mb-[92px] lg:mt-[56px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[54%]">
                  <Column className="justify-end p-[2px] w-[100%]">
                    <Text
                      className="ml-[4px] lg:mr-[22px] xl:mr-[28px] 2xl:mr-[32px] 3xl:mr-[38px] mt-[1px] text-bluegray_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Yeahhh! Your account has been verified
                    </Text>
                    <Text
                      className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mx-[auto] ProfileViews_Two"
                      as="h6"
                      variant="h6"
                    >
                      Thank for your patient. Your account has been protected
                    </Text>
                  </Column>
                  <Button
                    className="font-bold lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[41%]"
                    shape="CircleBorder24"
                    size="lg"
                    variant="FillDeeporange300"
                  >
                    Explore product
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCSuccessfulPage;
