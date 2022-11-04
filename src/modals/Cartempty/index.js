import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img } from "components";

const CartemptyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:p-[310px] xl:p-[387px] 2xl:p-[436px] 3xl:p-[523px] w-[100%]">
            <Row className="items-end justify-center w-[57%]">
              <Text className="columnlogintoavori1" as="h2" variant="h2">
                My Cart
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[157px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Img
              src="images/img_20.svg"
              className="xl:h-[112px] 2xl:h-[126px] 3xl:h-[151px] lg:h-[90px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] w-[29%]"
              alt="Twenty"
            />
            <Text
              className="lg:mb-[51px] xl:mb-[64px] 2xl:mb-[72px] 3xl:mb-[87px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rowoval"
              as="h5"
              variant="h5"
            >
              No item. Add more
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { CartemptyModal };
