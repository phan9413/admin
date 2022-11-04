import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Stack, Img, Text, Button } from "components";

const NoPromotionPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:p-[201px] xl:p-[252px] 2xl:p-[284px] 3xl:p-[340px] rounded-radius4 shadow-bs1 w-[100%]">
            <Row className="items-start justify-end ml-[auto] w-[44%]">
              <Stack className="bg-white_A700 lg:h-[212px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] lg:px-[33px] xl:px-[41px] 2xl:px-[47px] 3xl:px-[56px] lg:w-[211px] xl:w-[265px] 2xl:w-[298px] 3xl:w-[357px]">
                <Img
                  src="images/img_group_194X146.svg"
                  className="absolute lg:h-[138px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] inset-[0] justify-center m-[auto] w-[49%]"
                  alt="Group"
                />
              </Stack>
              <Img
                src="images/img_group_40X40.svg"
                className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] mt-[4px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                alt="xcircle"
              />
            </Row>
            <Column className="items-center justify-end p-[2px] w-[47%]">
              <Text
                className="mt-[3px] text-bluegray_800 w-[auto]"
                as="h2"
                variant="h2"
              >
                No promotion
              </Text>
              <Text
                className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rowline"
                as="h6"
                variant="h6"
              >
                Follow us to review lattest promotion
              </Text>
            </Column>
            <Button
              className="font-bold lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
              shape="CircleBorder28"
              size="xl"
              variant="FillDeeporange300"
            >
              Yes, I understand
            </Button>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { NoPromotionPopupModal };
