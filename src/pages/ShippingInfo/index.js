import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  Input,
  TextArea,
  SelectBox,
  Img,
  Button,
} from "components";
import Sidebar4 from "components/Sidebar/Sidebar4";
import Header from "components/Header/Header";

const ShippingInfoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar4 className="w-[17%]" />
          <Line className="bg-indigo_51 3xl:h-[1189px] lg:h-[704px] xl:h-[881px] 2xl:h-[991px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Row className="items-end justify-between xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[98%]">
                <Text className="Checkout" as="h3" variant="h3">
                  Checkout
                </Text>
                <Text className="ShopCentralP" as="h5" variant="h5">
                  <span className="text-bluegray_400 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Shop Central/
                  </span>
                  <span className="text-bluegray_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    {" "}
                  </span>
                  <span className="text-bluegray_400 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Product detail/
                  </span>
                  <span className="text-bluegray_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    {" "}
                    Checkout
                  </span>
                </Text>
              </Row>
              <Row className="items-center justify-between 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
                <Column className="bg-white_A700 lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[66%]">
                  <Column className="justify-end pr-[4px] py-[4px] w-[28%]">
                    <Text className="Accountinfo" as="h4" variant="h4">
                      Shipping information
                    </Text>
                    <Text
                      className="font-normal not-italic columncalendar"
                      as="h6"
                      variant="h6"
                    >
                      Fill form below
                    </Text>
                  </Column>
                  <Column className="justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_400 frame3801"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                      type="text"
                      name="Group8265"
                      placeholder="Enter your name"
                      shape="RoundedBorder4"
                      size="xl"
                      variant="OutlineIndigo51"
                    ></Input>
                  </Column>
                  <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                    <Column className="w-[52%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Email address
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_400 frame3801"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[94%] xl:mt-[10px]"
                        type="email"
                        name="group One"
                        placeholder="Enter your email"
                        shape="RoundedBorder4"
                        size="xl"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                    <Column className="mt-[1px] w-[48%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Phone number
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_400 frame3801"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        type="number"
                        name="group Two"
                        placeholder="Enter your phone number"
                        shape="RoundedBorder4"
                        size="xl"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                  </Row>
                  <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Your address
                    </Text>
                    <TextArea
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      name="group Three"
                      placeholder="Enter full address"
                    ></TextArea>
                  </Column>
                  <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Country
                    </Text>
                    <SelectBox
                      className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                      placeholderClassName="text-bluegray_800"
                      name="country One"
                      placeholder="Vietnam"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_20X20.svg"
                          className="lg:w-[7px] lg:h-[5px] lg:mr-[17px] xl:w-[9px] xl:h-[6px] xl:mr-[21px] 2xl:w-[11px] 2xl:h-[7px] 2xl:mr-[24px] 3xl:w-[13px] 3xl:h-[8px] 3xl:mr-[28px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineIndigo511_2"
                    ></SelectBox>
                  </Column>
                  <Column className="justify-start mb-[4px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Note
                    </Text>
                    <TextArea
                      className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      name="group Four"
                      placeholder="Write somethhing for us..."
                    ></TextArea>
                  </Column>
                </Column>
                <Column className="items-center w-[32%]">
                  <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Img
                        src="images/img_rectangle.png"
                        className="xl:h-[105px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[84px] w-[36%]"
                        alt="Rectangle"
                      />
                      <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] pb-[4px] w-[56%]">
                        <Column className="justify-start pr-[1px] py-[1px] w-[53%]">
                          <Text
                            className="font-bold mt-[4px] text-bluegray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Polo Shirt
                          </Text>
                          <Text
                            className="mb-[1px] ColorGreyS1"
                            as="h6"
                            variant="h6"
                          >
                            Color: Grey, S
                          </Text>
                        </Column>
                        <Row className="items-center justify-between lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
                          <Text className="Price_One" as="h6" variant="h6">
                            Price
                          </Text>
                          <Text className="Completedtasks" as="h6" variant="h6">
                            $120.0
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Line className="bg-indigo_51 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
                    <Input
                      className="placeholder:text-bluegray_400 frame3801"
                      wrapClassName="2xl:mt-[31px] 3xl:mt-[37px] lg:mt-[22px] w-[100%] xl:mt-[27px]"
                      name="group Five"
                      placeholder="Enter reffered code"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="OutlineIndigo51"
                    ></Input>
                    <Line className="bg-indigo_51 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
                    <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] pt-[4px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text className="Price_One" as="h5" variant="h5">
                          Price
                        </Text>
                        <Text className="price_Four2" as="h5" variant="h5">
                          $120.0
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] pl-[3px] pt-[3px] w-[100%]">
                        <Text className="mt-[2px] rowoval" as="h5" variant="h5">
                          Shipping fee
                        </Text>
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $10.0
                        </Text>
                      </Row>
                    </Column>
                    <Line className="bg-indigo_51 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
                    <Row className="items-center justify-between lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] pl-[1px] py-[1px] w-[100%]">
                      <Text className="rowoval" as="h5" variant="h5">
                        Total
                      </Text>
                      <Text className="price_Six" as="h4" variant="h4">
                        $130.0
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillDeeporange300"
                      >
                        Purchase now
                      </Button>
                      <Button
                        className="font-normal lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillGray51"
                      >
                        Scan QR code
                      </Button>
                    </Column>
                    <Text className="columnrectangle" as="h6" variant="h6">
                      By clicking “Purchase” button, I agree with RiriBa Term
                      and Policy
                    </Text>
                  </Column>
                  <Row className="items-end justify-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[56%]">
                    <Img
                      src="images/img_arrowleft_24X24.svg"
                      className="computer"
                      alt="arrowleft"
                    />
                    <Text className="rowarrowleft2" as="h5" variant="h5">
                      Back to shopping cart
                    </Text>
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

export default ShippingInfoPage;
