import React from "react";

import { Column, Img, Row, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
            <Img src="images/img_logo.svg" className="Logo" alt="Logo" />
            <Column className="justify-start lg:mb-[297px] xl:mb-[371px] 2xl:mb-[418px] 3xl:mb-[501px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[1px] w-[88%]">
              <Row className="items-center w-[71%]">
                <Img
                  src="images/img_grid_20X20.svg"
                  className="test_grid"
                  alt="grid"
                />
                <Text className="rowgrid1" as="h6" variant="h6">
                  Dashboard
                </Text>
              </Row>
              <Row className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[66%]">
                <Img
                  src="images/img_user_20X20.svg"
                  className="test_grid"
                  alt="user"
                />
                <Text className="rowgrid1" as="h6" variant="h6">
                  Customer
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Row className="items-end w-[63%]">
                  <Img src="images/img_sort.svg" className="sort" alt="sort" />
                  <Text className="rowsort2" as="h6" variant="h6">
                    Message
                  </Text>
                </Row>
                <Text className="rowgroup1" variant="body1">
                  3
                </Text>
              </Row>
              <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[39%]">
                <Img
                  src="images/img_folder.svg"
                  className="test_grid"
                  alt="folder"
                />
                <Text className="rowgrid1" as="h6" variant="h6">
                  File
                </Text>
              </Row>
              <Row className="items-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[63%]">
                <Img
                  src="images/img_camera.svg"
                  className="test_grid"
                  alt="camera"
                />
                <Text
                  className="font-inter mt-[3px] rowgrid"
                  as="h6"
                  variant="h6"
                >
                  Calender
                </Text>
              </Row>
              <Row className="items-end lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[46%]">
                <Img
                  src="images/img_trash.svg"
                  className="test_grid"
                  alt="trash"
                />
                <Text className="rowtrash3" as="h6" variant="h6">
                  Shop
                </Text>
              </Row>
              <Row className="items-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[43%]">
                <Img
                  src="images/img_mail_20X20.svg"
                  className="test_grid"
                  alt="mail"
                />
                <Text className="rowgrid1" as="h6" variant="h6">
                  Cart
                </Text>
              </Row>
              <Row className="items-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[61%]">
                <Column className="bg-white_A700 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-start px-[3px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]">
                  <div className="bg-bluegray_400 rounded-radius50 test_grid"></div>
                </Column>
                <Text className="rowvector3" as="h6" variant="h6">
                  Settings
                </Text>
              </Row>
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
