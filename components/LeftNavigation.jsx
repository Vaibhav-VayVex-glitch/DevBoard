
function LeftPanel(){


    return(
        <>
            <div className="logoName">DevBoard</div>

            <div className="pages">
                <button class="pageCategory" id="Dashboard">Dashboard</button>
                <button class="pageCategory" id="Career">Career</button>
                <button class="pageCategory" id="DSATracker">DSA Tracker</button>
                <button class="pageCategory" id="Learning">Learning</button>
                <button class="pageCategory" id="Projects">Projects</button>
                <button class="pageCategory" id="Notes">Notes</button>
                <button class="pageCategory" id="Goals">Goals</button>
                <button class="pageCategory" id="Analytics">Analytics</button>
                <button class="pageCategory" id="Settings">Settings</button>
            </div>

            <div className="userName">
                <p>Alex Johnson</p>
                <small>Full Stack Developer</small>
            </div>

        </>
    )
}

export default LeftPanel;