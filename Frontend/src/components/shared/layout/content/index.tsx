import { Content } from "antd/es/layout/layout";
import { PropsWithChildren } from "react";


const ContentLayout=({children}:PropsWithChildren)=>{
    return( 
    
        <Content className="p-8 bg-white">
          {children}
        </Content>
       
    );
   }
   
   export default ContentLayout;