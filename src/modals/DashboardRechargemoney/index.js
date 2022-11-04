import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Input, Row, Button, Line } from "components";

const DashboardRechargemoneyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="items-center justify-end lg:p-[124px] xl:p-[155px] 2xl:p-[175px] 3xl:p-[209px] w-[100%]">
            <Img
              src="images/img_group_40X40.svg"
              className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mt-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[47px]"
              alt="Group"
            />
            <Column className="bg-white_A700 justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius4 shadow-bs1 w-[70%]">
              <Text
                className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-bluegray_800 w-[auto]"
                as="h2"
                variant="h2"
              >
                Pick a wallet
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="2xl:mt-[36px] 3xl:mt-[43px] flex lg:mt-[25px] w-[99%] xl:mt-[32px]"
                name="Textinput"
                placeholder="0.0"
                prefix={
                  <Img
                    src="images/img_music.svg"
                    className="ml-[1px] lg:w-[14px] lg:h-[15px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:mr-[14px] 2xl:w-[20px] 2xl:h-[20px] 2xl:mr-[16px] 3xl:w-[23px] 3xl:h-[24px] 3xl:mr-[19px] my-[auto]"
                    alt="music"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineIndigo51"
              ></Input>
              <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[77%]">
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[21%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillGray51"
                >
                  200.000đ
                </Button>
                <Button
                  className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[23px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[21%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillGray51"
                >
                  500.000đ
                </Button>
                <Button
                  className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[23px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillGray51"
                >
                  1.000.000đ
                </Button>
                <Button
                  className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[23px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[24%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillGray51"
                >
                  2.000.000đ
                </Button>
              </Row>
              <Line className="bg-indigo_51 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]" />
              <Row className="items-center lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[58%]">
                <Column className="w-[92%]">
                  <Text
                    className="font-medium text-bluegray_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Available Wallet
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                    wrapClassName="2xl:mt-[19px] 3xl:mt-[22px] flex lg:mt-[13px] w-[91%] xl:mt-[16px]"
                    name="WalletOptions"
                    placeholder="Torus"
                    prefix={
                      <Img
                        src="images/img_bookmark_32X32.svg"
                        className="lg:w-[22px] lg:h-[23px] lg:ml-[4px] lg:mr-[7px] xl:w-[28px] xl:h-[29px] xl:ml-[6px] xl:mr-[8px] 2xl:w-[32px] 2xl:h-[32px] 2xl:ml-[7px] 2xl:mr-[10px] 3xl:w-[38px] 3xl:h-[39px] 3xl:ml-[8px] 3xl:mr-[11px] my-[auto]"
                        alt="bookmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="2xl"
                    variant="OutlineIndigo511_2"
                  ></Input>
                  <Row className="bg-gray_51 border border-indigo_51 border-solid items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[91%]">
                    <Row className="items-center w-[39%]">
                      <Img
                        src="images/img_metamaskicon0.png"
                        className="rounded-radius5 LogoFortmati"
                        alt="MetaMaskIconZero"
                      />
                      <Text className="Icon" as="h5" variant="h5">
                        Metamask
                      </Text>
                    </Row>
                    <Img
                      src="images/img_arrowright_20X20.svg"
                      className="lg:ml-[120px] xl:ml-[150px] 2xl:ml-[169px] 3xl:ml-[202px] test_grid1"
                      alt="arrowright"
                    />
                  </Row>
                  <Row className="border border-indigo_51 border-solid items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius4 w-[91%]">
                    <Img
                      src="images/img_portisicon.png"
                      className="lg:h-[19px] xl:h-[24px] 2xl:h-[26px] 3xl:h-[32px] ml-[1px] mt-[1px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                      alt="PortisIcon"
                    />
                    <Text
                      className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] rowline"
                      as="h5"
                      variant="h5"
                    >
                      Portis
                    </Text>
                  </Row>
                  <Row className="border border-indigo_51 border-solid items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[91%]">
                    <Img
                      src="images/img_logofortmati.png"
                      className="LogoFortmati"
                      alt="LogoFortmati"
                    />
                    <Text className="Icon" as="h5" variant="h5">
                      Fortmatic
                    </Text>
                  </Row>
                </Column>
                <Line className="bg-indigo_51 lg:h-[245px] xl:h-[306px] 2xl:h-[344px] 3xl:h-[413px] w-[1px]" />
                <Column className="items-center lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[1px]">
                  <Row className="items-start justify-between pb-[3px] w-[100%]">
                    <div className="mt-[4px] overflow-x-auto w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          QR Code
                        </Text>
                        <Text
                          className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rowoval"
                          as="h6"
                          variant="h6"
                        >
                          Scan this QR code{" "}
                        </Text>
                      </Column>
                    </div>
                    <Row
                      className="bg-cover bg-repeat items-center justify-end pl-[4px] py-[4px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_frame_24X1.svg')",
                      }}
                    >
                      <Text
                        className="font-medium text-indigo_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Refresh
                      </Text>
                    </Row>
                  </Row>
                  <Img
                    src="images/img_barcodeqr1.svg"
                    className="lg:h-[199px] xl:h-[249px] 2xl:h-[279px] 3xl:h-[335px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                    alt="barcodeqrOne"
                  />
                </Column>
              </Row>
              <Button
                className="font-bold mb-[4px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[99%]"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                Pay now
              </Button>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { DashboardRechargemoneyModal };
