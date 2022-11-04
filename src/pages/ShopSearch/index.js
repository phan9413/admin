import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Stack,
  SeekBar,
  CheckBox,
  Button,
  Input,
  Grid,
} from "components";
import Header from "components/Header/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { CloseSVG } from "../../assets/images/index.js";

const ShopSearchPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="w-[17%]">
            <div className="">
              <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
                <Img src="images/img_logo.svg" className="Logo" alt="Logo" />
                <Column className="justify-start 2xl:mb-[1006px] 3xl:mb-[1207px] lg:mb-[715px] xl:mb-[894px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] w-[88%]">
                  <Row className="items-center w-[71%]">
                    <Img
                      src="images/img_grid_20X20.svg"
                      className="test_grid"
                      alt="grid"
                    />
                    <Text className="rowuser" as="h6" variant="h6">
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
                      src="images/img_trash_20X20.svg"
                      className="test_grid"
                      alt="trash"
                    />
                    <Text
                      className="mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rowgrid"
                      as="h6"
                      variant="h6"
                    >
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
          <Line className="bg-indigo_51 lg:h-[1094px] xl:h-[1369px] 2xl:h-[1540px] 3xl:h-[1847px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Row className="bg-gray_51 font-poppins items-start justify-between lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[24%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Shopping centre
                </Text>
                <Stack className="font-inter 2xl:h-[1051px] 3xl:h-[1261px] lg:h-[747px] xl:h-[935px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
                  <Column className="absolute bottom-[24%] inset-x-[0] justify-start mx-[auto] pr-[4px] py-[4px] w-[60%]">
                    <Text className="Balance" as="h6" variant="h6">
                      Balance
                    </Text>
                    <Text className="price_Three" as="h4" variant="h4">
                      $0.0
                    </Text>
                  </Column>
                  <Column className="absolute bg-white_A700 justify-end lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs w-[100%]">
                    <Text
                      className="font-bold ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Categories
                    </Text>
                    <Accordion
                      preExpanded={[0]}
                      className="ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[99%]"
                    >
                      {" "}
                      {[...Array(4)].map((item, index) => (
                        <AccordionItem uuid={index} key={Math.random()}>
                          <Column className="justify-start py-[2px] w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Clothes
                              </Text>
                              <Img
                                src="images/img_arrowup_20X20.svg"
                                className="test_grid"
                                alt="arrowup"
                              />
                            </Row>
                            <Column className="justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] p-[3px] w-[42%]">
                              <Text
                                className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] price_Four2"
                                as="h5"
                                variant="h5"
                              >
                                T-shirts
                              </Text>
                              <Text
                                className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Jeans
                              </Text>
                              <Text
                                className="font-medium mb-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Jackets
                              </Text>
                            </Column>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Price
                      </Text>
                      <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                        <SeekBar
                          inputValue={[null]}
                          trackColors={["", "#e2e8ed"]}
                          thumbClassName="flex justify-center items-center rounded-radius50 outline-none"
                          className="flex lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[100%]"
                          trackClassName="flex lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[5px] w-[100%]"
                        />{" "}
                        <Row className="items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Text
                            className="flex font-medium items-center text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            $0
                          </Text>
                          <Text
                            className="font-medium text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            $10,000
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <Text
                      className="font-medium ml-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Rating
                    </Text>
                    <Row className="items-center justify-between ml-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                      <CheckBox
                        className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        name="Remember"
                        label="5 Stars"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X77.png"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] w-[37%]"
                        alt="Frame One"
                      />
                    </Row>
                    <Row className="items-center justify-between ml-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                      <CheckBox
                        className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        name="Remember One"
                        label="4 Stars"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X61.png"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] w-[29%]"
                        alt="Frame Two"
                      />
                    </Row>
                    <Row className="items-center justify-between ml-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                      <CheckBox
                        className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        name="Remember Two"
                        label="3 Stars"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X45.png"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] w-[22%]"
                        alt="Frame Three"
                      />
                    </Row>
                    <Row className="items-center justify-between ml-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                      <CheckBox
                        className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        name="Remember Three"
                        label="2 Stars"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X28.png"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] w-[13%]"
                        alt="Frame Four"
                      />
                    </Row>
                    <Row className="items-center justify-between ml-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
                      <CheckBox
                        className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        name="Remember Four"
                        label="1 Star"
                        size="sm"
                      ></CheckBox>
                      <Img
                        src="images/img_frame_11X12.png"
                        className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] w-[6%]"
                        alt="Frame Five"
                      />
                    </Row>
                    <Column className="justify-start ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[72%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Color
                      </Text>
                      <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                        <Img
                          src="images/img_icon.svg"
                          className="computer"
                          alt="Icon"
                        />
                        <Column className="bg-light_blue_A700 items-center lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius50 computer">
                          <div className="bg-white_A700 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"></div>
                        </Column>
                        <Img
                          src="images/img_close_24X24.svg"
                          className="computer"
                          alt="close"
                        />
                        <Img
                          src="images/img_close_1.svg"
                          className="computer"
                          alt="close One"
                        />
                        <Img
                          src="images/img_close_2.svg"
                          className="computer"
                          alt="close Two"
                        />
                      </Row>
                    </Column>
                    <Column className="items-center justify-start mb-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Button
                        className="flex items-center justify-center text-center w-[100%]"
                        rightIcon={
                          <Img
                            src="images/img_plus.svg"
                            className="text-center lg:w-[14px] lg:h-[15px] lg:ml-[10px] xl:w-[17px] xl:h-[18px] xl:ml-[13px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[15px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[18px]"
                            alt="plus"
                          />
                        }
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillDeeporange300"
                      >
                        <div className="bg-transparent font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                          Apply filter
                        </div>
                      </Button>
                      <Row className="bg-gray_51 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-radius24 w-[100%]">
                        <Text
                          className="lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] ProfileViews_Two"
                          as="h6"
                          variant="h6"
                        >
                          Clear all
                        </Text>
                        <Img
                          src="images/img_trash_1.svg"
                          className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mr-[28px] xl:mr-[35px] 2xl:mr-[40px] 3xl:mr-[48px] test_grid"
                          alt="trash One"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Column>
              <Column className="font-inter items-center justify-start lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[75%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="placeholder:text-bluegray_400 Frame8"
                  wrapClassName="flex w-[100%]"
                  name="frame Six"
                  placeholder="Seach name, type,..."
                  prefix={
                    <Img
                      src="images/img_search_24X24.svg"
                      className="cursor-pointer lg:w-[17px] lg:h-[18px] lg:mx-[11px] xl:w-[21px] xl:h-[22px] xl:mx-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mx-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mx-[19px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer lg:w-[17px] lg:h-[18px] lg:ml-[7px] lg:mr-[15px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#828fa2"
                      />
                    ) : inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#828fa2"
                        className="cursor-pointer lg:w-[17px] lg:h-[18px] lg:ml-[7px] lg:mr-[15px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="mdSrc"
                  variant="srcOutlineBlack9000c"
                ></Input>
                <Stack className="xl:h-[1056px] 2xl:h-[1187px] 3xl:h-[1425px] lg:h-[844px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                  <div className="absolute bg-white_A700 lg:h-[220px] xl:h-[274px] 2xl:h-[309px] 3xl:h-[370px] inset-x-[0] mx-[auto] rounded-radius4 shadow-bs top-[1%] w-[32%]"></div>
                  <div className="absolute bg-white_A700 lg:h-[220px] xl:h-[274px] 2xl:h-[309px] 3xl:h-[370px] right-[0] rounded-radius4 shadow-bs top-[1%] w-[32%]"></div>
                  <Grid className="absolute gap-[0] grid grid-cols-1 w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="bg-white_A700 items-center lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs w-[32%]">
                        <Row
                          className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_frame_353X273.png')",
                          }}
                        >
                          <Button
                            className="2xl:mb-[283px] 3xl:mb-[339px] flex items-center justify-center lg:mb-[201px] text-center w-[35%] xl:mb-[251px]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[9px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[11px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[13px]"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="2xl:mb-[283px] 2xl:ml-[8px] 3xl:mb-[339px] 3xl:ml-[9px] flex items-center justify-center lg:mb-[201px] lg:ml-[5px] text-center w-[42%] xl:mb-[251px] xl:ml-[7px]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[9px] xl:w-[10px] xl:h-[11px] xl:ml-[11px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[13px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[15px]"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[41%]">
                          <Column className="items-center justify-start pt-[3px] w-[96%]">
                            <Column className="items-center justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Avo T-Shirt
                              </Text>
                              <Row className="items-start justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                                <Text
                                  className="price_Four3"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text className="oldPrice" as="h6" variant="h6">
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="Frame_Nine"
                              alt="Frame Nine"
                            />
                          </Column>
                          <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="plus"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="ButtonPrimary"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs w-[32%]">
                        <Row
                          className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_1.png')",
                          }}
                        >
                          <Button
                            className="2xl:mb-[283px] 3xl:mb-[339px] flex items-center justify-center lg:mb-[201px] text-center w-[35%] xl:mb-[251px]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[9px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[11px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[13px]"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="2xl:mb-[283px] 2xl:ml-[8px] 3xl:mb-[339px] 3xl:ml-[9px] flex items-center justify-center lg:mb-[201px] lg:ml-[5px] text-center w-[42%] xl:mb-[251px] xl:ml-[7px]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[9px] xl:w-[10px] xl:h-[11px] xl:ml-[11px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[13px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[15px]"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[41%]">
                          <Column className="items-center justify-start pt-[3px] w-[96%]">
                            <Column className="items-center justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Basic T-Shirt
                              </Text>
                              <Row className="items-start justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                                <Text
                                  className="price_Four3"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text className="oldPrice" as="h6" variant="h6">
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="Frame_Nine"
                              alt="Frame One"
                            />
                          </Column>
                          <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="plus One"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="ButtonPrimary One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs w-[32%]">
                        <Row
                          className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_2.png')",
                          }}
                        >
                          <Button
                            className="2xl:mb-[283px] 3xl:mb-[339px] flex items-center justify-center lg:mb-[201px] text-center w-[35%] xl:mb-[251px]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[9px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[11px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[13px]"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="2xl:mb-[283px] 2xl:ml-[8px] 3xl:mb-[339px] 3xl:ml-[9px] flex items-center justify-center lg:mb-[201px] lg:ml-[5px] text-center w-[42%] xl:mb-[251px] xl:ml-[7px]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[9px] xl:w-[10px] xl:h-[11px] xl:ml-[11px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[13px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[15px]"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[41%]">
                          <Column className="items-center justify-start lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[96%]">
                            <Column className="items-center justify-start pb-[4px] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Trendy Polo
                              </Text>
                              <Row className="items-start justify-evenly lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                                <Text
                                  className="price_Four3"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text className="oldPrice" as="h6" variant="h6">
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="Frame_Nine"
                              alt="Frame Two"
                            />
                          </Column>
                          <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="plus Two"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="ButtonPrimary Two"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="bg-white_A700 items-center lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs w-[32%]">
                        <Row
                          className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_3.png')",
                          }}
                        >
                          <Button
                            className="2xl:mb-[283px] 3xl:mb-[339px] flex items-center justify-center lg:mb-[201px] text-center w-[35%] xl:mb-[251px]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[9px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[11px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[13px]"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="2xl:mb-[283px] 2xl:ml-[8px] 3xl:mb-[339px] 3xl:ml-[9px] flex items-center justify-center lg:mb-[201px] lg:ml-[5px] text-center w-[42%] xl:mb-[251px] xl:ml-[7px]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[9px] xl:w-[10px] xl:h-[11px] xl:ml-[11px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[13px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[15px]"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[41%]">
                          <Column className="items-center justify-start pt-[3px] w-[96%]">
                            <Column className="justify-start pb-[4px] w-[100%]">
                              <Text
                                className="columnprice_five"
                                as="h6"
                                variant="h6"
                              >
                                Polo Shirt
                              </Text>
                              <Row className="items-start justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                                <Text
                                  className="price_Four3"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text className="oldPrice" as="h6" variant="h6">
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="Frame_Nine"
                              alt="Frame Ten"
                            />
                          </Column>
                          <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="plus One"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="ButtonPrimary One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs w-[32%]">
                        <Row
                          className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_4.png')",
                          }}
                        >
                          <Button
                            className="2xl:mb-[283px] 3xl:mb-[339px] flex items-center justify-center lg:mb-[201px] text-center w-[35%] xl:mb-[251px]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[9px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[11px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[13px]"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="2xl:mb-[283px] 2xl:ml-[8px] 3xl:mb-[339px] 3xl:ml-[9px] flex items-center justify-center lg:mb-[201px] lg:ml-[5px] text-center w-[42%] xl:mb-[251px] xl:ml-[7px]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[9px] xl:w-[10px] xl:h-[11px] xl:ml-[11px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[13px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[15px]"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[41%]">
                          <Column className="items-center justify-start pt-[3px] w-[96%]">
                            <Column className="justify-start pb-[4px] w-[100%]">
                              <Text
                                className="columnprice_five"
                                as="h6"
                                variant="h6"
                              >
                                Bomber
                              </Text>
                              <Row className="items-start justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                                <Text
                                  className="price_Four3"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text className="oldPrice" as="h6" variant="h6">
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="Frame_Nine"
                              alt="Frame One One"
                            />
                          </Column>
                          <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="plus One One"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="ButtonPrimary One One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center lg:pb-[22px] xl:pb-[28px] 2xl:pb-[32px] 3xl:pb-[38px] rounded-radius8 shadow-bs w-[32%]">
                        <Row
                          className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_frame_5.png')",
                          }}
                        >
                          <Button
                            className="2xl:mb-[283px] 3xl:mb-[339px] flex items-center justify-center lg:mb-[201px] text-center w-[35%] xl:mb-[251px]"
                            rightIcon={
                              <Img
                                src="images/img_airplane.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[9px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[11px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[13px]"
                                alt="airplane"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillRed40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Feature
                            </div>
                          </Button>
                          <Button
                            className="2xl:mb-[283px] 2xl:ml-[8px] 3xl:mb-[339px] 3xl:ml-[9px] flex items-center justify-center lg:mb-[201px] lg:ml-[5px] text-center w-[42%] xl:mb-[251px] xl:ml-[7px]"
                            rightIcon={
                              <Img
                                src="images/img_offer.svg"
                                className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[9px] xl:w-[10px] xl:h-[11px] xl:ml-[11px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[13px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[15px]"
                                alt="offer"
                              />
                            }
                            shape="RoundedBorder4"
                            size="md"
                            variant="FillIndigo40019"
                          >
                            <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                              Flash sale
                            </div>
                          </Button>
                        </Row>
                        <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[41%]">
                          <Column className="items-center justify-start pt-[3px] w-[96%]">
                            <Column className="justify-start pb-[4px] w-[100%]">
                              <Text
                                className="columnprice_five"
                                as="h6"
                                variant="h6"
                              >
                                Over Shirt
                              </Text>
                              <Row className="items-start justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                                <Text
                                  className="price_Four3"
                                  as="h4"
                                  variant="h4"
                                >
                                  $120.0
                                </Text>
                                <Text className="oldPrice" as="h6" variant="h6">
                                  $140.0
                                </Text>
                              </Row>
                            </Column>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="Frame_Nine"
                              alt="Frame Two One"
                            />
                          </Column>
                          <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillDeeporange300"
                            >
                              <Img
                                src="images/img_plus.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="plus Two One"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                              size="xlIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_buttonprimary_48X48.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="ButtonPrimary Two One"
                              />
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Grid>
                </Stack>
                <Row className="items-center justify-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[27%]">
                  <Button
                    className="flex items-center justify-center user_One"
                    size="mdIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowleft_32X32.svg"
                      className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                    size="md"
                    variant="OutlineBluegray900"
                  >
                    1
                  </Button>
                  <Button
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    2
                  </Button>
                  <Button
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    ...
                  </Button>
                  <Button
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    9
                  </Button>
                  <Button
                    className="flex items-center justify-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rotate-[180deg] user_One"
                    size="mdIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowright.svg"
                      className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                      alt="arrowright"
                    />
                  </Button>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ShopSearchPage;
