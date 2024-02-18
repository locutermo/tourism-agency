
import React from 'react'
export default function Button({children,className,...restProps}){

    return (
        <button 
            className={`md:py-2 py-1 md:px-4 px-2 md:text-sm text-xs from-blue-700 bg-gradient-to-tr to-blue-800 text-white bg-blue-700 rounded-full ${className}`} 
            {...restProps}
        >
            {children}
        </button>
    )

}