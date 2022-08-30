export const Button = ({ handleClick, search }) => {

    const buttonStyle = {
        marginTop: '1rem'
    };
    
    return (
        <div>
            <button style={buttonStyle} 
                    className="button-85" 
                    onClick={() => handleClick(search)}>
                    <span className="text">Get Weather</span>
                    </button>
        </div>
    )
}