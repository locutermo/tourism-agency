export default async function HeaderMedia() {

    return <section className="w-full">
        <video autoPlay muted loop playsInline loading="eager" className="w-full h-full shadow">
            <source src="/videos/intro.mp4" type="video/mp4" />

            Your browser does not support the video tag.
        </video>
    </section>
}