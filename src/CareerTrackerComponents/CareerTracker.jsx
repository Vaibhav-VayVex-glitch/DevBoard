import ApplicationTable from "./ApplicationTable";
import AddApplicationPopUp from "./AddApplicationPopUp";
import {ApplicationsContext} from '../main';
import { useContext, useState } from "react";



function CareerTracker(){

    const   [ApplicationsArr,updateApplications]=useContext(ApplicationsContext);

    const [addApplication,setAddApplication]= useState(false);
    

    const dataTrackedArr={
        'Total Applications':ApplicationsArr.length,
        'In Progress':0,
        'Awaiting Response':0,
        'Offers/Accepted':0
    };

    const filterObj={
        'Applied':0,
        'Interview':0,
        'Offer':0,
        'Rejected':0,
        'Ghosted':0,
        'Assessment':0
    }

    ApplicationsArr.forEach( (application) => {
        if(application.status=='Offer') { dataTrackedArr['Offers/Accepted']++; filterObj['Offer']++;}
        else if(application.status=='Applied'){dataTrackedArr['Awaiting Response']++; filterObj['Applied']++;}
        else if(application.status=='Interview'){dataTrackedArr['In Progress']++; filterObj['Interview']++;}
        else if(application.status=='Rejected'){filterObj['Rejected']++;}
        else if(application.status=='Ghosted'){dataTrackedArr['Awaiting Response']++; filterObj['Ghosted']++;}
        else { dataTrackedArr['In Progress']++; filterObj['Assessment']++;}
    });

    return(

        <div className="careerTracker">


            <div className="CThead">

                <div className="CT">
                    <p>Career Tracker</p>
                    <small>Track your job applications and interviews</small>
                </div>

                <button onClick={()=>setAddApplication(true)}>+ Add Apllication</button>
            </div>


            <div className="dataTrackedLane">

                {
                    Object.entries(dataTrackedArr).map(([key,value])=>{
                        return <div id={key} className="dataTracked" key={key}>
                            <p>{value}</p>
                            <small>{key}</small>
                        </div>
                    })
                }

            </div>

            <ApplicationTable ApplicationsArr={ApplicationsArr} updateApplications={updateApplications} filterObj={filterObj}/>
            
            {
            addApplication && (
                <div className="overlay" onClick={(e)=> { if(e.target===e.currentTarget||e.target.className=='cross')setAddApplication(false)} } >
                    <AddApplicationPopUp ApplicationsArr={ApplicationsArr} updateApplications={updateApplications}/>
                </div>
                ) 
            }

        </div>

    )
}

export default CareerTracker;