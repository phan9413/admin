import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  Stack,
  CheckBox,
  Input,
  Img,
  Button,
} from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";
import Header from "components/Header/Header";

const PaymentInfoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <Sidebar3 className="w-[17%]" />
          <Line className="bg-indigo_51 lg:h-[534px] xl:h-[668px] 2xl:h-[751px] 3xl:h-[901px] w-[1px]" />
          <Column className="items-center justify-start w-[83%]">
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
              <Row className="items-center justify-between lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
                <Stack className="lg:h-[572px] xl:h-[715px] 2xl:h-[804px] 3xl:h-[965px] w-[66%]">
                  <Column className="absolute bottom-[0] justify-start left-[7%] pr-[4px] py-[4px] w-[22%]">
                    <Text className="Balance" as="h6" variant="h6">
                      Balance
                    </Text>
                    <Text className="price_Three" as="h4" variant="h4">
                      $0.0
                    </Text>
                  </Column>
                  <Column className="absolute bg-white_A700 bottom-[0] justify-start lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius4 shadow-bs w-[100%]">
                    <Column className="justify-end ml-[1px] mt-[1px] pr-[4px] py-[4px] w-[28%]">
                      <Text className="Accountinfo" as="h4" variant="h4">
                        Payment information
                      </Text>
                      <Text
                        className="font-normal not-italic columncalendar"
                        as="h6"
                        variant="h6"
                      >
                        Fill form below
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mb-[196px] xl:mb-[246px] 2xl:mb-[277px] 3xl:mb-[332px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Column className="justify-start w-[22%]">
                        <CheckBox
                          className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="Remember"
                          label="Cash on delivery"
                          size="sm"
                        ></CheckBox>
                        <CheckBox
                          className="font-medium lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                          inputClassName="h-[18px] mr-[5px] w-[18px]"
                          name="Remember One"
                          label="Credit card"
                          size="sm"
                          variant="OutlineBluegray40087"
                        ></CheckBox>
                        <CheckBox
                          className="font-medium lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="Remember Two"
                          label="RiriBa wallet"
                          size="sm"
                        ></CheckBox>
                      </Column>
                      <Line className="bg-indigo_51 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]" />
                      <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] pt-[3px] w-[100%]">
                        <Column className="justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Card number
                          </Text>
                          <Input
                            className="placeholder:text-bluegray_400 Frame8"
                            wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[8px] w-[100%] xl:mt-[10px]"
                            type="number"
                            name="Frame"
                            placeholder="Enter your card number"
                            prefix={
                              <Img
                                src="images/img_save_20X20.svg"
                                className="ml-[4px] lg:w-[14px] lg:h-[15px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[19px] my-[auto]"
                                alt="save"
                              />
                            }
                            shape="RoundedBorder4"
                            size="xl"
                            variant="OutlineIndigo51"
                          ></Input>
                        </Column>
                        <Row className="items-start justify-evenly lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[3px] w-[100%]">
                          <Column className="justify-start mt-[1px] w-[52%]">
                            <Text
                              className="font-medium text-bluegray_800 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Card holder
                            </Text>
                            <Input
                              className="placeholder:text-bluegray_400 Frame8"
                              wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[8px] w-[93%] xl:mt-[10px]"
                              type="text"
                              name="Frame One"
                              placeholder="Enter your name"
                              prefix={
                                <Img
                                  src="images/img_user_2.svg"
                                  className="ml-[4px] lg:w-[14px] lg:h-[15px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[19px] my-[auto]"
                                  alt="user"
                                />
                              }
                              shape="RoundedBorder4"
                              size="xl"
                              variant="OutlineIndigo51"
                            ></Input>
                          </Column>
                          <Column className="justify-start w-[48%]">
                            <Text
                              className="font-medium text-bluegray_800 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              CVV
                            </Text>
                            <Input
                              className="placeholder:text-bluegray_400 Frame8"
                              wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[8px] w-[100%] xl:mt-[10px]"
                              name="Frame Two"
                              placeholder="***"
                              prefix={
                                <Img
                                  src="images/img_lock_1.svg"
                                  className="ml-[3px] lg:w-[14px] lg:h-[15px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[16px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[19px] my-[auto]"
                                  alt="lock"
                                />
                              }
                              shape="RoundedBorder4"
                              size="md"
                              variant="OutlineIndigo51"
                            ></Input>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Stack>
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
                      name="Group One"
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

export default PaymentInfoPage;
