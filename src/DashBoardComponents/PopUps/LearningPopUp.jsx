

function LearningPopUp({LearningObj,setLearningObj}){


    return(
        <div className="infoCardPopUp">

            <div className="head">
                <span>Learning Progress</span>
                <span className="cross">X</span>
            </div>

            <div className="infoCardList">

                {
                    //returns an array with each index storing [key,value]
                    Object.entries(LearningObj).map(([key,value])=>{
                        return <div className='listBar' key={key + "LearningInfoCard"}> <span>{key}</span> <span className="subListBar">  <span>{value.modulesDone + '/' + value.totalModules}</span> <span>{Math.trunc((value.modulesDone*100)/value.totalModules)}</span>  </span> </div>
                    })
                }

            </div>


        </div>
    )

}

export default LearningPopUp;