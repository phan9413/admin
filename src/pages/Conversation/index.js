import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Button,
  List,
  Stack,
  Input,
  Radio,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";

const ConversationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="font-inter items-center justify-start mx-[auto] lg:pb-[4px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[100%]">
        <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
          <aside className="w-[17%]">
            <div className="">
              <Column className="items-center justify-start lg:mb-[303px] xl:mb-[379px] 2xl:mb-[427px] 3xl:mb-[512px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mr-[38px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[64%]">
                <Img
                  src="images/img_logo.svg"
                  className="lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] w-[57%]"
                  alt="Logo"
                />
                <Column className="justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] w-[100%]">
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
                        src="images/img_menu_20X20.svg"
                        className="sort"
                        alt="menu"
                      />
                      <Text
                        className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rowgrid"
                        as="h6"
                        variant="h6"
                      >
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
          <Line className="bg-indigo_51 3xl:h-[1114px] lg:h-[660px] xl:h-[825px] 2xl:h-[928px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 font-poppins justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Text
                className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Message
              </Text>
              <Row className="bg-white_A700 font-inter items-center mb-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:pl-[22px] xl:pl-[28px] 2xl:pl-[32px] 3xl:pl-[38px] rounded-radius4 shadow-bs w-[100%]">
                <Column className="w-[37%]">
                  <Row className="items-center w-[43%]">
                    <Button
                      className="flex lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] items-center justify-center rounded-radius50 lg:w-[44px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                      size="mdIcn"
                      variant="icbOutlineGreen700"
                    >
                      <Img
                        src="images/img_robototoyfacefi.png"
                        className="flex items-center justify-center lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px]"
                        alt="Group One"
                      />
                    </Button>
                    <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] pr-[2px] py-[2px] w-[56%]">
                      <Text className="ProductDesign_Four" as="h4" variant="h4">
                        Ackerman
                      </Text>
                      <Text
                        className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rowoval"
                        as="h6"
                        variant="h6"
                      >
                        My accout
                      </Text>
                    </Column>
                  </Row>
                  <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[94%]">
                    <Text className="rowoval" as="h6" variant="h6">
                      Online (10)
                    </Text>
                    <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <List
                        className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-5 min-h-[auto] w-[88%]"
                        orientation="horizontal"
                      >
                        <Column className="items-center justify-start mb-[3px] w-[100%]">
                          <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[100%]">
                            <Img
                              src="images/img_punktoyface1.png"
                              className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                              alt="PunkToyFaceOne"
                            />
                            <div className="absolute bg-green_700 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          </Stack>
                          <Text
                            className="columnpunktoyfaceone"
                            as="h5"
                            variant="h5"
                          >
                            Lee
                          </Text>
                        </Column>
                        <Column className="items-center justify-start mb-[4px] w-[100%]">
                          <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[100%]">
                            <Img
                              src="images/img_indiahigh.png"
                              className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                              alt="Indiahigh"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          </Stack>
                          <Text
                            className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Riri
                          </Text>
                        </Column>
                        <Column className="justify-start mb-[3px] w-[100%]">
                          <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[100%]">
                            <Img
                              src="images/img_tintin22.png"
                              className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                              alt="TinTinTwentyTwo"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          </Stack>
                          <Text
                            className="ml-[3px] columnpunktoyfaceone"
                            as="h5"
                            variant="h5"
                          >
                            Jimo
                          </Text>
                        </Column>
                        <Column className="items-center justify-start mb-[3px] w-[100%]">
                          <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[100%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                              alt="VanGoghByAmrit"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          </Stack>
                          <Text
                            className="columnpunktoyfaceone"
                            as="h5"
                            variant="h5"
                          >
                            Acker
                          </Text>
                        </Column>
                        <Column className="justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] ml-[2px] w-[96%]">
                            <Img
                              src="images/img_punk9252toyface.png"
                              className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                              alt="Punk9252ToyFace"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                          </Stack>
                          <Text
                            className="mb-[1px] columnpunktoyfaceone"
                            as="h5"
                            variant="h5"
                          >
                            Momo
                          </Text>
                        </Column>
                      </List>
                      <Img
                        src="images/img_arrowright_32X32.svg"
                        className="computer"
                        alt="arrowright"
                      />
                    </Row>
                  </Column>
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-medium p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="2xl:mt-[32px] 3xl:mt-[38px] flex lg:mt-[22px] w-[92%] xl:mt-[28px]"
                    name="SearchBox One"
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
                    variant="srcFillGray51"
                  ></Input>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[92%]"
                    orientation="vertical"
                  >
                    <Row className="listrobototoyfacefi">
                      <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[13%]">
                        <Img
                          src="images/img_punktoyface1.png"
                          className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                          alt="PunkToyFaceOne One"
                        />
                        <div className="absolute bg-green_700 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Stack>
                      <Row className="items-center justify-evenly w-[82%]">
                        <Column className="lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[90%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Lee Ankar
                          </Text>
                          <Text
                            className="font-medium xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hey! Can i meet you for a sec?
                          </Text>
                        </Column>
                        <Column className="pl-[2px] pt-[2px] w-[10%]">
                          <Text className="now" as="h6" variant="h6">
                            now
                          </Text>
                          <Text
                            className="ml-[4px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rowgroup"
                            variant="body1"
                          >
                            3
                          </Text>
                        </Column>
                      </Row>
                    </Row>
                    <Line className="self-center w-[82%] h-[1px] bg-indigo_51" />
                    <Row className="listrobototoyfacefi">
                      <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[13%]">
                        <Img
                          src="images/img_tintin22.png"
                          className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                          alt="TinTinTwentyTwo One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Stack>
                      <Row className="items-start justify-evenly w-[82%]">
                        <Column className="justify-end lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[83%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Jimo
                          </Text>
                          <Text className="Sorryformymi" as="h5" variant="h5">
                            Sorry for my mistaken ✓
                          </Text>
                        </Column>
                        <Text className="now" as="h6" variant="h6">
                          23 mins
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[82%] h-[1px] bg-indigo_51" />
                    <Row className="listrobototoyfacefi">
                      <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[13%]">
                        <Img
                          src="images/img_punk9252toyface.png"
                          className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                          alt="Punk9252ToyFace One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Stack>
                      <Row className="items-start justify-evenly w-[82%]">
                        <Column className="justify-end lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[83%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Momo
                          </Text>
                          <Text className="Sorryformymi" as="h5" variant="h5">
                            Sorry for my mistaken ✓
                          </Text>
                        </Column>
                        <Text className="now" as="h6" variant="h6">
                          23 mins
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[82%] h-[1px] bg-indigo_51" />
                    <Row className="listrobototoyfacefi">
                      <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[13%]">
                        <Img
                          src="images/img_indiahigh.png"
                          className="absolute lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 top-[0] w-[100%]"
                          alt="Indiahigh One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"></div>
                      </Stack>
                      <Row className="items-start justify-evenly w-[82%]">
                        <Column className="justify-end lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[83%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Riri Lee
                          </Text>
                          <Text className="Sorryformymi" as="h5" variant="h5">
                            Sorry for my mistaken ✓
                          </Text>
                        </Column>
                        <Text className="now" as="h6" variant="h6">
                          23 mins
                        </Text>
                      </Row>
                    </Row>
                  </List>
                </Column>
                <Line className="bg-indigo_51 lg:h-[532px] xl:h-[665px] 2xl:h-[748px] 3xl:h-[897px] w-[1px]" />
                <Column className="items-center w-[63%]">
                  <Row className="items-start w-[91%]">
                    <Column className="justify-end lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[83%]">
                      <Text
                        className="font-bold text-bluegray_800 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Lee Ankar
                      </Text>
                      <Radio
                        value="Online"
                        className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                        inputClassName="h-[8px] mr-[5px] w-[8px]"
                        checked={false}
                        name="ProfileViewsOne"
                        label="Online"
                        size="sm"
                        variant="FillGreen7001_2"
                      ></Radio>
                    </Column>
                    <Button
                      className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      size="xlIcn"
                      variant="icbFillGray51"
                    >
                      <Img
                        src="images/img_search_24X24.svg"
                        className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                        alt="search"
                      />
                    </Button>
                    <Button
                      className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      size="xlIcn"
                      variant="icbFillGray51"
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                        alt="overflowmenu"
                      />
                    </Button>
                  </Row>
                  <Line className="bg-indigo_51 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
                  <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[91%]">
                    <Stack className="2xl:h-[105px] 3xl:h-[125px] lg:h-[74px] xl:h-[93px] w-[50%]">
                      <Column className="absolute justify-start top-[0] w-[100%]">
                        <Text
                          className="lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] rowoval"
                          as="h6"
                          variant="h6"
                        >
                          Lee Ankar{" "}
                        </Text>
                        <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Img
                            src="images/img_punktoyface1.png"
                            className="rounded-radius50 computer"
                            alt="PunkToyFaceOne Two"
                          />
                          <Column className="bg-gray_51 justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[89%]">
                            <Text
                              className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Hey! Can i meet you for a sec?
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Text
                        className="absolute bg-gray_51 border-2 border-solid border-white_A700 bottom-[0] flex font-normal items-center not-italic lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] right-[3%] rounded-radius50 text-black_900 w-[28px]"
                        as="h5"
                        variant="h5"
                      >
                        😍
                      </Text>
                    </Stack>
                    <Row className="items-end justify-end ml-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[49%]">
                      <Input
                        className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                        wrapClassName="w-[91%]"
                        name="Group Four"
                        placeholder="Hey! Can i meet you for a sec?"
                        shape="CustomBorderBL4"
                        size="xl"
                        variant="FillDeeporange300"
                      ></Input>
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] test_grid"
                        alt="checkmark"
                      />
                    </Row>
                    <Row className="items-end justify-end ml-[auto] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[49%]">
                      <Column className="bg-gray_51 items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[91%]">
                        <Column
                          className="bg-cover bg-repeat items-end justify-end lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group8545.png')",
                          }}
                        >
                          <Button
                            className="font-medium mb-[1px] 3xl:mt-[110px] lg:mt-[65px] xl:mt-[81px] 2xl:mt-[92px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[17%]"
                            shape="RoundedBorder10"
                            size="sm"
                            variant="FillBlack90066"
                          >
                            1:00
                          </Button>
                        </Column>
                        <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pr-[3px] pt-[3px] w-[98%]">
                          <Text
                            className="ProfileViews_Two"
                            as="h5"
                            variant="h5"
                          >
                            ☕️ Life Style Coffee
                          </Text>
                          <Text
                            className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-bluegray_402 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            8350 Melrose Ave, Los Angeles
                          </Text>
                        </Column>
                      </Column>
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[152px] xl:mt-[191px] 2xl:mt-[215px] 3xl:mt-[258px] test_grid"
                        alt="checkmark One"
                      />
                    </Row>
                    <Row className="bg-gray_51 items-center 2xl:mt-[105px] 3xl:mt-[126px] lg:mt-[74px] xl:mt-[93px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[100%]">
                      <Input
                        className="placeholder:text-bluegray_400 frame3801"
                        wrapClassName="ml-[4px] mt-[1px] w-[74%]"
                        name="frame3801"
                        placeholder="Enter message..."
                        size="sm"
                        variant="FillGray51"
                      ></Input>
                      <Img
                        src="images/img_share.svg"
                        className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] computer"
                        alt="share"
                      />
                      <Img
                        src="images/img_link.svg"
                        className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] computer"
                        alt="link"
                      />
                      <Img
                        src="images/img_plus_1.svg"
                        className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] computer"
                        alt="plus"
                      />
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

export default ConversationPage;
