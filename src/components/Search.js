import {GrSearch} from "react-icons/all";
import MainContext from "../MainContext";
import {useContext} from "react";

const Search = () => {
    const {setSearch} = useContext(MainContext)
    const searchBrand = (e) => {
        setSearch(e.target.value)
    }
    return(
        <div className="search">
            <input type="text" placeholder="Brend Axtar" onChange={searchBrand}/>
            <div className="icon">
                <GrSearch/>
            </div>
        </div>
    )
}
export default Search