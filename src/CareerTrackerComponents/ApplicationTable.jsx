import { useState } from "react";


const filterArr=['All','Applied','Interview','Offer','Rejected','Ghosted','Assessment'];
const titleArr=['Company','Role','Status','Applied','Location','Source','Salary'];

function ApplicationTable({ApplicationsArr,updateApplications,filterObj}){

    const [ApplicationCategory,setApplicationCategory]=useState('All');

    return(

        <div className="applicationTable">

            <div className="search_and_filter">


                <div className="serachBar">
                    <span>Q</span>
                    <input type="text" id="applicationSearch" placeholder="search companies or roles"/>
                </div>

                <div className="filters">
                    {   filterArr.map((val)=> <button id={val} className="filter" key={val} onClick={()=>setApplicationCategory(val)}>{val}{ val!='All'&& "("+filterObj[val]+")"}</button>)   }
                </div>


            </div>

            <div className="titles">
                {
                    titleArr.map((val)=><span className="title" id={val} key={val}>{val}</span>)
                }
            </div>


            <div className="applicationsLane">
                {
                    
                    ApplicationsArr.map((obj)=>{
                        if(ApplicationCategory==='All'||ApplicationCategory===obj.status)return (
                            <div className="application" key={obj.company+" "+obj.role}>

                                <span>{obj.company}</span>
                                <span>{obj.role}</span>
                                <span>{obj.status}</span>
                                <span>{obj.applied}</span>
                                <span>{obj.location}</span>
                                <span>{obj.source}</span>
                                <span>{obj.salary}</span>
                                <a href={obj.link}>Link</a>

                            </div>
                        )
                    })

                }
            </div>


        </div>
    )
}

export default ApplicationTable;