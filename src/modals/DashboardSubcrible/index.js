import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Stack, Input } from "components";

const DashboardSubcribleModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="items-center justify-end lg:p-[305px] xl:p-[381px] 2xl:p-[429px] 3xl:p-[515px] w-[100%]">
            <Img
              src="images/img_group_40X40.svg"
              className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mt-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              alt="Group"
            />
            <Column className="bg-white_A700 items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[82%]">
              <Column className="justify-start pr-[3px] pt-[3px] w-[100%]">
                <Text
                  className="text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Subcrible
                </Text>
                <Text
                  className="lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rowline"
                  as="h6"
                  variant="h6"
                >
                  Subcribe our newletter and get notification to stay update
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Stack className="lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="absolute inset-y-[0] my-[auto] right-[5%] test_grid"
                    alt="cursor"
                  />
                  <Input
                    className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                    wrapClassName="absolute flex w-[100%]"
                    type="email"
                    name="email One"
                    placeholder="Ackermanlhn@gmail.com"
                    prefix={
                      <Img
                        src="images/img_mail.svg"
                        className="ml-[4px] left-[1%] right-[4%] absolute lg:w-[14px] lg:h-[15px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[19px] my-[auto]"
                        alt="mail"
                      />
                    }
                    shape="RoundedBorder4"
                    size="xl"
                    variant="OutlineIndigo51"
                  ></Input>
                </Stack>
              </Column>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { DashboardSubcribleModal };
