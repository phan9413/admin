import React from "react";

import { Column, Row, Line, Text, Stack, Img } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";
import Header from "components/Header/Header";

const CheckoutPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar3 className="w-[17%]" />
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
              <Stack className="lg:h-[571px] xl:h-[714px] 2xl:h-[803px] 3xl:h-[963px] lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[98%]">
                <Column className="absolute bottom-[0] justify-start left-[5%] pr-[4px] py-[4px] w-[14%]">
                  <Text className="Balance" as="h6" variant="h6">
                    Balance
                  </Text>
                  <Text className="price_Three" as="h4" variant="h4">
                    $0.0
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 items-center justify-start xl:p-[101px] 2xl:p-[114px] 3xl:p-[136px] lg:p-[81px] rounded-radius4 shadow-bs w-[100%]">
                  <Img
                    src="images/img_creditcardpay.svg"
                    className="lg:h-[192px] xl:h-[241px] 2xl:h-[271px] 3xl:h-[325px] lg:w-[192px] xl:w-[240px] 2xl:w-[270px] 3xl:w-[324px]"
                    alt="creditcardpay"
                  />
                  <Column className="items-center justify-start lg:mb-[160px] xl:mb-[201px] 2xl:mb-[226px] 3xl:mb-[271px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[4px] px-[4px] w-[56%]">
                    <Text
                      className="text-bluegray_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      In Process...
                    </Text>
                    <Text
                      className="lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] ProfileViews_Two"
                      as="h6"
                      variant="h6"
                    >
                      Please wait a minute, your order is processing
                    </Text>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CheckoutPage;
