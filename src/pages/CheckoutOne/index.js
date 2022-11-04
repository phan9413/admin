import React from "react";

import { Column, Row, Line, Text, Stack, Img, Button } from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";
import Header from "components/Header/Header";

const CheckoutOnePage = () => {
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
                <Column className="absolute bg-white_A700 items-center justify-start 2xl:p-[111px] 3xl:p-[133px] lg:p-[78px] xl:p-[98px] rounded-radius4 shadow-bs w-[100%]">
                  <Img
                    src="images/img_group18037.svg"
                    className="lg:h-[148px] xl:h-[186px] 2xl:h-[209px] 3xl:h-[250px] w-[27%]"
                    alt="Group18037"
                  />
                  <Column className="items-center justify-start lg:mb-[101px] xl:mb-[127px] 2xl:mb-[143px] 3xl:mb-[171px] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[56%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] text-bluegray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Congratulate! Order successfully
                      </Text>
                      <Text
                        className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-bluegray_900 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Your order receipt has been sent to your mail:
                        sambrown@gmail.com. Please check your mail
                      </Text>
                    </Column>
                    <Button
                      className="font-bold lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[41%]"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillDeeporange300"
                    >
                      Review product
                    </Button>
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

export default CheckoutOnePage;
