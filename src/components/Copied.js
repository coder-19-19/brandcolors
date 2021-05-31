import {getContrastYIQ} from "../helpers";
const Copied = ({color}) => {
    return(
        <div
            style={{'--copiedColor':`#${color}`,'--copiedTextColor':`${getContrastYIQ(color)}`}}
            className="copied">
            #{color} Kopyalandı
        </div>
    )
}
export default Copied