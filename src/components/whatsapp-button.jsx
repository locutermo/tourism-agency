
import React from 'react'

export default function WhatsappButton({ children, number, message, className, ...restProps }) {

    return (
        <a className={`${className ? className : 'text-white w-fit text-sm md:text-base bg-secondary p-2 md:p-3 rounded-md'}  hover:animate-pulse `}
            href={`https://api.whatsapp.com/send?phone=${number}&text=${message}`} target='__blank__'>{children}</a>

    )

}