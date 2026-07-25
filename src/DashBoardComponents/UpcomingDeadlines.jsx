const deadlinesArr=[
    {
        title:'Google SWE intern',
        type:'interview',
        date:'25jan'
    },
    {
        title:'Google SWE intern',
        type:'interview',
        date:'25jan'
    },
    {
        title:'Google SWE intern',
        type:'interview',
        date:'25jan'
    },
    {
        title:'Google SWE intern',
        type:'interview',
        date:'25jan'
    }
]

function UpcomingDeadlines(){

    return (

        <div className="upcomingDeadlines">

            <div className="UDhead">
                <p>Upcoming Deadlines</p>
                <button>{'>'}</button>
            </div>

            <div className="deadlines">
                {
                    deadlinesArr.map((obj)=>{
                        return (
                            <div className="UD">

                                <div className="title_topic">
                                    <p>{obj.title}</p>
                                    <small>{obj.type}</small>
                                </div>

                                <p className="day">{obj.date}</p>

                            </div>

                        );
                    })
                }
            </div>


        </div>


    )

}

export default UpcomingDeadlines;