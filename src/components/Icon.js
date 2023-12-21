import '../assets/styles/Icon.css';
import { useState } from 'react';
import Modal from './icon/Modal';

function Icon({ icon, modal, name, content }) {
    const [state, setState] = useState('');
    const handleClick = () => {
        setState('icon-active');
    };

    const [modalState, setModalState] = useState('modal-hidden');
    const openModal = () => {
        if(modal) {
            setModalState('modal-active');
        } else {
            window.open(content, '_blank')
        }
        setState('');
    };

    const closeModal = () => {
        setModalState('modal-hidden');
    };

    return (
        <div>
            <div className="icon-container" onClick={handleClick} onDoubleClick={openModal}>
                <img src={icon} alt={name} className={state} draggable="false" />
                <p className={state} >{name}</p>
            </div>
            <Modal name={name} icon={icon} state={modalState} closeFunc={closeModal} />
        </div>
    );
}

export default Icon;