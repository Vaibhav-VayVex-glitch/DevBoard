import { useState } from "react";
import SideBarPopUp from "./SideBarPopUp";


const filterArr=['All','Applied','Interview','Offer','Rejected','Ghosted','Assessment'];
const titleArr=['Company','Role','Status','Applied','Location','Source','Salary'];

function ApplicationTable({ApplicationsArr,updateApplications,filterObj}){

    const [ApplicationCategory,setApplicationCategory]=useState('All');

    const [showSidePopUp,setShowSidePopUp]=useState(false);
    const [sidePopUpJob,setShowSidePopUpJob]=useState(null);

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
                            <div className="application" key={obj.company+" "+obj.role}
                                onClick={()=>{
                                    setShowSidePopUp(true);
                                    setShowSidePopUpJob(obj);
                                }}
                            >

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

            {
            showSidePopUp && (
                <div className="overlay sideBarOverlay" onClick={(e)=> { if(e.target===e.currentTarget||e.target.className=='cross')setShowSidePopUp(false)} } >
                    <SideBarPopUp    applicationObj={sidePopUpJob}   applicationArr={ApplicationsArr} updateApplications={updateApplications} setShowSidePopUp={setShowSidePopUp}  />
                </div>
                ) 
            }


        </div>
    )
}

export default ApplicationTable;