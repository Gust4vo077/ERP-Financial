import { Col, Layout, LayoutProps } from "antd";
import Header from "../header";
import Content from "../content";
import SideBar from "../sidebar";
import { Row } from  'antd'
import ContentLayout from "../content";
import FooterLayout from "../footer";



const Mounted=({children,...rest}:LayoutProps)=>{

return(
    
    <Layout >
     
      <Header/>
      
      <Layout>
        <SideBar/>

        <ContentLayout>
          {children}
        </ContentLayout>
      </Layout>     
      <FooterLayout/>
    </Layout>
    
);

}

export default Mounted;