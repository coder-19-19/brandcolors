import {useContext, useEffect, useState} from "react";
import MainContext from "../MainContext";
import {GrLink,GrDownload,GrClose} from "react-icons/gr";
import {Link} from 'react-router-dom';

const Download = () => {

    const {brands,selectedBrands,setSelectedBrands} = useContext(MainContext)
    const [downloadUrl,setDownloadUrl] = useState('')

    useEffect(() => {
        if(selectedBrands.length > 0){
            let output = ':root{\n'
            selectedBrands.map(slug => {
                let brand = brands.find(brand => brand.slug === slug)
                brand.colors.map((color,key) => {
                    output += `--${slug}-${key} : #${color};\n`
                })
            })
            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)

            return () => {
                URL.revokeObjectURL(url)
                setDownloadUrl('')
            }
        }
    },[selectedBrands])

    return(
        <div className="download">
            <div className="actions">
                <a download="brands.css" href={downloadUrl}>
                    <GrDownload/>
                </a>
                <Link to={`/collection/${selectedBrands.join(',')}`}>
                    <GrLink/>
                </Link>
            </div>
            <div className="selected" onClick={() => setSelectedBrands([])} >
                <GrClose/>
                {selectedBrands.length} Brend seçilib
            </div>
        </div>
    )
}
export default Download