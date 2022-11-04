import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  Input,
  SelectBox,
  Img,
  TextArea,
  Button,
} from "components";
import Sidebar6 from "components/Sidebar/Sidebar6";
import Header from "components/Header/Header";

const AddProductPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <Sidebar6 className="w-[17%]" />
          <Line className="bg-indigo_51 2xl:h-[1072px] 3xl:h-[1286px] lg:h-[762px] xl:h-[953px] w-[1px]" />
          <Column className="items-center w-[83%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Row className="items-start justify-between xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                <Text className="Shoppingcentre" as="h3" variant="h3">
                  Add Product
                </Text>
                <Text className="SettingeKYC" as="h5" variant="h5">
                  <span className="text-bluegray_400 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Ecommerce/
                  </span>
                  <span className="text-bluegray_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    {" "}
                    Add Product
                  </span>
                </Text>
              </Row>
              <Column className="bg-white_A700 justify-end lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[100%]">
                <Text
                  className="font-bold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Basic information
                </Text>
                <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Column className="w-[62%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Product name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_400 frame3801"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[92%] xl:mt-[10px]"
                      type="text"
                      name="Group8204"
                      placeholder="Enter product’s name"
                      shape="RoundedBorder4"
                      size="xl"
                      variant="OutlineIndigo51"
                    ></Input>
                  </Column>
                  <Column className="w-[38%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Select category
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                      placeholderClassName="text-bluegray_800"
                      name="group18058"
                      placeholder="Data project"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_20X20.svg"
                          className="lg:w-[7px] lg:h-[5px] lg:mr-[17px] xl:w-[9px] xl:h-[6px] xl:mr-[21px] 2xl:w-[11px] 2xl:h-[7px] 2xl:mr-[24px] 3xl:w-[13px] 3xl:h-[8px] 3xl:mr-[28px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      variant="OutlineIndigo511_2"
                    ></SelectBox>
                  </Column>
                </Row>
                <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                  <Column className="w-[62%]">
                    <Column className="justify-start w-[92%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Branch
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_400 frame3801"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="Group8205"
                        placeholder="Enter brach"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                    <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[92%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Price
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_400 frame3801"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="Group8206"
                        placeholder="Enter brach"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                  </Column>
                  <Column className="w-[38%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Product description
                    </Text>
                    <TextArea
                      className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      name="Group8207"
                      placeholder="Write something..."
                    ></TextArea>
                  </Column>
                </Row>
              </Column>
              <Row className="items-center justify-between xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Column className="bg-white_A700 lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius4 shadow-bs w-[49%]">
                  <Text className="Payment" as="h4" variant="h4">
                    Product image
                  </Text>
                  <Column className="border-2 border-dashed border-indigo_51 items-center justify-end lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] 3xl:p-[104px] lg:p-[61px] xl:p-[77px] 2xl:p-[87px] rounded-radius4 w-[100%]">
                    <Img
                      src="images/img_image_28X28.svg"
                      className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] settings_One"
                      alt="image"
                    />
                    <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] w-[66%]">
                      <Text
                        className="font-bold text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Upload image
                      </Text>
                      <Text
                        className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rowline"
                        as="h6"
                        variant="h6"
                      >
                        Drag or click to upload image
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[49%]">
                  <Text
                    className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mr-[309px] xl:mr-[386px] 2xl:mr-[435px] 3xl:mr-[522px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Add link
                  </Text>
                  <Column className="items-center justify-start lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] pt-[3px] w-[99%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Product Link
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_400 frame3801"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                        name="Group8208"
                        placeholder="Enter link"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                    <Column className="justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Hashtag
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_400 frame3801"
                        wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[7px]"
                        name="Group8209"
                        placeholder="Enter tag"
                        shape="RoundedBorder4"
                        size="xl"
                        variant="OutlineIndigo51"
                      ></Input>
                    </Column>
                  </Column>
                  <Row className="items-center justify-end lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[138px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[61%]">
                    <Button
                      className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[47%]"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillDeeporange300"
                    >
                      Save
                    </Button>
                    <Button
                      className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[47%]"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillGray51"
                    >
                      Cancel
                    </Button>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AddProductPage;
