

function RevisionCard({name,category,difficulty,day}){

    return(

        <div className="revisionCard">

           <div className="RCleft">
            <p className="problemName">{name}</p>
            <small className="problemCategory">{category}</small>
           </div>

           <div className="RCright">
                <span className="difficulty">{difficulty}</span>
                <span className="day">{day}</span>
                <span>Review</span>
           </div>

        </div>


    )
}

export default RevisionCard;