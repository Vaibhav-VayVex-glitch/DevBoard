import Welcome from "./Welcome";
import InfoCard from "./InfoCard";
import TodayGoals from "./TodayGoals";
import UpcomingDeadlines from "./UpcomingDeadlines";
import RecentActivity from "./RecentActivity";
import Calender from "./Calender";
import ProductivityScore from './ProductivityScore';
import ThisWeek from './ThisWeek';
import ApplicationPopUp from './PopUps/ApplicationPopUp';
import LearningPopUp from './PopUps/LearningPopUp';

import {ApplicationsContext,problemDifficultyContext,ProjectsContext,LearningContext} from '../main';
import { useContext, useState } from "react";
import ProblemPopUp from "./PopUps/ProblemPopUp";
import ProjectPopUp from "./PopUps/projectPopUp";

function LearningProgressPercentage(LearningObj){
        let modulesCompleted=0;
        let TotalModules=0;

        for(const projectName in LearningObj){
            modulesCompleted+=LearningObj[projectName].modulesDone;
            TotalModules+=LearningObj[projectName].totalModules;
        }

        return Math.trunc((modulesCompleted*100)/TotalModules);
    }


function DashBoard(){

    const {ApplicationsArr,updateApplications}=useContext(ApplicationsContext);
    const {problemDifficultyArr,updateproblemDifficultyArr} = useContext(problemDifficultyContext);
    const [projectsObj,updateProjectsObj]=useContext(ProjectsContext);
    const [LearningObj,updateLearningObj]=useContext(LearningContext);

    const [showAppPopUp,setShowAppPopUp]=useState(false);
    const [showProblemPopUp,setShowProblemPopUp]=useState(false);
    const [showLearningPopUp,setShowLearningPopUp]=useState(false);
    const [showProjectPopUp,setShowProjectPopUp]=useState(false);


    const informationCard=[
    {
        type:'Application Sent',
        image: 'O',
        number:ApplicationsArr.length,
        improvement:5,
        PopUp: setShowAppPopUp
    },
    {
        type:'Problem Solved',
        image: 'O',
        number:problemDifficultyArr[3].value,
        improvement:5,
        PopUp: setShowProblemPopUp
    },
    {
        type:'Learning Progress',
        image: 'O',
        number:LearningProgressPercentage(LearningObj) +"%",
        improvement:5,
        PopUp:setShowLearningPopUp
    },
    {
        type:'Active projects',
        image: 'O',
        number:Object.values(projectsObj).length,
        improvement:5,
        PopUp:setShowProjectPopUp
    }
]

    

    return (

        <div className="dashboard">

             <Welcome/>

            <div className="infoCardLane">
                {
                    informationCard.map( (obj) => (<InfoCard type={obj.type} image={obj.image} number={obj.number} improvement={obj.improvement}  key={obj.type}  setShowPopUp={obj.PopUp} />) )
                }
            </div>

            <div className="tasks_and_updates">

                <TodayGoals/>

                <UpcomingDeadlines/>

                <RecentActivity/>

            </div>

            <div className="date_and_progress">

                <Calender/>
                <ProductivityScore/>
                <ThisWeek/>
                
            </div> 

            {
            showAppPopUp && (
                <div className="overlay" onClick={(e)=> { if(e.target===e.currentTarget||e.target.className=='cross')setShowAppPopUp(false)} } >
                    <ApplicationPopUp applicationArr={ApplicationsArr} setApplications={updateApplications}   />
                </div>
                ) 
            }

            {
            showProblemPopUp && (
                <div className="overlay" onClick={(e)=> { if(e.target===e.currentTarget||e.target.className=='cross')setShowProblemPopUp(false)} } >
                    <ProblemPopUp problemDifficultyArr={problemDifficultyArr} setProblemDifficultyArr={updateproblemDifficultyArr}   />
                </div>
                ) 
            }

            {
            showProjectPopUp && (
                <div className="overlay" onClick={(e)=> { if(e.target===e.currentTarget||e.target.className=='cross')setShowProjectPopUp(false)} } >
                    <ProjectPopUp projectsObj={projectsObj} updateProjectsObj={updateProjectsObj}   />
                </div>
                ) 
            }

            {
            showLearningPopUp && (
                <div className="overlay" onClick={(e)=> { if(e.target===e.currentTarget||e.target.className=='cross')setShowLearningPopUp(false)} } >
                    <LearningPopUp LearningObj={LearningObj} setLearningObj={updateLearningObj}   />
                </div>
                ) 
            } 

        </div>

    );
}


export default DashBoard;