import CareerTracker from '../CareerTrackerComponents/CareerTracker';
import DashBoard from '../DashBoardComponents/DashBoard';
import SearchPanel from './SearchPanel';
import DsaTracker from '../DSATracker/DsaTracker';
import Learning from '../LearningComponents/Learning';



function RightPanel(){


    return(
        <div className="rightlane">

            <SearchPanel/>
            {/* <DashBoard/> */}
            {/* <CareerTracker/> */}
            {/* <DsaTracker/> */}
            {/* <Learning/> */}

        </div>
    )
}

export default RightPanel;