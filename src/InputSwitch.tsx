import CkBoxRadio, { CkBoxRadioI } from "./Components/CkBoxRadio";
import DateInput from "./Components/DateInput";
import InputCpnent from "./Components/InputCpnent";


interface enumI {
    [parameter: string]: JSX.Element;
}

const InputSwitch = ({ label, data, type, register }: CkBoxRadioI) => {
    const status = label; //정보


    const enumUI: enumI = {
        정보1: <h1 id={status}>{data}</h1>,
        정보2: <InputCpnent data={data} label={status} register={register}></InputCpnent>,
        정보3: <h1 id={status}>{data}</h1>,
        정보4: <InputCpnent data={data} label={status} register={register}></InputCpnent>,
        정보5: <CkBoxRadio data={data} type={type} label={status} register={register}></CkBoxRadio>,
        정보6: <CkBoxRadio data={data} type={type} label={status} register={register}></CkBoxRadio>,
        날짜: <DateInput data={data} register={register}></DateInput>
    };

    return (
        <>
            {enumUI[status]}
        </>
    )
}
export default InputSwitch;