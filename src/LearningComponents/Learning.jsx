import ProgressCard from "./ProgressCard";
import { LearningContext } from "../main";
import { useContext, useState } from "react";


function Learning(){

  const [LearningObj,updateLearningObj]=useContext(LearningContext);

  const [categoryName,setCategoryName]= useState('All');

  const progressObj={
    "In Progress":0,
    "Completed":0,
    "Not Started":0,
    "Overall":0
  }

  let modulesCompleted=0;
  let TotalModules=0;

  for(const projectName in LearningObj){
    progressObj[LearningObj[projectName].progress]++;
    modulesCompleted+=LearningObj[projectName].modulesDone;
    TotalModules+=LearningObj[projectName].totalModules;
  }

  progressObj['Overall']= Math.trunc((modulesCompleted*100)/TotalModules);

return (

    <div className="learningPage">

        <div className="LPhead">

            <div className="learning">
                <p>Learning</p>
                <p>Track your courses and learning roadmap</p>
            </div>

            <button>Add Resource</button>

        </div>

        <div className="progressDisplayLane">

        {
            Object.entries(progressObj).map(([key,value])=>{
                return(
                    <div className="progressCard" key={key+" progressCard"}>
                        <p>{key}</p>
                        <small>{value}</small>
                    </div>
                )
            }
        )
        }

        </div>

        <div className="categoryFilter">
            <button onClick={()=>setCategoryName('All')}>All</button>
            <button onClick={()=>setCategoryName('In Progress')}>In Progress</button>
            <button onClick={()=>setCategoryName('Not Started')}>Not Started</button>
            <button onClick={()=>setCategoryName('Completed')}>Completed</button>
        </div>

        <div className="learningDisplay">

        {
            Object.entries(LearningObj).map(
                ([key,value])=>{
                      if(categoryName=='All'||categoryName==value.progress)  return <ProgressCard title={key} progress={value.progress} tag={value.tag} description={value.description} modulesDone={value.modulesDone} totalModules={value.totalModules} startDate={value.startDate} link={value.link} note={value.note}   />
                }
              )
        }


        </div>


    </div>

)

}

export default Learning;