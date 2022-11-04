import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Button,
  Grid,
  Stack,
  List,
} from "components";
import Header from "components/Header/Header";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardTwoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="w-[17%]">
            <div className="">
              <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[100%]">
                <Img
                  src="images/img_logo.svg"
                  className="lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[49%]"
                  alt="Logo"
                />
                <Column className="justify-start 2xl:mb-[1011px] 3xl:mb-[1213px] lg:mb-[718px] xl:mb-[899px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] w-[87%]">
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
          <Line className="bg-indigo_51 lg:h-[1097px] xl:h-[1372px] 2xl:h-[1544px] 3xl:h-[1852px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Row className="bg-gray_51 font-poppins items-center justify-end mt-[1px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[27px] w-[100%]">
              <Column className="items-center w-[73%]">
                <Row className="items-center justify-between w-[99%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Overview
                  </Text>
                  <Row className="font-inter items-center justify-between w-[24%]">
                    <Button
                      className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
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
                    <Row className="bg-deep_orange_300 items-center justify-between xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-radius4 w-[71%]">
                      <Text
                        className="font-medium ml-[3px] text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Add task
                      </Text>
                      <Img
                        src="images/img_plus.svg"
                        className="mr-[2px] test_grid"
                        alt="plus"
                      />
                    </Row>
                  </Row>
                </Row>
                <Column className="font-inter items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Grid className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-2 w-[43%]">
                      <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                        <Button
                          className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                          shape="icbRoundedBorder4"
                          size="xlIcn"
                          variant="icbFillGray103"
                        >
                          <Img
                            src="images/img_file_48X48.svg"
                            className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            alt="file One"
                          />
                        </Button>
                        <Column className="items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pr-[4px] py-[4px] w-[97%]">
                          <Text className="Fifty" as="h4" variant="h4">
                            50+
                          </Text>
                          <Text className="AvailableTasks" as="h6" variant="h6">
                            Available Tasks
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                        <Button
                          className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                          shape="icbRoundedBorder4"
                          size="xlIcn"
                          variant="icbFillYellow50"
                        >
                          <Img
                            src="images/img_mail_48X48.svg"
                            className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            alt="mail One"
                          />
                        </Button>
                        <Column className="items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pr-[4px] py-[4px] w-[97%]">
                          <Text className="Fifty" as="h4" variant="h4">
                            20
                          </Text>
                          <Text className="AvailableTasks" as="h6" variant="h6">
                            Obsolete Tasks
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                        <Button
                          className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                          shape="icbRoundedBorder4"
                          size="xlIcn"
                          variant="icbFillGray104"
                        >
                          <Img
                            src="images/img_folder_48X48.svg"
                            className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            alt="folder One"
                          />
                        </Button>
                        <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[97%]">
                          <Text
                            className="font-bold lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            23
                          </Text>
                          <Text
                            className="lg:mr-[19px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] rowfebuarycounter"
                            as="h6"
                            variant="h6"
                          >
                            In Progress
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                        <Button
                          className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                          shape="icbRoundedBorder4"
                          size="xlIcn"
                          variant="icbFillGray52"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            alt="checkmark"
                          />
                        </Button>
                        <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pr-[4px] py-[4px] w-[97%]">
                          <Text
                            className="lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mr-[30px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[51px] Fifty"
                            as="h4"
                            variant="h4"
                          >
                            35
                          </Text>
                          <Text
                            className="lg:mr-[19px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] AvailableTasks"
                            as="h6"
                            variant="h6"
                          >
                            Done Tasks
                          </Text>
                        </Column>
                      </Column>
                    </Grid>
                    <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[55%]">
                      <Row className="items-center justify-between lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[96%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Statistics
                        </Text>
                        <Button
                          className="flex items-center justify-center text-center w-[43%]"
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
                      <Row className="items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[95%]">
                        <Column className="w-[14%]">
                          <Text className="rowoval" variant="body1">
                            800
                          </Text>
                          <Text className="SEP_One1" variant="body1">
                            600
                          </Text>
                          <Text className="SEP_One1" variant="body1">
                            400
                          </Text>
                          <Text className="SEP_One1" variant="body1">
                            200
                          </Text>
                          <Text
                            className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] SEP_One1"
                            variant="body1"
                          >
                            0
                          </Text>
                        </Column>
                        <Img
                          src="images/img_frame_176X344.svg"
                          className="lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] w-[86%]"
                          alt="Frame"
                        />
                      </Row>
                      <Row className="items-start ml-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pb-[2px] px-[2px] w-[85%]">
                        <Text className="SEP_Five" variant="body1">
                          Mon
                        </Text>
                        <Text className="SEP_Six" variant="body1">
                          Tue
                        </Text>
                        <Text className="SEP_Six" variant="body1">
                          Wed
                        </Text>
                        <Text className="SEP_Six" variant="body1">
                          Thu
                        </Text>
                        <Text
                          className="mb-[2px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] rowoval"
                          variant="body1"
                        >
                          Fri
                        </Text>
                        <Text className="SEP_Six" variant="body1">
                          Sat
                        </Text>
                        <Text className="SEP_Six" variant="body1">
                          Sun
                        </Text>
                      </Row>
                      <Row className="items-start justify-center lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pt-[1px] w-[36%]">
                        <Row className="items-start mb-[2px] w-[38%]">
                          <div className="bg-amber_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[3px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                          <Text className="rowoval_three" variant="body1">
                            Income
                          </Text>
                        </Row>
                        <Row className="items-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[1px] w-[46%]">
                          <div className="bg-indigo_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                          <Text className="rowoval_three" variant="body1">
                            Expenses
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Column className="bg-white_A700 items-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[43%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Projects
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="user_One"
                          alt="user One"
                        />
                      </Row>
                      <Stack className="lg:h-[136px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:w-[135px] xl:w-[169px] 2xl:w-[190px] 3xl:w-[228px]">
                        <Stack className="absolute lg:h-[136px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] rounded-radius32 lg:w-[135px] xl:w-[169px] 2xl:w-[190px] 3xl:w-[228px]">
                          <CircularProgressbar
                            className="absolute border-solid lg:h-[136px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] overflow-visible w-[100%]"
                            value="17"
                            name="Group8570"
                            strokeWidth={1}
                            styles={{
                              trail: { strokeWidth: 1, stroke: "" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                "transform-origin": "center",
                                transform: "rotate(-23deg)",
                              },
                            }}
                          ></CircularProgressbar>
                          <CircularProgressbar
                            className="absolute border-solid lg:h-[136px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] overflow-visible w-[100%]"
                            value="24"
                            name="Group8571"
                            strokeWidth={1}
                            styles={{
                              trail: { strokeWidth: 1, stroke: "" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                "transform-origin": "center",
                                transform: "rotate(51deg)",
                              },
                            }}
                          ></CircularProgressbar>
                        </Stack>
                        <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[31%] w-[34%]">
                          <Text
                            className="text-bluegray_800 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            230+
                          </Text>
                          <Text className="AvailableTasks" as="h6" variant="h6">
                            Projects
                          </Text>
                        </Column>
                      </Stack>
                      <Row className="items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[72%]">
                        <Row className="items-center justify-between pt-[2px] w-[22%]">
                          <div className="bg-green_700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                          <Column className="w-[63%]">
                            <Text
                              className="ProfileViews_Two"
                              as="h5"
                              variant="h5"
                            >
                              100
                            </Text>
                            <Text
                              className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              High
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] py-[2px] w-[19%]">
                          <div className="bg-indigo_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                          <Column className="mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[57%]">
                            <Text
                              className="ProfileViews_Two"
                              as="h5"
                              variant="h5"
                            >
                              30
                            </Text>
                            <Text
                              className="font-medium lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Low
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-between lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] py-[2px] w-[30%]">
                          <div className="bg-amber_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                          <Column className="mb-[1px] w-[72%]">
                            <Text
                              className="ProfileViews_Two"
                              as="h5"
                              variant="h5"
                            >
                              100
                            </Text>
                            <Text
                              className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Medium
                            </Text>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[55%]">
                      <Row className="items-center justify-between w-[97%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Active tasks
                        </Text>
                        <Row className="items-center justify-between w-[60%]">
                          <Button
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillBluegray900"
                          >
                            Day
                          </Button>
                          <Button
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineIndigo51"
                          >
                            Week
                          </Button>
                          <Button
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%]"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineIndigo51"
                          >
                            Month
                          </Button>
                        </Row>
                      </Row>
                      <Column className="items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[97%]">
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="items-center justify-between lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                            <Img
                              src="images/img_computer.svg"
                              className="computer"
                              alt="computer"
                            />
                            <Column className="pr-[3px] py-[3px] w-[89%]">
                              <Text
                                className="font-medium text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                ACKERMAN_LHN
                              </Text>
                              <Row className="items-center mb-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[92%]">
                                <Line className="bg-red_600 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] w-[4px]" />
                                <Text
                                  className="rowrectangle"
                                  as="h5"
                                  variant="h5"
                                >
                                  <span className="text-bluegray_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                                    Changelog Revamp{" "}
                                  </span>
                                  <span className="text-red_600 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                                    #ver 1.0
                                  </span>
                                  <span className="text-bluegray_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                                    {" "}
                                    Homescreen{" "}
                                  </span>
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Row className="items-center justify-between lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                            <Img
                              src="images/img_checkmark_24X24.svg"
                              className="computer"
                              alt="checkmark One"
                            />
                            <Column className="pr-[1px] py-[1px] w-[89%]">
                              <Text
                                className="font-medium text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                JOHNSON
                              </Text>
                              <Row className="items-center mb-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[76%]">
                                <Line className="bg-deep_orange_300 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] w-[4px]" />
                                <Text
                                  className="rowrectangle"
                                  as="h5"
                                  variant="h5"
                                >
                                  Create user flow for Data Projects
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                        </List>
                        <Row className="items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pt-[1px] w-[100%]">
                          <Img
                            src="images/img_computer.svg"
                            className="computer"
                            alt="computer One"
                          />
                          <Column className="w-[89%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              AVORI
                            </Text>
                            <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pr-[3px] py-[3px] w-[100%]">
                              <Line className="bg-indigo_400 lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[4px]" />
                              <Text
                                className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mb-[1px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-bluegray_900 w-[78%]"
                                as="h5"
                                variant="h5"
                              >
                                Gather to discuss about new project deriving
                                from Avocado
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Column className="bg-white_A700 justify-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius4 shadow-bs w-[100%]">
                    <Row className="items-center justify-between mt-[1px] w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Posting Tasks
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="user_One"
                        alt="user Two"
                      />
                    </Row>
                    <Text
                      className="ml-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] ProfileViews_Two"
                      as="h6"
                      variant="h6"
                    >
                      <span className="text-bluegray_900 font-inter underline lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        Crucial tasks
                      </span>
                      <span className="text-bluegray_900 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        /{" "}
                      </span>
                      <span className="text-bluegray_900 font-inter underline lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        Urgent tasks
                      </span>
                      <span className="text-bluegray_900 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        /{" "}
                      </span>
                      <span className="text-bluegray_900 font-inter underline lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        Normal tasks
                      </span>
                    </Text>
                    <Stack className="lg:h-[286px] xl:h-[357px] 2xl:h-[402px] 3xl:h-[482px] mb-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                      <Row className="absolute bg-gray_51 items-center justify-evenly top-[0] w-[100%]">
                        <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[13%]">
                          <Text
                            className="absolute bottom-[29%] right-[24%] ProfileViews_Two"
                            as="h6"
                            variant="h6"
                          >
                            Time
                          </Text>
                          <Column className="absolute bg-deep_orange_300 items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
                            <Text
                              className="font-normal mb-[1px] not-italic text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Time
                            </Text>
                          </Column>
                        </Stack>
                        <Row className="items-center justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[87%]">
                          <Text
                            className="font-medium my-[1px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Mon 10
                          </Text>
                          <Text
                            className="font-medium 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] my-[1px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Tue 11
                          </Text>
                          <Text
                            className="font-medium lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] my-[1px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Wed 12
                          </Text>
                          <Text
                            className="font-medium lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] my-[1px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Thu 13
                          </Text>
                          <Text
                            className="font-medium mb-[1px] lg:ml-[40px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Fri 14
                          </Text>
                          <Text
                            className="font-medium lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[7px] xl:mr-[9px] my-[1px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Sat 15
                          </Text>
                        </Row>
                      </Row>
                      <Column className="absolute bottom-[7%] justify-start left-[2%] w-[5%]">
                        <Text className="ml-[3px] rowoval" variant="body1">
                          09 am
                        </Text>
                        <Text
                          className="ml-[2px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rowoval"
                          variant="body1"
                        >
                          10 am
                        </Text>
                        <Text
                          className="lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rowoval"
                          variant="body1"
                        >
                          11 am
                        </Text>
                        <Text
                          className="ml-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] rowoval"
                          variant="body1"
                        >
                          12 pm
                        </Text>
                        <Text
                          className="ml-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rowoval"
                          variant="body1"
                        >
                          01 pm
                        </Text>
                        <Text
                          className="ml-[3px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rowoval"
                          variant="body1"
                        >
                          02 pm
                        </Text>
                        <Text
                          className="ml-[2px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rowoval"
                          variant="body1"
                        >
                          03 pm
                        </Text>
                      </Column>
                      <List
                        className="absolute bg-cover bg-repeat gap-[0] min-h-[auto] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] right-[0] w-[89%]"
                        style={{
                          backgroundImage: "url('images/img_group8202.svg')",
                        }}
                        orientation="vertical"
                      >
                        <Row className="bg-white_A700 items-center justify-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mr-[339px] xl:mr-[425px] 2xl:mr-[478px] 3xl:mr-[573px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:pr-[33px] xl:pr-[41px] 2xl:pr-[47px] 3xl:pr-[56px] rounded-radius4 shadow-bs w-[24%]">
                          <Line className="bg-green_700 lg:h-[122px] xl:h-[153px] 2xl:h-[172px] 3xl:h-[206px] w-[4px]" />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[83%]">
                            <Button
                              className="font-poppins font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[93%]"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillDeeporange300"
                            >
                              #Data projects
                            </Button>
                            <Text
                              className="column#data_projects"
                              as="h6"
                              variant="h6"
                            >
                              Revamp UI, UX
                            </Text>
                            <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] rounded-radius12 w-[36%]">
                              <Img
                                src="images/img_robototoyfacefi.png"
                                className="absolute left-[0] rounded-radius50 computer"
                                alt="RobotoToyFaceFi"
                              />
                              <Img
                                src="images/img_fidenza978toy.png"
                                className="absolute right-[0] rounded-radius50 computer"
                                alt="Fidenza978Toy"
                              />
                            </Stack>
                          </Column>
                        </Row>
                        <Row className="bg-white_A700 items-center justify-center lg:ml-[211px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[356px] lg:mr-[205px] xl:mr-[257px] 2xl:mr-[289px] 3xl:mr-[347px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] lg:pr-[16px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] rounded-radius4 shadow-bs w-[14%]">
                          <Line className="bg-indigo_400 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-radius4 w-[4px]" />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[74%]">
                            <Button
                              className="font-poppins font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center w-[88%]"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillIndigo400"
                            >
                              #2011
                            </Button>
                            <Text
                              className="column#data_projects"
                              as="h6"
                              variant="h6"
                            >
                              Meeting
                            </Text>
                            <Stack className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius12 w-[64%]">
                              <Img
                                src="images/img_robototoyfacefi.png"
                                className="absolute left-[0] rounded-radius50 computer"
                                alt="RobotoToyFaceFi One"
                              />
                              <Img
                                src="images/img_fidenza978toy.png"
                                className="absolute right-[0] rounded-radius50 computer"
                                alt="Fidenza978Toy One"
                              />
                            </Stack>
                          </Column>
                        </Row>
                      </List>
                    </Stack>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs w-[25%]">
                <Row className="items-center justify-between w-[88%]">
                  <Text
                    className="font-medium text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Calendar
                  </Text>
                  <Img
                    src="images/img_user_32X32.svg"
                    className="user_One"
                    alt="user Three"
                  />
                </Row>
                <Column className="font-inter items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[88%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Button
                      className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      size="xlIcn"
                      variant="icbFillGray51"
                    >
                      <Img
                        src="images/img_buttonprimary.svg"
                        className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                        alt="ButtonPrimary"
                      />
                    </Button>
                    <Text className="rowfebuarycounter" as="h6" variant="h6">
                      <span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        Febuary{" "}
                      </span>
                      <span className="text-bluegray_400 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        2022
                      </span>
                    </Text>
                    <Button
                      className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      size="xlIcn"
                      variant="icbFillGray51"
                    >
                      <Img
                        src="images/img_play.svg"
                        className="flex items-center justify-center"
                        alt="play"
                      />
                    </Button>
                  </Row>
                  <div className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]"></div>
                </Column>
                <Row className="font-poppins items-center justify-between lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[88%]">
                  <Text
                    className="font-medium text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Recent activities
                  </Text>
                  <Img
                    src="images/img_user_32X32.svg"
                    className="user_One"
                    alt="user Four"
                  />
                </Row>
                <List
                  className="font-inter gap-[0] lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] min-h-[auto] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[88%]"
                  orientation="vertical"
                >
                  <Column className="justify-start lg:my-[13px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[22px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Feb 24, 2022
                    </Text>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="justify-end my-[0] pr-[1px] py-[1px] w-[100%]">
                        <Text className="columntime" variant="body1">
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-start mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[69%]">
                          <Line className="bg-red_600 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
                          <Text
                            className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] text-bluegray_900 w-[92%]"
                            as="h5"
                            variant="h5"
                          >
                            Changelog Revamp Homescreen{" "}
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-end my-[0] pr-[1px] py-[1px] w-[100%]">
                        <Text className="columntime" variant="body1">
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[70%]">
                          <Line className="bg-indigo_400 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
                          <Text
                            className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-bluegray_900 w-[93%]"
                            as="h5"
                            variant="h5"
                          >
                            Create user flow for Data Projects
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-end my-[0] pr-[1px] py-[1px] w-[100%]">
                        <Text className="columntime" variant="body1">
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[84%]">
                          <Line className="bg-green_700 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
                          <Text
                            className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-bluegray_900 w-[94%]"
                            as="h5"
                            variant="h5"
                          >
                            Gather to discuss about new project deriving
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-end my-[0] pr-[1px] py-[1px] w-[100%]">
                        <Text className="columntime" variant="body1">
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-start mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[72%]">
                          <Line className="bg-indigo_400 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
                          <Text
                            className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] text-bluegray_900 w-[93%]"
                            as="h5"
                            variant="h5"
                          >
                            Urgent meeting with CEO
                          </Text>
                        </Row>
                      </Column>
                    </List>
                  </Column>
                  <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                  <Column className="justify-start lg:my-[13px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[22px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Feb 24, 2022
                    </Text>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="justify-start my-[0] pr-[1px] pt-[1px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_400 w-[auto]"
                          variant="body1"
                        >
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[80%]">
                          <Line className="bg-red_600 lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[4px]" />
                          <Text
                            className="rowrectangle_six"
                            as="h5"
                            variant="h5"
                          >
                            Daily meeting with tem
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-end my-[0] pr-[1px] py-[1px] w-[100%]">
                        <Text className="columntime" variant="body1">
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[56%]">
                          <Line className="bg-indigo_400 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
                          <Text
                            className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-bluegray_900 w-[91%]"
                            as="h5"
                            variant="h5"
                          >
                            Revision design system
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-end my-[0] pr-[1px] py-[1px] w-[100%]">
                        <Text className="columntime" variant="body1">
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-start mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[52%]">
                          <Line className="bg-green_700 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
                          <Text
                            className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] text-bluegray_900 w-[90%]"
                            as="h5"
                            variant="h5"
                          >
                            Changelog authentication
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-end my-[0] pr-[1px] py-[1px] w-[100%]">
                        <Text className="columntime" variant="body1">
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-center mr-[auto] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[68%]">
                          <Line className="bg-indigo_400 lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[4px]" />
                          <Text
                            className="rowrectangle_six"
                            as="h5"
                            variant="h5"
                          >
                            Pitching with client
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-end my-[0] pr-[1px] py-[1px] w-[100%]">
                        <Text className="columntime" variant="body1">
                          8:00 AM -9:00 AM
                        </Text>
                        <Row className="items-center mr-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[67%]">
                          <Line className="bg-red_600 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
                          <Text
                            className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-bluegray_900 w-[92%]"
                            as="h5"
                            variant="h5"
                          >
                            Year end party and plan for 2022
                          </Text>
                        </Row>
                      </Column>
                    </List>
                  </Column>
                </List>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardTwoPage;
