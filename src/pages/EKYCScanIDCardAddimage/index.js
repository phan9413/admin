import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  SelectBox,
  Img,
  Button,
  Stack,
} from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import Header from "components/Header/Header";

const EKYCScanIDCardAddimagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar2 className="w-[17%]" />
          <Line className="bg-indigo_51 3xl:h-[1144px] lg:h-[678px] xl:h-[848px] 2xl:h-[953px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Row className="items-start justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[17px] w-[100%]">
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
              <Column className="bg-white_A700 items-center justify-start mb-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[41px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                <Column className="items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] p-[3px] w-[27%]">
                  <Text
                    className="mt-[1px] text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Scan ID Card
                  </Text>
                  <Text
                    className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[29px] not-italic text-bluegray_400 text-center w-[86%]"
                    as="h6"
                    variant="h6"
                  >
                    Please ensure that the image that you uploaded is clear and
                    not blurred
                  </Text>
                </Column>
                <SelectBox
                  className="font-medium lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[30%]"
                  placeholderClassName="text-bluegray_800"
                  name="group One"
                  placeholder="ID Card"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_20X20.svg"
                      className="lg:w-[7px] lg:h-[5px] lg:mr-[17px] xl:w-[9px] xl:h-[6px] xl:mr-[21px] 2xl:w-[11px] 2xl:h-[6px] 2xl:mr-[24px] 3xl:w-[13px] 3xl:h-[8px] 3xl:mr-[28px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineIndigo511_2"
                ></SelectBox>
                <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[47px] w-[100%]">
                  <Column className="border-2 border-dashed border-indigo_51 items-center lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] rounded-radius4 w-[49%]">
                    <Column
                      className="bg-cover bg-repeat items-end justify-end lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] rounded-radius16 w-[99%]"
                      style={{
                        backgroundImage: "url('images/img_group8549.png')",
                      }}
                    >
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[54px] 3xl:h-[65px] items-center justify-center mb-[3px] lg:mt-[127px] xl:mt-[160px] 2xl:mt-[180px] 3xl:mt-[215px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                        shape="icbCircleBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9000c"
                      >
                        <Img
                          src="images/img_trash_54X54.svg"
                          className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="trash One"
                        />
                      </Button>
                    </Column>
                  </Column>
                  <Stack className="lg:h-[256px] xl:h-[320px] 2xl:h-[359px] 3xl:h-[431px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[23px] w-[49%]">
                    <Img
                      src="images/img_image6.png"
                      className="absolute lg:h-[207px] xl:h-[259px] 2xl:h-[291px] 3xl:h-[350px] inset-[0] justify-center m-[auto] rounded-radius16 w-[86%]"
                      alt="imageSix"
                    />
                    <Column className="absolute border-2 border-dashed border-indigo_51 items-end justify-end lg:p-[45px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] rounded-radius4 w-[100%]">
                      <Button
                        className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[54px] 3xl:h-[65px] items-center justify-center lg:mt-[125px] xl:mt-[157px] 2xl:mt-[177px] 3xl:mt-[212px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                        shape="icbCircleBorder28"
                        size="xlIcn"
                        variant="icbOutlineBlack9000c"
                      >
                        <Img
                          src="images/img_trash_54X54.svg"
                          className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px]"
                          alt="trash Two"
                        />
                      </Button>
                    </Column>
                  </Stack>
                </Row>
                <Button
                  className="font-bold lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[25%]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Next Step
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCScanIDCardAddimagePage;
