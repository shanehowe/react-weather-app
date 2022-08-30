import { Button } from "./Button";

export const SearchBar = ({ search, handleSearchChange, handleClick }) => {
    const inputStyle = {
        height: '35px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
        fontSize: '16px'
    };

    return (
        <div>
            <input style={inputStyle} value={search} onChange={handleSearchChange}/>
             <Button handleClick={handleClick} search={search}/>
        </div>
    )
}