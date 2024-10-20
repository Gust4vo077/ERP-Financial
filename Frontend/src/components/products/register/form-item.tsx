import { Form, FormItemProps } from "antd"
import { PropsWithChildren } from "react"
import { FieldError, FieldErrors } from "react-hook-form"
import { RegisterType } from "../../../validations/auth/register"


interface RegisterFormItemProps extends PropsWithChildren<FormItemProps>{

    errors: FieldErrors<RegisterType>
    fieldName: string

}

const getFieldError = (errors: FieldErrors, fieldName: string): FieldError | undefined => {
    const keys = fieldName.split('.');
    let error: FieldErrors | FieldError | undefined = errors;
  
    for (const key of keys) {
      if (error && typeof error === 'object' && key in error) {
        //@ts-ignore
        error = error[key as string];
      } else {
        error = undefined;
        break;
      }
    }
  
    return error as FieldError | undefined;
  };

export const FormItem = ({children,errors,fieldName,...rest}:RegisterFormItemProps) => {

    const error = getFieldError(errors, fieldName);

    return (
        <Form.Item 
            className="w-full sm:w-1/4 md:w-1/4" 
            validateStatus={error ? 'error' : 'success'}
            help={error?.message}
            {...rest}
        >
            {children}
        </Form.Item>
    )
}