import { UseFormRegister } from "react-hook-form";
import { FormI } from "./Form";
import { error } from "console";

interface InputCpnentProps {
    data: string | string[];
    label: string;
    register: UseFormRegister<FormI>;
}


const InputCpnent = ({ data, label, register }: InputCpnentProps) => {

    return (
        <input type="text" placeholder={data as string} {...register(label)}></input>);
}
export default InputCpnent;