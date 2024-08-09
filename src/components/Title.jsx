
export default function Title({children,position,big}){
    return (
        <span className={`text-2xl text-center lg:text-${position || 'center'} text-secondary md:text-3xl lg:text-${big?'6':'4'}xl font-bold py-6 md:py-8 uppercase`}>{children}</span>
    )
}