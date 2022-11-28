 export const Option = ({value, click}) => {
    return (
        <div className="button option" onClick={click}>
            {value}
        </div>
    )
}