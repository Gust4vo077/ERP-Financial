import { Controller, useFormContext } from "react-hook-form";
import { RegisterFormItem } from "../register-form-item";
import  InputDefault from "../../../shared/input/input-default";
import { Template } from "../../../shared";
import { TypeFiscalValidationSchema } from "../../../../validations/products/tax-info";

const TaxInfoStep = () => {
    const { formState: { errors }, control } = useFormContext<TypeFiscalValidationSchema.typeFiscalIncomeValidationSchema>();

    return (
        <Template.Grid.DefaultRow>
   

            <Controller
                control={control}
                name="taxInfoSchema.cfop"
                render={({ field }) => (
                    <RegisterFormItem
                        label="CFOP"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            {...field}
                            placeholder="Digite o CFOP"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.origem"
                render={({ field }) => (
                    <RegisterFormItem
                        label="Origem"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            {...field}
                            placeholder="Digite a origem"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.cstICMS"
                render={({ field }) => (
                    <RegisterFormItem
                        label="CST ICMS"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            {...field}
                            placeholder="Digite o CST ICMS"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.redBase"
                render={({ field }) => (
                    <RegisterFormItem
                        label="Redução de Base (%)"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            type="number"
                            {...field}
                            placeholder="Digite a redução de base"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.icms"
                render={({ field }) => (
                    <RegisterFormItem
                        label="ICMS (%)"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            type="number"
                            {...field}
                            placeholder="Digite o ICMS"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.cstIPI"
                render={({ field }) => (
                    <RegisterFormItem
                        label="CST IPI"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            {...field}
                            placeholder="Digite o CST IPI"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.ipi"
                render={({ field }) => (
                    <RegisterFormItem
                        label="IPI (%)"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            type="number"
                            {...field}
                            placeholder="Digite o IPI"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.cstPIS"
                render={({ field }) => (
                    <RegisterFormItem
                        label="CST PIS"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            {...field}
                            placeholder="Digite o CST PIS"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.pis"
                render={({ field }) => (
                    <RegisterFormItem
                        label="PIS (%)"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            type="number"
                            {...field}
                            placeholder="Digite o PIS"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.cstCOFINS"
                render={({ field }) => (
                    <RegisterFormItem
                        label="CST COFINS"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            {...field}
                            placeholder="Digite o CST COFINS"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.cofins"
                render={({ field }) => (
                    <RegisterFormItem
                        label="COFINS (%)"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            type="number"
                            {...field}
                            placeholder="Digite o COFINS"
                        />
                    </RegisterFormItem>
                )}
            />

            <Controller
                control={control}
                name="taxInfoSchema.movEst"
                render={({ field }) => (
                    <RegisterFormItem
                        label="Movimentação de Estoque"
                        errors={errors}
                        fieldName={field.name}
                    >
                        <DefaultInput
                            type="checkbox"
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                        />
                    </RegisterFormItem>
                )}
            />
        </Template.Grid.DefaultRow>
    );
};

export default TaxInfoStep;