import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Input, SelectBox, Row, Button } from "components";

const CreateEventPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="items-center justify-end lg:p-[159px] xl:p-[198px] 2xl:p-[223px] 3xl:p-[268px] w-[100%]">
            <Img
              src="images/img_group_40X40.svg"
              className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mt-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
              alt="Group"
            />
            <Column className="bg-white_A700 items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:p-[22px] xl:p-[28px] 2xl:p-[31px] 3xl:p-[38px] rounded-radius4 shadow-bs1 w-[48%]">
              <Column className="justify-end pr-[4px] py-[4px] w-[100%]">
                <Text
                  className="mt-[1px] text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Create new event
                </Text>
                <Text
                  className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rowline"
                  as="h6"
                  variant="h6"
                >
                  Add new event in the calendar
                </Text>
              </Column>
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] pt-[4px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Event name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                    type="text"
                    name="Group8357"
                    placeholder="Type name"
                    shape="RoundedBorder4"
                    size="xl"
                    variant="OutlineIndigo51"
                  ></Input>
                </Column>
                <Column className="justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_800 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Select category
                  </Text>
                  <SelectBox
                    className="font-normal lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                    placeholderClassName="text-bluegray_800"
                    name="Group8358"
                    placeholder="Data project"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_20X20.svg"
                        className="lg:w-[14px] lg:h-[15px] lg:mr-[14px] xl:w-[17px] xl:h-[18px] xl:mr-[17px] 2xl:w-[19px] 2xl:h-[20px] 2xl:mr-[19px] 3xl:w-[23px] 3xl:h-[24px] 3xl:mr-[23px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    variant="OutlineIndigo511_2"
                  ></SelectBox>
                </Column>
              </Column>
              <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] w-[100%]">
                <Button
                  className="font-bold xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[48%]"
                  shape="CircleBorder28"
                  size="xl"
                  variant="FillDeeporange300"
                >
                  Create now
                </Button>
                <Button
                  className="common-pointer font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[48%]"
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

export { CreateEventPopupModal };
