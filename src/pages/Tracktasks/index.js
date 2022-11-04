import React from "react";

import { Column, Row, Line, Text, Img, Button, Stack } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import Header from "components/Header/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const TracktasksPage = () => {
  return (
    <>
      <Column className="font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
          <Sidebar1 className="w-[17%]" />
          <Line className="bg-indigo_51 3xl:h-[1141px] lg:h-[676px] xl:h-[846px] 2xl:h-[951px] w-[1px]" />
          <Column className="font-inter items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 font-poppins items-center justify-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
              <Row className="items-start justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[98%]">
                <Text
                  className="mt-[2px] text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Product design
                </Text>
                <Text className="rowoval" as="h5" variant="h5">
                  <span className="text-bluegray_400 font-poppins lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    File management/
                  </span>
                  <span className="text-bluegray_800 font-poppins lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    {" "}
                    Product design
                  </span>
                </Text>
              </Row>
              <Accordion
                preExpanded={[0]}
                className="font-inter 3xl:mb-[118px] lg:mb-[70px] xl:mb-[88px] 2xl:mb-[99px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[99%]"
              >
                {" "}
                {[...Array(3)].map((item, index) => (
                  <AccordionItem uuid={index} key={Math.random()}>
                    <Column className="bg-white_A700 items-center justify-start lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius4 shadow-bs w-[100%]">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {({ expanded }) => (
                              <Column className="items-center justify-between w-[100%]">
                                <Row className="items-center w-[94%]">
                                  <Img
                                    src="images/img_arrowup_24X24.svg"
                                    className="computer"
                                    alt="arrowup"
                                  />
                                  <Row className="font-poppins items-start justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[14%]">
                                    {expanded && (
                                      <Img
                                        src="images/img_television.svg"
                                        className="computer"
                                        alt="television"
                                      />
                                    )}
                                    <Text
                                      className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[3px] ProfileViews_Two"
                                      as="h5"
                                      variant="h5"
                                    >
                                      In process (10)
                                    </Text>
                                    {!expanded && (
                                      <Img
                                        src="images/img_television.svg"
                                        className="computer"
                                        alt="television One"
                                      />
                                    )}
                                  </Row>
                                  <Button
                                    className="font-normal lg:ml-[566px] xl:ml-[708px] 2xl:ml-[797px] 3xl:ml-[956px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                                    shape="CircleBorder20"
                                    size="md"
                                    variant="FillGray51"
                                  >
                                    Edit{" "}
                                  </Button>
                                </Row>
                                <Line className="bg-indigo_51 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                              </Column>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="w-full">
                        <Row className="font-poppins items-center lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[95%]">
                          <Column className="border-2 border-indigo_51 border-solid items-center lg:p-[39px] xl:p-[48px] 2xl:p-[55px] 3xl:p-[66px] rounded-radius4 w-[24%]">
                            <Button
                              className="flex lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius50 lg:w-[39px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                              size="2xlIcn"
                              variant="icbFillRed55"
                            >
                              <Img
                                src="images/img_plus_24X24.svg"
                                className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                alt="plus"
                              />
                            </Button>
                            <Column className="items-center justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pt-[3px] px-[3px] w-[99%]">
                              <Text
                                className="font-bold text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Add file
                              </Text>
                              <Text
                                className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-bluegray_800 text-center w-[95%]"
                                as="h6"
                                variant="h6"
                              >
                                Add file to manage your vital task
                              </Text>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs w-[24%]">
                            <Column className="items-center justify-start ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[91%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                LD presentation file
                              </Text>
                              <Text
                                className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_800 w-[91%]"
                                as="h6"
                                variant="h6"
                              >
                                Introduction about LD
                                <br />
                                Project in detail
                              </Text>
                            </Column>
                            <Column className="justify-start ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[99%]">
                              <Text
                                className="ProfileViews_Two"
                                as="h5"
                                variant="h5"
                              >
                                Process (80%)
                              </Text>
                              <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                              </Row>
                            </Column>
                            <Row className="items-end mb-[1px] ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[99%]">
                              <Column className="justify-start w-[83%]">
                                <Text
                                  className="ProfileViews_Two"
                                  as="h5"
                                  variant="h5"
                                >
                                  Members
                                </Text>
                                <Stack className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius16 w-[30%]">
                                  <Img
                                    src="images/img_robototoyfacefi.png"
                                    className="absolute left-[0] rounded-radius50 user_One"
                                    alt="RobotoToyFaceFi"
                                  />
                                  <Img
                                    src="images/img_fidenza978toy.png"
                                    className="absolute right-[0] rounded-radius50 user_One"
                                    alt="Fidenza978Toy"
                                  />
                                </Stack>
                              </Column>
                              <Button
                                className="flex items-center justify-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius50 user_One"
                                size="mdIcn"
                                variant="icbFillGray51"
                              >
                                <Img
                                  src="images/img_overflowmenu.svg"
                                  className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                  alt="overflowmenu"
                                />
                              </Button>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs w-[24%]">
                            <Column className="justify-start ml-[1px] mt-[1px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[91%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Urgent Tasks
                              </Text>
                              <Text
                                className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mr-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_800 w-[94%]"
                                as="h6"
                                variant="h6"
                              >
                                Introduction about LD
                                <br />
                                Project in detail
                              </Text>
                            </Column>
                            <Column className="justify-start ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[99%]">
                              <Text
                                className="ProfileViews_Two"
                                as="h5"
                                variant="h5"
                              >
                                Process (10%)
                              </Text>
                              <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                                <Line className="bg-indigo_400 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                              </Row>
                            </Column>
                            <Row className="items-end mb-[1px] ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[99%]">
                              <Column className="justify-start w-[83%]">
                                <Text
                                  className="ProfileViews_Two"
                                  as="h5"
                                  variant="h5"
                                >
                                  Members
                                </Text>
                                <Stack className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius16 w-[30%]">
                                  <Img
                                    src="images/img_robototoyfacefi.png"
                                    className="absolute left-[0] rounded-radius50 user_One"
                                    alt="RobotoToyFaceFi One"
                                  />
                                  <Img
                                    src="images/img_fidenza978toy.png"
                                    className="absolute right-[0] rounded-radius50 user_One"
                                    alt="Fidenza978Toy One"
                                  />
                                </Stack>
                              </Column>
                              <Button
                                className="flex items-center justify-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius50 user_One"
                                size="mdIcn"
                                variant="icbFillGray51"
                              >
                                <Img
                                  src="images/img_overflowmenu.svg"
                                  className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                  alt="overflowmenu One"
                                />
                              </Button>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs w-[24%]">
                            <Column className="justify-start ml-[1px] mt-[1px] pr-[4px] pt-[4px] w-[91%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Plan for 2022
                              </Text>
                              <Text
                                className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mr-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-bluegray_800 w-[93%]"
                                as="h6"
                                variant="h6"
                              >
                                Introduction about LD
                                <br />
                                Project in detail
                              </Text>
                            </Column>
                            <Column className="justify-start ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[99%]">
                              <Text
                                className="ProfileViews_Two"
                                as="h5"
                                variant="h5"
                              >
                                Process (0%)
                              </Text>
                              <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                                <Line className="bg-indigo_51 h-[5px] w-[18%]" />
                              </Row>
                            </Column>
                            <Row className="items-end mb-[1px] ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[99%]">
                              <Column className="justify-start w-[83%]">
                                <Text
                                  className="ProfileViews_Two"
                                  as="h5"
                                  variant="h5"
                                >
                                  Members
                                </Text>
                                <Img
                                  src="images/img_tintin22.png"
                                  className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius50 user_One"
                                  alt="TinTinTwentyTwo"
                                />
                              </Column>
                              <Button
                                className="flex items-center justify-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius50 user_One"
                                size="mdIcn"
                                variant="icbFillGray51"
                              >
                                <Img
                                  src="images/img_overflowmenu.svg"
                                  className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                                  alt="overflowmenu Two"
                                />
                              </Button>
                            </Row>
                          </Column>
                        </Row>
                      </AccordionItemPanel>
                    </Column>
                  </AccordionItem>
                ))}
              </Accordion>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default TracktasksPage;
