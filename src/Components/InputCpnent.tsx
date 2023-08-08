import { UseFormRegister } from "react-hook-form";
import { FormI } from "./Form";
import { styled } from "styled-components";

interface InputCpnentProps {
    data: string | string[];
    label: string;
    register: UseFormRegister<FormI>;
}

const InputField = styled.input`
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    width: 136px;
    height: 24px;
    outline: none;
    &:focus{
        border: 1px solid #024EEE;
    }
`
/* 정보2, 정보4 input */
const InputCpnent = ({ label, register }: InputCpnentProps) => {

    return (
        <InputField type="text" {...register(label)} required></InputField>);
}
export default InputCpnent;