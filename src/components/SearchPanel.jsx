
function SearchPanel(){

    return (

        <div className="searchpanel">

            <div className="searcBar">
                <span>Q</span>
                <input type="text" placeholder="Search Anything"/>
            </div>

            <div className="notfication_and_dark_toggle">
                <span className="notifications">O</span>
                <span className="dark_bright_toggle">O</span>
            </div>


        </div>


    );
}

export default SearchPanel;