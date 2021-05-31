import {useParams,Link} from 'react-router-dom'
import {useContext, useEffect} from "react";
import MainContext from "../MainContext";
import Download from "./Download";
import LazyLoad from "react-lazyload";
import Loader from "./Loader";
import Brand from "./Brand";
import {GrFormPreviousLink} from "react-icons/all";

const Collection = () => {

    const {slugs} = useParams()
    const {brands,selectedBrands,setSelectedBrands} = useContext(MainContext)

    const clearHistory = () => {
        setSelectedBrands([])
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    },[])

    return(
        <main className="content">
            <header className="header">
                <Link to="/" onClick={clearHistory}>
                    <a className="back-btn">
                        <GrFormPreviousLink/>
                        Bütün Brendlər
                    </a>
                </Link>
                {selectedBrands.length > 0 && <Download/>}
            </header>
            <section className="brands">
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return(
                    <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader/>}>
                        <Brand key={brand.slug} brand={brand}/>
                    </LazyLoad>
                    )
                })}
            </section>
        </main>
    )
}
export default Collection