
import { Input, InputProps } from "antd";


const AuthInputForm= ({...rest}:InputProps)=>{

return(
   <Input name="email" 
       type="email" 
       required 
       className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" 
       {...rest} />
      );
    
    }


export default AuthInputForm;