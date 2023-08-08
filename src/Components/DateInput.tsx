import { UseFormRegister } from "react-hook-form";
import { FormI } from "./Form";

/* 날짜 */
const DateInput = ({ data, register }: { data: string | string[], register: UseFormRegister<FormI> }) => {

    return (
        <input type={data as string} {...register(data as string)} required></input>
    );
}
export default DateInput;