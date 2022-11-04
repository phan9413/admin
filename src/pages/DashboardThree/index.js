import React from "react";

import {
  Column,
  Row,
  Img,
  Line,
  Text,
  Input,
  Button,
  SelectBox,
  List,
  Stack,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardThreePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="w-[6%]">
            <div className="">
              <Column className="bg-white_A700 items-center justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[100%]">
                <Img
                  src="images/img_bookmark.svg"
                  className="lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[85%]"
                  alt="bookmark"
                />
                <Column className="items-center justify-start 3xl:mb-[1116px] lg:mb-[661px] xl:mb-[827px] 2xl:mb-[930px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                  <Img
                    src="images/img_grid.svg"
                    className="test_grid"
                    alt="grid"
                  />
                  <Img
                    src="images/img_user_20X20.svg"
                    className="user"
                    alt="user"
                  />
                  <Img src="images/img_sort.svg" className="user" alt="sort" />
                  <Img
                    src="images/img_folder.svg"
                    className="user"
                    alt="folder"
                  />
                  <Img
                    src="images/img_calendar.svg"
                    className="user"
                    alt="calendar"
                  />
                  <Img
                    src="images/img_trash.svg"
                    className="user"
                    alt="trash"
                  />
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="user"
                    alt="mail"
                  />
                  <Column className="bg-white_A700 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] px-[3px] w-[100%]">
                    <div className="bg-bluegray_400 rounded-radius50 test_grid"></div>
                  </Column>
                </Column>
              </Column>
            </div>
          </aside>
          <Line className="bg-indigo_51 lg:h-[1041px] xl:h-[1302px] 2xl:h-[1465px] 3xl:h-[1757px] w-[1px]" />
          <Column className="items-center w-[94%]">
            <header className="bg-white_A700 w-[100%]">
              <Row className="items-center mx-[auto] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[96%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Welcomback, Team!
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="2xl:ml-[305px] 3xl:ml-[366px] flex lg:ml-[216px] w-[33%] xl:ml-[271px]"
                  name="SearchBox"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[3px] lg:w-[14px] lg:h-[15px] lg:mr-[5px] xl:w-[17px] xl:h-[18px] xl:mr-[7px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[8px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[9px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#828fa2"
                        className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[15px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="smSrc"
                  variant="srcOutlineBluegray200"
                ></Input>
                <Img
                  src="images/img_shoppingbag.svg"
                  className="lg:ml-[150px] xl:ml-[187px] 2xl:ml-[211px] 3xl:ml-[253px] computer"
                  alt="shoppingbag"
                />
                <Column
                  className="bg-cover bg-repeat items-end lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] pl-[1px] computer"
                  style={{ backgroundImage: "url('images/img_group8450.svg')" }}
                >
                  <div className="bg-red_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                </Column>
                <Text
                  className="font-normal lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-gray_500 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Hello,
                  </span>
                  <span className="text-bluegray_900 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    {" "}
                  </span>
                  <span className="text-bluegray_900 font-inter font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Sam
                  </span>
                </Text>
                <Img
                  src="images/img_sherlocktoyfa.png"
                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  alt="SherlockToyFa"
                />
              </Row>
            </header>
            <Row className="bg-gray_51 font-poppins items-center justify-end xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[8px] w-[100%]">
              <Column className="items-center w-[73%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Overview
                  </Text>
                  <Row className="font-inter items-center justify-between w-[19%]">
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
                <Row className="font-inter items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[21%]"
                    orientation="vertical"
                  >
                    <Column className="bg-white_A700 items-center justify-end 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius4 shadow-bs w-[100%]">
                      <Img
                        src="images/img_signal.svg"
                        className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[58%]"
                        alt="signal"
                      />
                      <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[58%]">
                        <Text className="rowoval" as="h6" variant="h6">
                          Total Tasks
                        </Text>
                        <Text
                          className="font-bold xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_800 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          120
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-center justify-end 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius4 shadow-bs w-[100%]">
                      <Img
                        src="images/img_signal_43X73.svg"
                        className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[57%]"
                        alt="signal One"
                      />
                      <Column className="items-center justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[57%]">
                        <Text className="rowoval" as="h6" variant="h6">
                          New Tasks
                        </Text>
                        <Text
                          className="font-bold xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_800 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          60
                        </Text>
                      </Column>
                    </Column>
                  </List>
                  <Column className="bg-white_A700 items-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[43%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Statistics
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="user_One"
                          alt="user One"
                        />
                      </Row>
                      <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                        <Img
                          src="images/img_frame_139X344.svg"
                          className="xl:h-[124px] 2xl:h-[140px] 3xl:h-[167px] lg:h-[99px] w-[96%]"
                          alt="Frame"
                        />
                        <Row className="items-start justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pb-[2px] px-[2px] w-[100%]">
                          <Text className="SEP_Five" variant="body1">
                            Mon
                          </Text>
                          <Text className="SEP_Five" variant="body1">
                            Tue
                          </Text>
                          <Text className="SEP_Five" variant="body1">
                            Wed
                          </Text>
                          <Text className="SEP_Five" variant="body1">
                            Thu
                          </Text>
                          <Text className="mb-[2px] rowoval" variant="body1">
                            Fri
                          </Text>
                          <Text className="SEP_Five" variant="body1">
                            Sat
                          </Text>
                          <Text className="SEP_Five" variant="body1">
                            Sun
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <Row className="bg-gray_105 items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]">
                      <Column className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] pr-[3px] py-[3px] w-[69%]">
                        <Text className="ProfileViews_Two" as="h5" variant="h5">
                          Data project report
                        </Text>
                        <Text
                          className="mb-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] ProfileViews_Two"
                          as="h6"
                          variant="h6"
                        >
                          • In process
                        </Text>
                      </Column>
                      <Column className="bg-indigo_52 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] px-[4px] rounded-radius50 lg:w-[45px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]">
                        <div className="bg-indigo_400 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 shadow-bs3 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 items-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[32%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Sales
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="user_One"
                        alt="user Two"
                      />
                    </Row>
                    <Stack className="lg:h-[136px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:w-[135px] xl:w-[169px] 2xl:w-[190px] 3xl:w-[228px]">
                      <CircularProgressbar
                        className="absolute border-solid lg:h-[136px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] overflow-visible w-[100%]"
                        value="28"
                        name="Group"
                        strokeWidth={1}
                        styles={{
                          trail: { strokeWidth: 1, stroke: "" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            "transform-origin": "center",
                            transform: "rotate(225deg)",
                          },
                        }}
                      ></CircularProgressbar>
                      <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[46%]">
                        <Text className="rowline" as="h6" variant="h6">
                          Total
                        </Text>
                        <Text
                          className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_800 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $2,000
                        </Text>
                      </Column>
                    </Stack>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-start justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                        <Radio
                          value="CurrentWeek"
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="ProfileViewsTwo"
                          label="Current Week"
                          size="sm"
                          variant="FillRed600"
                        ></Radio>
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $1,200
                        </Text>
                        <Row className="bg-green_700_63 items-start justify-center mt-[1px] pr-[2px] py-[2px] rounded-radius4 w-[21%]">
                          <Img
                            src="images/img_arrowup.svg"
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="arrowup"
                          />
                          <Text className="rowarrowup" as="h6" variant="h6">
                            0.2%
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-start justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[100%]">
                        <Radio
                          value="LastWeek"
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="ProfileViewsThree"
                          label="Last Week"
                          size="sm"
                          variant="FillGreen700"
                        ></Radio>
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $800
                        </Text>
                        <Row className="bg-green_700_63 items-start justify-center mt-[1px] pr-[2px] py-[2px] rounded-radius4 w-[21%]">
                          <Img
                            src="images/img_arrowup.svg"
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="arrowup One"
                          />
                          <Text className="rowarrowup" as="h6" variant="h6">
                            0.2%
                          </Text>
                        </Row>
                      </Row>
                    </List>
                  </Column>
                </Row>
                <Row className="font-inter items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Stack className="lg:h-[331px] xl:h-[414px] 2xl:h-[466px] 3xl:h-[559px] w-[55%]">
                    <Column className="absolute bottom-[22%] justify-start pr-[4px] py-[4px] right-[30%] w-[31%]">
                      <Text className="Balance" as="h6" variant="h6">
                        Balance
                      </Text>
                      <Text className="price_Three" as="h4" variant="h4">
                        $0.0
                      </Text>
                    </Column>
                    <Column className="absolute bg-white_A700 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[100%]">
                      <Row className="items-center justify-between mt-[2px] w-[97%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Statistics
                        </Text>
                        <Button
                          className="flex items-center justify-center text-center w-[37%]"
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
                      <Column className="items-center justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] pb-[2px] w-[98%]">
                        <Row className="items-center w-[100%]">
                          <Column className="w-[13%]">
                            <Text className="rowoval" variant="body1">
                              Su
                            </Text>
                            <Text className="SEP_One1" variant="body1">
                              Sa
                            </Text>
                            <Text
                              className="flex items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rowoval"
                              variant="body1"
                            >
                              Fr
                            </Text>
                            <Text className="SEP_One1" variant="body1">
                              Th
                            </Text>
                            <Text className="SEP_One1" variant="body1">
                              We
                            </Text>
                            <Text
                              className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rowoval"
                              variant="body1"
                            >
                              Tu
                            </Text>
                            <Text className="SEP_One1" variant="body1">
                              Mo
                            </Text>
                          </Column>
                          <Line className="bg-indigo_51 lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]" />
                          <Stack className="font-poppins lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[80%]">
                            <Row className="absolute items-center justify-between left-[0] w-[89%]">
                              <Stack className="lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[74%]">
                                <Row className="absolute items-center justify-between left-[11%] right-[14%] w-[75%]">
                                  <Line className="bg-indigo_51 lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]" />
                                  <Line className="bg-indigo_51 lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]" />
                                  <Line className="bg-indigo_51 lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]" />
                                  <Line className="bg-indigo_51 lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]" />
                                </Row>
                                <Img
                                  src="images/img_frame_246X252.svg"
                                  className="absolute bottom-[1%] lg:h-[175px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] top-[3%] w-[100%]"
                                  alt="Frame One"
                                />
                              </Stack>
                              <Row className="items-center justify-between w-[19%]">
                                <Line className="bg-indigo_51 lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]" />
                                <Line className="bg-indigo_51 lg:h-[183px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[1px]" />
                              </Row>
                            </Row>
                            <Row
                              className="absolute bg-cover bg-repeat items-start justify-evenly lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] right-[0] shadow-bs2 top-[11%] w-[38%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group8984.svg')",
                              }}
                            >
                              <Row className="items-start justify-center mt-[4px] w-[39%]">
                                <div className="bg-indigo_400 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                                <Text className="rowoval_five" variant="body1">
                                  150.0
                                </Text>
                              </Row>
                              <Row className="items-start justify-center mb-[1px] mt-[4px] w-[38%]">
                                <div className="bg-amber_300 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[1px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                                <Text className="rowoval_five" variant="body1">
                                  120.0
                                </Text>
                              </Row>
                            </Row>
                          </Stack>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[85%]">
                          <Text className="rowoval" variant="body1">
                            -300
                          </Text>
                          <Text className="rowoval" variant="body1">
                            -200
                          </Text>
                          <Text className="rowoval" variant="body1">
                            -100
                          </Text>
                          <Text className="rowoval" variant="body1">
                            0
                          </Text>
                          <Text className="rowoval" variant="body1">
                            100
                          </Text>
                          <Text className="rowoval" variant="body1">
                            200
                          </Text>
                          <Text className="rowoval" variant="body1">
                            300
                          </Text>
                        </Row>
                      </Column>
                      <Row className="items-start justify-center 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pt-[1px] w-[31%]">
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
                  </Stack>
                  <Column className="bg-white_A700 items-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[43%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Total projects
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="user_One"
                        alt="user Three"
                      />
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="justify-start lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] w-[100%]">
                        <Text className="ProfileViews_Two" as="h5" variant="h5">
                          Mobile app (4/12)
                        </Text>
                        <Row className="items-end justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius8 w-[100%]">
                          <div
                            className="3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] overflow-hidden relative w-[84%]"
                            name="Group One"
                          >
                            <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-indigo_400  rounded-[4px]"
                              style={{ width: "27%" }}
                            ></div>
                          </div>
                          <Text
                            className="ProfileViews_Two"
                            as="h5"
                            variant="h5"
                          >
                            34%
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-start lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] w-[100%]">
                        <Text className="ProfileViews_Two" as="h5" variant="h5">
                          Landing page (2/4)
                        </Text>
                        <Row className="items-end justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius8 w-[100%]">
                          <div
                            className="3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] overflow-hidden relative w-[84%]"
                            name="Group Two"
                          >
                            <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-green_700  rounded-[4px]"
                              style={{ width: "62%" }}
                            ></div>
                          </div>
                          <Text
                            className="ProfileViews_Two"
                            as="h5"
                            variant="h5"
                          >
                            50%
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-start lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] w-[100%]">
                        <Text className="ProfileViews_Two" as="h5" variant="h5">
                          Branding (2/2)
                        </Text>
                        <Row className="items-end justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius8 w-[100%]">
                          <div
                            className="3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] overflow-hidden relative w-[87%]"
                            name="Group Three"
                          >
                            <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-amber_300  rounded-[4px]"
                              style={{ width: "96%" }}
                            ></div>
                          </div>
                          <Text
                            className="ProfileViews_Two"
                            as="h5"
                            variant="h5"
                          >
                            100%
                          </Text>
                        </Row>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="justify-start lg:my-[14px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] w-[100%]">
                        <Text className="ProfileViews_Two" as="h5" variant="h5">
                          Branding (2/8)
                        </Text>
                        <Row className="items-end justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius8 w-[100%]">
                          <div
                            className="3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] overflow-hidden relative w-[87%]"
                            name="Group Four"
                          >
                            <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                            <div
                              className="h-full absolute bg-red_600  rounded-[4px]"
                              style={{ width: "17%" }}
                            ></div>
                          </div>
                          <Text
                            className="ProfileViews_Two"
                            as="h5"
                            variant="h5"
                          >
                            25%
                          </Text>
                        </Row>
                      </Column>
                    </List>
                  </Column>
                </Row>
                <Column className="bg-white_A700 font-inter items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="justify-start w-[99%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Transactions history
                      </Text>
                      <Button
                        className="flex items-center justify-center text-center w-[19%]"
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
                    <Row className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] pr-[4px] pt-[4px] w-[88%]">
                      <Text className="rowoval" as="h5" variant="h5">
                        No.
                      </Text>
                      <Text
                        className="lg:ml-[34px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        Customer
                      </Text>
                      <Text
                        className="2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        Date
                      </Text>
                      <Text
                        className="2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[79px] xl:ml-[99px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        Amount
                      </Text>
                      <Text
                        className="lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        Order No.
                      </Text>
                      <Text
                        className="lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] mt-[2px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        Payment type
                      </Text>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-gray_51 items-center my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          1
                        </Text>
                        <Row className="items-center justify-center lg:ml-[47px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[14%]">
                          <Img
                            src="images/img_robototoyfacefi.png"
                            className="rounded-radius50 computer"
                            alt="RobotoToyFaceFi"
                          />
                          <Text
                            className="rowrobototoyfacefi"
                            as="h5"
                            variant="h5"
                          >
                            Ackerman
                          </Text>
                        </Row>
                        <Text
                          className="font-medium lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          12.02.2022
                        </Text>
                        <Text className="price_Four1" as="h5" variant="h5">
                          $20.0
                        </Text>
                        <Text className="test_21033" as="h5" variant="h5">
                          #21033
                        </Text>
                        <Text className="VisaCard" as="h5" variant="h5">
                          Visa Card
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="2xl:ml-[107px] 3xl:ml-[128px] lg:ml-[76px] xl:ml-[95px] computer"
                          alt="user Four"
                        />
                      </Row>
                      <Row className="bg-white_A700 items-center my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          2
                        </Text>
                        <Row className="items-center justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] pr-[2px] w-[9%]">
                          <Img
                            src="images/img_fidenza978toy.png"
                            className="rounded-radius50 computer"
                            alt="Fidenza978Toy"
                          />
                          <Text
                            className="rowrobototoyfacefi"
                            as="h5"
                            variant="h5"
                          >
                            Avori
                          </Text>
                        </Row>
                        <Text
                          className="font-medium 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[71px] xl:ml-[89px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          12.02.2022
                        </Text>
                        <Text className="price_Four1" as="h5" variant="h5">
                          $32.0
                        </Text>
                        <Text className="test_21033" as="h5" variant="h5">
                          #21034
                        </Text>
                        <Text className="VisaCard" as="h5" variant="h5">
                          Visa Card
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="2xl:ml-[107px] 3xl:ml-[128px] lg:ml-[76px] xl:ml-[95px] computer"
                          alt="user Five"
                        />
                      </Row>
                    </List>
                  </Column>
                  <Row className="bg-gray_51 items-center lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[99%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text>
                    <Row className="items-end justify-center lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[13%]">
                      <Img
                        src="images/img_vangoghbyamrit.png"
                        className="rounded-radius50 computer"
                        alt="VanGoghByAmrit"
                      />
                      <Text className="rowvangoghbyamrit" as="h5" variant="h5">
                        Benjamin
                      </Text>
                    </Row>
                    <Text className="test_24012022" as="h5" variant="h5">
                      24.01.2022
                    </Text>
                    <Text className="price_Four1" as="h5" variant="h5">
                      $16.0
                    </Text>
                    <Text
                      className="font-medium 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      #21030
                    </Text>
                    <Text className="VisaCard" as="h5" variant="h5">
                      MasterCard
                    </Text>
                    <Img
                      src="images/img_user_32X32.svg"
                      className="3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] computer"
                      alt="user Six"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 font-inter items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[25%]">
                <Column className="items-center justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Column className="items-center justify-start w-[86%]">
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
                  <Column className="font-poppins items-center justify-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
                    <Line className="bg-indigo_51 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
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
                        alt="user Seven"
                      />
                    </Row>
                    <Column className="font-inter justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Feb 24, 2022
                      </Text>
                      <List
                        className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="listrobototoyfacefi">
                          <Img
                            src="images/img_robototoyfacefi.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="RobotoToyFaceFi One"
                          />
                          <Column className="pr-[4px] pt-[4px] w-[76%]">
                            <Text
                              className="ProfileViews_Two"
                              as="h6"
                              variant="h6"
                            >
                              Ackerman
                            </Text>
                            <Text
                              className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_900 w-[95%]"
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
                            <Text className="time" as="h6" variant="h6">
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        <Row className="items-center my-[0] w-[100%]">
                          <Img
                            src="images/img_punktoyface1.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="PunkToyFaceOne"
                          />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] pr-[4px] pt-[4px] w-[76%]">
                            <Text className="rowline" as="h6" variant="h6">
                              Blanker
                            </Text>
                            <Text
                              className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_900 w-[97%]"
                              as="h5"
                              variant="h5"
                            >
                              Create user flow for Data Projects
                            </Text>
                            <Text className="time_One" as="h6" variant="h6">
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        <Row className="items-center 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[7px] xl:mr-[9px] my-[0] w-[96%]">
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="VanGoghByAmrit One"
                          />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] pr-[3px] pt-[3px] w-[75%]">
                            <Text className="rowoval" as="h6" variant="h6">
                              Lee Ri
                            </Text>
                            <Text
                              className="font-medium columncalendar"
                              as="h5"
                              variant="h5"
                            >
                              Revision design system
                            </Text>
                            <Text className="time_One" as="h6" variant="h6">
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        <Row className="items-center my-[0] w-[100%]">
                          <Img
                            src="images/img_rarepepenakam.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="RarePepeNakam"
                          />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] pr-[4px] pt-[4px] w-[76%]">
                            <Text className="rowoval" as="h6" variant="h6">
                              Jackson
                            </Text>
                            <Text
                              className="font-medium columncalendar"
                              as="h5"
                              variant="h5"
                            >
                              Changelog Scan ID Card
                            </Text>
                            <Text className="time_One" as="h6" variant="h6">
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                        <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        <Row className="items-center lg:mr-[34px] xl:mr-[42px] 2xl:mr-[48px] 3xl:mr-[57px] my-[0] w-[82%]">
                          <Img
                            src="images/img_tintin22.png"
                            className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                            alt="TinTinTwentyTwo"
                          />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] pr-[4px] pt-[4px] w-[71%]">
                            <Text className="rowoval" as="h6" variant="h6">
                              Yomaha
                            </Text>
                            <Text
                              className="font-medium xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Pitching with client
                            </Text>
                            <Text className="time_One" as="h6" variant="h6">
                              2min ago
                            </Text>
                          </Column>
                        </Row>
                      </List>
                    </Column>
                  </Column>
                </Column>
                <Column className="lg:h-[194px] xl:h-[242px] 2xl:h-[273px] 3xl:h-[327px] justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:w-[193px] xl:w-[241px] 2xl:w-[272px] 3xl:w-[326px]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Feb 23, 2022
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listrobototoyfacefi">
                      <Img
                        src="images/img_robototoyfacefi.png"
                        className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                        alt="RobotoToyFaceFi Two"
                      />
                      <Column className="pr-[4px] pt-[4px] w-[76%]">
                        <Text className="ProfileViews_Two" as="h6" variant="h6">
                          Ackerman
                        </Text>
                        <Text
                          className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_900 w-[95%]"
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
                        <Text className="time" as="h6" variant="h6">
                          2min ago
                        </Text>
                      </Column>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                    <Row className="items-center my-[0] w-[100%]">
                      <Img
                        src="images/img_punktoyface1.png"
                        className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                        alt="PunkToyFaceOne One"
                      />
                      <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] pr-[4px] pt-[4px] w-[76%]">
                        <Text className="rowline" as="h6" variant="h6">
                          Blanker
                        </Text>
                        <Text
                          className="font-medium lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_900 w-[97%]"
                          as="h5"
                          variant="h5"
                        >
                          Create user flow for Data Projects
                        </Text>
                        <Text className="time_One" as="h6" variant="h6">
                          2min ago
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardThreePage;
