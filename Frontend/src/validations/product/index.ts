import { z } from "zod";
import {productGeneralSchemaType,productGeneralSchema} from "./geral";
 
enum RegisterProductEnum {
      General= 'General'
}


const ProductSchemaRegister = z.discriminatedUnion('formType',[
    z.object({
        formType: z.literal(RegisterProductEnum.General),
    })
])

export type ProductTypes= {
    General:productGeneralSchemaType    
}

export{
   RegisterProductEnum,
   ProductSchemaRegister

}