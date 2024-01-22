
import React from 'react'
export default function Button({children,...restProps}){

    return (
        <button className="p-2 text-white bg-blue-600 rounded-full" {...restProps}>{children}</button>
    )

}