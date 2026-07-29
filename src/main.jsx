import ReactDOM from 'react-dom/client';
import LeftPanel from './DefaultComponents/LeftNavigation';
import RightPanel from './DefaultComponents/RightPanel';


import './StyleFiles/LeftNavigation.css';
import './StyleFiles/rightPanel.css';
import './StyleFiles/dashboard.css';
import './StyleFiles/careerTracker.css';
import './StyleFiles/DsaTracker.css';
import './StyleFiles/learning.css'

const root= ReactDOM.createRoot( document.querySelector('.entireProject') );

root.render(
    <>
        <LeftPanel/>
        <RightPanel/>
    </>
)
;