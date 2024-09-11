const Input = ({ type, placeholder}) => {
    return(
        <>
            <input type={type} placeholder={placeholder} 
                style={{ 
                         display: "inline-block",
                         border: "1px solid #ccc",
                         boxsizing: "border-box",
                         fontSize: "17px",
                         padding: "10px",
                         borderRadius: "8px",
                         width: "100%",
                         boxSizing: "border-box"
                }}/>
        </>
    )
}

export default Input;