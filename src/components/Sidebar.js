import {useState} from 'react'
import Modal from 'react-modal'
import {GrClose} from "react-icons/gr";

const Sidebar = () => {

    const [modalIsOpen,setModalIsOpen] = useState(false)
    
    const toggleModal = () =>{
        setModalIsOpen(!modalIsOpen)
    }

    return(
        <>
            <div className="sidebar">
               <div className="logo">
                   <a href="#">Brend<b>Rənglər</b></a>
               </div>
                <div className="description">
                    Front end yazarkən lazım olan rəng kodlarını asanlıqla tapmaq üçün hazırlanmışdır.
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#" onClick={toggleModal}>BrendRənglər Haqqında</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >
                <button onClick={toggleModal} className="modalCloseBtn">
                    <GrClose/>
                </button>
                <h3>BrendRənglər Haqqında</h3>
                <p>
                    Brend<b>Rənglər</b> <a href="https://fermanallahverdiev.com"><i>Fərman</i></a> tərəfindən hazırlanmışdır.
                </p>
            </Modal>
        </>
    )
}

export default Sidebar