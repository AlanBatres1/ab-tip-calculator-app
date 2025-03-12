import React from 'react'

const PercentageBtn = ({value, color, textColor, hover, hoverText, percentage}) => {
    // Convert color values to inline style objects
    const buttonStyle = {
        backgroundColor: color,
        color: textColor
    };
    
    // Handle hover with JavaScript
    const handleMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = hover;
        e.currentTarget.style.color = hoverText;
    };
    
    const handleMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = color;
        e.currentTarget.style.color = textColor;
    };

    return (
        <button className="w-full h-12 rounded flex justify-center items-center text-2xl" style={buttonStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <p>{value}{percentage}</p>
        </button>
    )
}

export default PercentageBtn