export default function FloatingButton({ children, position = "top-left", className, ...restProps }) {

    const positionStyle = position === 'top-left' ? 'top-4 left-4' : (
        position === 'top-right' ? 'top-4 right-4' : (
            position === 'bottom-right' ? 'bottom-4 right-4' : (
                position === 'bottom-left' ? 'bottom-4 left-4' : ''
            )
        )
    )

    return <button {...restProps} className={`absolute text-xs ${positionStyle} w-auto p-2 rounded-md h-8 bg-white z-20 ${className}`}>
        {children}
    </button>
}