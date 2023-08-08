import { UseFormRegister } from "react-hook-form";
import { FormI } from "./Form";
import { useState } from "react";
import { styled } from "styled-components";

export interface CkBoxRadioI {
    label: string;
    data: string | string[];
    type?: string;
    register: UseFormRegister<FormI>;
}


interface CkBoxRadioProps {
    readonly $type: string | undefined;
}


const CkBoxRadioStyle = styled.input<CkBoxRadioProps>`
    width: 16px;
    height: 16px;
    border-radius: ${(props) => props.$type === "radio" ? "8px" : "4px"};
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    appearance: none;
    &:hover{
        border: 1px solid #BEBEBE;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #F6F7F8;
    }
    &:checked{
        background: #FFFFFF;
        border: 4px solid #024EEE;
    }
`

const SubText5 = styled.span`
    color: #F03738;
`

/* 정보 5와 정보6 컴포넌트 */
const CkBoxRadio = ({ label, data, type, register }: CkBoxRadioI) => {
    const id = data as string[];
    const [subText, setSubText] = useState(false);

    return (<>
        {id.map((ele) => {
            return (
                <div key={ele + "a"}>
                    <CkBoxRadioStyle $type={type} type={type} id={ele + type} value={ele} {...register(label)} onClick={() => {
                        setSubText((prev) => ele === "선택3" ? prev = true : prev = false)
                    }} required={type === "radio" && true}></CkBoxRadioStyle>
                    <label htmlFor={ele + type}>{ele}</label>
                </div>
            )
        })}
        {subText && type === "radio" && <SubText5>*선택시 텍스트가 표시됩니다.</SubText5>}
    </>)
}
export default CkBoxRadio;