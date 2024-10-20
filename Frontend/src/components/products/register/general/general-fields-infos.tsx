
import { useFormContext,Controller } from "react-hook-form";
import Template from "../../../shared";
import { Col } from "antd";
import { FormItem } from "../form-item";
import { ProductTypes } from "../../../../validations/product";
import { InputDefault } from "../../../shared/input/input-default";
import DefaultRow from "../../../shared/grid/GridRow";

const GeneralFields= ()=> {

const { formState: {errors}, control } = useFormContext<ProductTypes>();

const labels=[
  {Name:"General.nome",placeholder:"Digite o nome",label:"nome"},
  {Name:"General.descricao",placeholder:"Digite a descrição",label:"descricao"},
  {Name:"General.data",placeholder:"Escolha uma data",label:"data"},
  {Name:"General.especificacao",placeholder:"Digite a especificação",label:"especificacao"},
  {Name:"General.espessura",placeholder:"Digite a espessura",label:"espessura"},
  {Name:"General.largura",placeholder:"Digite a largura",label:"largura"},
  {Name:"General.altura",placeholder:"Digite a altura",label:"altura"},
  {Name:"General.comprimento",placeholder:"Digite o comprimento",label:"comprimento"},
  {Name:"General.unidade",placeholder:"Digite a unidade",label:"unidade"},
  {Name:"General.tipo",placeholder:"Digite a tipo",label:"tipo"},
  {Name:"General.codigoBarras",placeholder:"Digite o codigoBarras",label:"codigoBarras"},
  {Name:"General.formula",placeholder:"Digite a formula",label:"formula"},
  {Name:"General.codigoFornecedor",placeholder:"Digite o codigo do Fornecedor",label:"codigoFornecedor"},
  {Name:"General.fornecedor",placeholder:"Digite o fornecedor",label:"fornecedor"},
]


return(
  <DefaultRow className="lg:px-20 sm:px-10 py-12 w-1600">
     { labels.map((item,index,)=>(
      <Col key={index} sm={24} lg={8} >
        <Controller
            control={control}
            name={item.Name}
            render={({ field }) => (
              <FormItem
                label={item.label}
                errors={errors}
                fieldName={field.name}
              >
                <InputDefault {...field} placeholder={item.placeholder} />
              </FormItem>
            )}
          />
      </Col> )) 
      }
  </DefaultRow>
     );
  

}


export default GeneralFields;