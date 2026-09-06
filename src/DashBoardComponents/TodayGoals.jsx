import { useState } from "react";
import AddGoalPopUp from "./PopUps/AddGoalPopUp";


function TodayGoals(){

    const [goalsArr,setGoalsArr]= useState([
        ["Complete DevBoard Dashboard",false]
    ]);

    let completedGoals=0;

    goalsArr.forEach((goal)=>{
        if(goal[1]) completedGoals++;
    })

    const [addGoalPopUp,setAddGoalPopUp]=useState(false);

    return (


        <div className="TodayGoals">

            <div className="todaygoalshead">
                <p>Today's Goals</p>
                <p className="completedGoals">{completedGoals}/{goalsArr.length}</p>
            </div>

            <div className="goals">
                {
                    goalsArr.map((goal)=>{
                        return (
                            <div className="goalBar" key={goal[0]+ crypto.randomUUID()}>
                                <input type="radio" name={goal[0]} onChange={()=>
                                    {
                                        setGoalsArr(
                                            prev=>{
                                                prev[prev.indexOf(goal)][1]= !prev[prev.indexOf(goal)][1];
                                                return [...prev];
                                            }
                                        )
                                    }
                                        }/>

                                    {!goal[1] && <div className="goal"> <span>{goal[0]}</span> <button onClick={()=>{
                                        setGoalsArr(
                                            prev=>{
                                                prev.splice(prev.indexOf(goal),1);
                                                return [...prev];
                                            }
                                        )
                                    }
                                    }
                                    >del</button></div>}
                                    
                                    {goal[1] && <div className="goal"> <del>{goal[0]}</del> <button onClick={()=>{
                                        setGoalsArr(
                                            prev=>{
                                                prev.splice(prev.indexOf(goal),1);
                                                return [...prev];
                                            }
                                        )
                                    }
                                    }

                                    >del</button></div>}
                            </div>
                        )
                    })
                }
            </div>

            <button onClick={()=>{setAddGoalPopUp(true)}}>+ Add goal</button>

            {
                addGoalPopUp && (
                    <div className="overlay" onClick={(e)=> { if(e.target===e.currentTarget||e.target.className=='cross')setAddGoalPopUp(false)} } >
                        <AddGoalPopUp  goalsArr={goalsArr} setGoalsArr={setGoalsArr} setAddGoalPopUp={setAddGoalPopUp} />
                    </div>
                ) 
            }

        </div>
    );
}

export default TodayGoals;