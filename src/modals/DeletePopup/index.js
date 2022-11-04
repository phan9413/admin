import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Row, Button } from "components";

const DeletePopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:p-[204px] xl:p-[256px] 2xl:p-[288px] 3xl:p-[345px] rounded-radius4 shadow-bs1 w-[100%]">
            <Img
              src="images/img_group_40X40.svg"
              className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              alt="xcircle"
            />
            <Img
              src="images/img_12.svg"
              className="lg:h-[125px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[20%]"
              alt="Twelve"
            />
            <Column className="items-center justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[48%]">
              <Column className="items-center justify-end p-[2px] w-[100%]">
                <Text
                  className="mt-[3px] text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Are you sure to delete item?
                </Text>
                <Text
                  className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rowline"
                  as="h6"
                  variant="h6"
                >
                  This item will be delete from your cart
                </Text>
              </Column>
              <Row className="items-center justify-between lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
                <Button
                  className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[48%]"
                  shape="CircleBorder28"
                  size="xl"
                  variant="FillRed600"
                >
                  Yes, Delete item
                </Button>
                <Button
                  className="common-pointer font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[48%]"
                  onClick={props.onRequestClose}
                  shape="CircleBorder28"
                  size="xl"
                  variant="FillGray51"
                >
                  Cancel
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { DeletePopupModal };
