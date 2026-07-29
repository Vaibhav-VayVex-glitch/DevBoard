import ProgressCard from "./ProgressCard";

const progressArr=[
    {
        value:'3',
        subtitle:'In progress'
    },
    {
        value:'3',
        subtitle:'In progress'
    },
    {
        value:'3',
        subtitle:'In progress'
    },
    {
        value:'3',
        subtitle:'In progress'
    }
]

const learningResources = [
  {
    title: "Neetcode 150",
    progress: "In Progress",
    tag: "YouTube",
    description:
      "Structured playlist covering the most important 150 LeetCode problems by pattern.",
    modulesDone: 8,
    totalModules: 15,
    startDate: "Studied Jan 21, 2024",
    link: "https://www.youtube.com/@NeetCode",
    note: "Focus on DP and Graphs next."
  },

  {
    title: "Designing Data-Intensive Applications",
    progress: "Completed",
    tag: "Book",
    description:
      "The definitive guide to distributed systems, storage engines, and scalable architectures.",
    modulesDone: 12,
    totalModules: 12,
    startDate: "Studied Jan 18, 2024",
    link: "https://dataintensive.net/",
    note: "Annotated chapters 8–11."
  },

  {
    title: "TypeScript Handbook",
    progress: "In Progress",
    tag: "Documentation",
    description:
      "Official TypeScript documentation covering types, generics, utility types, and advanced concepts.",
    modulesDone: 3,
    totalModules: 8,
    startDate: "Studied Jan 19, 2024",
    link: "https://www.typescriptlang.org/docs/",
    note: "Revise utility types."
  },

  {
    title: "The Complete React Developer",
    progress: "Not Started",
    tag: "Udemy",
    description:
      "Deep dive into React 18+, hooks, routing, state management, and production-ready projects.",
    modulesDone: 0,
    totalModules: 24,
    startDate: "Not Started",
    link: "https://www.udemy.com/",
    note: "Start after finishing JavaScript revision."
  },

  {
    title: "System Design Primer",
    progress: "In Progress",
    tag: "Documentation",
    description:
      "Learn how to design scalable systems with practical interview-focused examples.",
    modulesDone: 5,
    totalModules: 10,
    startDate: "Studied Jan 16, 2024",
    link: "https://github.com/donnemartin/system-design-primer",
    note: "Complete Load Balancer and Caching chapters."
  },

  {
    title: "The Pragmatic Programmer",
    progress: "Completed",
    tag: "Book",
    description:
      "Timeless software craftsmanship principles for becoming a better developer.",
    modulesDone: 10,
    totalModules: 10,
    startDate: "Studied Jan 10, 2024",
    link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
    note: "Revisit DRY and Orthogonality."
  }
];


function Learning(){

return (

    <div className="learningPage">

        <div className="LPhead">

            <div className="learning">
                <p>Learning</p>
                <p>Track your courses and learning roadmap</p>
            </div>

            <button>Add Resource</button>

        </div>

        <div className="progressDisplayLane">

        {
            progressArr.map((obj)=>{
                return(
                    <div className="progressCard">
                        <p>{obj.value}</p>
                        <small>{obj.subtitle}</small>
                    </div>
                )
            }
        )
        }

        </div>

        <div className="categoryFilter">
            <button>All</button>
            <button>In Progress</button>
            <button>Not Started</button>
            <button>Completed</button>
        </div>

        <div className="learningDisplay">

        {
            learningResources.map(
                (obj)=> <ProgressCard title={obj.title} progress={obj.progress} tag={obj.tag} description={obj.description} modulesDone={obj.modulesDone} totalModules={obj.totalModules} startDate={obj.startDate} link={obj.link} note={obj.note}   />
            )
        }


        </div>


    </div>

)

}

export default Learning;