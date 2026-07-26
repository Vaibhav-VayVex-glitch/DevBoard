const patternArr=[
    {
        name:"Array",
        completed:"34/40",
        perccentage:85
    },
    {
        name:"Array",
        completed:"34/40",
        perccentage:85
    },
    {
        name:"Array",
        completed:"34/40",
        perccentage:85
    },
    {
        name:"Array",
        completed:"34/40",
        perccentage:85
    },
    {
        name:"Array",
        completed:"34/40",
        perccentage:85
    }
]

function PatternMeter(){

    return(

        <div className="patternMeter">

            <div className="PMhead">
                Pattern Mastery
            </div>

            <div className="meterLane">
                {
                    patternArr.map((obj)=>{

                        return (

                            <div className="patternBox" key={obj.name}>

                                <div className="outerCircle">
                                    <div className="innerCircle">{obj.perccentage}</div>
                                </div>

                                <p>{obj.name}</p>
                                <small>{obj.completed}</small>
                            </div>


                        )

                    })
                }
            </div>

        </div>

    )
}

export default PatternMeter;