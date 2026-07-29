import ProjectCard from "./ProjectCard";

const projectOverviewArr=[
    {
        value:2,
        status:'planning'
    },
    {
        value:2,
        status:'planning'
    },
    {
        value:2,
        status:'planning'
    },
    {
        value:2,
        status:'planning'
    }
]

const projects = [
  {
    title: "DevBoard",
    status: "In Progress",
    description:
      "Full-stack developer productivity platform with job tracking, DSA practice, notes, and analytics.",
    techStack: ["React", "TypeScript", "Tailwind", "Supabase"],
    milestones: [
      "UI Design",
      "React Components",
      "Routing",
      "State Management",
      "Backend API",
      "Authentication",
      "Database",
      "Deployment",
    ],
    completedMilestones: 4,
    totalMilestones: 8,
    updatedOn: "Jan 21, 2024",
    github: "https://github.com/",
    demo: "https://example.com"
  },

  {
    title: "CodeFlow",
    status: "Planning",
    description:
      "Real-time collaborative code editor with AI assistance, live preview, and multi-language support.",
    techStack: ["Next.js", "TypeScript", "Redis", "Go"],
    milestones: [
      "UI Design",
      "React Components",
      "Routing",
      "Backend API",
      "Authentication",
      "Database",
      "Testing",
      "Deployment",
    ],
    completedMilestones: 1,
    totalMilestones: 8,
    updatedOn: "Jan 18, 2024",
    github: "https://github.com/",
    demo: ""
  },

  {
    title: "HireTrack API",
    status: "Deployed",
    description:
      "Comprehensive REST API for job application tracking with analytics and AI-powered insights.",
    techStack: ["Node", "TypeScript", "PostgreSQL", "Docker"],
    milestones: [
      "Backend API",
      "Authentication",
      "Database",
      "Testing",
      "Documentation",
      "Deployment",
    ],
    completedMilestones: 6,
    totalMilestones: 6,
    updatedOn: "Jan 10, 2024",
    github: "https://github.com/",
    demo: "https://example.com"
  },

  {
    title: "AlgoViz",
    status: "In Progress",
    description:
      "Interactive algorithm visualization platform for learning data structures and algorithms.",
    techStack: ["JavaScript", "Canvas", "CSS"],
    milestones: [
      "UI",
      "Sorting",
      "Graphs",
      "Trees",
      "Deployment",
    ],
    completedMilestones: 2,
    totalMilestones: 5,
    updatedOn: "Jan 7, 2024",
    github: "https://github.com/",
    demo: ""
  },

  {
    title: "PromptVault",
    status: "Completed",
    description:
      "Organize, test and version AI prompts with folders, tags and search.",
    techStack: ["React", "Node", "MongoDB"],
    milestones: [
      "UI",
      "CRUD",
      "Authentication",
      "Search",
      "Deployment",
    ],
    completedMilestones: 5,
    totalMilestones: 5,
    updatedOn: "Jan 2, 2024",
    github: "https://github.com/",
    demo: "https://example.com"
  },

  {
    title: "PeerReview",
    status: "Planning",
    description:
      "Code review platform with inline comments, AI suggestions and pull request workflow.",
    techStack: ["React", "Express", "MongoDB"],
    milestones: [
      "UI",
      "Authentication",
      "Comments",
      "AI Review",
      "Deployment",
    ],
    completedMilestones: 0,
    totalMilestones: 5,
    updatedOn: "Not Started",
    github: "https://github.com/",
    demo: ""
  },
];


const status=['All','Planning','In Progress','Completed','Deployed'];

function Project(){

    return(

        <div className="projectPage">

            <div className="Phead">

                <div className="Ptitle">
                    <p>Projects</p>
                    <p><span className="totalProjects">6</span>projects · milestone-driven progress</p>
                </div>

                <button>Add Project</button>
            </div>

            <div className="overviewLane">
                {
                    projectOverviewArr.map((obj)=>{
                        return(
                            <div className="overviewCard">
                                <p>{obj.value}</p>
                                <small>{obj.status}</small>
                            </div>
                        )
                    })
                }
            </div>

            <div className="statusSelectLane">
                {
                    status.map((val)=> <button>{val}</button>)
                }
            </div>

            <div className="projectCardsPanel">
                {
                    projects.map((obj)=><ProjectCard
                    title={obj.title}
                    status={obj.status}
                    description={obj.description}
                    techStack={obj.techStack}
                    milestones={obj.milestones}
                    completedMilestones={obj.completedMilestones}
                    totalMilestones={obj.totalMilestones}
                    updatedOn={obj.updatedOn}
                    github={obj.github}
                    demo={obj.demo}
                    />)
                }
            </div>

        </div>

    )

}

export default Project;