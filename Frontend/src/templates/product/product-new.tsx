import { Col } from "antd";
import  Template  from "../../components/shared";
import NavBar from "../../components/products/register/nav-bar";
import  TaxInfoStep  from "../../components/products/register/TaxInfo/tax-field-income";

const ProductNew = () => {
  return (
     <Template.Grid.GridContainer>
        <NavBar/>
        <TaxInfoStep/>

     </Template.Grid.GridContainer>
  );
}

export default ProductNew;
