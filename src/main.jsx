import ReactDOM from 'react-dom/client';
import LeftPanel from './components/LeftNavigation';
import RightPanel from './components/RightPanel';


import './StyleFiles/LeftNavigation.css';
import './StyleFiles/searchPanel.css';
import './StyleFiles/rightPanel.css';

const root= ReactDOM.createRoot( document.querySelector('.entireProject') );

root.render(
    <>
        <LeftPanel/>
        <RightPanel/>
    </>
)
;