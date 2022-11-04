import React from "react";

import { Row, Text, Input, Img, Column } from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const Header1 = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Row className="items-center mx-[auto] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[96%]">
          <Text
            className="font-inter font-medium text-bluegray_800 w-[auto]"
            as="h6"
            variant="h6"
          >
            Welcomback, Team!
          </Text>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-inter font-medium p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
            wrapClassName="2xl:ml-[227px] 3xl:ml-[272px] flex lg:ml-[161px] w-[37%] xl:ml-[201px]"
            name="SearchBox"
            placeholder="Search..."
            prefix={
              <Img
                src="images/img_search.svg"
                className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[5px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[7px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 2xl:mr-[8px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[9px] my-[auto]"
                alt="search"
              />
            }
            suffix={
              inputvalue?.length > 0 ? (
                <CloseSVG
                  className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[15px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                  onClick={() => setInputvalue("")}
                  color="#828fa2"
                />
              ) : inputvalue?.length > 0 ? (
                <CloseSVG
                  color="#828fa2"
                  className="cursor-pointer lg:w-[14px] lg:h-[15px] lg:ml-[7px] lg:mr-[15px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                  onClick={() => setInputvalue("")}
                />
              ) : (
                ""
              )
            }
            shape="srcRoundedBorder4"
            size="smSrc"
            variant="srcOutlineBluegray200"
          ></Input>
          <Img
            src="images/img_shoppingbag.svg"
            className="xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] computer"
            alt="shoppingbag"
          />
          <Column
            className="bg-cover bg-repeat items-end lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] pl-[1px] computer"
            style={{ backgroundImage: "url('images/img_group8200.svg')" }}
          >
            <div className="bg-red_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] outline outline-[2px] outline-white_A700 rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
          </Column>
          <Text
            className="font-inter font-normal lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic text-gray_500 w-[auto]"
            as="h5"
            variant="h5"
          >
            <span className="text-gray_500 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Hello,
            </span>
            <span className="text-bluegray_900 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              {" "}
            </span>
            <span className="text-bluegray_900 font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Sam
            </span>
          </Text>
          <Img
            src="images/img_sherlocktoyfa.png"
            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            alt="SherlockToyFa"
          />
        </Row>
      </header>
    </>
  );
};

export default Header1;
