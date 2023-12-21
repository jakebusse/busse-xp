import '../../assets/styles/Modal.css';
import {useState} from 'react';
import Content from './Content';

function Modal({ name, icon, state, closeFunc }) {
    const [size, setSize] = useState('modal modal-default')
    const maximize = () => {
        if(size === 'modal modal-default') {
            setSize('modal modal-maximized');
        } else {
            setSize('modal modal-default');
        }
    };

    return (
        <div className={state}>
            <div className={size}>
                <div className="modal-header">
                    <img src={icon} className="modal-icon" alt="icon" />
                    <p className="modal-title">{name}</p>
                    <button className="modal-button modal-close" onClick={closeFunc} />
                    <button className="modal-button modal-maximize" onClick={maximize} />
                    <button className="modal-button modal-minimize" />
                </div>
                <div className="modal-contents">
                    <Content file={name} />
                </div>
            </div>
        </div>
    );
}

export default Modal;