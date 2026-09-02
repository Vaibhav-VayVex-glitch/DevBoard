import ProjectCard from "./ProjectCard";
import { ProjectsContext } from "../main";
import { useContext } from "react";



const status=['All','Planning','In Progress','Completed','Deployed'];

function Project(){

    const [projectsObj,updateProjectsObj]=useContext(ProjectsContext);

    const projectOverviewObj={Planning:0,'In Progress':0,Completed:0,Deployed:0};

    for(let projectName in projectsObj){
      projectOverviewObj[projectsObj[projectName].status]++;
    }

    return(

        <div className="projectPage">

            <div className="Phead">

                <div className="Ptitle">
                    <p>Projects</p>
                    <p><span className="totalProjects">6</span>projects · milestone-driven progress</p>
                </div>

                <button>Add Project</button>
            </div>

            <div className="overviewLane">
                {
                    Object.entries(projectOverviewObj).map(([key,value])=>{
                        return(
                            <div className="overviewCard" key={key+" overviewCard"}>
                                <p>{key}</p>
                                <small>{value}</small>
                            </div>
                        )
                    })
                }
            </div>

            <div className="statusSelectLane">
                {
                    status.map((val)=> <button>{val}</button>)
                }
            </div>

            <div className="projectCardsPanel">
                {
                    Object.entries(projectsObj).map(([key,value])=><ProjectCard
                    title={key}
                    status={value.status}
                    description={value.description}
                    techStack={value.techStack}
                    milestones={value.milestones}
                    completedMilestones={value.completedMilestones}
                    totalMilestones={value.totalMilestones}
                    updatedOn={value.updatedOn}
                    github={value.github}
                    demo={value.demo}
                    key={key}
                    />)
                }
            </div>

        </div>

    )

}

export default Project;