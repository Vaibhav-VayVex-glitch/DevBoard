import CareerTracker from '../CareerTrackerComponents/CareerTracker';
import DashBoard from '../DashBoardComponents/DashBoard';
import SearchPanel from './SearchPanel';
import DsaTracker from '../DSATracker/DsaTracker';
import Learning from '../LearningComponents/Learning';
import Project from '../ProjectsPageComponents/Project'



function RightPanel(){


    return(
        <div className="rightlane">

            <SearchPanel/>
            {/* <DashBoard/> */}
            {/* <CareerTracker/> */}
            {/* <DsaTracker/> */}
            {/* <Learning/> */}
            {/* <Project/> */}

        </div>
    )
}

export default RightPanel;