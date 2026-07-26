const valueArr=[
    {
        category:'Easy',
        value:100
    },
    {
        category:'Medium',
        value:145
    },
    {
        category:'hard',
        value:55
    },
    {
        category:'Total',
        value:300
    }

]

function DifficultyMeter(){

    return(

        <div className="difficultymeter">

            <div className="DMhead">
                Difficulty Split
            </div>

            <div className="chart_and_values">

                <div className="pieChart"></div>

                <div className="valuesList">
                    {
                        valueArr.map((obj)=>{

                            return (
                                <div className='valueBox' id={obj.category} key={obj.category}>
                                    <span >{obj.category}</span>
                                    <span className="value">{obj.value}</span>
                                </div>
                            )
                        })
                    }

                    
                </div>

            </div>

        </div>

    )
}

export default DifficultyMeter;