import React from "react";

import {
  Column,
  Text,
  Stack,
  Row,
  Img,
  CheckBox,
  Slider,
  List,
  Button,
} from "components";
import Header1 from "components/Header/Header1";

const CustomerPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start w-[100%]">
          <Column className="bg-white_A700 justify-start lg:pl-[172px] xl:pl-[216px] 2xl:pl-[243px] 3xl:pl-[291px] w-[100%]">
            <Header1 className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 font-poppins justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]">
              <Text
                className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Customer
              </Text>
              <Stack className="bg-white_A700 font-inter lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mb-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:pr-[22px] xl:pr-[28px] 2xl:pr-[32px] 3xl:pr-[38px] rounded-radius4 shadow-bs w-[100%]">
                <Row className="absolute items-end justify-between left-[3%] top-[4%] w-[90%]">
                  <Text
                    className="font-bold mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Customer List
                  </Text>
                  <Img
                    src="images/img_search_24X24.svg"
                    className="computer"
                    alt="search"
                  />
                </Row>
                <Row className="absolute inset-x-[0] items-center mx-[auto] p-[1px] top-[12%] w-[91%]">
                  <CheckBox
                    className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] my-[1px]"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="file"
                    label=""
                  ></CheckBox>
                  <Text
                    className="lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] CVV"
                    as="h5"
                    variant="h5"
                  >
                    Customer
                  </Text>
                  <Text
                    className="2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] CVV"
                    as="h5"
                    variant="h5"
                  >
                    Address
                  </Text>
                  <Text
                    className="lg:ml-[140px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] CVV"
                    as="h5"
                    variant="h5"
                  >
                    Phone
                  </Text>
                  <Text
                    className="lg:ml-[110px] xl:ml-[137px] 2xl:ml-[155px] 3xl:ml-[186px] CVV"
                    as="h5"
                    variant="h5"
                  >
                    Order No.
                  </Text>
                  <Text
                    className="lg:ml-[56px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] CVV"
                    as="h5"
                    variant="h5"
                  >
                    Status
                  </Text>
                </Row>
                <Slider
                  slidesToShow={3}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="absolute left-[0] top-[0] w-[100%]"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <List
                        className="gap-[0] min-h-[auto] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="listfile_one1">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file One"
                            label=""
                          ></CheckBox>
                          <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] pr-[3px] w-[7%]">
                            <Img
                              src="images/img_robototoyfacefi.png"
                              className="rounded-radius50 computer"
                              alt="RobotoToyFaceFi"
                            />
                            <Text
                              className="rowrobototoyfacefi"
                              as="h5"
                              variant="h5"
                            >
                              Jack
                            </Text>
                          </Row>
                          <Text
                            className="test_2371ReppertCo"
                            as="h5"
                            variant="h5"
                          >
                            2371 Reppert Coal Road
                          </Text>
                          <Text
                            className="test_6015406298"
                            as="h5"
                            variant="h5"
                          >
                            601-540-6298
                          </Text>
                          <Text className="test_12931" as="h5" variant="h5">
                            #12931
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[98px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user"
                          />
                        </Row>
                        <Row className="bg-white_A700 items-center justify-end my-[0] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file Two"
                            label=""
                          ></CheckBox>
                          <Row className="items-end justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] w-[11%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="rounded-radius50 computer"
                              alt="Fidenza978Toy"
                            />
                            <Text
                              className="rowfidenza978toy"
                              as="h5"
                              variant="h5"
                            >
                              Fort Myers
                            </Text>
                          </Row>
                          <Text
                            className="test_927SunburstDr"
                            as="h5"
                            variant="h5"
                          >
                            927 Sunburst Drive
                          </Text>
                          <Text
                            className="test_2393465244"
                            as="h5"
                            variant="h5"
                          >
                            239-346-5244
                          </Text>
                          <Text className="test_12932" as="h5" variant="h5">
                            #12932
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user One"
                          />
                        </Row>
                        <Row className="listfile_one1">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file Three"
                            label=""
                          ></CheckBox>
                          <Row className="items-end justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[11%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="rounded-radius50 computer"
                              alt="VanGoghByAmrit"
                            />
                            <Text
                              className="rowvangoghbyamrit"
                              as="h5"
                              variant="h5"
                            >
                              Benjamin
                            </Text>
                          </Row>
                          <Text className="test_24012022" as="h5" variant="h5">
                            1671 Carriage Court
                          </Text>
                          <Text
                            className="test_7603901331"
                            as="h5"
                            variant="h5"
                          >
                            760-390-1331
                          </Text>
                          <Text className="test_12933" as="h5" variant="h5">
                            #12933
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[114px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[95px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user Two"
                          />
                        </Row>
                        <Row className="bg-white_A700 items-center justify-end my-[0] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file Four"
                            label=""
                          ></CheckBox>
                          <Row className="items-end justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] w-[11%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="rounded-radius50 computer"
                              alt="Fidenza978Toy One"
                            />
                            <Text
                              className="rowfidenza978toy"
                              as="h5"
                              variant="h5"
                            >
                              Flanagan
                            </Text>
                          </Row>
                          <Text className="test_24012022" as="h5" variant="h5">
                            121 Courtright Street
                          </Text>
                          <Text
                            className="test_70156504391"
                            as="h5"
                            variant="h5"
                          >
                            701-565-0439
                          </Text>
                          <Text className="test_12931" as="h5" variant="h5">
                            #12934
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[114px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[95px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillRed600"
                          >
                            Error
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user Three"
                          />
                        </Row>
                        <Row className="listfile_one1">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file Five"
                            label=""
                          ></CheckBox>
                          <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] pr-[2px] w-[10%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="rounded-radius50 computer"
                              alt="VanGoghByAmrit One"
                            />
                            <Text
                              className="rowrobototoyfacefi"
                              as="h5"
                              variant="h5"
                            >
                              Nicoletti
                            </Text>
                          </Row>
                          <Text
                            className="test_1060StarkHoll"
                            as="h5"
                            variant="h5"
                          >
                            1060 Stark Hollow Road
                          </Text>
                          <Text className="language4" as="h5" variant="h5">
                            {" "}
                            970-757-0036
                          </Text>
                          <Text className="test_12935" as="h5" variant="h5">
                            #12935
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user Four"
                          />
                        </Row>
                        <Row className="bg-white_A700 items-center justify-end my-[0] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file Six"
                            label=""
                          ></CheckBox>
                          <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] pr-[2px] w-[9%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="rounded-radius50 computer"
                              alt="Fidenza978Toy Two"
                            />
                            <Text
                              className="rowrobototoyfacefi"
                              as="h5"
                              variant="h5"
                            >
                              Robert
                            </Text>
                          </Row>
                          <Text
                            className="test_424CharterStr"
                            as="h5"
                            variant="h5"
                          >
                            424 Charter Street
                          </Text>
                          <Text
                            className="test_9132072627"
                            as="h5"
                            variant="h5"
                          >
                            913-207-2627
                          </Text>
                          <Text className="test_12933" as="h5" variant="h5">
                            #12936
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[114px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[95px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user Five"
                          />
                        </Row>
                        <Row className="listfile_one1">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file Seven"
                            label=""
                          ></CheckBox>
                          <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] pr-[3px] w-[9%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="rounded-radius50 computer"
                              alt="VanGoghByAmrit Two"
                            />
                            <Text
                              className="rowrobototoyfacefi"
                              as="h5"
                              variant="h5"
                            >
                              Rankin
                            </Text>
                          </Row>
                          <Text className="test_21033" as="h5" variant="h5">
                            60 Corpening Drive
                          </Text>
                          <Text
                            className="test_2489304978"
                            as="h5"
                            variant="h5"
                          >
                            248-930-4978
                          </Text>
                          <Text className="test_21033" as="h5" variant="h5">
                            #12937
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillAmber300"
                          >
                            Pending
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user Six"
                          />
                        </Row>
                        <Row className="bg-white_A700 items-center justify-end my-[0] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file Eight"
                            label=""
                          ></CheckBox>
                          <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[12%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="rounded-radius50 computer"
                              alt="Fidenza978Toy Three"
                            />
                            <Text
                              className="rowrobototoyfacefi"
                              as="h5"
                              variant="h5"
                            >
                              Clementine
                            </Text>
                          </Row>
                          <Text
                            className="test_4337FlemingWa"
                            as="h5"
                            variant="h5"
                          >
                            4337 Fleming Way
                          </Text>
                          <Text
                            className="test_7577354769"
                            as="h5"
                            variant="h5"
                          >
                            757-735-4769
                          </Text>
                          <Text className="Visa" as="h5" variant="h5">
                            #12938
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[114px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[95px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user Seven"
                          />
                        </Row>
                        <Row className="listfile_one1">
                          <CheckBox
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            inputClassName="mr-[5px] w-[undefinedpx]"
                            name="file Nine"
                            label=""
                          ></CheckBox>
                          <Row className="items-center justify-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] pr-[2px] w-[9%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="rounded-radius50 computer"
                              alt="VanGoghByAmrit Three"
                            />
                            <Text
                              className="rowrobototoyfacefi"
                              as="h5"
                              variant="h5"
                            >
                              Mitchell
                            </Text>
                          </Row>
                          <Text
                            className="test_2758MyDrive"
                            as="h5"
                            variant="h5"
                          >
                            2758 My Drive
                          </Text>
                          <Text
                            className="test_6318277596"
                            as="h5"
                            variant="h5"
                          >
                            631-827-7596
                          </Text>
                          <Text className="Visa" as="h5" variant="h5">
                            #12939
                          </Text>
                          <Button
                            className="font-medium 3xl:ml-[114px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[95px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="user7"
                            alt="user Eight"
                          />
                        </Row>
                      </List>
                    </React.Fragment>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
                <Img
                  src="images/img_close.svg"
                  className="absolute right-[0] top-[4%] computer"
                  alt="close"
                />
                <Row className="absolute bottom-[4%] inset-x-[0] items-center mx-[auto] w-[94%]">
                  <Button
                    className="cursor-pointer flex items-center justify-center user_One"
                    onClick={() => sliderRef.current?.slidePrev()}
                    size="mdIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowleft_32X32.svg"
                      className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                    size="md"
                    variant="OutlineBluegray900"
                  >
                    1
                  </Button>
                  <Button
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    2
                  </Button>
                  <Button
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    ...
                  </Button>
                  <Button
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center user_One"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    9
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] user_One"
                    onClick={() => sliderRef.current?.slideNext()}
                    size="lgIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowright_32X32.svg"
                      className="flex items-center justify-center"
                      alt="arrowright"
                    />
                  </Button>
                  <Text
                    className="font-medium lg:ml-[543px] xl:ml-[679px] 2xl:ml-[764px] 3xl:ml-[917px] text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    9 of 200 data
                  </Text>
                </Row>
              </Stack>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CustomerPage;
