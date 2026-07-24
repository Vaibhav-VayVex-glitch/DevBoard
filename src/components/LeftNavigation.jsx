const pageCategories = ['Dashboard',
                        'Career', 
                        'DSA Tracking',
                        'Learning',
                        'Projects',
                        'Notes',
                        'Goals',
                        'Analytics',
                        'Settings'
                    ];

function LeftPanel() {


    return (
        <div className="LeftNavigationPanel">

            <div className="logoName_AND_Pages">

                <div className="logoName">DevBoard</div>

                <div className="pages">
                    <button className="pageCategory" id="Dashboard">Dashboard</button>

                    {
                        pageCategories.map((value) => {
                            return (
                                <button className="pageCategory" key={value}>{value}</button>
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