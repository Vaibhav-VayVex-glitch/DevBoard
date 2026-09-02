

function ProjectPopUp({projectsObj,updateProjectsObj}){
    
    return(
        <div className="infoCardPopUp">

            <div className="head">
                <span>Active Projects</span>
                <span className="cross">X</span>
            </div>

            <div className="infoCardList">

                {
                    Object.entries(projectsObj).map(([key,value])=>{
                        return <div className='listBar' key={"listbar  "+ key}> <span>{key}</span> <span className="subListBar"> <span>{value.status}</span> <span>{Math.trunc(
                                        (value.completedMilestones * 100) /
                                        value.totalMilestones
                                        )}%</span> 
                                    </span>
                                </div>
                    })
                }

            </div>


        </div>
    )

}

export default ProjectPopUp;