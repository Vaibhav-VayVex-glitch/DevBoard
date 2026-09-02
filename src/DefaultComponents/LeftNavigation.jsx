import { useNavigate } from "react-router-dom";

const pageCategories = ['Dashboard',
                        'Career', 
                        'DsaTracker',
                        'Learning',
                        'Projects',
                        'Notes',
                        'Goals',
                        'Analytics',
                        'Settings'
                    ];


function LeftPanel() {

    const navigate= useNavigate();

    function buttonClicks(value){
        if (value==='Dashboard') navigate('/');
        else navigate(`/${value}`);
    }

    return (
        <div className="LeftNavigationPanel">

            <div className="logoName_AND_Pages">

                <div className="logoName">DevBoard</div>

                <div className="pages">


                    {
                        pageCategories.map((value) => {
                            return (
                                <button className="pageCategory" key={value} onClick={()=>{buttonClicks(value)}}>{value}</button>
                            );
                        })

                    }
                </div>
            
            </div>

            <div className="userName">
                <p>Alex Johnson</p>
                <small>Full Stack Developer</small>
            </div>

        </div>
    )
}

export default LeftPanel;