import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  Button,
  Img,
  RadioGroup,
  Radio,
  List,
  Stack,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";

const CalenderDay1EventPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar className="w-[17%]" />
          <Line className="bg-indigo_51 3xl:h-[1140px] lg:h-[676px] xl:h-[845px] 2xl:h-[950px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 font-poppins justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Text className="columncalendar" as="h3" variant="h3">
                Calendar
              </Text>
              <Row className="font-inter items-center justify-between mb-[1px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
                <Column className="bg-white_A700 lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[24%]">
                  <Column className="justify-start mt-[3px] w-[100%]">
                    <Text className="columnprofileviews" as="h6" variant="h6">
                      Click in the calendar to create event
                    </Text>
                    <Button
                      className="2xl:mt-[31px] 3xl:mt-[37px] flex items-center justify-center lg:mt-[22px] text-center w-[100%] xl:mt-[27px]"
                      rightIcon={
                        <Img
                          src="images/img_plus.svg"
                          className="ml-[4px] text-center lg:w-[14px] lg:h-[15px] xl:w-[17px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[20px] 3xl:w-[23px] 3xl:h-[24px]"
                          alt="plus"
                        />
                      }
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillDeeporange300"
                    >
                      <div className="bg-transparent font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        Create new event
                      </div>
                    </Button>
                  </Column>
                  <RadioGroup
                    className="lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[62%]"
                    name="radiogroupprofileviews one"
                  >
                    <Radio
                      value="NewEvent"
                      className="font-medium lg:mr-[21px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[35px] mt-[2px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      checked={false}
                      name="radiogroupprofileviews one"
                      label="New Event"
                      variant="FillGreen7001_2"
                    ></Radio>
                    <Radio
                      value="MyEventOnly"
                      className="font-medium lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[29px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      checked={false}
                      name="radiogroupprofileviews one"
                      label="My Event Only"
                      size="sm"
                      variant="FillIndigo400"
                    ></Radio>
                    <Radio
                      value="Meeting"
                      className="font-medium lg:mr-[33px] xl:mr-[41px] 2xl:mr-[47px] 3xl:mr-[56px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[23px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      checked={false}
                      name="radiogroupprofileviews one"
                      label="Meeting"
                      size="sm"
                      variant="FillAmber300"
                    ></Radio>
                    <Radio
                      value="Error"
                      className="font-medium lg:mb-[3px] xl:mb-[4px] 3xl:mb-[5px] 2xl:mb-[5px] lg:mr-[53px] xl:mr-[66px] 2xl:mr-[75px] 3xl:mr-[89px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800"
                      inputClassName="h-[8px] mr-[5px] w-[8px]"
                      checked={false}
                      name="radiogroupprofileviews one"
                      label="Error"
                      variant="FillRed6001_2"
                    ></Radio>
                  </RadioGroup>
                  <Line className="bg-indigo_51 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
                  <Text className="columnprofileviews_one" as="h6" variant="h6">
                    Team members
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-start my-[0] w-[100%]">
                      <Text className="Two14" as="h4" variant="h4">
                        🚗
                      </Text>
                      <Text className="ProfileViews_Six" as="h5" variant="h5">
                        @Avo
                      </Text>
                      <Button
                        className="font-medium lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[49%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Lead design
                      </Button>
                    </Row>
                    <Row className="items-start justify-between my-[0] w-[100%]">
                      <Text className="Two14" as="h4" variant="h4">
                        ⚽
                      </Text>
                      <Text className="ProfileViews_Seven" as="h5" variant="h5">
                        @Nhun
                      </Text>
                      <Button
                        className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[49%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Product design
                      </Button>
                    </Row>
                    <Row className="items-start my-[0] w-[100%]">
                      <Text className="Two14" as="h4" variant="h4">
                        👑
                      </Text>
                      <Text className="ProfileViews_Six" as="h5" variant="h5">
                        @Riri
                      </Text>
                      <Button
                        className="font-medium lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[49%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Product design
                      </Button>
                    </Row>
                    <Row className="items-start my-[0] w-[100%]">
                      <Text className="Two14" as="h4" variant="h4">
                        ✈
                      </Text>
                      <Text className="ProfileViews_Six" as="h5" variant="h5">
                        @Juki
                      </Text>
                      <Button
                        className="font-medium lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[41px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[49%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Product design
                      </Button>
                    </Row>
                    <Row className="items-start my-[0] w-[100%]">
                      <Text className="Two14" as="h4" variant="h4">
                        💣
                      </Text>
                      <Text className="ProfileViews_Six" as="h5" variant="h5">
                        @Nobi
                      </Text>
                      <Button
                        className="font-medium lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[35px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[49%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray105"
                      >
                        Product design
                      </Button>
                    </Row>
                  </List>
                  <Row className="items-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[62%]">
                    <Img
                      src="images/img_plus_24X24.svg"
                      className="plus_One"
                      alt="plus One"
                    />
                    <Text className="rowplus_one" as="h5" variant="h5">
                      Add member
                    </Text>
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[75%]">
                  <Row className="items-center justify-between w-[99%]">
                    <Row className="items-end justify-between w-[42%]">
                      <Text className="rowdate" as="h2" variant="h2">
                        <span className="text-bluegray_900 font-inter font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          24{" "}
                        </span>
                        <span className="text-bluegray_900 font-inter font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          January{" "}
                        </span>
                        <span className="text-indigo_400 font-inter font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          2022
                        </span>
                      </Text>
                      <Row className="items-center justify-between w-[29%]">
                        <Button
                          className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[47px]"
                          size="lgIcn"
                          variant="icbFillGray51"
                        >
                          <Img
                            src="images/img_arrowdown_20X20.svg"
                            className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px]"
                            alt="arrowleft"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[47px]"
                          size="lgIcn"
                          variant="icbFillGray51"
                        >
                          <Img
                            src="images/img_arrowright_20X20.svg"
                            className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px]"
                            alt="arrowright"
                          />
                        </Button>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between w-[30%]">
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="FillBluegray900"
                      >
                        Day
                      </Button>
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="OutlineIndigo51"
                      >
                        Week
                      </Button>
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%]"
                        shape="CircleBorder20"
                        size="md"
                        variant="OutlineIndigo51"
                      >
                        Month
                      </Button>
                    </Row>
                  </Row>
                  <Stack className="lg:h-[457px] xl:h-[571px] 2xl:h-[642px] 3xl:h-[771px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[35px] w-[99%]">
                    <Column className="absolute border border-indigo_51 border-solid bottom-[0] items-center justify-start p-[4px] w-[100%]">
                      <Row className="bg-indigo_400 items-start lg:mb-[395px] xl:mb-[494px] 2xl:mb-[556px] 3xl:mb-[667px] mt-[1px] lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-radius4 w-[100%]">
                        <Img
                          src="images/img_oval.svg"
                          className="3xl:h-[10px] lg:h-[6px] 2xl:h-[8px] xl:h-[8px] 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] w-[2px]"
                          alt="Oval"
                        />
                        <Text
                          className="font-medium mb-[4px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          8:10 am
                        </Text>
                        <Text
                          className="font-normal 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] my-[1px] not-italic text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Daily meeting with SEO
                        </Text>
                      </Row>
                    </Column>
                    <Button
                      className="absolute font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center top-[0] w-[100%]"
                      size="lg"
                      variant="OutlineIndigo51"
                    >
                      Friday
                    </Button>
                  </Stack>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CalenderDay1EventPage;
