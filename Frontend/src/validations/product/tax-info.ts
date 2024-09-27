
import { z } from "zod";


const fiscalIncomeValidationSchema = z.object({

  // Income products
  cfop: z.string().min(4, "CFOP deve ter 4 dígitos").max(4, "CFOP deve ter 4 dígitos"), 
  origem: z.string().min(1, "Origem deve ter 1 dígito").max(1, "Origem deve ter 1 dígito"), 
  cstICMS: z.string().min(2, "CST ICMS deve ter 2 dígitos").max(2, "CST ICMS deve ter 2 dígitos"), 
  redBase: z.number().min(0, "Red Base (%) deve ser maior ou igual a 0").max(100, "Red Base (%) deve ser menor ou igual a 100"), 
  icms: z.number().min(0, "ICMS deve ser maior ou igual a 0").max(100, "ICMS deve ser menor ou igual a 100"), 
  cstIPI: z.string().min(2, "CST IPI deve ter 2 dígitos").max(2, "CST IPI deve ter 2 dígitos"), 
  ipi: z.number().min(0, "IPI deve ser maior ou igual a 0").max(100, "IPI deve ser menor ou igual a 100"), 
  cstPIS: z.string().min(2, "CST PIS deve ter 2 dígitos").max(2, "CST PIS deve ter 2 dígitos"), 
  pis: z.number().min(0, "PIS deve ser maior ou igual a 0").max(100, "PIS deve ser menor ou igual a 100"), 
  cstCOFINS: z.string().min(2, "CST COFINS deve ter 2 dígitos").max(2, "CST COFINS deve ter 2 dígitos"), 
  cofins: z.number().min(0, "COFINS deve ser maior ou igual a 0").max(100, "COFINS deve ser menor ou igual a 100"), 
  movEst: z.boolean(), 

});

type typeFiscalIncomeValidationSchema=z.infer<typeof fiscalIncomeValidationSchema>

const fiscalSaleValidationSchema = z.object({


  // Sale products
  ncm: z.string().min(8, "NCM deve ter 8 dígitos").max(8, "NCM deve ter 8 dígitos"), 
  origemSaida: z.string().min(1, "Origem deve ter 1 dígito").max(1, "Origem deve ter 1 dígito"), 
  cstICMSSaida: z.string().min(2, "CST ICMS deve ter 2 dígitos").max(2, "CST ICMS deve ter 2 dígitos"), 
  redBaseSaida: z.number().min(0, "Red Base (%) deve ser maior ou igual a 0").max(100, "Red Base (%) deve ser menor ou igual a 100"), 
  icmsSaida: z.number().min(0, "ICMS deve ser maior ou igual a 0").max(100, "ICMS deve ser menor ou igual a 100"), 
  ipiSaida: z.number().min(0, "IPI deve ser maior ou igual a 0").max(100, "IPI deve ser menor ou igual a 100"), 
  cstPISsaida: z.string().min(2, "CST PIS deve ter 2 dígitos").max(2, "CST PIS deve ter 2 dígitos"), 
  pisSaida: z.number().min(0, "PIS deve ser maior ou igual a 0").max(100, "PIS deve ser menor ou igual a 100"), 
  cstCOFINSsaida: z.string().min(2, "CST COFINS deve ter 2 dígitos").max(2, "CST COFINS deve ter 2 dígitos"), 
  cofinsSaida: z.number().min(0, "COFINS deve ser maior ou igual a 0").max(100, "COFINS deve ser menor ou igual a 100"), 
  cfopSaida: z.string().min(4, "CFOP deve ter 4 dígitos").max(4, "CFOP deve ter 4 dígitos"), 
  cest: z.string().min(7, "CEST deve ter 7 dígitos").max(7, "CEST deve ter 7 dígitos").optional(),
  fci: z.string().max(20, "FCI pode ter até 20 caracteres").optional(), 
  naturezaNCM: z.string().optional(), 

 
});

type typeFiscalSaleValidationSchema=z.infer<typeof fiscalSaleValidationSchema>

export {
    fiscalIncomeValidationSchema,
    fiscalSaleValidationSchema
}

export type TypeFiscalValidationSchema = {
  typeFiscalIncomeValidationSchema,
  typeFiscalSaleValidationSchema
}


