import { UseFormRegister } from "react-hook-form";
import { FormI } from "./Form";

export interface CkBoxRadioI{
    label: string;
    data: string | string[];
    type?: string;
    register : UseFormRegister<FormI>;
}

const CkBoxRadio = ({ label, data, type, register }: CkBoxRadioI) => {
    const id = data as string[];

    return (<>
        {id.map((ele) => {
            return (
                <div key={ele + "a"}>
                    <input type={type} id={ele + type} value={ele} {...register(label)}></input>
                    <label htmlFor={ele + type}>{ele}</label>
                </div>
            )
        })}
    </>)
}
export default CkBoxRadio;