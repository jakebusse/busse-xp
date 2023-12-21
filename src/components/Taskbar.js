import '../assets/styles/Taskbar.css';
import Start from './taskbar/Start';
import Time from './taskbar/Time';

function Taskbar() {
    return (
        <div>
            <div className="dock"></div>
            <Start />
            <Time />
        </div>
    );
}

export default Taskbar;