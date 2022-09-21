
const Button = ({buttonTitle, changePage}) => {
    return ( 
        <>
            <button className="loadButton" onClick={changePage}>
                {buttonTitle}
            </button>
        </>
     );
}
 
export default Button;