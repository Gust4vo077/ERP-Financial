import { Input, InputProps } from "antd";

export const InputDefault = ({style,...rest}:InputProps) => {
    


    return (
        <Input
            size="large"
            style={{
                fontWeight: '400',
                borderRadius:'5px',
                ...style
            }}
            {...rest}
        />
    )

}