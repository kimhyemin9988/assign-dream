import { InputI } from "../InputSwitch";
import { useForm } from "react-hook-form";

const CkBoxRadio = ({ label, data, type }: InputI) => {
    const id = data as string[];
    const {
        register
      } = useForm();
    return (<>
        {id.map((ele) => {
            return (
                <div key={ele+"a"}>
                    <input type={type} id={ele+type} value={ele} {...register(`${data}`)}></input>
                    <label htmlFor={ele+type}>{ele}</label>
                </div>
            )
        })}
    </>)
}
export default CkBoxRadio;