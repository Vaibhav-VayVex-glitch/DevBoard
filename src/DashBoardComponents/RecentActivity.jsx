const activityArr=[
    {
        task:'Solve merge k sorted lists',
        time:'2h'
    },
    {
        task:'Solve merge k sorted lists',
        time:'2h'
    },
    {
        task:'Solve merge k sorted lists',
        time:'2h'
    },
    {
        task:'Solve merge k sorted lists',
        time:'2h'
    }
]

function RecentActivity(){

    return (

        <div className="recentActivity">

            <div className="RAhead">
                <p>Recent Activity</p>
                <button>{'>'}</button>
            </div>

            <div className="activities">
                {
                    activityArr.map((obj)=>{
                        return (
                            <div className="RA">
                                    <p>{obj.task}</p>
                                    <small>{obj.time}</small>
                            </div>

                        );
                    })
                }
            </div>


        </div>


    )

}

export default RecentActivity;