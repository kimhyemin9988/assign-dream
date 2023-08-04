import { UseFormRegister } from "react-hook-form";
import { FormI } from "./Form";

const DateInput = ({ data, register }: { data: string | string[], register: UseFormRegister<FormI> }) => {

    return (
        <input type={data as string} {...register(data as string)}></input>
    );
}
export default DateInput;