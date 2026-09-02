

function ProblemPopUp({problemDifficultyArr,setProblemDifficultyArr}){

    

    return(
        <div className="infoCardPopUp">

            <div className="head">
                <span>Problems Solved</span>
                <span className="cross">X</span>
            </div>

            <div className="infoCardList">

                {
                    problemDifficultyArr.map((obj)=>{
                        if(obj.category!=='Total')return <div className='listBar' key={"listbar  "+ obj.category}> <span>{obj.category}</span> <span>{obj.value}</span> </div>
                    })
                }

            </div>


        </div>
    )

}

export default ProblemPopUp;