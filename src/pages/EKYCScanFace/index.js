import React from "react";

import { Column, Row, Line, Text, Stack, Img, Button } from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import Header from "components/Header/Header";

const EKYCScanFacePage = () => {
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
                <Column className="items-center justify-end p-[4px] w-[28%]">
                  <Text
                    className="mt-[1px] text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Scan Face
                  </Text>
                  <Text
                    className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rowoval"
                    as="h6"
                    variant="h6"
                  >
                    Follow introduction below
                  </Text>
                </Column>
                <Stack className="lg:h-[404px] xl:h-[505px] 2xl:h-[568px] 3xl:h-[681px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[55%]">
                  <Column
                    className="absolute bg-cover bg-repeat items-center justify-start rounded-radius4 top-[0] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group8560.png')",
                    }}
                  >
                    <Stack
                      className="bg-cover bg-repeat lg:h-[359px] xl:h-[449px] 2xl:h-[505px] 3xl:h-[606px] lg:px-[44px] xl:px-[55px] 2xl:px-[62px] 3xl:px-[74px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group8561.svg')",
                      }}
                    >
                      <Img
                        src="images/img_group_377X459.svg"
                        className="absolute lg:h-[269px] xl:h-[336px] 2xl:h-[378px] 3xl:h-[453px] inset-[0] justify-center m-[auto] w-[78%]"
                        alt="Group One"
                      />
                    </Stack>
                  </Column>
                  <Button
                    className="absolute bottom-[0] flex lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] inset-x-[0] items-center justify-center mx-[auto] rounded-radius50 lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    size="3xlIcn"
                    variant="icbOutlineWhiteA700"
                  >
                    <Img
                      src="images/img_camera_80X80.svg"
                      className="flex items-center justify-center lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px]"
                      alt="camera"
                    />
                  </Button>
                </Stack>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCScanFacePage;
