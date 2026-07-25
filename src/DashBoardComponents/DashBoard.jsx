import Welcome from "./Welcome";
import InfoCard from "./InfoCard";
import TodayGoals from "./TodayGoals";
import UpcomingDeadlines from "./UpcomingDeadlines";
import RecentActivity from "./RecentActivity";
import Calender from "./Calender";
import ProductivityScore from './ProductivityScore';
import ThisWeek from './ThisWeek'


const informationCard=[
    {
        type:'Application Sent',
        image: 'O',
        number:48,
        improvement:5
    },
    {
        type:'Application Sent',
        image: 'O',
        number:48,
        improvement:5
    },
    {
        type:'Application Sent',
        image: 'O',
        number:48,
        improvement:5
    },
    {
        type:'Application Sent',
        image: 'O',
        number:48,
        improvement:5
    }
]

function DashBoard(){

    return (

        <div className="dashboard">

            <Welcome/>

            <div className="infoCardLane">
                {
                    informationCard.map( (obj) => (<InfoCard type={obj.type} image={obj.image} number={obj.number} improvement={obj.improvement}/>) )
                }
            </div>

            <div className="tasks_and_updates">

                <TodayGoals/>

                <UpcomingDeadlines/>

                <RecentActivity/>

            </div>

            <div className="date_and_progress">

                <Calender/>
                <ProductivityScore/>
                <ThisWeek/>
                
            </div>

        </div>

    );
}

export default DashBoard;