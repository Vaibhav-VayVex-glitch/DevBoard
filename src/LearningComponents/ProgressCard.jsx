

function ProgressCard({title,progress,tag,description,modulesDone,totalModules,startDate,link,note}){

    return(

        <div className="progressCard">

            <div className="PChead">
                <span>{tag}</span>
                <span>{progress}</span>
            </div>

            <p className="title">{title}</p>

            <p className="description">{description}</p>

            <div className="progressDone">

                <div className="modulesTrackPercent">

                    <span>{modulesDone}/{totalModules} modules</span>
                    <span>{Math.round((modulesDone*100)/totalModules)}</span>                    

                </div>

                <div className="progressBar">
                    this is progress bar here
                </div>

            </div>


            <div className="utilitesDate">

                <span>{startDate}</span>
                
                <div className="utilites">
                    <button>-</button>
                    <button>+</button>
                    <button>Edit</button>
                    <a href={link}>Open Resource</a>
                </div>

            </div>

            <p className="note">{note}</p>

        </div>

    )


}

export default ProgressCard;