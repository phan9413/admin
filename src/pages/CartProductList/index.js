import React from "react";

import {
  Row,
  Stack,
  Column,
  Text,
  CheckBox,
  List,
  Line,
  Img,
  Button,
  Input,
} from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import Header from "components/Header/Header";

const CartProductListPage = () => {
  return (
    <>
      <Row className="bg-white_A700 font-inter items-center mx-[auto] w-[100%]">
        <Sidebar6 className="w-[17%]" />
        <Stack className="2xl:h-[1072px] 3xl:h-[1286px] lg:h-[762px] xl:h-[953px] w-[83%]">
          <Column className="absolute bg-gray_51 bottom-[0] items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
            <Row className="items-start justify-between xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
              <Text
                className="font-poppins text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Cart
              </Text>
              <Text className="ShopCentralP1" as="h5" variant="h5">
                <span className="text-bluegray_400 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Ecommerce/
                </span>
                <span className="text-bluegray_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  {" "}
                  Cart
                </span>
              </Text>
            </Row>
            <Row className="items-start justify-between lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]">
              <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[66%]">
                <Text
                  className="font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Product List
                </Text>
                <Row className="items-center lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] pt-[1px] px-[1px] w-[92%]">
                  <CheckBox
                    className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="file One"
                    label=""
                  ></CheckBox>
                  <Text
                    className="lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] rowoval"
                    as="h5"
                    variant="h5"
                  >
                    Product
                  </Text>
                  <Text
                    className="lg:ml-[142px] xl:ml-[178px] 2xl:ml-[201px] 3xl:ml-[241px] rowoval"
                    as="h5"
                    variant="h5"
                  >
                    Price
                  </Text>
                  <Text
                    className="lg:ml-[52px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] mt-[4px] rowoval"
                    as="h5"
                    variant="h5"
                  >
                    Quantity
                  </Text>
                  <Text
                    className="3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] rowoval"
                    as="h5"
                    variant="h5"
                  >
                    Total
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[98%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 items-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <CheckBox
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="file Two"
                      label=""
                    ></CheckBox>
                    <Row className="items-start justify-center lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[34%]">
                      <Img
                        src="images/img_rectangle.png"
                        className="Rectangle4"
                        alt="Rectangle"
                      />
                      <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Polo Shirt
                        </Text>
                        <Text className="ColorGreyS1" as="h6" variant="h6">
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text className="price_One1" as="h6" variant="h6">
                      $120.0
                    </Text>
                    <Row className="items-center justify-center lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[16%]">
                      <Button
                        className="flex items-center justify-center user_One"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          alt="minus"
                        />
                      </Button>
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
                    <Text className="price_One2" as="h6" variant="h6">
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] bg-indigo_51" />
                  <Row className="bg-white_A700 items-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <CheckBox
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="file Three"
                      label=""
                    ></CheckBox>
                    <Row className="items-start justify-center lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[34%]">
                      <Img
                        src="images/img_frame_1.png"
                        className="Rectangle4"
                        alt="Rectangle One"
                      />
                      <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Basic T- Shirt
                        </Text>
                        <Text className="ColorGreyS1" as="h6" variant="h6">
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text className="price_One1" as="h6" variant="h6">
                      $120.0
                    </Text>
                    <Row className="items-center justify-center lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[16%]">
                      <Button
                        className="flex items-center justify-center user_One"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          alt="minus One"
                        />
                      </Button>
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
                          alt="plus One"
                        />
                      </Button>
                    </Row>
                    <Text className="price_One2" as="h6" variant="h6">
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] bg-indigo_51" />
                  <Row className="bg-white_A700 items-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <CheckBox
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="file Four"
                      label=""
                    ></CheckBox>
                    <Row className="items-start justify-center lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[34%]">
                      <Img
                        src="images/img_frame_2.png"
                        className="Rectangle4"
                        alt="Rectangle Two"
                      />
                      <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Trendy Polo
                        </Text>
                        <Text className="time" as="h6" variant="h6">
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text className="price_One1" as="h6" variant="h6">
                      $120.0
                    </Text>
                    <Row className="items-center justify-center lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[16%]">
                      <Button
                        className="flex items-center justify-center user_One"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          alt="minus Two"
                        />
                      </Button>
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
                          alt="plus Two"
                        />
                      </Button>
                    </Row>
                    <Text className="price_One2" as="h6" variant="h6">
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] bg-indigo_51" />
                  <Row className="bg-white_A700 items-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <CheckBox
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="file Five"
                      label=""
                    ></CheckBox>
                    <Row className="items-start justify-center lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[34%]">
                      <Img
                        src="images/img_frame_5.png"
                        className="Rectangle4"
                        alt="Rectangle Three"
                      />
                      <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Over Shirt
                        </Text>
                        <Text className="ColorGreyS1" as="h6" variant="h6">
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text className="price_One1" as="h6" variant="h6">
                      $120.0
                    </Text>
                    <Row className="items-center justify-center lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[16%]">
                      <Button
                        className="flex items-center justify-center user_One"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          alt="minus Three"
                        />
                      </Button>
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
                          alt="plus Three"
                        />
                      </Button>
                    </Row>
                    <Text className="price_One2" as="h6" variant="h6">
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] bg-indigo_51" />
                  <Row className="bg-white_A700 items-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <CheckBox
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="file Six"
                      label=""
                    ></CheckBox>
                    <Row className="items-start justify-center lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[34%]">
                      <Img
                        src="images/img_frame_353X273.png"
                        className="Rectangle4"
                        alt="Rectangle Four"
                      />
                      <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Avo T-Shirt
                        </Text>
                        <Text className="ColorGreyS1" as="h6" variant="h6">
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text className="price_One1" as="h6" variant="h6">
                      $120.0
                    </Text>
                    <Row className="items-center justify-center lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[16%]">
                      <Button
                        className="flex items-center justify-center user_One"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          alt="minus Four"
                        />
                      </Button>
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
                          alt="plus Four"
                        />
                      </Button>
                    </Row>
                    <Text className="price_One2" as="h6" variant="h6">
                      $120.0
                    </Text>
                  </Row>
                  <Line className="self-center w-[90%] h-[1px] bg-indigo_51" />
                  <Row className="bg-white_A700 items-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <CheckBox
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="file Seven"
                      label=""
                    ></CheckBox>
                    <Row className="items-start justify-center lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[34%]">
                      <Img
                        src="images/img_frame_4.png"
                        className="Rectangle4"
                        alt="Rectangle Five"
                      />
                      <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[55%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Bomber
                        </Text>
                        <Text className="SEP_Three" as="h6" variant="h6">
                          Color: Grey, S
                        </Text>
                      </Column>
                    </Row>
                    <Text className="price_One1" as="h6" variant="h6">
                      $120.0
                    </Text>
                    <Row className="items-center justify-center lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[16%]">
                      <Button
                        className="flex items-center justify-center user_One"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                          alt="minus Five"
                        />
                      </Button>
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
                          alt="plus Five"
                        />
                      </Button>
                    </Row>
                    <Text className="price_One2" as="h6" variant="h6">
                      $120.0
                    </Text>
                  </Row>
                </List>
              </Column>
              <Column className="items-center justify-start w-[32%]">
                <Column className="bg-white_A700 items-center justify-end lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="justify-start mt-[3px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Promotion
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_400 frame3801"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                      name="Group8229"
                      placeholder="Enter code"
                      shape="RoundedBorder4"
                      size="lg"
                      variant="OutlineIndigo51"
                    ></Input>
                  </Column>
                  <Row className="items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[70%]">
                    <Img
                      src="images/img_offer.svg"
                      className="test_grid"
                      alt="offer"
                    />
                    <Text
                      className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mr-[19px] xl:mr-[24px] 2xl:mr-[28px] 3xl:mr-[33px] text-indigo_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Click to find Promotion
                    </Text>
                  </Row>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="items-center justify-start pt-[4px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="Price_One" as="h5" variant="h5">
                        Price
                      </Text>
                      <Text className="price_Four2" as="h5" variant="h5">
                        $120.0
                      </Text>
                    </Row>
                    <Row className="items-start justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                      <Text className="SEP_Eight" as="h5" variant="h5">
                        Shipping fee
                      </Text>
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $0
                      </Text>
                    </Row>
                  </Column>
                  <Line className="bg-indigo_51 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
                  <Row className="items-center justify-between lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] pl-[1px] py-[1px] w-[100%]">
                    <Text className="rowoval" as="h5" variant="h5">
                      Total
                    </Text>
                    <Text className="price_Six" as="h4" variant="h4">
                      $120.0
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
                    By clicking “Purchase” button, I agree with RiriBa Term and
                    Policy
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
          <Header className="absolute bg-white_A700 inset-x-[0] top-[0] w-[100%]" />
          <Line className="absolute bg-indigo_51 2xl:h-[1072px] 3xl:h-[1286px] lg:h-[762px] xl:h-[953px] left-[0] w-[1px]" />
        </Stack>
      </Row>
    </>
  );
};

export default CartProductListPage;
