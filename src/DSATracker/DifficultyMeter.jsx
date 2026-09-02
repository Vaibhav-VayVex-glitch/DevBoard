import { useContext } from 'react';
import {problemDifficultyContext} from '../main';

function DifficultyMeter(){

    const {problemDifficultyArr,updateproblemDifficultyArr} = useContext(problemDifficultyContext);

    return(

        <div className="difficultymeter">

            <div className="DMhead">
                Difficulty Split
            </div>

            <div className="chart_and_values">

                <div className="pieChart"></div>

                <div className="valuesList">
                    {
                        problemDifficultyArr.map((obj)=>{

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