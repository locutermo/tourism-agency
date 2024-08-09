const withWPLink = (WrappedComponent) => {


    const WithWPLink = (props) => {

        return <a href={"https://www.tiktok.com/@ruta.mundial"} target="__blank__" className="w-full h-auto">
            <WrappedComponent {...props}/>
        </a>
    }



    return WithWPLink;
}

export default withWPLink;