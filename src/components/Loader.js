import ContentLoader from "react-content-loader";

const Loader = () => {
    return(
        <ContentLoader
        speed={2}
        width={400}
        height={183}
        viewBox="0 0 400 183"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
        <rect x="8" y="7" ry="3" width="88" height="10"/>
        <rect x="10" y="39" ry="0" width="70" height="40"/>
        <rect x="84" y="39" ry="0" width="70" height="40"/>
        <rect x="157" y="39" ry="0" width="70" height="40"/>
        </ContentLoader>
    )
}
export default Loader