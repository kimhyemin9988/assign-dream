const DateInput = ({ data }: { data: string | string[] }) => {

    return (
        <input type={data as string}></input>
    );
}
export default DateInput;