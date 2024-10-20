import { Col, Form } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import  Template  from "../../components/shared";
import NavBar from "../../components/products/register/nav-bar";
import  TaxInfoStep  from "../../components/products/register/TaxInfo/tax-field-income";
import { FormProvider, useForm } from "react-hook-form";
import { ProductTypes,ProductSchemaRegister } from "../../validations/product";
import GeneralFields from "../../components/products/register/general/general-fields-infos";

const ProductNew = () => {

  const ProductContext=useForm<ProductTypes>({
     resolver: zodResolver(ProductSchemaRegister),
     mode: "all",
     criteriaMode: "all",
  });

  const { watch, handleSubmit, getValues } = ProductContext;
  
  function submitData(){
   console.log(getValues()) 
  }

  return (
   <FormProvider {...ProductContext}>
     <Template.Grid.DefaultRow>
          <Col lg={24}>
            <NavBar />
          </Col>
        <Form layout="vertical" onFinish={handleSubmit(submitData)}>
         <GeneralFields />

        </Form>
     </Template.Grid.DefaultRow>
   </FormProvider>
  );
}

export default ProductNew;
