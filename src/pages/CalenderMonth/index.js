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
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";

const CalenderMonthPage = () => {
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
                          className="text-center lg:w-[14px] lg:h-[15px] lg:ml-[3px] xl:w-[17px] xl:h-[18px] xl:ml-[4px] 2xl:w-[20px] 2xl:h-[20px] 2xl:ml-[5px] 3xl:w-[23px] 3xl:h-[24px] 3xl:ml-[5px]"
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
                    <Row className="items-end justify-between w-[37%]">
                      <Text
                        className="mb-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_900 font-inter font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          January{" "}
                        </span>
                        <span className="text-indigo_400 font-inter font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                          2022
                        </span>
                      </Text>
                      <Row className="items-center justify-between w-[33%]">
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
                        variant="OutlineIndigo51"
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
                        variant="FillBluegray900"
                      >
                        Month
                      </Button>
                    </Row>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[35px] w-[99%]">
                    <Row className="items-center w-[100%]">
                      <Button
                        className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[14%]"
                        size="lg"
                        variant="OutlineIndigo51"
                      >
                        Sun
                      </Button>
                      <Button
                        className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[14%]"
                        size="lg"
                        variant="OutlineIndigo51"
                      >
                        Mon
                      </Button>
                      <Button
                        className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[14%]"
                        size="lg"
                        variant="OutlineIndigo51"
                      >
                        Tue
                      </Button>
                      <Button
                        className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[14%]"
                        size="lg"
                        variant="OutlineIndigo51"
                      >
                        Wed
                      </Button>
                      <Button
                        className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[14%]"
                        size="lg"
                        variant="OutlineIndigo51"
                      >
                        Thu
                      </Button>
                      <Button
                        className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[14%]"
                        size="lg"
                        variant="OutlineIndigo51"
                      >
                        Fri
                      </Button>
                      <Button
                        className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[14%]"
                        size="lg"
                        variant="OutlineIndigo51"
                      >
                        Sa
                      </Button>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-center my-[0] w-[100%]">
                        <Text
                          className="border border-indigo_51 border-solid lg:pb-[24px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[41px] lg:pl-[24px] xl:pl-[31px] 2xl:pl-[35px] 3xl:pl-[41px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:pt-[12px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] rowoval"
                          as="h5"
                          variant="h5"
                        >
                          26
                        </Text>
                        <Text className="Frame_One1" as="h5" variant="h5">
                          27
                        </Text>
                        <Text className="Frame_One1" as="h5" variant="h5">
                          28
                        </Text>
                        <Text className="Frame_One1" as="h5" variant="h5">
                          29
                        </Text>
                        <Text className="Frame_One1" as="h5" variant="h5">
                          30
                        </Text>
                        <Text className="Frame_One1" as="h5" variant="h5">
                          31
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          1
                        </Text>
                      </Row>
                      <Row className="items-center my-[0] w-[100%]">
                        <Text className="Frame_Six" as="h5" variant="h5">
                          2
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          3
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          4
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          5
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          6
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          7
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          8
                        </Text>
                      </Row>
                      <Row className="items-center my-[0] w-[100%]">
                        <Text
                          className="border border-indigo_51 border-solid lg:pb-[24px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[41px] lg:pl-[24px] xl:pl-[31px] 2xl:pl-[35px] 3xl:pl-[41px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:pt-[12px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] rowline"
                          as="h5"
                          variant="h5"
                        >
                          9
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          10
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          11
                        </Text>
                        <Column className="border border-indigo_51 border-solid p-[4px] w-[14%]">
                          <Text
                            className="lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] rowfebuarycounter"
                            as="h5"
                            variant="h5"
                          >
                            12
                          </Text>
                          <Row className="bg-indigo_400 items-start justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-radius4 w-[100%]">
                            <Radio
                              value="810am"
                              className="font-medium mb-[4px] 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700"
                              inputClassName="h-[8px] mr-[5px] w-[8px]"
                              checked={false}
                              name="ProfileViewsOne"
                              label="810 am"
                              variant="FillWhiteA700"
                            ></Radio>
                            <Text
                              className="rowprofileviews_one"
                              as="h6"
                              variant="h6"
                            >
                              Mêt
                            </Text>
                          </Row>
                        </Column>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          13
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          14
                        </Text>
                        <Text className="Frame_Six" as="h5" variant="h5">
                          15
                        </Text>
                      </Row>
                    </List>
                    <Row className="items-center w-[100%]">
                      <Text className="Frame_Six" as="h5" variant="h5">
                        16
                      </Text>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        17
                      </Text>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        18
                      </Text>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        19
                      </Text>
                      <List
                        className="grid grid-cols-2 min-h-[auto] w-[29%]"
                        orientation="horizontal"
                      >
                        <Column className="border border-indigo_51 border-solid justify-start p-[4px] w-[100%]">
                          <Text
                            className="columnprofileviews_thirteen"
                            as="h5"
                            variant="h5"
                          >
                            20
                          </Text>
                          <Row className="bg-deep_orange_300 items-start justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-radius4 w-[100%]">
                            <Radio
                              value="810am"
                              className="font-medium mb-[4px] 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700"
                              inputClassName="h-[8px] mr-[5px] w-[8px]"
                              checked={false}
                              name="ProfileViewsOneOne"
                              label="810 am"
                              variant="FillWhiteA700"
                            ></Radio>
                            <Text
                              className="rowprofileviews_one"
                              as="h6"
                              variant="h6"
                            >
                              Mêt
                            </Text>
                          </Row>
                        </Column>
                        <Column className="border border-indigo_51 border-solid justify-start p-[4px] w-[100%]">
                          <Text
                            className="lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] rowfebuarycounter"
                            as="h5"
                            variant="h5"
                          >
                            21
                          </Text>
                          <Row className="bg-red_600 items-start justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] mr-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-radius4 w-[99%]">
                            <Radio
                              value="810am"
                              className="font-medium mb-[4px] 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700"
                              inputClassName="h-[8px] mr-[5px] w-[8px]"
                              checked={false}
                              name="ProfileViewsOneTwo"
                              label="810 am"
                              variant="FillWhiteA700"
                            ></Radio>
                            <Text
                              className="rowprofileviews_one"
                              as="h6"
                              variant="h6"
                            >
                              Mêt
                            </Text>
                          </Row>
                        </Column>
                      </List>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        22
                      </Text>
                    </Row>
                    <Row className="items-center w-[100%]">
                      <Text
                        className="border border-indigo_51 border-solid lg:pb-[24px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[41px] lg:pl-[24px] xl:pl-[31px] 2xl:pl-[35px] 3xl:pl-[41px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:pt-[12px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] rowline"
                        as="h5"
                        variant="h5"
                      >
                        23
                      </Text>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        24
                      </Text>
                      <Column className="border border-indigo_51 border-solid p-[4px] w-[14%]">
                        <Text
                          className="columnprofileviews_thirteen"
                          as="h5"
                          variant="h5"
                        >
                          25
                        </Text>
                        <Row className="bg-amber_300 items-start justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:p-[3px] xl:p-[4px] 3xl:p-[5px] 2xl:p-[5px] rounded-radius4 w-[100%]">
                          <Radio
                            value="810am"
                            className="font-medium mb-[4px] 2xl:ml-[10px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700"
                            inputClassName="h-[8px] mr-[5px] w-[8px]"
                            checked={false}
                            name="ProfileViewsSixteen"
                            label="810 am"
                            variant="FillWhiteA700"
                          ></Radio>
                          <Text
                            className="rowprofileviews_one"
                            as="h6"
                            variant="h6"
                          >
                            Mêt
                          </Text>
                        </Row>
                      </Column>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        26
                      </Text>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        27
                      </Text>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        28
                      </Text>
                      <Text className="Frame_Six" as="h5" variant="h5">
                        29
                      </Text>
                    </Row>
                    <Row className="items-center w-[100%]">
                      <Text className="Frame_Six" as="h5" variant="h5">
                        30
                      </Text>
                      <Text className="Frame_One1" as="h5" variant="h5">
                        1
                      </Text>
                      <Text className="Frame_One1" as="h5" variant="h5">
                        2
                      </Text>
                      <Text className="Frame_One1" as="h5" variant="h5">
                        3
                      </Text>
                      <Text className="Frame_One1" as="h5" variant="h5">
                        4
                      </Text>
                      <Text className="Frame_One1" as="h5" variant="h5">
                        5
                      </Text>
                      <Text className="Frame_One1" as="h5" variant="h5">
                        6
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CalenderMonthPage;
