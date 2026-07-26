import PattternMeter from './PatternMeter';
import DifficultyMeter from './DifficultyMeter';
import PatternCard from './PatternCard';
import RevisionCard from './RevisionCard';

const dsaPatterns = [
  {
    key: crypto.randomUUID(),
    name: "Arrays & Hashing",
    solved: "34 / 40",
    percent: 85,
  },
  {
    key: crypto.randomUUID(),
    name: "Two Pointers",
    solved: "18 / 20",
    percent: 90,
  },
  {
    key: crypto.randomUUID(),
    name: "Sliding Window",
    solved: "14 / 16",
    percent: 88,
  },
  {
    key: crypto.randomUUID(),
    name: "Binary Search",
    solved: "19 / 24",
    percent: 79,
  },
  {
    key: crypto.randomUUID(),
    name: "Linked Lists",
    solved: "16 / 22",
    percent: 73,
  },
  {
    key: crypto.randomUUID(),
    name: "Stack / Queue",
    solved: "15 / 18",
    percent: 83,
  },
  {
    key: crypto.randomUUID(),
    name: "Trees & BST",
    solved: "28 / 39",
    percent: 72,
  },
  {
    key: crypto.randomUUID(),
    name: "Graphs & BFS/DFS",
    solved: "20 / 42",
    percent: 48,
  },
  {
    key: crypto.randomUUID(),
    name: "Dynamic Programming",
    solved: "24 / 44",
    percent: 55,
  },
  {
    key: crypto.randomUUID(),
    name: "Backtracking",
    solved: "12 / 18",
    percent: 67,
  },
  {
    key: crypto.randomUUID(),
    name: "Heaps & Priority Queue",
    solved: "10 / 16",
    percent: 63,
  },
  {
    key: crypto.randomUUID(),
    name: "Tries",
    solved: "8 / 12",
    percent: 67,
  },
];

const reviewProblems = [
  {
    key: crypto.randomUUID(),
    name: "Merge K Sorted Lists",
    category: "Heaps",
    difficulty: "Hard",
    day: "Today",
  },
  {
    key: crypto.randomUUID(),
    name: "Word Break II",
    category: "DP + Backtracking",
    difficulty: "Hard",
    day: "Tomorrow",
  },
  {
    key: crypto.randomUUID(),
    name: "LRU Cache",
    category: "Linked List",
    difficulty: "Medium",
    day: "Jan 23",
  },
  {
    key: crypto.randomUUID(),
    name: "Course Schedule II",
    category: "Graphs",
    difficulty: "Medium",
    day: "Jan 24",
  },
  {
    key: crypto.randomUUID(),
    name: "Coin Change",
    category: "DP",
    difficulty: "Medium",
    day: "Jan 25",
  },
];

function DsaTracker(){

    return(

        <div className="dsaTracker">

            <div className="DThead">

                <div className="DT">
                    <p>DSA Tracker</p>
                    <small>
                        <span className="problemsSolved">218/311</span>
                        Problems Solved
                    </small>
                </div>

                <div className="streak_rank">
                    <div className="streak">48 days streak</div>
                    <div className="rank">rank #4,821</div>
                </div>

            </div>

            <div className="problemMeters">
                <PattternMeter/>
                <DifficultyMeter/>
            </div>

            <div className="switchButtons">
                <button className='patterns'>All Patterns</button>
                <button className="revision">Revision Queue</button>
            </div>

            <div className="patternCardLane">
                {
                    dsaPatterns.map((obj)=> <PatternCard name={obj.name} solved={obj.solved} percent={obj.percent} key={obj.key}/>)
                }
            </div>

            {/* <div className="revisionQueueLane">

                 <div className="RQhead">
                    <div className="RQ">Spaced Repetition Schedule</div>
                    <span className="due">5 due</span>
                </div>

                <div className="RQcards">

                    {
                        reviewProblems.map((obj)=> <RevisionCard name={obj.name} category={obj.category} difficulty={obj.difficulty} day={obj.day} key={obj.key} />)
                    }

                </div>

            </div> */}

        </div>


    )

}

export default DsaTracker;