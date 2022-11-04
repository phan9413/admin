import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  SelectBox,
  Img,
  Stack,
  Button,
} from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import Header from "components/Header/Header";

const EKYCScanIDCardPage = () => {
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
              <Column className="bg-white_A700 items-center justify-start mb-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                <Column className="items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] p-[3px] w-[27%]">
                  <Text
                    className="mt-[1px] text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Scan ID Card
                  </Text>
                  <Text
                    className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-bluegray_400 text-center w-[86%]"
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
                  placeholder="Select type of Card"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_20X20.svg"
                      className="lg:w-[7px] lg:h-[5px] lg:mr-[17px] xl:w-[9px] xl:h-[6px] xl:mr-[21px] 2xl:w-[11px] 2xl:h-[7px] 2xl:mr-[24px] 3xl:w-[13px] 3xl:h-[8px] 3xl:mr-[28px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder4"
                  variant="OutlineIndigo511_2"
                ></SelectBox>
                <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Stack className="lg:h-[256px] xl:h-[320px] 2xl:h-[360px] 3xl:h-[432px] w-[49%]">
                    <Text
                      className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-bluegray_800 top-[10%] w-[max-content]"
                      as="h5"
                      variant="h5"
                    >
                      Front
                    </Text>
                    <Column className="absolute border-2 border-dashed border-indigo_51 items-center justify-end 2xl:p-[108px] 3xl:p-[129px] lg:p-[76px] xl:p-[96px] rounded-radius4 w-[100%]">
                      <Button
                        className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                        size="2xlIcn"
                        variant="icbFillRed55"
                      >
                        <Img
                          src="images/img_plus_24X24.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          alt="plus"
                        />
                      </Button>
                      <Text
                        className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-bluegray_400 text-center w-[31%]"
                        as="h6"
                        variant="h6"
                      >
                        Drag or click to upload image
                      </Text>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[256px] xl:h-[320px] 2xl:h-[360px] 3xl:h-[432px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[49%]">
                    <Column className="absolute bottom-[30%] inset-x-[0] items-center justify-start mx-[auto] lg:px-[16px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] w-[27%]">
                      <Button
                        className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                        size="2xlIcn"
                        variant="icbFillRed55"
                      >
                        <Img
                          src="images/img_plus_24X24.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          alt="plus One"
                        />
                      </Button>
                      <Text
                        className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-bluegray_400 text-center w-[98%]"
                        as="h6"
                        variant="h6"
                      >
                        Drag or click to upload image
                      </Text>
                    </Column>
                    <Column className="absolute border-2 border-dashed border-indigo_51 items-center justify-start lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius4 w-[100%]">
                      <Text
                        className="lg:mb-[192px] xl:mb-[240px] 2xl:mb-[270px] 3xl:mb-[324px] rowline"
                        as="h5"
                        variant="h5"
                      >
                        Back
                      </Text>
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

export default EKYCScanIDCardPage;
