import { useState } from "react";


function ApplicationPopUp({applicationArr,setApplications}){

    const barObj= {Applied:0,Offer:0,Assessment:0,Interview:0,Rejected:0,Ghosted:0};

    applicationArr.forEach((obj) => {
       barObj[obj.status]++;
    });


    return(
        <div className="infoCardPopUp">

            <div className="head">
                <span>Applications Sent</span>
                <span className="cross">X</span>
            </div>

            <div className="infoCardList">

                {
                    //returns an array with each index storing [key,value]
                    Object.entries(barObj).map(([key,value])=>{
                        return <div className='listBar' key={key}> <span>{key}</span> <span>{value}</span> </div>
                    })
                }

            </div>


        </div>
    )
}

export default ApplicationPopUp;