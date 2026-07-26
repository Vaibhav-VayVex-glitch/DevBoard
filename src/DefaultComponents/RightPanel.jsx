import CareerTracker from '../CareerTrackerComponents/CareerTracker';
import DashBoard from '../DashBoardComponents/DashBoard';
import SearchPanel from './SearchPanel';


function RightPanel(){


    return(
        <div className="rightlane">

            <SearchPanel/>
            {/* <DashBoard/> */}

            <CareerTracker/>

        </div>
    )
}

export default RightPanel;