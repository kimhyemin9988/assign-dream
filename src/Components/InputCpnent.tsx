const InputCpnent = ({data, label} : {data : string | string[], label : string}) => {

    return(<input type="text" placeholder={data as string}></input>);
}
export default InputCpnent;