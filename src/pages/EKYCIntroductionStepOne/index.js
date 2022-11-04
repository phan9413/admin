import React from "react";

import { Column, Row, Line, Text, Img, Stack, Button } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";

const EKYCIntroductionStepOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Sidebar className="w-[17%]" />
          <Line className="bg-indigo_51 lg:h-[534px] xl:h-[668px] 2xl:h-[751px] 3xl:h-[901px] w-[1px]" />
          <Column className="items-center justify-start w-[83%]">
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
              <Column className="bg-white_A700 items-center justify-start mb-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[59px] xl:p-[73px] 2xl:p-[83px] 3xl:p-[99px] rounded-radius4 shadow-bs w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Introduction
                </Text>
                <Column className="items-center justify-start lg:mb-[39px] xl:mb-[49px] 2xl:mb-[56px] 3xl:mb-[67px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[46%]">
                  <Row className="bg-white_A700 items-center justify-between lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs5 w-[100%]">
                    <Row className="items-center justify-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] rounded-radius4 w-[39%]">
                      <Column className="items-end outline outline-[0.9px] outline-deep_orange_300 px-[2px] rounded-radius2 settings_One">
                        <Img
                          src="images/img_vector415.svg"
                          className="Vector415"
                          alt="Vector415"
                        />
                        <Row className="items-start justify-evenly mb-[4px] mr-[3px] mt-[1px] w-[79%]">
                          <Img
                            src="images/img_user_9X9.svg"
                            className="user_One1"
                            alt="user One"
                          />
                          <Img
                            src="images/img_vector415.svg"
                            className="Vector416"
                            alt="Vector416"
                          />
                        </Row>
                      </Column>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] pr-[3px] py-[3px] w-[69%]">
                        <Text className="rowline" as="h6" variant="h6">
                          Bước 1:
                        </Text>
                        <Text className="atotitlelab_One" as="h5" variant="h5">
                          Scan ID Card
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_arrowright_24X24.svg"
                      className="arrowright2"
                      alt="arrowright"
                    />
                  </Row>
                  <Row className="border border-indigo_51 border-solid items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs2 w-[100%]">
                    <Row className="items-center justify-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] rounded-radius4 w-[33%]">
                      <Img
                        src="images/img_settings.svg"
                        className="settings_One"
                        alt="settings One"
                      />
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] pr-[3px] py-[3px] w-[64%]">
                        <Text className="SEP_Eight" as="h6" variant="h6">
                          Bước 2:
                        </Text>
                        <Text className="atotitlelab_One" as="h5" variant="h5">
                          Scan Face
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_lock_24X24.svg"
                      className="arrowright2"
                      alt="lock"
                    />
                  </Row>
                  <Row className="border border-indigo_51 border-solid items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs2 w-[100%]">
                    <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] rounded-radius4 w-[55%]">
                      <Stack className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] pr-[1px] w-[13%]">
                        <Img
                          src="images/img_menu_28X24.svg"
                          className="menu3"
                          alt="menu"
                        />
                        <Button
                          className="absolute bottom-[0] flex lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] items-center justify-center right-[0] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]"
                          shape="icbRoundedBorder6"
                          size="smIcn"
                          variant="icbOutlineBluegray400"
                        >
                          <Img
                            src="images/img_checkmark_13X13.svg"
                            className="flex items-center justify-center lg:h-[7px] xl:h-[9px] 2xl:h-[10px] 3xl:h-[11px]"
                            alt="checkmark"
                          />
                        </Button>
                      </Stack>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] pr-[3px] py-[3px] w-[78%]">
                        <Text className="rowoval" as="h6" variant="h6">
                          Bước 3:
                        </Text>
                        <Text className="atotitlelab_One" as="h5" variant="h5">
                          Confirm Information
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_lock_24X24.svg"
                      className="arrowright2"
                      alt="lock One"
                    />
                  </Row>
                  <Row className="border border-indigo_51 border-solid items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs2 w-[100%]">
                    <Row className="items-center justify-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[33%]">
                      <Img
                        src="images/img_reply.svg"
                        className="settings_One"
                        alt="reply"
                      />
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] pr-[3px] pt-[3px] w-[63%]">
                        <Text className="rowoval" as="h6" variant="h6">
                          Bước 4:
                        </Text>
                        <Text
                          className="atotitlelab_Seven"
                          as="h5"
                          variant="h5"
                        >
                          Signature
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_lock_24X24.svg"
                      className="arrowright2"
                      alt="lock Two"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCIntroductionStepOnePage;
