import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Grid,
  Input,
  Switch,
  SelectBox,
  Stack,
  Button,
} from "components";
import Header from "components/Header/Header";

const SettingsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="w-[17%]">
            <div className="">
              <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
                <Img
                  src="images/img_logo.svg"
                  className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] mt-[4px] w-[50%]"
                  alt="Logo"
                />
                <Column className="justify-start lg:mb-[240px] xl:mb-[300px] 2xl:mb-[338px] 3xl:mb-[405px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] w-[88%]">
                  <Row className="items-center w-[71%]">
                    <Img
                      src="images/img_grid_20X20.svg"
                      className="test_grid1"
                      alt="grid"
                    />
                    <Text className="rowuser" as="h6" variant="h6">
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[66%]">
                    <Img
                      src="images/img_user_20X20.svg"
                      className="test_grid1"
                      alt="user"
                    />
                    <Text className="rowuser" as="h6" variant="h6">
                      Customer
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Row className="items-end w-[63%]">
                      <Img
                        src="images/img_sort.svg"
                        className="mb-[2px] test_grid1"
                        alt="sort"
                      />
                      <Text className="rowsort1" as="h6" variant="h6">
                        Message
                      </Text>
                    </Row>
                    <Text className="rowgroup" variant="body1">
                      3
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[39%]">
                    <Img
                      src="images/img_folder.svg"
                      className="test_grid1"
                      alt="folder"
                    />
                    <Text className="rowuser" as="h6" variant="h6">
                      File
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[63%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="test_grid1"
                      alt="calendar"
                    />
                    <Text className="rowcalendar" as="h6" variant="h6">
                      Calender
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[46%]">
                    <Img
                      src="images/img_trash.svg"
                      className="test_grid1"
                      alt="trash"
                    />
                    <Text className="rowtrash1" as="h6" variant="h6">
                      Shop
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[41px] w-[43%]">
                    <Img
                      src="images/img_mail_20X20.svg"
                      className="test_grid1"
                      alt="mail"
                    />
                    <Text className="rowuser" as="h6" variant="h6">
                      Cart
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[61%]">
                    <Column className="bg-white_A700 lg:h-[19px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] items-center justify-start px-[3px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <div className="bg-bluegray_400 rounded-radius50 test_grid1"></div>
                    </Column>
                    <Text
                      className="font-medium mb-[2px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Settings
                    </Text>
                  </Row>
                </Column>
              </Column>
            </div>
          </aside>
          <Line className="bg-indigo_51 3xl:h-[1044px] lg:h-[619px] xl:h-[774px] 2xl:h-[870px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Row className="bg-gray_51 font-poppins items-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Column className="justify-start mb-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[66%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Settings
                </Text>
                <Column className="bg-white_A700 font-inter justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[41px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="justify-end pr-[2px] py-[2px] w-[60%]">
                    <Text className="Accountinfo" as="h4" variant="h4">
                      Account info.
                    </Text>
                    <Text
                      className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] ProfileViews_Two"
                      as="h6"
                      variant="h6"
                    >
                      <span className="text-bluegray_900 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        Verify your information to proctect your account.{" "}
                      </span>
                      <span className="text-deep_orange_300 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        Verify now
                      </span>
                    </Text>
                  </Column>
                  <Grid className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[23px] grid grid-cols-2 lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Username
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_800 Group8540"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="Group8540"
                        placeholder="Sam"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Email address
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_800 Group8540"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="email"
                        placeholder="sambrown@gmail.com"
                        shape="RoundedBorder4"
                        size="xl"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        First name
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_800 Group8540"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="Group8542"
                        placeholder="Sam"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Last name
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_800 Group8540"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="Group8543"
                        placeholder="Brown"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                  </Grid>
                </Column>
                <Row className="font-inter items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[23px] w-[100%]">
                  <Column className="bg-white_A700 lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[49%]">
                    <Text
                      className="font-bold lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Password Reset
                    </Text>
                    <Column className="items-center justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:pt-[3px] xl:pt-[4px] 3xl:pt-[5px] 2xl:pt-[5px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Current password
                        </Text>
                        <Input
                          className="placeholder:text-bluegray_800 Group8540"
                          wrapClassName="2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                          type="password"
                          name="password"
                          placeholder="************"
                          shape="RoundedBorder4"
                          size="md"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                      <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          New password
                        </Text>
                        <Input
                          className="placeholder:text-bluegray_800 Group8540"
                          wrapClassName="2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                          type="password"
                          name="password One"
                          placeholder="************"
                          shape="RoundedBorder4"
                          size="md"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[49%]">
                    <Column className="justify-end pr-[2px] py-[2px] w-[98%]">
                      <Text className="Accountinfo" as="h4" variant="h4">
                        Notifications
                      </Text>
                      <Text className="SEP_Three" as="h6" variant="h6">
                        Open notification to receive our news fastly
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[83%]">
                      <Switch value={true} className="w-[19%]" />
                      <Text
                        className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rowline"
                        as="h5"
                        variant="h5"
                      >
                        Send notification to mail
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[75%]">
                      <Switch value={true} className="w-[21%]" />
                      <Text className="rowcontrol_one" as="h5" variant="h5">
                        Send new promotion
                      </Text>
                    </Row>
                    <Row className="items-end lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[23px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[69%]">
                      <Switch value={false} className="w-[23%]" />
                      <Text className="rowcontrol_one" as="h5" variant="h5">
                        Notice my balance
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 font-inter justify-end mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[32%]">
                <Text className="Payment" as="h4" variant="h4">
                  Payment
                </Text>
                <Column className="items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
                  <SelectBox
                    className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                    placeholderClassName="text-bluegray_800"
                    name="group One"
                    placeholder="Paypal"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_20X20.svg"
                        className="mr-[0] border-indigo_51 border border-solid lg:w-[14px] lg:h-[15px] lg:pl-[24px] lg:pr-[14px] xl:w-[17px] xl:h-[18px] xl:pl-[31px] xl:pr-[17px] 2xl:w-[20px] 2xl:h-[20px] 2xl:pl-[35px] 2xl:pr-[20px] 3xl:w-[23px] 3xl:h-[24px] 3xl:pl-[41px] 3xl:pr-[23px] rounded-radius4"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Row className="bg-indigo_400 items-start justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] rounded-radius4 w-[100%]">
                    <Stack className="3xl:h-[100px] lg:h-[59px] xl:h-[74px] 2xl:h-[83px] 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[94px] w-[59%]">
                      <Text
                        className="absolute bottom-[33%] font-medium right-[0] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        1234 **** 4567 8901{" "}
                      </Text>
                      <Img
                        src="images/img_group_83X96.png"
                        className="absolute 3xl:h-[100px] lg:h-[59px] xl:h-[74px] 2xl:h-[83px] left-[0] rounded-radius4 w-[53%]"
                        alt="Group Two"
                      />
                    </Stack>
                    <Stack className="lg:h-[115px] xl:h-[144px] 2xl:h-[161px] 3xl:h-[194px] lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] w-[26%]">
                      <Img
                        src="images/img_group_12X40.svg"
                        className="absolute xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px] inset-x-[0] mx-[auto] rounded-radius4 top-[8%] w-[51%]"
                        alt="Group Three"
                      />
                      <Img
                        src="images/img_group_161X77.png"
                        className="absolute lg:h-[115px] xl:h-[144px] 2xl:h-[161px] 3xl:h-[194px] rounded-radius4 w-[100%]"
                        alt="Group Four"
                      />
                    </Stack>
                  </Row>
                </Column>
                <Column className="justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Type your email
                  </Text>
                  <Input
                    className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                    wrapClassName="2xl:mt-[10px] 3xl:mt-[11px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                    type="email"
                    name="email One"
                    placeholder="Ackermanlhn@gmail.com"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="OutlineIndigo51"
                  ></Input>
                </Column>
                <Text
                  className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic text-bluegray_400 text-center w-[64%]"
                  as="h6"
                  variant="h6"
                >
                  Please make sure that all your information precisely
                </Text>
                <Button
                  className="font-bold lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Save change
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingsPage;
