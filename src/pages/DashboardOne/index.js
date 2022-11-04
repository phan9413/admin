import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Button,
  SelectBox,
  List,
  Stack,
} from "components";
import Header from "components/Header/Header";

const DashboardOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="w-[17%]">
            <div className="">
              <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
                <Img src="images/img_logo.svg" className="Logo" alt="Logo" />
                <Column className="justify-start lg:mb-[457px] xl:mb-[572px] 2xl:mb-[643px] 3xl:mb-[772px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] w-[88%]">
                  <Row className="items-center w-[71%]">
                    <Img
                      src="images/img_grid.svg"
                      className="test_grid"
                      alt="grid"
                    />
                    <Text className="rowgrid" as="h6" variant="h6">
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[66%]">
                    <Img
                      src="images/img_user_20X20.svg"
                      className="test_grid"
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
                        className="sort"
                        alt="sort"
                      />
                      <Text className="rowsort" as="h6" variant="h6">
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
                      className="test_grid"
                      alt="folder"
                    />
                    <Text className="rowuser" as="h6" variant="h6">
                      File
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[63%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="test_grid"
                      alt="calendar"
                    />
                    <Text className="rowcalendar" as="h6" variant="h6">
                      Calender
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[46%]">
                    <Img
                      src="images/img_trash.svg"
                      className="test_grid"
                      alt="trash"
                    />
                    <Text className="rowtrash" as="h6" variant="h6">
                      Shop
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[43%]">
                    <Img
                      src="images/img_mail_20X20.svg"
                      className="test_grid"
                      alt="mail"
                    />
                    <Text className="rowuser" as="h6" variant="h6">
                      Cart
                    </Text>
                  </Row>
                  <Row className="items-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[61%]">
                    <Column className="bg-white_A700 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-start px-[3px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                      <div className="bg-bluegray_400 rounded-radius50 test_grid"></div>
                    </Column>
                    <Text className="rowvector" as="h6" variant="h6">
                      Settings
                    </Text>
                  </Row>
                </Column>
              </Column>
            </div>
          </aside>
          <Line className="bg-indigo_51 xl:h-[1046px] 2xl:h-[1176px] 3xl:h-[1411px] lg:h-[836px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 font-poppins items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Row className="items-center justify-between mt-[1px] w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Overview
                </Text>
                <Row className="font-inter items-center justify-between w-[16%]">
                  <Button
                    className="flex items-center justify-center w-[24%]"
                    shape="icbRoundedBorder4"
                    size="xlIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_download.svg"
                      className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                      alt="download"
                    />
                  </Button>
                  <SelectBox
                    className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800 w-[69%]"
                    placeholderClassName="text-bluegray_800"
                    name="dropdown"
                    placeholder="Last week"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_20X20.svg"
                        className="lg:w-[14px] lg:h-[15px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[19px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillWhiteA700"
                  ></SelectBox>
                </Row>
              </Row>
              <List
                className="font-inter lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-3 min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                orientation="horizontal"
              >
                <Row className="bg-white_A700 items-center lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius4 shadow-bs w-[100%]">
                  <Img
                    src="images/img_group.svg"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[22%]"
                    alt="Group One"
                  />
                  <Stack className="lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[53%]">
                    <Text
                      className="absolute bottom-[0] left-[7%] rowoval"
                      as="h6"
                      variant="h6"
                    >
                      Total income
                    </Text>
                    <div className="absolute bg-indigo_401 bottom-[6%] lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] left-[0] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                    <Stack className="absolute lg:h-[28px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] top-[0] w-[100%]">
                      <Text
                        className="absolute left-[0] text-bluegray_800 top-[0] w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        $10.000
                      </Text>
                      <Stack className="absolute lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] inset-y-[0] my-[auto] right-[0] w-[31%]">
                        <Stack className="bg-green_700_63 pr-[2px] rounded-radius4 top-[0] specular_Nine">
                          <Img
                            src="images/img_arrowup.svg"
                            className="arrowup"
                            alt="arrowup"
                          />
                        </Stack>
                        <Text
                          className="absolute bottom-[0] font-normal inset-x-[0] lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] mx-[auto] not-italic text-green_700 w-[38%]"
                          as="h6"
                          variant="h6"
                        >
                          0.2%
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </Row>
                <Row className="bg-white_A700 items-center justify-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[100%]">
                  <Img
                    src="images/img_group_26X70.svg"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[22%]"
                    alt="Group Two"
                  />
                  <Row className="items-start lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mr-[15px] xl:mr-[19px] 2xl:mr-[22px] 3xl:mr-[26px] py-[2px] w-[52%]">
                    <Column className="justify-start mt-[3px] w-[69%]">
                      <Text
                        className="text-bluegray_800 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        $10.000
                      </Text>
                      <Row className="items-start justify-evenly 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[96%]">
                        <div className="bg-indigo_401 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[2px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                        <Text className="rowoval" as="h6" variant="h6">
                          Total Expenses
                        </Text>
                      </Row>
                    </Column>
                    <Stack className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] mt-[4px] w-[31%]">
                      <Stack className="bg-red_600_63 pr-[2px] rounded-radius4 top-[0] specular_Nine">
                        <Img
                          src="images/img_arrowdown.svg"
                          className="arrowup"
                          alt="arrowdown"
                        />
                      </Stack>
                      <Text
                        className="absolute bottom-[0] font-normal inset-x-[0] lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] mx-[auto] not-italic text-red_600 w-[38%]"
                        as="h6"
                        variant="h6"
                      >
                        0.2%
                      </Text>
                    </Stack>
                  </Row>
                </Row>
                <Row className="bg-white_A700 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius4 shadow-bs w-[100%]">
                  <Img
                    src="images/img_group.svg"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[22%]"
                    alt="Group Three"
                  />
                  <Stack className="lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mr-[12px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mt-[1px] w-[53%]">
                    <Text
                      className="absolute bottom-[0] left-[7%] rowoval"
                      as="h6"
                      variant="h6"
                    >
                      Total Revenue
                    </Text>
                    <div className="absolute bg-indigo_401 bottom-[8%] lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] left-[0] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                    <Stack className="absolute lg:h-[28px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] top-[0] w-[100%]">
                      <Text
                        className="absolute left-[0] text-bluegray_800 top-[0] w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        $10.000
                      </Text>
                      <Stack className="absolute lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] inset-y-[0] my-[auto] right-[0] w-[31%]">
                        <Stack className="bg-green_700_63 pr-[2px] rounded-radius4 top-[0] specular_Nine">
                          <Img
                            src="images/img_arrowup.svg"
                            className="arrowup"
                            alt="arrowup One"
                          />
                        </Stack>
                        <Text
                          className="absolute bottom-[0] font-normal inset-x-[0] lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] mx-[auto] not-italic text-green_700 w-[38%]"
                          as="h6"
                          variant="h6"
                        >
                          0.2%
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </Row>
              </List>
              <Row className="font-inter items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Column className="bg-white_A700 items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[66%]">
                  <Row className="items-center justify-between w-[98%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Statistics
                    </Text>
                    <Button
                      className="flex items-center justify-center text-center w-[25%]"
                      leftIcon={
                        <Img
                          src="images/img_calendar_20X20.svg"
                          className="text-center lg:w-[14px] lg:h-[15px] lg:mr-[7px] xl:w-[17px] xl:h-[18px] xl:mr-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[12px]"
                          alt="calendar"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineBluegray200"
                    >
                      <div className="bg-transparent font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        13 Aug - 20 Aug
                      </div>
                    </Button>
                  </Row>
                  <Row className="items-start xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[98%]">
                    <Column className="justify-start pr-[1px] pt-[1px] w-[16%]">
                      <Row className="items-start w-[50%]">
                        <div className="bg-indigo_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[3px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                        <Text className="rowoval_three" variant="body1">
                          Income
                        </Text>
                      </Row>
                      <Row className="items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[62%]">
                        <div className="bg-amber_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                        <Text className="rowoval_three" variant="body1">
                          Expenses
                        </Text>
                      </Row>
                    </Column>
                    <Column className="items-end justify-start pt-[3px] w-[84%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="items-end w-[9%]">
                          <Text className="rowoval" variant="body1">
                            1,400
                          </Text>
                          <Text
                            className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rowoval"
                            variant="body1"
                          >
                            1,200
                          </Text>
                          <Text
                            className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rowoval"
                            variant="body1"
                          >
                            1,000
                          </Text>
                          <Text className="SEP_Three" variant="body1">
                            800
                          </Text>
                          <Text className="SEP_Four" variant="body1">
                            600
                          </Text>
                          <Text className="SEP_Four" variant="body1">
                            400
                          </Text>
                          <Text className="SEP_Four" variant="body1">
                            200
                          </Text>
                          <Text className="SEP_Four" variant="body1">
                            0
                          </Text>
                        </Column>
                        <Stack
                          className="bg-cover bg-repeat font-poppins lg:h-[162px] xl:h-[202px] 2xl:h-[228px] 3xl:h-[273px] lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] w-[91%]"
                          style={{
                            backgroundImage: "url('images/img_group8199.svg')",
                          }}
                        >
                          <Img
                            src="images/img_frame.svg"
                            className="absolute bottom-[0] lg:h-[147px] xl:h-[184px] 2xl:h-[207px] 3xl:h-[248px] inset-x-[0] mx-[auto] w-[85%]"
                            alt="Frame"
                          />
                          <Stack
                            className="absolute bg-cover bg-repeat 3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] left-[0] xl:px-[11px] 2xl:px-[13px] 3xl:px-[15px] lg:px-[9px] shadow-bs2 top-[12%] w-[29%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group_84X154.svg')",
                            }}
                          >
                            <Row className="absolute items-start justify-center left-[0] top-[8%] w-[31%]">
                              <div className="bg-indigo_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                              <Text className="rowoval_five" variant="body1">
                                200.0
                              </Text>
                            </Row>
                            <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[74%]">
                              <Row className="items-start justify-end ml-[auto] w-[42%]">
                                <div className="bg-amber_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                                <Text className="rowoval_five" variant="body1">
                                  2,000
                                </Text>
                              </Row>
                              <Text
                                className="lg:mr-[13px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-bluegray_400 w-[auto]"
                                variant="body2"
                              >
                                21 September, 2021
                              </Text>
                            </Column>
                          </Stack>
                        </Stack>
                      </Row>
                      <Row className="items-start justify-end ml-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] pb-[2px] px-[2px] w-[91%]">
                        <Text className="SEP_Eight" variant="body1">
                          Mon
                        </Text>
                        <Text
                          className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] SEP_Eight"
                          variant="body1"
                        >
                          Tue
                        </Text>
                        <Text
                          className="lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] SEP_Eight"
                          variant="body1"
                        >
                          Wed
                        </Text>
                        <Text
                          className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] SEP_Five"
                          variant="body1"
                        >
                          Thu
                        </Text>
                        <Text
                          className="lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] Price_One"
                          variant="body1"
                        >
                          Fri
                        </Text>
                        <Text
                          className="lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] SEP_Five"
                          variant="body1"
                        >
                          Sat
                        </Text>
                        <Text
                          className="lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mr-[23px] xl:mr-[29px] 2xl:mr-[33px] 3xl:mr-[39px] SEP_Five"
                          variant="body1"
                        >
                          Sun
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Stack className="lg:h-[292px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] w-[32%]">
                  <Stack className="absolute xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[83px] top-[23%] w-[100%]">
                    <Img
                      src="images/img_ellipse.svg"
                      className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] right-[0] top-[0] w-[6%]"
                      alt="Ellipse One"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="absolute bottom-[0] 2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] inset-x-[0] w-[100%]"
                      alt="Vector One"
                    />
                  </Stack>
                  <Stack className="absolute lg:h-[151px] xl:h-[188px] 2xl:h-[212px] 3xl:h-[254px] top-[0] w-[100%]">
                    <div className="absolute bg-deep_orange_300 lg:h-[151px] xl:h-[188px] 2xl:h-[212px] 3xl:h-[254px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] shadow-bs w-[100%]"></div>
                    <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[14%] my-[auto] w-[66%]">
                      <Stack className="lg:h-[117px] xl:h-[146px] 2xl:h-[165px] 3xl:h-[197px] w-[100%]">
                        <Stack className="absolute bottom-[0] xl:h-[124px] 2xl:h-[140px] 3xl:h-[167px] lg:h-[99px] left-[0] w-[90%]">
                          <Stack className="absolute xl:h-[124px] 2xl:h-[140px] 3xl:h-[167px] lg:h-[99px] right-[0] w-[100%]">
                            <Column
                              className="absolute bg-cover bg-repeat lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-start left-[0] top-[20%] lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]"
                              style={{
                                backgroundImage: "url('images/img_sphere.png')",
                              }}
                            >
                              <Column className="bg-white_A700 lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-start w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] items-center justify-start w-[100%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_specular.png')",
                                  }}
                                >
                                  <Stack
                                    className="bg-cover bg-repeat lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_specular.png')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_specular.png"
                                      className="absolute lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] lg:w-[43px] xl:w-[54px] 2xl:w-[61px] 3xl:w-[73px]"
                                      alt="imageFour"
                                    />
                                  </Stack>
                                </Column>
                              </Column>
                            </Column>
                            <Stack className="absolute xl:h-[124px] 2xl:h-[140px] 3xl:h-[167px] lg:h-[99px] right-[0] w-[79%]">
                              <Column
                                className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end right-[0] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group8133.png')",
                                }}
                              >
                                <Stack
                                  className="bg-cover bg-repeat xl:h-[100px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[80px] px-[3px] w-[100%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group8133.png')",
                                  }}
                                >
                                  <Stack className="absolute 2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] inset-y-[0] my-[auto] right-[4%] w-[64%]">
                                    <Row className="absolute items-start justify-between w-[100%]">
                                      <Img
                                        src="images/img_stand.png"
                                        className="3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] w-[27%]"
                                        alt="stand"
                                      />
                                      <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] w-[47%]">
                                        <Img
                                          src="images/img_shadow.png"
                                          className="absolute bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] w-[100%]"
                                          alt="shadow"
                                        />
                                        <Column
                                          className="absolute bg-cover bg-repeat bottom-[4%] items-center justify-start left-[18%] w-[40%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_1_19X25.png')",
                                          }}
                                        >
                                          <div className="bg-orange_A100 lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] rounded-radius997 w-[100%]"></div>
                                        </Column>
                                        <Column
                                          className="absolute bg-cover bg-repeat items-center justify-start right-[6%] top-[0] w-[76%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_2.png')",
                                          }}
                                        >
                                          <Column className="bg-gray_101 items-center justify-start rounded-radius1165 w-[100%]">
                                            <Column
                                              className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_specular_23X47.png')",
                                              }}
                                            >
                                              <Stack
                                                className="bg-cover bg-repeat lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] w-[100%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_specular_23X47.png')",
                                                }}
                                              >
                                                <Img
                                                  src="images/img_specular_23X47.png"
                                                  className="absolute lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] w-[100%]"
                                                  alt="specular"
                                                />
                                              </Stack>
                                            </Column>
                                          </Column>
                                        </Column>
                                      </Stack>
                                    </Row>
                                    <div className="absolute bg-gray_101 bottom-[19%] lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] left-[0] w-[27%]"></div>
                                  </Stack>
                                  <Column
                                    className="absolute bg-cover bg-repeat items-center justify-start left-[27%] top-[0] w-[17%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group8134.png')",
                                    }}
                                  >
                                    <Stack
                                      className="bg-cover bg-repeat 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] w-[100%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group8134.png')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_group8134.png"
                                        className="absolute 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] w-[100%]"
                                        alt="specular One"
                                      />
                                    </Stack>
                                  </Column>
                                </Stack>
                              </Column>
                              <Column
                                className="absolute bg-cover bg-repeat items-center justify-start top-[0] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_screen.png')",
                                }}
                              >
                                <Column className="bg-gray_101 items-center justify-start w-[100%]">
                                  <Column
                                    className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group8137.png')",
                                    }}
                                  >
                                    <Stack
                                      className="bg-cover bg-repeat xl:h-[103px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[82px] w-[100%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group8137.png')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_group8137.png"
                                        className="absolute xl:h-[103px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[82px] w-[100%]"
                                        alt="specular Two"
                                      />
                                    </Stack>
                                  </Column>
                                </Column>
                              </Column>
                            </Stack>
                          </Stack>
                          <Img
                            src="images/img_sceneshadow.png"
                            className="absolute xl:h-[102px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[82px] right-[0] top-[3%] w-[79%]"
                            alt="SceneShadow"
                          />
                        </Stack>
                        <Stack className="absolute xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] lg:h-[96px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] right-[0] top-[0] w-[92%]">
                          <Stack className="absolute bottom-[0] 2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] right-[0] w-[86%]">
                            <Stack className="absolute bottom-[0] 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] left-[0] w-[86%]">
                              <Column
                                className="absolute bg-cover bg-repeat items-center justify-start right-[1%] w-[98%]"
                                style={{
                                  backgroundImage: "url('images/img_base.png')",
                                }}
                              >
                                <Column className="bg-blue_50 items-center justify-start w-[100%]">
                                  <Column
                                    className="bg-cover bg-repeat items-center justify-start lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] w-[100%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group8748.png')",
                                    }}
                                  >
                                    <Column className="items-center justify-start w-[100%]">
                                      <Column
                                        className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group8143.png')",
                                        }}
                                      >
                                        <Column className="bg-blue_50 items-center justify-start w-[100%]">
                                          <Stack
                                            className="bg-cover bg-repeat 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] px-[3px] w-[100%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_dots.png')",
                                            }}
                                          >
                                            <Stack className="absolute bottom-[0] lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[1%] w-[14%]">
                                              <Stack className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] left-[0] w-[74%]">
                                                <Img
                                                  src="images/img_shadow_13X17.png"
                                                  className="shadow_One"
                                                  alt="shadow One"
                                                />
                                                <Column
                                                  className="absolute bg-cover bg-repeat lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] justify-start left-[6%] px-[1px] top-[0] lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group8150.png')",
                                                  }}
                                                >
                                                  <Column className="bg-teal_301 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center justify-start mb-[1px] ml-[1px] px-[1px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]">
                                                    <Column
                                                      className="bg-cover bg-repeat xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center justify-start w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group8151.png')",
                                                      }}
                                                    >
                                                      <Stack
                                                        className="bg-cover bg-repeat xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group8151.png')",
                                                        }}
                                                      >
                                                        <Img
                                                          src="images/img_group8151.png"
                                                          className="specular_Three"
                                                          alt="specular Three"
                                                        />
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                </Column>
                                              </Stack>
                                              <Stack className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] right-[0] w-[74%]">
                                                <Img
                                                  src="images/img_shadow_13X17.png"
                                                  className="shadow_One"
                                                  alt="shadow Two"
                                                />
                                                <Column
                                                  className="absolute bg-cover bg-repeat lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] justify-start left-[6%] px-[1px] top-[0] lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group8150.png')",
                                                  }}
                                                >
                                                  <Column className="bg-orange_200 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center justify-start mb-[1px] px-[1px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]">
                                                    <Column
                                                      className="bg-cover bg-repeat xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center justify-start w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group8151.png')",
                                                      }}
                                                    >
                                                      <Stack
                                                        className="bg-cover bg-repeat xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group8151.png')",
                                                        }}
                                                      >
                                                        <Img
                                                          src="images/img_group8151.png"
                                                          className="specular_Three"
                                                          alt="specular Four"
                                                        />
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                </Column>
                                              </Stack>
                                            </Stack>
                                            <div className="absolute bottom-[0] left-[8%] overflow-x-auto w-[10%]">
                                              <Stack className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]">
                                                <Img
                                                  src="images/img_shadow_13X17.png"
                                                  className="shadow_One"
                                                  alt="shadow Three"
                                                />
                                                <Column
                                                  className="absolute bg-cover bg-repeat lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] justify-start left-[6%] px-[1px] top-[0] lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group8150.png')",
                                                  }}
                                                >
                                                  <Column className="bg-red_A200 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center justify-start mb-[1px] px-[1px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]">
                                                    <Column
                                                      className="bg-cover bg-repeat xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] items-center justify-start w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group8151.png')",
                                                      }}
                                                    >
                                                      <Stack
                                                        className="bg-cover bg-repeat xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group8151.png')",
                                                        }}
                                                      >
                                                        <Img
                                                          src="images/img_group8151.png"
                                                          className="specular_Three"
                                                          alt="specular Five"
                                                        />
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                </Column>
                                              </Stack>
                                            </div>
                                          </Stack>
                                        </Column>
                                      </Column>
                                      <Stack
                                        className="bg-cover bg-repeat lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] px-[3px] w-[100%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_search_16X163.png')",
                                        }}
                                      >
                                        <Stack className="absolute bottom-[0] lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] inset-x-[0] mx-[auto] w-[94%]">
                                          <Img
                                            src="images/img_shadow_18X154.png"
                                            className="absolute lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] top-[6%] w-[100%]"
                                            alt="shadow Four"
                                          />
                                          <Column
                                            className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[97%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group8144.png')",
                                            }}
                                          >
                                            <Column className="bg-white_A700 items-center justify-start w-[100%]">
                                              <Column
                                                className="bg-cover bg-repeat justify-end p-[1px] w-[100%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group8145.png')",
                                                }}
                                              >
                                                <Column
                                                  className="bg-cover bg-repeat lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] justify-start ml-[2px] mt-[1px] pr-[1px] lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_loupe.png')",
                                                  }}
                                                >
                                                  <Column
                                                    className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group8146.png')",
                                                    }}
                                                  >
                                                    <Stack
                                                      className="bg-cover bg-repeat lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group8147.svg')",
                                                      }}
                                                    >
                                                      <Img
                                                        src="images/img_specular_6X5.png"
                                                        className="absolute lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] w-[100%]"
                                                        alt="specular Six"
                                                      />
                                                    </Stack>
                                                  </Column>
                                                </Column>
                                              </Column>
                                            </Column>
                                          </Column>
                                        </Stack>
                                        <Stack className="absolute bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] left-[9%] w-[18%]">
                                          <Img
                                            src="images/img_shadow_11X29.png"
                                            className="absolute xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] top-[9%] w-[100%]"
                                            alt="shadow Five"
                                          />
                                          <Column
                                            className="absolute bg-cover bg-repeat items-center justify-start left-[3%] p-[1px] top-[0] w-[62%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group8148.png')",
                                            }}
                                          >
                                            <Stack className="bg-blue_50 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] mb-[1px] w-[100%]">
                                              <Img
                                                src="images/img_specular_2X17.png"
                                                className="specular_Seven"
                                                alt="specular Seven"
                                              />
                                            </Stack>
                                          </Column>
                                        </Stack>
                                      </Stack>
                                    </Column>
                                    <Row className="items-start mt-[1px] w-[94%]">
                                      <div className="mt-[2px] overflow-x-auto w-[78%]">
                                        <Stack className="3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[95px] w-[100%]">
                                          <Img
                                            src="images/img_shadow_94X119.png"
                                            className="absolute 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[95px] top-[1%] w-[100%]"
                                            alt="shadow Six"
                                          />
                                          <Column
                                            className="absolute bg-cover bg-repeat items-center justify-start left-[1%] top-[0] w-[82%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group8178.png')",
                                            }}
                                          >
                                            <Column className="bg-white_A700 items-center justify-start w-[100%]">
                                              <Stack
                                                className="bg-cover bg-repeat lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] px-[2px] w-[100%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group8179.png')",
                                                }}
                                              >
                                                <Stack className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-[0] justify-center m-[auto] w-[71%]">
                                                  <Stack className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[86%]">
                                                    <Stack className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[83%]">
                                                      <Stack className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[80%]">
                                                        <Stack className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] left-[0] w-[78%]">
                                                          <Stack className="absolute bottom-[0] lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] left-[0] w-[68%]">
                                                            <Column
                                                              className="absolute bg-cover bg-repeat bottom-[4%] justify-start left-[0] p-[1px] w-[52%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_1_19X11.png')",
                                                              }}
                                                            >
                                                              <Column
                                                                className="bg-cover bg-repeat items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group8180.png')",
                                                                }}
                                                              >
                                                                <Stack
                                                                  className="bg-cover bg-repeat lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group8181.svg')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    src="images/img_specular_13X5.png"
                                                                    className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                                    alt="specular Eight"
                                                                  />
                                                                </Stack>
                                                              </Column>
                                                            </Column>
                                                            <Column
                                                              className="absolute bg-cover bg-repeat justify-start p-[1px] right-[0] w-[52%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_2_28X11.png')",
                                                              }}
                                                            >
                                                              <Column
                                                                className="bg-cover bg-repeat items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group8182.png')",
                                                                }}
                                                              >
                                                                <Stack
                                                                  className="bg-cover bg-repeat lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group8181.svg')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    src="images/img_specular_21X5.png"
                                                                    className="specular_Nine"
                                                                    alt="specular Nine"
                                                                  />
                                                                </Stack>
                                                              </Column>
                                                            </Column>
                                                          </Stack>
                                                          <Column
                                                            className="absolute bg-cover bg-repeat justify-start p-[1px] right-[0] w-[35%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_3.png')",
                                                            }}
                                                          >
                                                            <Column
                                                              className="bg-cover bg-repeat items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[56%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group8184.png')",
                                                              }}
                                                            >
                                                              <Stack
                                                                className="bg-cover bg-repeat lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group8181.svg')",
                                                                }}
                                                              >
                                                                <Img
                                                                  src="images/img_specular_30X5.png"
                                                                  className="absolute lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"
                                                                  alt="specular Ten"
                                                                />
                                                              </Stack>
                                                            </Column>
                                                          </Column>
                                                        </Stack>
                                                        <Column
                                                          className="absolute bg-cover bg-repeat bottom-[3%] justify-start p-[1px] right-[0] w-[28%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_4.png')",
                                                          }}
                                                        >
                                                          <Column
                                                            className="bg-cover bg-repeat items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group8180.png')",
                                                            }}
                                                          >
                                                            <Stack
                                                              className="bg-cover bg-repeat lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group8181.svg')",
                                                              }}
                                                            >
                                                              <Img
                                                                src="images/img_specular_13X5.png"
                                                                className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[100%]"
                                                                alt="specular Eleven"
                                                              />
                                                            </Stack>
                                                          </Column>
                                                        </Column>
                                                      </Stack>
                                                      <Column
                                                        className="absolute bg-cover bg-repeat bottom-[0] justify-start p-[1px] right-[0] w-[22%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_5.png')",
                                                        }}
                                                      >
                                                        <Column
                                                          className="bg-cover bg-repeat items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group8182.png')",
                                                          }}
                                                        >
                                                          <Stack
                                                            className="bg-cover bg-repeat lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group8181.svg')",
                                                            }}
                                                          >
                                                            <Img
                                                              src="images/img_specular_21X5.png"
                                                              className="specular_Nine"
                                                              alt="specular Twelve"
                                                            />
                                                          </Stack>
                                                        </Column>
                                                      </Column>
                                                    </Stack>
                                                    <Column
                                                      className="absolute bg-cover bg-repeat bottom-[0] justify-start p-[1px] right-[0] w-[18%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_6.png')",
                                                      }}
                                                    >
                                                      <Column
                                                        className="bg-cover bg-repeat items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] ml-[1px] w-[56%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group8182.png')",
                                                        }}
                                                      >
                                                        <Stack
                                                          className="bg-cover bg-repeat lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group8181.svg')",
                                                          }}
                                                        >
                                                          <Img
                                                            src="images/img_specular_21X5.png"
                                                            className="specular_Nine"
                                                            alt="specular Thirteen"
                                                          />
                                                        </Stack>
                                                      </Column>
                                                    </Column>
                                                  </Stack>
                                                  <Column
                                                    className="absolute bg-cover bg-repeat justify-start p-[1px] right-[0] w-[16%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_7.png')",
                                                    }}
                                                  >
                                                    <Column
                                                      className="bg-cover bg-repeat items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[56%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group8184.png')",
                                                      }}
                                                    >
                                                      <Stack
                                                        className="bg-cover bg-repeat lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group8181.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          src="images/img_specular_30X5.png"
                                                          className="absolute lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"
                                                          alt="specular Fourteen"
                                                        />
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                </Stack>
                                                <Img
                                                  src="images/img_menu.svg"
                                                  className="absolute lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] inset-[0] justify-center m-[auto] w-[96%]"
                                                  alt="menu"
                                                />
                                              </Stack>
                                            </Column>
                                          </Column>
                                        </Stack>
                                      </div>
                                      <Column className="items-center justify-start w-[35%]">
                                        <Stack className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]">
                                          <Img
                                            src="images/img_shadow_27X49.png"
                                            className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] inset-[0] justify-center m-[auto] w-[91%]"
                                            alt="shadow Seven"
                                          />
                                          <Column
                                            className="absolute bg-cover bg-repeat items-center justify-end p-[2px] w-[100%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group8168.png')",
                                            }}
                                          >
                                            <Row
                                              className="bg-cover bg-repeat items-start justify-end mt-[1px] p-[1px] w-[94%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_1.svg')",
                                              }}
                                            >
                                              <Column
                                                className="bg-cover bg-repeat lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] px-[1px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_color.png')",
                                                }}
                                              >
                                                <Column
                                                  className="bg-cover bg-repeat lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] items-center justify-start mb-[1px] ml-[1px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_bg.png')",
                                                  }}
                                                >
                                                  <Stack className="bg-blue_A200 lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]">
                                                    <Column className="absolute bottom-[8%] inset-x-[0] items-center justify-start mx-[auto] w-[77%]">
                                                      <Column
                                                        className="bg-cover bg-repeat lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] items-center justify-start lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_head.png')",
                                                        }}
                                                      >
                                                        <div className="bg-white_A700 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                                                      </Column>
                                                      <Column
                                                        className="bg-cover bg-repeat items-center justify-start mt-[1px] w-[100%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_body.png')",
                                                        }}
                                                      >
                                                        <div className="bg-white_A700 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]"></div>
                                                      </Column>
                                                    </Column>
                                                    <Stack
                                                      className="absolute bg-cover bg-repeat lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group8171.png')",
                                                      }}
                                                    >
                                                      <Img
                                                        src="images/img_group8171.png"
                                                        className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]"
                                                        alt="specular Fifteen"
                                                      />
                                                    </Stack>
                                                  </Stack>
                                                </Column>
                                              </Column>
                                              <Stack className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] ml-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[58%]">
                                                <Stack className="absolute bottom-[0] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[100%]">
                                                  <Img
                                                    src="images/img_shadow_11X29.png"
                                                    className="shadow_Eight"
                                                    alt="shadow Eight"
                                                  />
                                                  <Column
                                                    className="absolute bg-cover bg-repeat items-center justify-start left-[4%] p-[1px] top-[0] w-[62%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group8172.png')",
                                                    }}
                                                  >
                                                    <Column className="bg-bluegray_300 items-center justify-start mb-[1px] w-[100%]">
                                                      <Column
                                                        className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_specular_2X17.png')",
                                                        }}
                                                      >
                                                        <Stack
                                                          className="bg-cover bg-repeat xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_specular_2X17.png')",
                                                          }}
                                                        >
                                                          <Img
                                                            src="images/img_specular_2X17.png"
                                                            className="specular_Seven"
                                                            alt="specular Sixteen"
                                                          />
                                                        </Stack>
                                                      </Column>
                                                    </Column>
                                                  </Column>
                                                </Stack>
                                                <Stack className="absolute 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] top-[0] w-[100%]">
                                                  <Img
                                                    src="images/img_shadow_11X29.png"
                                                    className="shadow_Eight"
                                                    alt="shadow Nine"
                                                  />
                                                  <Column
                                                    className="absolute bg-cover bg-repeat items-center justify-start left-[4%] p-[1px] top-[0] w-[62%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group8172.png')",
                                                    }}
                                                  >
                                                    <Column className="bg-bluegray_300 items-center justify-start mb-[1px] w-[100%]">
                                                      <Column
                                                        className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_specular_2X17.png')",
                                                        }}
                                                      >
                                                        <Stack
                                                          className="bg-cover bg-repeat xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_specular_2X17.png')",
                                                          }}
                                                        >
                                                          <Img
                                                            src="images/img_specular_2X17.png"
                                                            className="specular_Seven"
                                                            alt="specular Seventeen"
                                                          />
                                                        </Stack>
                                                      </Column>
                                                    </Column>
                                                  </Column>
                                                </Stack>
                                              </Stack>
                                            </Row>
                                          </Column>
                                        </Stack>
                                        <Stack className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[91%]">
                                          <Column
                                            className="absolute bg-cover bg-repeat items-center justify-start p-[1px] w-[100%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group8164.png')",
                                            }}
                                          >
                                            <Stack
                                              className="bg-cover bg-repeat xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mb-[1px] px-[4px] w-[100%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group8165.png')",
                                              }}
                                            >
                                              <Img
                                                src="images/img_eye_3X5.svg"
                                                className="absolute xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] inset-y-[0] my-[auto] right-[2%] w-[11%]"
                                                alt="Eye"
                                              />
                                            </Stack>
                                          </Column>
                                          <Stack className="absolute bottom-[0] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] left-[6%] w-[53%]">
                                            <Img
                                              src="images/img_shadow_11X29.png"
                                              className="shadow_Eight"
                                              alt="shadow Ten"
                                            />
                                            <Column
                                              className="absolute bg-cover bg-repeat items-center justify-start left-[4%] p-[1px] top-[0] w-[62%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group8166.png')",
                                              }}
                                            >
                                              <Stack
                                                className="bg-cover bg-repeat xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] my-[1px] w-[100%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group8167.svg')",
                                                }}
                                              >
                                                <Img
                                                  src="images/img_specular_2X17.png"
                                                  className="specular_Seven"
                                                  alt="specular Eighteen"
                                                />
                                              </Stack>
                                            </Column>
                                          </Stack>
                                        </Stack>
                                        <Img
                                          src="images/img_menu_11X47.svg"
                                          className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] mt-[1px] w-[87%]"
                                          alt="menu One"
                                        />
                                        <Stack className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[2px] w-[91%]">
                                          <Column
                                            className="absolute bg-cover bg-repeat items-center justify-start p-[1px] w-[100%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_bg_13X49.png')",
                                            }}
                                          >
                                            <Column
                                              className="bg-cover bg-repeat items-center justify-start mb-[1px] py-[1px] w-[100%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group8159.png')",
                                              }}
                                            >
                                              <Stack
                                                className="bg-cover bg-repeat xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] px-[3px] w-[100%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_menu.svg')",
                                                }}
                                              >
                                                <Img
                                                  src="images/img_eye_3X6.svg"
                                                  className="absolute bottom-[0] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] right-[2%] w-[13%]"
                                                  alt="Eye One"
                                                />
                                              </Stack>
                                            </Column>
                                          </Column>
                                          <Stack className="absolute bottom-[0] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] left-[8%] w-[53%]">
                                            <Img
                                              src="images/img_shadow_11X29.png"
                                              className="shadow_Eight"
                                              alt="shadow Eleven"
                                            />
                                            <Column
                                              className="absolute bg-cover bg-repeat items-center justify-start left-[4%] p-[1px] top-[0] w-[62%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group8166.png')",
                                              }}
                                            >
                                              <Column className="bg-bluegray_900_60 items-center justify-start my-[1px] w-[100%]">
                                                <Column
                                                  className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_specular_2X17.png')",
                                                  }}
                                                >
                                                  <Stack
                                                    className="bg-cover bg-repeat xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_specular_2X17.png')",
                                                    }}
                                                  >
                                                    <Img
                                                      src="images/img_specular_2X17.png"
                                                      className="specular_Seven"
                                                      alt="specular Nineteen"
                                                    />
                                                  </Stack>
                                                </Column>
                                              </Column>
                                            </Column>
                                          </Stack>
                                        </Stack>
                                      </Column>
                                    </Row>
                                  </Column>
                                </Column>
                              </Column>
                              <Stack className="absolute 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] w-[100%]">
                                <Img
                                  src="images/img_layer.png"
                                  className="absolute bottom-[0] lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] right-[1%] w-[28%]"
                                  alt="Layer"
                                />
                                <Stack className="absolute bottom-[10%] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] right-[0] w-[28%]">
                                  <Stack
                                    className="absolute bg-cover bg-repeat xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] px-[4px] w-[100%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group8194.png')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_group_3X5.svg"
                                      className="absolute xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] inset-y-[0] my-[auto] right-[2%] w-[11%]"
                                      alt="Group Four"
                                    />
                                  </Stack>
                                  <Stack className="absolute bottom-[0] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] left-[6%] w-[55%]">
                                    <Img
                                      src="images/img_shadow_11X29.png"
                                      className="shadow_Eight"
                                      alt="shadow Twelve"
                                    />
                                    <Column
                                      className="absolute bg-cover bg-repeat items-center justify-start left-[4%] top-[0] w-[58%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group8195.png')",
                                      }}
                                    >
                                      <Stack
                                        className="bg-cover bg-repeat xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group8196.svg')",
                                        }}
                                      >
                                        <Img
                                          src="images/img_specular_2X17.png"
                                          className="specular_Seven"
                                          alt="specular Twenty"
                                        />
                                      </Stack>
                                    </Column>
                                  </Stack>
                                </Stack>
                              </Stack>
                            </Stack>
                            <Stack className="absolute bottom-[15%] lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] right-[0] rotate-[180deg] w-[23%]">
                              <Img
                                src="images/img_cursor_47X45.png"
                                className="absolute lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[100%]"
                                alt="cursor"
                              />
                              <Stack
                                className="absolute bg-cover bg-repeat lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group8197.svg')",
                                }}
                              >
                                <Img
                                  src="images/img_specular_47X45.png"
                                  className="absolute lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[100%]"
                                  alt="specular TwentyOne"
                                />
                              </Stack>
                            </Stack>
                            <Img
                              src="images/img_shadow_40X54.png"
                              className="absolute lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] right-[13%] top-[0] w-[28%]"
                              alt="shadow Thirteen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-repeat items-center justify-start right-[20%] top-[0] w-[14%]"
                            style={{
                              backgroundImage: "url('images/img_sphere.png')",
                            }}
                          >
                            <Column className="bg-purple_200 items-center justify-start w-[100%]">
                              <Column
                                className="bg-cover bg-repeat items-center justify-start w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_specular.png')",
                                }}
                              >
                                <Stack
                                  className="bg-cover bg-repeat lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[100%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_specular.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_specular.png"
                                    className="absolute lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[100%]"
                                    alt="imageFour One"
                                  />
                                </Stack>
                              </Column>
                            </Column>
                          </Column>
                        </Stack>
                      </Stack>
                      <Stack className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[44%]">
                        <Img
                          src="images/img_shadow_11X108.png"
                          className="absolute xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] top-[9%] w-[100%]"
                          alt="shadow Fourteen"
                        />
                        <Stack
                          className="absolute bg-cover bg-repeat 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] top-[0] w-[89%]"
                          style={{
                            backgroundImage: "url('images/img_group8139.png')",
                          }}
                        >
                          <Stack className="absolute bottom-[10%] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[100%]">
                            <div className="absolute bg-gray_101 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] top-[10%] w-[100%]"></div>
                            <Column
                              className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[93%]"
                              style={{
                                backgroundImage: "url('images/img_keys.png')",
                              }}
                            >
                              <div className="bg-white_A700 lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] w-[100%]"></div>
                            </Column>
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group8140.png')",
                            }}
                          >
                            <Img
                              src="images/img_group8140.png"
                              className="absolute 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[100%]"
                              alt="specular TwentyTwo"
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Column>
                  </Stack>
                  <Column className="absolute bg-white_A700 bottom-[0] justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                    <Column className="justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                      <Text
                        className="font-bold text-bluegray_800 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Subcrible us
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_400 w-[100%]"
                        as="h5"
                        variant="h5"
                      >
                        To make friend with others in our community
                      </Text>
                    </Column>
                    <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mr-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[75%]">
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[61%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillDeeporange300"
                      >
                        Subcrible now
                      </Button>
                      <Button
                        className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[32%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillGray51"
                      >
                        skip
                      </Button>
                    </Row>
                  </Column>
                </Stack>
              </Row>
              <Row className="font-inter items-center justify-between mb-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Stack className="lg:h-[311px] xl:h-[388px] 2xl:h-[437px] 3xl:h-[524px] w-[66%]">
                  <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[7%] my-[auto] pr-[4px] py-[4px] w-[22%]">
                    <Text className="Balance" as="h6" variant="h6">
                      Balance
                    </Text>
                    <Text className="price_Three" as="h4" variant="h4">
                      $0.0
                    </Text>
                  </Column>
                  <Column className="absolute bg-white_A700 justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        My card
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="user_One"
                        alt="user One"
                      />
                    </Row>
                    <SelectBox
                      className="font-medium lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800 w-[43%]"
                      placeholderClassName="text-bluegray_800"
                      name="language"
                      placeholder="1234 **** 4567 8901 "
                      isSearchable={false}
                      isMulti={false}
                      getOptionLabel={(e) => (
                        <div className="flex items-center">
                          <Img
                            src="images/img_file.svg"
                            className="lg:w-[21px] lg:h-[22px] lg:mr-[4px] xl:w-[26px] xl:h-[27px] xl:mr-[6px] 2xl:w-[30px] 2xl:h-[31px] 2xl:mr-[7px] 3xl:w-[36px] 3xl:h-[37px] 3xl:mr-[8px]"
                            alt="file"
                          />
                          <span>{e.label}</span>
                        </div>
                      )}
                      indicator={
                        <Img
                          src="images/img_arrowdown_20X20.svg"
                          className="lg:w-[14px] lg:h-[15px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[19px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineIndigo51"
                    ></SelectBox>
                    <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[98%]">
                      <Column className="justify-start w-[51%]">
                        <Row className="bg-indigo_400 items-start lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] rounded-radius4 w-[86%]">
                          <Stack className="3xl:h-[100px] lg:h-[60px] xl:h-[74px] 2xl:h-[84px] 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[94px] w-[60%]">
                            <Text
                              className="absolute bottom-[33%] font-medium right-[0] text-white_A700 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              1234 **** 4567 8901{" "}
                            </Text>
                            <Img
                              src="images/img_group_83X96.png"
                              className="absolute 3xl:h-[100px] lg:h-[60px] xl:h-[74px] 2xl:h-[84px] left-[0] rounded-radius4 w-[53%]"
                              alt="Group Five"
                            />
                          </Stack>
                          <Stack className="lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[26%]">
                            <Img
                              src="images/img_group_12X40.svg"
                              className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] inset-x-[0] mx-[auto] rounded-radius4 top-[8%] w-[52%]"
                              alt="Group Six"
                            />
                            <Img
                              src="images/img_group_161X77.png"
                              className="absolute lg:h-[115px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] rounded-radius4 w-[100%]"
                              alt="Group Seven"
                            />
                          </Stack>
                        </Row>
                        <Button
                          className="font-normal lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[86%]"
                          shape="RoundedBorder4"
                          size="lg"
                          variant="FillWhiteA700"
                        >
                          Add new card
                        </Button>
                      </Column>
                      <Column className="items-center justify-start w-[49%]">
                        <Row className="items-center pt-[2px] px-[2px] w-[100%]">
                          <Text
                            className="mt-[4px] rowoval"
                            as="h5"
                            variant="h5"
                          >
                            Card Type
                          </Text>
                          <Text className="Visa" as="h5" variant="h5">
                            Visa
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] p-[3px] w-[100%]">
                          <Text
                            className="ml-[1px] SEP_Eight"
                            as="h5"
                            variant="h5"
                          >
                            Card holder
                          </Text>
                          <Text
                            className="my-[1px] test_2758MyDrive"
                            as="h5"
                            variant="h5"
                          >
                            AvoRi
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] p-[3px] w-[100%]">
                          <Text
                            className="ml-[1px] SEP_Five"
                            as="h5"
                            variant="h5"
                          >
                            Card number
                          </Text>
                          <Text
                            className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1234 **** 4567 8901{" "}
                          </Text>
                        </Row>
                        <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[1px] px-[1px] w-[100%]">
                          <Text
                            className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rowoval"
                            as="h5"
                            variant="h5"
                          >
                            Expired
                          </Text>
                          <Text
                            className="font-medium xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] lg:ml-[81px] mt-[3px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            21/09
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pr-[1px] py-[1px] w-[100%]">
                          <Text className="CVV" as="h5" variant="h5">
                            CVV
                          </Text>
                          <Text
                            className="font-medium mb-[4px] xl:mr-[119px] 2xl:mr-[134px] 3xl:mr-[160px] lg:mr-[95px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ***
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] p-[3px] w-[100%]">
                          <Text
                            className="ml-[1px] SEP_Eight"
                            as="h5"
                            variant="h5"
                          >
                            Total balance
                          </Text>
                          <Text
                            className="font-medium lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] my-[1px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $0.0
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Stack>
                <Column className="bg-white_A700 lg:pt-[11px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] rounded-radius4 shadow-bs w-[32%]">
                  <Text
                    className="font-bold lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Transactions
                  </Text>
                  <Row className="items-start justify-end lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[95%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[89%]"
                      orientation="vertical"
                    >
                      <Row className="listrobototoyfacefi">
                        <Row className="items-center justify-between py-[2px] w-[60%]">
                          <Img
                            src="images/img_robototoyfacefi.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="RobotoToyFaceFi"
                          />
                          <Column className="w-[64%]">
                            <Text className="rowline" as="h5" variant="h5">
                              Ackerman
                            </Text>
                            <Text
                              className="test_700211020"
                              as="h6"
                              variant="h6"
                            >
                              7:00 • 21/10/2021
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          -$12.0
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Row className="listrobototoyfacefi">
                        <Row className="items-center justify-between py-[2px] w-[60%]">
                          <Img
                            src="images/img_punktoyface1.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="PunkToyFaceOne"
                          />
                          <Column className="w-[64%]">
                            <Text className="rowline" as="h5" variant="h5">
                              Blanker{" "}
                            </Text>
                            <Text
                              className="test_700211020"
                              as="h6"
                              variant="h6"
                            >
                              7:00 • 21/10/2021
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          +$100.0
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Row className="listrobototoyfacefi">
                        <Row className="items-center justify-between py-[2px] w-[60%]">
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="VanGoghByAmrit"
                          />
                          <Column className="w-[64%]">
                            <Text className="rowline" as="h5" variant="h5">
                              Lee Ri
                            </Text>
                            <Text
                              className="test_700211020"
                              as="h6"
                              variant="h6"
                            >
                              7:00 • 21/10/2021
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          -$12.0
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Row className="listrobototoyfacefi">
                        <Row className="items-center justify-between py-[2px] w-[60%]">
                          <Img
                            src="images/img_rarepepenakam.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="RarePepeNakam"
                          />
                          <Column className="w-[64%]">
                            <Text className="rowline" as="h5" variant="h5">
                              Jackson
                            </Text>
                            <Text
                              className="test_700211020"
                              as="h6"
                              variant="h6"
                            >
                              7:00 • 21/10/2021
                            </Text>
                          </Column>
                        </Row>
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          -$10.0
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Row className="items-start xl:mr-[101px] 2xl:mr-[114px] 3xl:mr-[136px] lg:mr-[81px] my-[0] pt-[2px] w-[60%]">
                        <Img
                          src="images/img_tintin22.png"
                          className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] rounded-radius23 w-[27%]"
                          alt="TinTinTwentyTwo"
                        />
                        <Column className="justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] w-[64%]">
                          <Text className="rowline" as="h5" variant="h5">
                            Yomaha
                          </Text>
                          <Text
                            className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rowoval"
                            as="h6"
                            variant="h6"
                          >
                            7:00 • 21/10/2021
                          </Text>
                        </Column>
                      </Row>
                    </List>
                    <Column className="bg-gray_51 items-center justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:pb-[125px] xl:pb-[157px] 2xl:pb-[177px] 3xl:pb-[212px] rounded-radius2 w-[1%]">
                      <Line className="bg-deep_orange_300 xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] lg:h-[96px] w-[4px]" />
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardOnePage;
