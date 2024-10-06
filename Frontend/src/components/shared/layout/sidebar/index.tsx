import { Flex } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState,useEffect } from "react";
import MenuLayout from "../menu";


const SideBar =()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [innerWidth, setInnerWidth] = useState<number | undefined>(undefined)

  useEffect(()=> {

    const handleResize = () => {
      setInnerWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);

 
    return () => {
      window.removeEventListener("resize", handleResize);
    };


  },[])



    return(

      <Sider
       onCollapse={setCollapsed}
       collapsed={collapsed}
       breakpoint="lg"
       collapsedWidth={innerWidth && innerWidth <= 762 ? 0 :80}
       width={280}
       className="md:relative"

       style={{minHeight: '100vh'}}
      >
          
      <Flex 
        direction="column" 
        className="min-h-0 h-full max-w-screen z-20 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
       >
        <MenuLayout/>
      </Flex>


      </Sider>
    );

}

export default SideBar;