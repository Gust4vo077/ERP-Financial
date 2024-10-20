import { z } from 'zod';

const productGeneralSchema = z.object({
  nome: z.string().nonempty("Descrição is required"),
  descricao: z.string().optional(),
  data: z.date()
  especificacao: z.string().optional(),
  espessura: z.string().optional(),
  largura: z.string().optional(),
  altura: z.string().optional(),
  comprimento: z.string().optional(),
  unidade: z.string().optional(),
  tipo: z.string().optional(),
  codigoBarras: z.string().optional(),
  formula: z.string().optional(),
  codigoFornecedor: z.string().optional(),
  fornecedor: z.string().optional(),

 
  precoMercado: z.number().optional(),
  custoAdicionais: z.number().optional(),
  desconto: z.number().optional(),
  margemLucro: z.number().optional(),


  precoVenda: z.number().optional(),

  quantidadeInicial: z.number().optional(),
  precoProducao: z.number().optional(),
  
  precoAtacado: z.number().optional()
  

});

type productSchemaType = z.infer<typeof productGeneralSchema>;

export {
  productSchemaType,
  productGeneralSchema
};
