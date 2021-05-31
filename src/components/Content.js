import Search from "./Search";
import Brand from "./Brand";
import LazyLoad from 'react-lazyload'
import MainContext from "../MainContext";
import {useContext} from "react";
import Download from "./Download";
import Loader from "./Loader";

const Content = () => {

    const {brands,selectedBrands} = useContext(MainContext)

        return (
            <main className="content">
                <header className="header">
                    <Search/>
                    {selectedBrands.length > 0 && <Download/>}
                </header>
                <section className="brands">
                    {brands.map(brand => (
                        <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader/>}>
                            <Brand key={brand.slug} brand={brand}/>
                        </LazyLoad>
                    ))}
                </section>
            </main>
        );
}

export default Content;