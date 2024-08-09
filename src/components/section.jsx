import Title from '@/components/Title'
export default function Section({ children,id, title, description }) {

    return (
        <section id={id || 'unknown'} className="py-10 px-4 md:px-20 xl:px-[10%] flex z-10 flex-col w-full justify-center md:min-h-screen">
            <Title>{title}</Title>
            <p className="text-sm md:text-base text-center pb-14 py-4 lg:px-20 text-primary">{description}</p>
            {children}
        </section>
    )
}