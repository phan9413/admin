import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, List, Line, Button } from "components";

const CartModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:p-[216px] xl:p-[271px] 2xl:p-[305px] 3xl:p-[366px] w-[100%]">
            <Row className="items-end justify-center w-[39%]">
              <Text className="columnlogintoavori1" as="h2" variant="h2">
                My Cart
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[158px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[39%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-start justify-between lg:my-[18px] xl:my-[23px] 2xl:my-[26px] 3xl:my-[31px] w-[100%]">
                  <Img
                    src="images/img_rectangle.png"
                    className="3xl:h-[118px] lg:h-[70px] xl:h-[87px] 2xl:h-[98px] w-[28%]"
                    alt="Rectangle"
                  />
                  <Column className="justify-start pb-[4px] w-[66%]">
                    <Column className="justify-start pt-[2px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Polo Shirt
                        </Text>
                        <Img
                          src="images/img_minus.svg"
                          className="arrowright1"
                          alt="minus"
                        />
                      </Row>
                      <Text className="columnpoloshirt" as="h6" variant="h6">
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[43%]">
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="minus One"
                        />
                      </Button>
                      <Text className="rowminus_one" as="h6" variant="h6">
                        1
                      </Text>
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_close.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="close One"
                        />
                      </Button>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                      <Text className="Price_One" as="h6" variant="h6">
                        Price
                      </Text>
                      <Text className="Completedtasks" as="h6" variant="h6">
                        $120.0
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                <Row className="items-start justify-between lg:my-[18px] xl:my-[23px] 2xl:my-[26px] 3xl:my-[31px] w-[100%]">
                  <Img
                    src="images/img_frame_1.png"
                    className="3xl:h-[118px] lg:h-[70px] xl:h-[87px] 2xl:h-[98px] w-[28%]"
                    alt="Rectangle One"
                  />
                  <Column className="justify-start pb-[4px] w-[66%]">
                    <Column className="justify-start pt-[2px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Basic T-shirt
                        </Text>
                        <Img
                          src="images/img_minus.svg"
                          className="arrowright1"
                          alt="minus One"
                        />
                      </Row>
                      <Text className="columnpoloshirt" as="h6" variant="h6">
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[25px] w-[43%]">
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="minus One One"
                        />
                      </Button>
                      <Text className="rowminus_one" as="h6" variant="h6">
                        1
                      </Text>
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_close.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="close Two"
                        />
                      </Button>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                      <Text className="Price_One" as="h6" variant="h6">
                        Price
                      </Text>
                      <Text className="Completedtasks" as="h6" variant="h6">
                        $120.0
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </List>
              <Row className="items-center justify-between lg:mt-[37px] xl:mt-[47px] 2xl:mt-[52px] 3xl:mt-[63px] pl-[1px] py-[1px] w-[100%]">
                <Text className="rowoval" as="h5" variant="h5">
                  Total
                </Text>
                <Text className="price_Six" as="h4" variant="h4">
                  $240.0
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[98%]">
                <Button
                  className="font-bold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[48%]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Purchase now
                </Button>
                <Button
                  className="font-bold xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[48%]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange50"
                >
                  Add to cart
                </Button>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[65%]">
                <Img
                  src="images/img_computer_1.svg"
                  className="arrowright1"
                  alt="computer"
                />
                <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:pr-[2px] xl:pr-[3px] 3xl:pr-[4px] 2xl:pr-[4px] lg:pt-[2px] xl:pt-[3px] 3xl:pt-[4px] 2xl:pt-[4px] w-[81%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Free nationwide shipping
                  </Text>
                  <Text
                    className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] ProfileViews_Two"
                    as="h6"
                    variant="h6"
                  >
                    (For order begin $100.0)
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { CartModal };
