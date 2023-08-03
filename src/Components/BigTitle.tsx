interface PageTitleI {
    PageTitle: string
}

const BigTitle = ({ PageTitle }: PageTitleI) => {
    return (
        <h1>{PageTitle}</h1>
    )
}
export default BigTitle;