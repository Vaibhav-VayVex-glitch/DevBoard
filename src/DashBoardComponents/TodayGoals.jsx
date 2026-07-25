
const goalsArr=[
    'Solve 5 leetcode problems',
    'Solve 5 leetcode problems',
    'Solve 5 leetcode problems',
    'Solve 5 leetcode problems',
    'Solve 5 leetcode problems'
]

function TodayGoals(){


    return (


        <div className="TodayGoals">

            <div className="todaygoalshead">
                <p>Today's Goals</p>
                <p className="completedGoals">2/5</p>
            </div>

            <div className="goals">
                {
                    goalsArr.map((val)=>{
                        return (
                            <div className="goal" key={crypto.randomUUID()}>
                                <input type="radio" name={val} />
                                <span>{val}</span>
                            </div>
                        )
                    })
                }
            </div>

            <button>+ Add goal</button>

        </div>
    );
}

export default TodayGoals;