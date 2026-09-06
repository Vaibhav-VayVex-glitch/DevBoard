import { useRef } from "react";


function AddGoalPopUp({goalsArr,setGoalsArr,setAddGoalPopUp}){

    const inputRef= useRef(null);

    return(
        <div className="addGoalPopUp">

            <div className="addGoalHead">
                <span>Add Goal</span>
                <span className="cross">X</span>
            </div>

            <div className="inputGoalContainer">
                <p>goal description</p>
                <input type="text" placeholder="e.g. Solve 5 Leetcode Problems"  ref={inputRef}/>
            </div>

            <button className="addGoalBtn" onClick={()=>{
                if(inputRef.current.value.length>0){
                    setGoalsArr(prev=>[
                        ...prev,
                        [inputRef.current.value,false]
                    ])
                    
                    setAddGoalPopUp(false);
                }
            }}>Add Goal</button>
        </div>
    )
}

export default AddGoalPopUp;