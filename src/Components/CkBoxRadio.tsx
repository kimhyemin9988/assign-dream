import { UseFormRegister } from "react-hook-form";
import { FormI } from "./Form";
import { useState } from "react";

export interface CkBoxRadioI {
    label: string;
    data: string | string[];
    type?: string;
    register: UseFormRegister<FormI>;
}

const CkBoxRadio = ({ label, data, type, register }: CkBoxRadioI) => {
    const id = data as string[];
    const [subText, setSubText] = useState(false);

    return (<>
        {id.map((ele) => {
            return (
                <div key={ele + "a"}>
                    <input type={type} id={ele + type} value={ele} {...register(label)} onClick={() => {
                        setSubText((prev) => ele === "선택3" ? prev = true : prev = false)
                    }}></input>
                    <label htmlFor={ele + type}>{ele}</label>
                </div>
            )
        })}
        {subText && <h1>*선택시 텍스트가 표시됩니다.</h1>}
    </>)
}
export default CkBoxRadio;