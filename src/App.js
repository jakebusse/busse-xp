import './assets/styles/App.css';
import Taskbar from './components/Taskbar';
import Icon from './components/Icon';
import page from './assets/icons/page.png';
import info from './assets/icons/info.png';
import profile from './assets/icons/profile.png';
// import web from './assets/icons/web.png';
import folder from './assets/icons/folder.png';
import code from './assets/icons/code.png';
import file from './assets/icons/file.png';
import email from './assets/icons/email.png';

// import { useState } from 'react';

function App() {
    return (
        <div>
            <div className="desktop">
                <Icon icon={info} modal={true} name="System Information" />
                <Icon icon={page} modal={true} name="About Me" />
                <Icon icon={file} modal={true} name="Resume" />
                <Icon icon={folder} modal={true} name="Projects" />
                <Icon icon={profile} modal={false} name="LinkedIn" content="https://www.linkedin.com/in/jakebusse" />
                <Icon icon={code} modal={false} name="GitHub" content='https://www.github.com/jakebusse' />
                <Icon icon={email} model={false} name="Email" content="mailto:jakerbusse@gmail.com" />
            </div>
            <Taskbar />
        </div>
    );
}

export default App;