import React from "react";

import { Column, Row, Line, Text, Img, Button } from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import Header from "components/Header/Header";

const EKYCSignaturePage = () => {
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
              <Column className="bg-white_A700 items-center justify-start mb-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius4 shadow-bs w-[100%]">
                <Column className="items-center justify-end p-[2px] w-[32%]">
                  <Text
                    className="mt-[3px] text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Singature
                  </Text>
                  <Text
                    className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rowoval"
                    as="h6"
                    variant="h6"
                  >
                    Make sure that all your information are precise
                  </Text>
                </Column>
                <Column className="bg-gray_51 border-2 border-dashed border-indigo_51 justify-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 w-[64%]">
                  <Img
                    src="images/img_signatureofka.png"
                    className="lg:h-[168px] xl:h-[210px] 2xl:h-[237px] 3xl:h-[284px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mr-[33px] xl:mr-[41px] 2xl:mr-[47px] 3xl:mr-[56px] lg:mt-[56px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[87%]"
                    alt="SignatureofKa"
                  />
                  <Row className="items-center justify-end lg:ml-[344px] xl:ml-[430px] 2xl:ml-[484px] 3xl:ml-[581px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[21%]">
                    <Button
                      className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                      shape="icbCircleBorder28"
                      size="xlIcn"
                      variant="icbOutlineBlack9000c"
                    >
                      <Img
                        src="images/img_edit.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                        alt="edit"
                      />
                    </Button>
                    <Button
                      className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                      shape="icbCircleBorder28"
                      size="xlIcn"
                      variant="icbOutlineBlack9000c"
                    >
                      <Img
                        src="images/img_refresh.svg"
                        className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                        alt="refresh"
                      />
                    </Button>
                  </Row>
                </Column>
                <Button
                  className="font-bold lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[26%]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Finish process
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCSignaturePage;
