import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Row, Button } from "components";
import { useNavigate } from "react-router-dom";

const DashboardPaymentsuccessfulModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="items-center justify-start lg:p-[170px] xl:p-[213px] 2xl:p-[240px] 3xl:p-[288px] w-[100%]">
            <Img
              src="images/img_group_40X40.svg"
              className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              alt="Group"
            />
            <Column className="bg-white_A700 items-center justify-end mb-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[42%]">
              <Img
                src="images/img_layer2.svg"
                className="lg:h-[109px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] 3xl:mt-[103px] lg:mt-[61px] xl:mt-[76px] 2xl:mt-[86px] w-[55%]"
                alt="LayerTwo"
              />
              <Column className="items-center justify-start lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[72%]">
                <Text
                  className="text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Payment Successful
                </Text>
                <Text
                  className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-bluegray_800 text-center w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                    Add
                  </span>
                  <span className="text-green_700 font-inter font-medium lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                    {" "}
                    200.000đ
                  </span>
                  <span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                    {" "}
                    to your wallet already
                    <br />
                    Check your new balance!
                  </span>
                </Text>
              </Column>
              <Text
                className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rowoval"
                as="h6"
                variant="h6"
              >
                Send receipt to
              </Text>
              <Row className="items-center justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[52%]">
                <Button
                  className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  size="xlIcn"
                  variant="icbOutlineIndigo51"
                >
                  <Img
                    src="images/img_lightbulb.svg"
                    className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                    alt="lightbulb"
                  />
                </Button>
                <Button
                  className="common-pointer flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  onClick={handleNavigate}
                  size="xlIcn"
                  variant="icbOutlineIndigo51"
                >
                  <Img
                    src="images/img_facebook.svg"
                    className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                    alt="facebook"
                  />
                </Button>
                <Button
                  className="flex lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  size="xlIcn"
                  variant="icbOutlineIndigo51"
                >
                  <Img
                    src="images/img_globe.svg"
                    className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                    alt="globe"
                  />
                </Button>
              </Row>
              <Button
                className="font-bold lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                shape="CircleBorder28"
                size="xl"
                variant="FillDeeporange300"
              >
                Yes, I understand
              </Button>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { DashboardPaymentsuccessfulModal };
