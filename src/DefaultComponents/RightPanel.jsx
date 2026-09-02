import { Outlet } from 'react-router-dom';
import SearchPanel from './SearchPanel';

function RightPanel(){
    
    return(
        <div className="rightlane">

            <SearchPanel/>

            <Outlet/>
        </div>
    )
}

export default RightPanel;