import CkBoxRadio from "./Components/CkBoxRadio";
import DateInput from "./Components/DateInput";
import InputCpnent from "./Components/InputCpnent";
import { useForm } from "react-hook-form";

export interface InputI{
    label: string;
    data: string | string[];
    type?: string;
}


interface enumI {
    [parameter: string]: JSX.Element;
}

const InputSwitch = ({ label, data, type }: InputI) => {
    const status = label; //정보
    const {
        register
      } = useForm();
    const enumUI: enumI = {
        정보1: <h1 id={label} {...register(`${label}`)}>{data}</h1>,
        정보2: <InputCpnent data={data} label={label}></InputCpnent>,
        정보3: <h1 id={label} {...register(`${label}`)}>{data}</h1>,
        정보4: <InputCpnent data={data} label={label}></InputCpnent>,
        정보5: <CkBoxRadio data={data} type={type} label={label}></CkBoxRadio>,
        정보6: <CkBoxRadio data={data} type={type} label={label}></CkBoxRadio>,
        날짜: <DateInput data={data}></DateInput>
    };

    return (
        <>
            {enumUI[status]}
        </>
    )
}
export default InputSwitch;