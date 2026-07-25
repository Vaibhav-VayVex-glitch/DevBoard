
function InfoCard({type, image, number, improvement}){

    return(
        <div className="infocard">
            
            <div className="type_and_image">

                <p className="type">{type}</p>
                <p className="infocardImage">{image}</p>

            </div>

            <p className="infoNumber">{number}</p>
            <p className="infoImprove">+{improvement}</p>

        </div>
    )

}

export default InfoCard;