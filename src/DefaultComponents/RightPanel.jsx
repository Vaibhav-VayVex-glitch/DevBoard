import DashBoard from '../DashBoardComponents/DashBoard';
import SearchPanel from './SearchPanel';


function RightPanel(){


    return(
        <div className="rightlane">

            <SearchPanel/>
            <DashBoard/>

        </div>
    )
}

export default RightPanel;