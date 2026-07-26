import CareerTracker from '../CareerTrackerComponents/CareerTracker';
import DashBoard from '../DashBoardComponents/DashBoard';
import SearchPanel from './SearchPanel';
import DsaTracker from '../DSATracker/DsaTracker';



function RightPanel(){


    return(
        <div className="rightlane">

            <SearchPanel/>
            {/* <DashBoard/> */}
            {/* <CareerTracker/> */}
            {/* <DsaTracker/> */}

        </div>
    )
}

export default RightPanel;