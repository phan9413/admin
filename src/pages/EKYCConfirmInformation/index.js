
    import React from 'react';

 
    import {Column,Row,Line,Text,Input,Grid,CheckBox,Button} from 'components'
  import Sidebar2 from 'components/Sidebar/Sidebar2'
  import Header from 'components/Header/Header'
  

    

    const EKYCConfirmInformationPage = () => {
      

      

      return (<>
        <Column
    className="bg-white_A700 font-inter items-center justify-start mx-[auto] w-[100%]"
        
  
  
    
    
  

    
  ><Row
    className="items-center justify-evenly w-[100%]"
    
  
  
    
    
  
    
  ><Sidebar2 
  className="w-[17%]"
  
  
  
    
    
  
  
  /><Line
    className="bg-indigo_51 3xl:h-[1145px] lg:h-[678px] xl:h-[848px] 2xl:h-[954px] w-[1px]"
    
  
  
    
    
  
    
  /><Column
    className="items-center w-[83%]"
        
  
  
    
    
  

    
  ><Header 
  className="bg-white_A700 w-[100%]"
  
  
  
    
    
  
  
  /><Column
    className="bg-gray_51 items-center justify-end lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]"
        
  
  
    
    
  

    
  ><Row
    className="items-start justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
    
  
  
    
    
  
    
  ><Text
    className="eKYC"
     
  
  
    as="h3"
    variant="h3"
  

    
  >eKYC</Text><Text
    className="SettingeKYC"
     
  
  
    as="h5"
    variant="h5"
  

    
  ><span className="text-bluegray_400 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">Setting/</span><span className="text-bluegray_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]"> eKYC</span></Text></Row><Column
    className="bg-white_A700 items-center justify-start mb-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius4 shadow-bs w-[100%]"
        
  
  
    
    
  

    
  ><Column
    className="justify-end p-[2px] w-[32%]"
        
  
  
    
    
  

    
  ><Text
    className="lg:ml-[27px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mr-[38px] xl:mr-[48px] 2xl:mr-[54px] 3xl:mr-[64px] mt-[1px] text-bluegray_900 w-[auto]"
     
  
  
    as="h2"
    variant="h2"
  

    
  >Confirm Information</Text><Text
    className="lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mx-[auto] rowoval"
     
  
  
    as="h6"
    variant="h6"
  

    
  >Make sure that all your information are precise</Text></Column><Column
    className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pt-[4px] w-[66%]"
        
  
  
    
    
  

    
  ><Column
    className="justify-start w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">Full name </span><span className="text-red_600 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">*</span></Text><Input

  className="placeholder:text-bluegray_800 Group8540"
  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
    
  
  
    
    
  
    name="group18068"
    placeholder  = "Mustermann Galer"shape="RoundedBorder4"
size="lg"
variant="OutlineIndigo51"
  ></Input></Column><Column
    className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">ID number </span><span className="text-red_600 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">*</span></Text><Input

  className="placeholder:text-bluegray_800 Group8540"
  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
    
  
  
    
    
  
    name="group18068 One"
    placeholder  = "L01X00T47"shape="RoundedBorder4"
size="lg"
variant="OutlineIndigo51"
  ></Input></Column><Grid
    className="lg:gap-[16px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] grid grid-cols-2 lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
    
  
  
    
    
  
    
  ><Column
    className="justify-start w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">Gender </span><span className="text-red_600 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">*</span></Text><Input

  className="placeholder:text-bluegray_800 Group8540"
  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
    
  
  
    
    
  
    name="gender One"
    placeholder  = "Female"shape="RoundedBorder4"
size="lg"
variant="OutlineIndigo51"
  ></Input></Column><Column
    className="justify-start w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">Nationality </span><span className="text-red_600 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">*</span></Text><Input

  className="placeholder:text-bluegray_800 Group8540"
  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
    
  
  
    
    
  
    name="group18068 Two"
    placeholder  = "Deitsch"shape="RoundedBorder4"
size="md"
variant="OutlineIndigo51"
  ></Input></Column><Column
    className="justify-start w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">Date of birth </span><span className="text-red_600 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">*</span></Text><Input

  className="placeholder:text-bluegray_800 Group8540"
  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
    
  
  
    
    
  
    name="group18068 Three"
    placeholder  = "12.08.1983"shape="RoundedBorder4"
size="lg"
variant="OutlineIndigo51"
  ></Input></Column><Column
    className="justify-start w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span className="text-bluegray_800 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">Place of birth </span><span className="text-red_600 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">*</span></Text><Input

  className="placeholder:text-bluegray_800 Group8540"
  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
    
  
  
    
    
  
    name="group18068 Four"
    placeholder  = "Berlin"shape="RoundedBorder4"
size="md"
variant="OutlineIndigo51"
  ></Input></Column></Grid></Column><CheckBox
  className="font-normal lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] not-italic lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400"
    inputClassName="mr-[5px] w-[undefinedpx]"
    
  
  
    
    
  
    name="Remember"
    label="By clicking button “Confirm", I take all responsibility of the information above"  size="md"
    
  ></CheckBox><Button
  className="font-bold lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[26%]"
    
  
  
    
    
  
    shape="CircleBorder24"
size="lg"
variant="FillDeeporange300"
  >Confirm</Button></Column></Column></Column></Row></Column>

        
      </>);
    };

    export default EKYCConfirmInformationPage;
  