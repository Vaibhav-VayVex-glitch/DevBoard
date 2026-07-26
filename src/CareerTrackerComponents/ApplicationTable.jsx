const filterArr=['All','Applied','Interview','Offer','Rejected','Ghosted','Assesment'];
const titleArr=['Company','Role','Status','Applied','Location','Source','Salary'];
const applicationsArr=[
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    },
    {
        company:'google',
        role:'SWE Intern',
        status:'Interview',
        applied:'august 15,2026',
        location:'Delhi',
        source:'referal',
        salary:'$8,000/mo',
        link:'google.com'
    }
]

function ApplicationTable(){

    return(

        <div className="applicationTable">

            <div className="search_and_filter">


                <div className="serachBar">
                    <span>Q</span>
                    <input type="text" id="applicationSearch" placeholder="search companies or roles"/>
                </div>

                <div className="filters">
                    {   filterArr.map((val)=> <button id={val} className="filter" key={crypto.randomUUID()}>{val}</button>)   }
                </div>

                <span className="resultsShowed">10 results</span>

            </div>

            <div className="titles">
                {
                    titleArr.map((val)=><span className="title" id={val}>{val}</span>)
                }
            </div>


            <div className="applicationsLane">
                {
                    
                    applicationsArr.map((obj)=>{
                        return (
                            <div className="application" key={crypto.randomUUID()}>

                                <span>{obj.company}</span>
                                <span>{obj.role}</span>
                                <span>{obj.status}</span>
                                <span>{obj.applied}</span>
                                <span>{obj.location}</span>
                                <span>{obj.source}</span>
                                <span>{obj.salary}</span>

                            </div>
                        )
                    })

                }
            </div>


        </div>
    )
}

export default ApplicationTable;