import { useState } from "react";
import EditApplication from "./EditApplication";

function SideBarPopUp({applicationObj,ApplicationsArr,updateApplications,setShowSidePopUp}){

    const [showEditPopUp,setShowEditPopUp]=useState(false);

    return(
        <div className="sideBar">

            <div className="sideBarhead">
                <div className="companyAndPosition">
                    <p>{applicationObj.company}</p>
                    <p>{applicationObj.role}</p>
                </div>

                <span className="cross">X</span>
            </div>


            <div className="statusEdit">
                <p>status</p>
                <p>{applicationObj.status}</p>
            </div>

            <div className="jobInfo">

                <div className="infoBox">
                    <small>Applied</small>
                    <p>{applicationObj.applied}</p>
                </div>

                <div className="infoBox">
                    <small>Location</small>
                    <p>{applicationObj.location}</p>
                </div>

                <div className="infoBox">
                    <small>Source</small>
                    <p>{applicationObj.source}</p>
                </div>

                <div className="infoBox">
                    <small>Salary</small>
                    <p>{applicationObj.salary}</p>
                </div>

            </div>

            <div className="jobLink">
                <p>Job Posting</p>
                <a href={applicationObj.link}>{applicationObj.link}</a>
            </div>

            <div className="notesBox">
                <p>Notes</p>
                <p className="notesContent">{applicationObj.notes}</p>
            </div>


            <div className="editDelete">
                <button onClick={()=>{
                    setShowSidePopUp(false);
                    updateApplications((prev)=>{
                            prev.splice(prev.indexOf(applicationObj),1);
                            return [...prev];
                        }
                    )
                }}
                >Delete</button>
                <button onClick={()=>{
                    setShowEditPopUp(true);
                    }}>Edit</button>
            </div>

            {
            showEditPopUp && (
                <div className="overlay" onClick={(e)=> { if(e.target===e.currentTarget||e.target.className=='cross'){setShowSidePopUp(false);setShowEditPopUp(false)} } } >
                    <EditApplication ApplicationArr={ApplicationsArr} updateApplications={updateApplications} applicationObj={applicationObj} setShowEditPopUp={setShowEditPopUp} setShowSidePopUp={setShowSidePopUp}/>
                </div>
                ) 
            }

        </div>
    )
}

export default SideBarPopUp;