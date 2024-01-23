
import React from 'react'
export default function Button({children,...restProps}){

    return (
        <button className="py-2 px-4 from-blue-500 bg-gradient-to-tr to-blue-800 text-white bg-blue-600 rounded-full" {...restProps}>{children}</button>
    )

}