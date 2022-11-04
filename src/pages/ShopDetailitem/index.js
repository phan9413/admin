import React from "react";

import { Column, Row, Line, Text, List, Img, Button } from "components";
import Sidebar5 from "components/Sidebar/Sidebar5";
import Header from "components/Header/Header";

const ShopDetailitemPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar5 className="w-[17%]" />
          <Line className="bg-indigo_51 lg:h-[1408px] xl:h-[1761px] 2xl:h-[1981px] 3xl:h-[2377px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Row className="items-start justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[98%]">
                <Text className="Shoppingcentre" as="h3" variant="h3">
                  Shopping centre
                </Text>
                <Text className="ShopCentralP1" as="h5" variant="h5">
                  <span className="text-bluegray_400 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Shop Central/
                  </span>
                  <span className="text-bluegray_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    {" "}
                    Product detail
                  </span>
                </Text>
              </Row>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius4 shadow-bs w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Row className="items-center justify-between w-[61%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[18%]"
                      orientation="vertical"
                    >
                      <Img
                        src="images/img_rectangle_126X116.png"
                        className="listrectangle"
                        alt="Rectangle"
                      />
                      <Img
                        src="images/img_rectangle_1.png"
                        className="listrectangle"
                        alt="Rectangle One"
                      />
                      <Img
                        src="images/img_rectangle_2.png"
                        className="listrectangle"
                        alt="Rectangle Two"
                      />
                      <Img
                        src="images/img_rectangle_3.png"
                        className="listrectangle"
                        alt="Rectangle Three"
                      />
                    </List>
                    <Img
                      src="images/img_rectangle.png"
                      className="lg:h-[402px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] w-[79%]"
                      alt="Rectangle Four"
                    />
                  </Row>
                  <Column className="lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[36%]">
                    <Column className="justify-start ml-[3px] pb-[3px] w-[53%]">
                      <Text
                        className="text-bluegray_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Polo Shirt
                      </Text>
                      <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                        <Text className="rowoval" as="h5" variant="h5">
                          Code: #1230
                        </Text>
                        <Img
                          src="images/img_frame_11X77.png"
                          className="lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[44%]"
                          alt="Frame"
                        />
                      </Row>
                    </Column>
                    <Text className="columnprice" as="h2" variant="h2">
                      $120.0
                    </Text>
                    <Column className="justify-start ml-[3px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] pr-[4px] pt-[4px] w-[27%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Choose color
                      </Text>
                      <Img
                        src="images/img_computer_24X52.svg"
                        className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[50%]"
                        alt="computer"
                      />
                    </Column>
                    <Column className="justify-start ml-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[34%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Choose quantity
                      </Text>
                      <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[87%]">
                        <Column className="border border-indigo_51 border-solid items-center 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] user_One">
                          <div className="bg-bluegray_900 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius083 w-[93%]"></div>
                        </Column>
                        <Text className="rowvectorstroke" as="h6" variant="h6">
                          1
                        </Text>
                        <Button
                          className="flex items-center justify-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] user_One"
                          size="lgIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_plus_32X32.svg"
                            className="flex items-center justify-center lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px]"
                            alt="plus"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Column className="justify-start ml-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pr-[1px] py-[1px] w-[38%]">
                      <Text
                        className="font-medium mt-[3px] text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Choose size
                      </Text>
                      <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[75%]">
                        <Button
                          className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                          size="md"
                          variant="OutlineIndigo51"
                        >
                          S
                        </Button>
                        <Button
                          className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                          size="md"
                          variant="OutlineIndigo51"
                        >
                          M
                        </Button>
                        <Button
                          className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                          size="md"
                          variant="OutlineIndigo51"
                        >
                          L
                        </Button>
                      </Row>
                      <Text
                        className="font-normal mb-[1px] ml-[2px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-indigo_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        How to find your size?
                      </Text>
                    </Column>
                    <Row className="items-center justify-between ml-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]">
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[48%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillDeeporange300"
                      >
                        Purchase now
                      </Button>
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[48%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillDeeporange50"
                      >
                        Add to cart
                      </Button>
                    </Row>
                  </Column>
                </Row>
                <Row className="items-start lg:mb-[27px] xl:mb-[33px] 2xl:mb-[38px] 3xl:mb-[45px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
                  <Column className="justify-start pr-[4px] pt-[4px] w-[47%]">
                    <Row className="items-center w-[32%]">
                      <div className="bg-indigo_400 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[25%]"></div>
                      <Text
                        className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] text-indigo_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Product Detail
                      </Text>
                    </Row>
                    <Text
                      className="lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rowoval"
                      as="h5"
                      variant="h5"
                    >
                      Reviews
                    </Text>
                  </Column>
                  <Column className="justify-start w-[53%]">
                    <Column className="justify-start pr-[4px] pt-[4px] w-[85%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        PRODUCT DETAIL
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-bluegray_800 w-[94%]"
                        as="h5"
                        variant="h5"
                      >
                        We use the Join Life label on clothing that is produced
                        using technology and raw materials that help us to
                        reduce the environmental impact of our products.{" "}
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pr-[4px] pt-[4px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        SPECIFICATION
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-bluegray_800 w-[23%]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-bluegray_800 font-inter font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          Size:
                        </span>
                        <span className="text-bluegray_800 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          {" "}
                          S<br />
                          <br />
                        </span>
                        <span className="text-bluegray_800 font-inter font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          Material:
                        </span>
                        <span className="text-bluegray_800 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          {" "}
                          Cotton
                          <br />
                          <br />
                        </span>
                        <span className="text-bluegray_800 font-inter font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          Weight:
                        </span>
                        <span className="text-bluegray_800 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          {" "}
                          1kg
                          <br />
                          <br />
                        </span>
                        <span className="text-bluegray_800 font-inter font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          Original:
                        </span>
                        <span className="text-bluegray_800 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          {" "}
                          Vietnam
                          <br />
                          <br />
                        </span>
                        <span className="text-bluegray_800 font-inter font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          Category:
                        </span>
                        <span className="text-bluegray_800 font-inter lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          {" "}
                          T-Shirt
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Row className="font-poppins items-start justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Text
                  className="mt-[4px] text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Related product
                </Text>
                <Row className="font-inter items-center justify-between mb-[1px] w-[8%]">
                  <Text
                    className="font-medium text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    See all
                  </Text>
                  <Img
                    src="images/img_arrowright_2.svg"
                    className="computer"
                    alt="arrowright"
                  />
                </Row>
              </Row>
              <List
                className="font-inter lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-4 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] min-h-[auto] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="listfeature">
                  <Row
                    className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_frame_353X273.png')",
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
                          <Text className="price_Four3" as="h4" variant="h4">
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
                          alt="ButtonPrimary"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="listfeature">
                  <Row
                    className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_frame_1.png')" }}
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
                          <Text className="price_Four3" as="h4" variant="h4">
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
                          alt="ButtonPrimary One"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Column className="listfeature">
                  <Row
                    className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_frame_2.png')" }}
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
                          <Text className="price_Four3" as="h4" variant="h4">
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
                        alt="Frame Three"
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
                          alt="plus Three"
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
                <Column className="listfeature">
                  <Row
                    className="bg-cover bg-repeat items-start justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_frame_5.png')" }}
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
                        <Text className="columnprice_five" as="h6" variant="h6">
                          Over Shirt
                        </Text>
                        <Row className="items-start justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                          <Text className="price_Four3" as="h4" variant="h4">
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
                        alt="Frame Four"
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
                          alt="plus Four"
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
                          alt="ButtonPrimary Three"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ShopDetailitemPage;
