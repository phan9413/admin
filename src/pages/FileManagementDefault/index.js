import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  Img,
  Button,
  Stack,
  Grid,
  Radio,
  List,
} from "components";
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
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FileManagementDefaultPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar1 className="w-[17%]" />
          <Line className="bg-indigo_51 3xl:h-[1140px] lg:h-[675px] xl:h-[844px] 2xl:h-[950px] w-[1px]" />
          <Column className="font-inter items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Row className="bg-gray_51 font-poppins items-end lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] w-[100%]">
              <Column className="items-center justify-start mb-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] w-[24%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    File Management
                  </Text>
                  <Column className="bg-white_A700 items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] lg:p-[22px] xl:p-[28px] 2xl:p-[31px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                    <Accordion
                      preExpanded={[0]}
                      className="font-inter w-[100%]"
                    >
                      {" "}
                      {[...Array(3)].map((item, index) => (
                        <AccordionItem uuid={index} key={Math.random()}>
                          <Column className="justify-start w-[100%]">
                            <AccordionItemHeading className="w-full">
                              <AccordionItemButton>
                                <AccordionItemState>
                                  {({ expanded }) => (
                                    <Row className="items-center justify-between w-[100%]">
                                      <Row className="items-center w-[50%]">
                                        <Img
                                          src="images/img_television.svg"
                                          className="television"
                                          alt="television"
                                        />
                                        <Text
                                          className="font-medium xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] text-bluegray_900 w-[auto]"
                                          as="h5"
                                          variant="h5"
                                        >
                                          Main File
                                        </Text>
                                      </Row>
                                      {expanded && (
                                        <Img
                                          src="images/img_arrowup_24X24.svg"
                                          className="television"
                                          alt="arrowup"
                                        />
                                      )}
                                      {!expanded && (
                                        <Img
                                          src="images/img_arrowup_24X24.svg"
                                          className="television"
                                          alt="arrowup One"
                                        />
                                      )}
                                    </Row>
                                  )}
                                </AccordionItemState>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="w-full">
                              <Column className="font-poppins justify-start lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[43px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] w-[58%]">
                                <Text className="rowoval" as="h5" variant="h5">
                                  Product Design
                                </Text>
                                <Text
                                  className="lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rowoval"
                                  as="h5"
                                  variant="h5"
                                >
                                  Outsource
                                </Text>
                                <Text
                                  className="lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] rowoval"
                                  as="h5"
                                  variant="h5"
                                >
                                  Graphics
                                </Text>
                                <Text
                                  className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] rowoval"
                                  as="h5"
                                  variant="h5"
                                >
                                  Empty states
                                </Text>
                              </Column>
                            </AccordionItemPanel>
                          </Column>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <Button
                      className="2xl:mt-[23px] 3xl:mt-[28px] flex items-center justify-center lg:mt-[17px] text-center w-[100%] xl:mt-[21px]"
                      rightIcon={
                        <Img
                          src="images/img_plus_24X24.svg"
                          className="text-center lg:w-[14px] lg:h-[15px] lg:ml-[9px] xl:w-[17px] xl:h-[18px] xl:ml-[11px] 2xl:w-[19px] 2xl:h-[20px] 2xl:ml-[12px] 3xl:w-[23px] 3xl:h-[24px] 3xl:ml-[15px]"
                          alt="plus"
                        />
                      }
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillRed54"
                    >
                      <div className="bg-transparent font-bold font-poppins xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]">
                        Add new folder
                      </div>
                    </Button>
                  </Column>
                </Column>
                <Column className="bg-white_A700 font-inter justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[15px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[19px] rounded-radius4 shadow-bs w-[100%]">
                  <Img
                    src="images/img_plus_1.svg"
                    className="lg:ml-[165px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[279px] television"
                    alt="plus"
                  />
                  <Stack className="lg:h-[137px] xl:h-[171px] 2xl:h-[192px] 3xl:h-[231px] lg:mr-[4px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mt-[1px] w-[97%]">
                    <Stack className="absolute xl:h-[112px] 2xl:h-[126px] 3xl:h-[152px] lg:h-[90px] inset-x-[0] mx-[auto] top-[0] w-[97%]">
                      <div className="absolute bottom-[0] overflow-x-auto w-[100%]">
                        <Stack className="lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] w-[100%]">
                          <Img
                            src="images/img_shadow_69X288.png"
                            className="absolute lg:h-[49px] xl:h-[62px] 2xl:h-[69px] 3xl:h-[83px] left-[0] w-[100%]"
                            alt="shadow"
                          />
                          <Img
                            src="images/img_shadow_69X288.png"
                            className="absolute lg:h-[34px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[57px] right-[18%] top-[0] w-[53%]"
                            alt="shadow One"
                          />
                        </Stack>
                      </div>
                      <Column
                        className="absolute bg-cover bg-repeat items-center justify-start right-[24%] top-[0] w-[40%]"
                        style={{
                          backgroundImage: "url('images/img_base_81X97.png')",
                        }}
                      >
                        <Stack className="bg-deep_orange_300 lg:h-[58px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[98px] w-[100%]">
                          <Column
                            className="absolute bg-cover bg-repeat h-[max-content] inset-[0] items-center justify-center m-[auto] w-[90%]"
                            style={{
                              backgroundImage: "url('images/img_paper.png')",
                            }}
                          >
                            <div className="bg-gray_101 lg:h-[47px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] w-[100%]"></div>
                          </Column>
                          <Column
                            className="absolute bg-cover bg-repeat items-center justify-start w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_specular_81X97.png')",
                            }}
                          >
                            <Stack
                              className="bg-cover bg-repeat lg:h-[58px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[98px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_specular_81X97.png')",
                              }}
                            >
                              <Img
                                src="images/img_specular_81X97.png"
                                className="absolute lg:h-[58px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[98px] w-[100%]"
                                alt="specular"
                              />
                            </Stack>
                          </Column>
                        </Stack>
                      </Column>
                    </Stack>
                    <Column className="absolute bottom-[0] items-center justify-end p-[3px] right-[0] w-[90%]">
                      <Text
                        className="font-bold mt-[3px] text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Upgrade Features
                      </Text>
                      <Text
                        className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[21px] 3xl:leading-[26px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-bluegray_800 text-center w-[82%]"
                        as="h6"
                        variant="h6"
                      >
                        Upgrade account to access multiple features
                      </Text>
                    </Column>
                  </Stack>
                  <Row className="items-end justify-center lg:mb-[11px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[19px] lg:ml-[53px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[43px] 3xl:mt-[52px] w-[49%]">
                    <Text
                      className="font-bold mb-[2px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-deep_orange_300 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Upgrade now
                    </Text>
                    <Img
                      src="images/img_forward.svg"
                      className="3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] television"
                      alt="forward"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 font-inter items-center justify-start mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[87px] lg:p-[18px] xl:p-[23px] 2xl:p-[25px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[49%]">
                <Column className="items-center justify-start w-[98%]">
                  <Row className="items-center w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Main File
                    </Text>
                    <Button
                      className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center lg:ml-[231px] xl:ml-[289px] 2xl:ml-[325px] 3xl:ml-[390px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                      size="lgIcn"
                      variant="icbFillGray51"
                    >
                      <Img
                        src="images/img_search_24X24.svg"
                        className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px]"
                        alt="search"
                      />
                    </Button>
                    <Button
                      className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] items-center justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                      size="lgIcn"
                      variant="icbFillGray51"
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px]"
                        alt="overflowmenu"
                      />
                    </Button>
                  </Row>
                  <Grid className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[19px] 3xl:gap-[23px] grid grid-cols-2 lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] w-[100%]">
                    <Column className="bg-white_A700 border border-indigo_51 border-solid items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius4 w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Img
                          src="images/img_folder_24X24.svg"
                          className="television"
                          alt="folder One"
                        />
                        <Img
                          src="images/img_user_32X32.svg"
                          className="television"
                          alt="user One"
                        />
                      </Row>
                      <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] w-[100%]">
                        <Column className="justify-end pr-[4px] py-[4px] w-[86%]">
                          <Text className="Fifty" as="h5" variant="h5">
                            Product Design
                          </Text>
                          <Text className="filesCounter" as="h6" variant="h6">
                            12 Files
                          </Text>
                        </Column>
                        <Text
                          className="rowproductdesign_one"
                          as="h6"
                          variant="h6"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 border border-indigo_51 border-solid items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius4 w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Img
                          src="images/img_folder_24X24.svg"
                          className="television"
                          alt="folder Two"
                        />
                        <Img
                          src="images/img_user_32X32.svg"
                          className="television"
                          alt="user Two"
                        />
                      </Row>
                      <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] w-[100%]">
                        <Column className="justify-end pr-[4px] py-[4px] w-[86%]">
                          <Text className="Fifty" as="h5" variant="h5">
                            Outsource
                          </Text>
                          <Text
                            className="2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rowoval"
                            as="h6"
                            variant="h6"
                          >
                            12 Files
                          </Text>
                        </Column>
                        <Text
                          className="rowproductdesign_one"
                          as="h6"
                          variant="h6"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 border border-indigo_51 border-solid items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius4 w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Img
                          src="images/img_folder_24X24.svg"
                          className="television"
                          alt="folder Three"
                        />
                        <Img
                          src="images/img_user_32X32.svg"
                          className="television"
                          alt="user Three"
                        />
                      </Row>
                      <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] w-[100%]">
                        <Column className="justify-end pr-[4px] py-[4px] w-[86%]">
                          <Text className="Fifty" as="h5" variant="h5">
                            Graphics
                          </Text>
                          <Text className="filesCounter" as="h6" variant="h6">
                            12 Files
                          </Text>
                        </Column>
                        <Text
                          className="rowproductdesign_one"
                          as="h6"
                          variant="h6"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 border border-indigo_51 border-solid items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius4 w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Img
                          src="images/img_folder_24X24.svg"
                          className="television"
                          alt="folder Four"
                        />
                        <Img
                          src="images/img_user_32X32.svg"
                          className="television"
                          alt="user Four"
                        />
                      </Row>
                      <Row className="items-end lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] w-[100%]">
                        <Column className="justify-end pr-[4px] py-[4px] w-[86%]">
                          <Text
                            className="ProductDesign_Four"
                            as="h5"
                            variant="h5"
                          >
                            Empty States
                          </Text>
                          <Text className="filesCounter" as="h6" variant="h6">
                            12 Files
                          </Text>
                        </Column>
                        <Text
                          className="rowproductdesign_one"
                          as="h6"
                          variant="h6"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Column>
                  </Grid>
                </Column>
                <Column className="items-center justify-start lg:mb-[11px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[19px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] w-[98%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Recent files
                      </Text>
                      <Row className="items-center justify-evenly pl-[1px] py-[1px] w-[17%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          View all
                        </Text>
                        <Img
                          src="images/img_arrowright_1.svg"
                          className="arrowright1"
                          alt="arrowright"
                        />
                      </Row>
                    </Row>
                    <Row className="items-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[34px] 3xl:mt-[41px] pr-[3px] py-[3px] w-[92%]">
                      <Text className="SEP_Eight" as="h5" variant="h5">
                        Name
                      </Text>
                      <Text
                        className="lg:ml-[103px] xl:ml-[129px] 2xl:ml-[145px] 3xl:ml-[175px] SEP_Five"
                        as="h5"
                        variant="h5"
                      >
                        Date motified
                      </Text>
                      <Text
                        className="lg:ml-[58px] xl:ml-[73px] 2xl:ml-[82px] 3xl:ml-[99px] SEP_Five"
                        as="h5"
                        variant="h5"
                      >
                        Size
                      </Text>
                    </Row>
                    <Row className="bg-gray_51 items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] w-[100%]">
                      <Row className="items-center justify-center w-[25%]">
                        <Img
                          src="images/img_file_24X24.svg"
                          className="television"
                          alt="file One"
                        />
                        <Text className="rowfile_one" as="h5" variant="h5">
                          index.html
                        </Text>
                      </Row>
                      <Text className="rowline" as="h5" variant="h5">
                        10.10.2021, 09:45
                      </Text>
                      <Text
                        className="lg:mr-[27px] xl:mr-[34px] 2xl:mr-[38px] 3xl:mr-[46px] rowline"
                        as="h5"
                        variant="h5"
                      >
                        09 KB
                      </Text>
                    </Row>
                    <Row className="bg-white_A700 items-center justify-between lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] w-[100%]">
                      <Radio
                        value="imagepng"
                        className="font-normal not-italic lg:pl-[11px] xl:pl-[14px] 2xl:pl-[15px] 3xl:pl-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-bluegray_900"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        checked={false}
                        name="imagepng"
                        label="imagepng"
                        size="md"
                      ></Radio>
                      <Text className="rowline" as="h5" variant="h5">
                        10.10.2021, 09:45
                      </Text>
                      <Text
                        className="lg:mr-[24px] xl:mr-[30px] 2xl:mr-[33px] 3xl:mr-[40px] rowline"
                        as="h5"
                        variant="h5"
                      >
                        110 KB
                      </Text>
                    </Row>
                  </Column>
                  <Row className="bg-gray_51 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] w-[100%]">
                    <Row className="items-center w-[31%]">
                      <Img
                        src="images/img_file_2.svg"
                        className="television"
                        alt="file Two"
                      />
                      <Text className="rowfile_one" as="h5" variant="h5">
                        Document.txt
                      </Text>
                    </Row>
                    <Text
                      className="lg:ml-[35px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] rowline"
                      as="h5"
                      variant="h5"
                    >
                      10.10.2021, 09:45
                    </Text>
                    <Text
                      className="lg:ml-[38px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[64px] rowline"
                      as="h5"
                      variant="h5"
                    >
                      10 KB
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 font-inter justify-end mb-[1px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[25px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[87px] lg:p-[22px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[37px] rounded-radius4 shadow-bs w-[24%]">
                <Text
                  className="font-bold ml-[1px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Storage
                </Text>
                <Stack className="lg:h-[345px] xl:h-[431px] 2xl:h-[485px] 3xl:h-[582px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
                  <Stack className="absolute lg:h-[135px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] inset-x-[0] mx-[auto] top-[0] lg:w-[134px] xl:w-[168px] 2xl:w-[189px] 3xl:w-[227px]">
                    <CircularProgressbar
                      className="absolute border-solid lg:h-[135px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] overflow-visible w-[100%]"
                      value="16"
                      name="Group One"
                      strokeWidth={1}
                      styles={{
                        trail: { strokeWidth: 1, stroke: "" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          "transform-origin": "center",
                          transform: "rotate(-90deg)",
                        },
                      }}
                    ></CircularProgressbar>
                    <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[34%] w-[49%]">
                      <Text
                        className="text-bluegray_800 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        25Gb
                      </Text>
                      <Text
                        className="2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rowoval"
                        as="h6"
                        variant="h6"
                      >
                        Used of 50GB
                      </Text>
                    </Column>
                  </Stack>
                  <List
                    className="absolute bottom-[0] gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listrobototoyfacefi">
                      <Img
                        src="images/img_image.svg"
                        className="television"
                        alt="image"
                      />
                      <Row className="items-start justify-evenly w-[81%]">
                        <Column className="justify-end pr-[4px] py-[4px] w-[83%]">
                          <Text
                            className="ProductDesign_Four"
                            as="h5"
                            variant="h5"
                          >
                            Image
                          </Text>
                          <Text className="filesCounter" as="h6" variant="h6">
                            23 files
                          </Text>
                        </Column>
                        <Text
                          className="rowfilescounter_four"
                          as="h6"
                          variant="h6"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                    <Row className="listrobototoyfacefi">
                      <Img
                        src="images/img_playcircle.svg"
                        className="television"
                        alt="playcircle"
                      />
                      <Row className="items-start justify-evenly w-[81%]">
                        <Column className="justify-start pr-[3px] py-[3px] w-[83%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Videos
                          </Text>
                          <Text
                            className="filesCounter_Five"
                            as="h6"
                            variant="h6"
                          >
                            23 files
                          </Text>
                        </Column>
                        <Text
                          className="rowfilescounter_four"
                          as="h6"
                          variant="h6"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                    <Row className="listrobototoyfacefi">
                      <Img
                        src="images/img_music_24X24.svg"
                        className="television"
                        alt="music"
                      />
                      <Row className="items-start justify-evenly w-[81%]">
                        <Column className="justify-start pr-[3px] py-[3px] w-[83%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Muscics
                          </Text>
                          <Text
                            className="filesCounter_Five"
                            as="h6"
                            variant="h6"
                          >
                            23 files
                          </Text>
                        </Column>
                        <Text
                          className="rowfilescounter_four"
                          as="h6"
                          variant="h6"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                    <Row className="listrobototoyfacefi">
                      <Img
                        src="images/img_computer_24X24.svg"
                        className="television"
                        alt="computer"
                      />
                      <Row className="items-start justify-evenly w-[81%]">
                        <Column className="justify-start pr-[4px] py-[4px] w-[83%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Others
                          </Text>
                          <Text
                            className="filesCounter_Five"
                            as="h6"
                            variant="h6"
                          >
                            23 files
                          </Text>
                        </Column>
                        <Text
                          className="rowfilescounter_four"
                          as="h6"
                          variant="h6"
                        >
                          3GB
                        </Text>
                      </Row>
                    </Row>
                  </List>
                </Stack>
                <Column className="border-2 border-indigo_51 border-solid items-center justify-start mb-[1px] ml-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] lg:p-[24px] xl:p-[31px] 2xl:p-[34px] 3xl:p-[41px] rounded-radius4 w-[99%]">
                  <Img
                    src="images/img_download_24X24.svg"
                    className="television"
                    alt="download"
                  />
                  <Text
                    className="mb-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] rowoval"
                    as="h6"
                    variant="h6"
                  >
                    Import file
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FileManagementDefaultPage;
