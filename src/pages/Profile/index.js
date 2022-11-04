import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button, List } from "components";
import Header from "components/Header/Header";

const ProfilePage = () => {
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
                <Column className="justify-start lg:mb-[359px] xl:mb-[449px] 2xl:mb-[506px] 3xl:mb-[607px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] w-[88%]">
                  <Row className="items-center w-[71%]">
                    <Img
                      src="images/img_grid.svg"
                      className="test_grid1"
                      alt="grid"
                    />
                    <Text className="rowgrid" as="h6" variant="h6">
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
                    <Text className="rowvector" as="h6" variant="h6">
                      Settings
                    </Text>
                  </Row>
                </Column>
              </Column>
            </div>
          </aside>
          <Line className="bg-indigo_51 2xl:h-[1038px] 3xl:h-[1246px] lg:h-[738px] xl:h-[923px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Row className="bg-gray_51 font-poppins items-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Column className="justify-start mb-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[34%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Profile
                </Text>
                <Column className="bg-white_A700 font-inter items-center justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:pb-[25px] xl:pb-[32px] 2xl:pb-[36px] 3xl:pb-[43px] rounded-radius4 shadow-bs w-[95%]">
                  <Stack className="lg:h-[140px] xl:h-[175px] 2xl:h-[196px] 3xl:h-[236px] w-[100%]">
                    <Img
                      src="images/img_imglibimg1.png"
                      className="absolute xl:h-[121px] 2xl:h-[136px] 3xl:h-[164px] lg:h-[97px] top-[0] w-[100%]"
                      alt="ImgLibIMGOne"
                    />
                    <Img
                      src="images/img_sherlocktoyfa.png"
                      className="absolute bottom-[0] xl:h-[107px] 2xl:h-[120px] 3xl:h-[144px] lg:h-[86px] inset-x-[0] mx-[auto] rounded-radius24 xl:w-[106px] 2xl:w-[120px] 3xl:w-[143px] lg:w-[85px]"
                      alt="SherlockToyFa One"
                    />
                  </Stack>
                  <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[71%]">
                    <Column className="items-center justify-start pt-[4px] px-[4px] w-[100%]">
                      <Text
                        className="text-bluegray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Sam Brown
                      </Text>
                      <Text className="SEP_Three" as="h6" variant="h6">
                        sambrown@gmail.com
                      </Text>
                    </Column>
                    <Row className="items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[50%]">
                      <Img
                        src="images/img_globe.svg"
                        className="test_grid1"
                        alt="globe"
                      />
                      <Text
                        className="font-medium lg:ml-[3px] xl:ml-[4px] 3xl:ml-[5px] 2xl:ml-[5px] mr-[2px] text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        sambrown.com
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="font-bold lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[47px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[40%]"
                    shape="CircleBorder24"
                    size="lg"
                    variant="FillRed600"
                  >
                    Logout
                  </Button>
                  <Img
                    src="images/img_socialicons.svg"
                    className="lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[29%]"
                    alt="socialicons"
                  />
                  <Line className="bg-indigo_51 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[83%]" />
                  <Text
                    className="lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] rowoval"
                    as="h6"
                    variant="h6"
                  >
                    Member since 2021
                  </Text>
                </Column>
                <Column className="bg-white_A700 font-inter items-center justify-end lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs4 w-[95%]">
                  <Row className="items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[95%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Personal info.
                    </Text>
                    <Img
                      src="images/img_user_32X32.svg"
                      className="LogoFortmati"
                      alt="user One"
                    />
                  </Row>
                  <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[95%]">
                    <Row className="items-center justify-between pl-[3px] py-[3px] w-[100%]">
                      <Text className="SEP_Five" as="h5" variant="h5">
                        Full name
                      </Text>
                      <Text
                        className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Avori
                      </Text>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pl-[1px] py-[1px] w-[100%]">
                      <Text className="CVV" as="h5" variant="h5">
                        Mobile
                      </Text>
                      <Text
                        className="font-medium my-[2px] text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        701-565-0439
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pl-[2px] pt-[2px] w-[100%]">
                      <Text className="rowoval" as="h5" variant="h5">
                        E-mail
                      </Text>
                      <Text
                        className="font-medium lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] mt-[3px] text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        ackermanlhn@gmail.com
                      </Text>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pl-[1px] py-[1px] w-[100%]">
                      <Text className="CVV" as="h5" variant="h5">
                        Location
                      </Text>
                      <Text className="mb-[1px] One29" as="h5" variant="h5">
                        Hanoi, Vietnam
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="font-inter items-center justify-start mb-[1px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[66%]">
                <List
                  className="lg:gap-[12px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] grid grid-cols-2 min-h-[auto] w-[100%]"
                  orientation="horizontal"
                >
                  <Row className="bg-white_A700 items-center justify-between lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs4 w-[100%]">
                    <Row className="items-center justify-center w-[61%]">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                        shape="icbRoundedBorder4"
                        size="xlIcn"
                        variant="icbFillGray51"
                      >
                        <Img
                          src="images/img_file_1.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px]"
                          alt="file One"
                        />
                      </Button>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[23px] pr-[4px] py-[4px] w-[64%]">
                        <Text className="Completedtasks" as="h6" variant="h6">
                          Completed tasks
                        </Text>
                        <Text
                          className="font-bold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-bluegray_800 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          125
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_user_32X32.svg"
                      className="LogoFortmati"
                      alt="user Two"
                    />
                  </Row>
                  <Row className="bg-white_A700 items-center justify-between lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs4 w-[100%]">
                    <Row className="items-center justify-center w-[61%]">
                      <Button
                        className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] items-center justify-center lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                        shape="icbRoundedBorder4"
                        size="xlIcn"
                        variant="icbFillGray51"
                      >
                        <Img
                          src="images/img_file_1.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px]"
                          alt="file Two"
                        />
                      </Button>
                      <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[23px] pr-[3px] py-[3px] w-[64%]">
                        <Text className="Completedtasks" as="h6" variant="h6">
                          Total revenue
                        </Text>
                        <Text
                          className="font-bold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_800 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $10,000
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_user_32X32.svg"
                      className="LogoFortmati"
                      alt="user Three"
                    />
                  </Row>
                </List>
                <Column className="bg-white_A700 items-center justify-end lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius4 shadow-bs4 w-[100%]">
                  <Row className="items-center mt-[3px] w-[99%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      My projects
                    </Text>
                    <Img
                      src="images/img_search_32X32.svg"
                      className="lg:ml-[358px] xl:ml-[448px] 2xl:ml-[505px] 3xl:ml-[605px] LogoFortmati"
                      alt="search"
                    />
                    <Img
                      src="images/img_user_32X32.svg"
                      className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] LogoFortmati"
                      alt="user Four"
                    />
                  </Row>
                  <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[99%]">
                    <Row className="items-center pt-[4px] px-[4px] w-[100%]">
                      <Text
                        className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[17px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        No.
                      </Text>
                      <Text
                        className="lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] SEP_Eight"
                        as="h5"
                        variant="h5"
                      >
                        Projects
                      </Text>
                      <Text
                        className="xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] lg:ml-[93px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        Start
                      </Text>
                      <Text
                        className="3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[98px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        Deadline
                      </Text>
                      <Text
                        className="lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] rowoval"
                        as="h5"
                        variant="h5"
                      >
                        Budget
                      </Text>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-gray_51 items-start my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
                        <Text className="One29" as="h5" variant="h5">
                          1
                        </Text>
                        <Text
                          className="lg:mt-[3px] xl:mt-[4px] 3xl:mt-[5px] 2xl:mt-[5px] test_21033"
                          as="h5"
                          variant="h5"
                        >
                          Branding guideline
                        </Text>
                        <Text
                          className="font-medium lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[59px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          2 Sep, 2020
                        </Text>
                        <Text className="test_10Sep2020" as="h5" variant="h5">
                          10 Sep, 2020
                        </Text>
                        <Text className="price_One" as="h5" variant="h5">
                          $1,000
                        </Text>
                      </Row>
                      <Row className="bg-white_A700 items-start my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
                        <Text className="One29" as="h5" variant="h5">
                          2
                        </Text>
                        <Text className="Mobiledesign" as="h5" variant="h5">
                          Mobile design
                        </Text>
                        <Text
                          className="test_2Sep2020_One"
                          as="h5"
                          variant="h5"
                        >
                          2 Sep, 2020
                        </Text>
                        <Text className="test_10Sep2020" as="h5" variant="h5">
                          10 Sep, 2020
                        </Text>
                        <Text className="price_One" as="h5" variant="h5">
                          $1,200
                        </Text>
                      </Row>
                      <Row className="bg-gray_51 items-start my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
                        <Text className="One29" as="h5" variant="h5">
                          3
                        </Text>
                        <Text className="Landingpages" as="h5" variant="h5">
                          Landing pages
                        </Text>
                        <Text
                          className="test_2Sep2020_Two"
                          as="h5"
                          variant="h5"
                        >
                          2 Sep, 2020
                        </Text>
                        <Text className="test_10Sep2020" as="h5" variant="h5">
                          10 Sep, 2020
                        </Text>
                        <Text className="price_One" as="h5" variant="h5">
                          $1,800
                        </Text>
                      </Row>
                      <Row className="bg-white_A700 items-start my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
                        <Text className="One29" as="h5" variant="h5">
                          2
                        </Text>
                        <Text className="Mobiledesign" as="h5" variant="h5">
                          Mobile design
                        </Text>
                        <Text
                          className="test_2Sep2020_One"
                          as="h5"
                          variant="h5"
                        >
                          2 Sep, 2020
                        </Text>
                        <Text className="test_10Sep2020" as="h5" variant="h5">
                          10 Sep, 2020
                        </Text>
                        <Text className="price_One" as="h5" variant="h5">
                          $1,200
                        </Text>
                      </Row>
                      <Row className="bg-gray_51 items-start my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
                        <Text className="One29" as="h5" variant="h5">
                          3
                        </Text>
                        <Text className="Landingpages" as="h5" variant="h5">
                          Landing pages
                        </Text>
                        <Text
                          className="test_2Sep2020_Two"
                          as="h5"
                          variant="h5"
                        >
                          2 Sep, 2020
                        </Text>
                        <Text className="test_10Sep2020" as="h5" variant="h5">
                          10 Sep, 2020
                        </Text>
                        <Text className="price_One" as="h5" variant="h5">
                          $1,800
                        </Text>
                      </Row>
                      <Row className="bg-white_A700 items-start my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
                        <Text className="One29" as="h5" variant="h5">
                          2
                        </Text>
                        <Text className="Mobiledesign" as="h5" variant="h5">
                          Mobile design
                        </Text>
                        <Text
                          className="test_2Sep2020_One"
                          as="h5"
                          variant="h5"
                        >
                          2 Sep, 2020
                        </Text>
                        <Text className="test_10Sep2020" as="h5" variant="h5">
                          10 Sep, 2020
                        </Text>
                        <Text className="price_One" as="h5" variant="h5">
                          $1,200
                        </Text>
                      </Row>
                      <Row className="bg-gray_51 items-start my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
                        <Text className="One29" as="h5" variant="h5">
                          3
                        </Text>
                        <Text className="Landingpages" as="h5" variant="h5">
                          Landing pages
                        </Text>
                        <Text
                          className="test_2Sep2020_Two"
                          as="h5"
                          variant="h5"
                        >
                          2 Sep, 2020
                        </Text>
                        <Text className="test_10Sep2020" as="h5" variant="h5">
                          10 Sep, 2020
                        </Text>
                        <Text className="price_One" as="h5" variant="h5">
                          $1,800
                        </Text>
                      </Row>
                      <Row className="bg-white_A700 items-start my-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
                        <Text className="One29" as="h5" variant="h5">
                          2
                        </Text>
                        <Text className="Mobiledesign" as="h5" variant="h5">
                          Mobile design
                        </Text>
                        <Text
                          className="test_2Sep2020_One"
                          as="h5"
                          variant="h5"
                        >
                          2 Sep, 2020
                        </Text>
                        <Text className="test_10Sep2020" as="h5" variant="h5">
                          10 Sep, 2020
                        </Text>
                        <Text className="price_One" as="h5" variant="h5">
                          $1,200
                        </Text>
                      </Row>
                    </List>
                    <Img
                      src="images/img_minimize.svg"
                      className="lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] plus_One"
                      alt="minimize"
                    />
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ProfilePage;
