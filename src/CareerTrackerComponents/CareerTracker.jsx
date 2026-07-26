import ApplicationTable from "./ApplicationTable";

const dataTrackedArr=[
    {
        value:42,
        topic:'Total Applications'
    },
    {
        value:42,
        topic:'Total Applications'
    },
    {
        value:42,
        topic:'Total Applications'
    },
    {
        value:42,
        topic:'Total Applications'
    }
];

function CareerTracker(){

    return(

        <div className="careerTracker">


            <div className="CThead">

                <div className="CT">
                    <p>Career Tracker</p>
                    <small>Track your job applications and interviews</small>
                </div>

                <button>+ Add Apllication</button>
            </div>


            <div className="dataTrackedLane">

                {
                    dataTrackedArr.map((obj)=>{
                        return <div id={obj.topic} className="dataTracked" key={crypto.randomUUID()}>
                            <p>{obj.value}</p>
                            <small>{obj.topic}</small>
                        </div>
                    })
                }

            </div>

            <ApplicationTable/>

        </div>

    )
}

export default CareerTracker;