function PatternCard({name,solved,percent}){

    return(
        <div className="patternCard" id={name}>

            <p>{name}</p>

            <div className="solved_Number_Percentage">
                <span className="solved">{solved}</span>
                <span className="percent">{percent}</span>
            </div>
        </div>
    )
}

export default PatternCard;