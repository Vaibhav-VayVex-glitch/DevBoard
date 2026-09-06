import ReactDOM from 'react-dom/client';
import LeftPanel from './DefaultComponents/LeftNavigation';
import RightPanel from './DefaultComponents/RightPanel';
import { createContext, useContext, useState } from 'react';


import './StyleFiles/LeftNavigation.css';
import './StyleFiles/rightPanel.css';
import './StyleFiles/dashboard.css';
import './StyleFiles/careerTracker.css';
import './StyleFiles/DsaTracker.css';
import './StyleFiles/learning.css';
import './StyleFiles/project.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './DashBoardComponents/DashBoard';
import CareerTracker from './CareerTrackerComponents/CareerTracker';
import Learning from './LearningComponents/Learning';
import Project from './ProjectsPageComponents/Project';
import DsaTracker from './DSATracker/DsaTracker';


const root= ReactDOM.createRoot( document.querySelector('.entireProject') );

    const router= createBrowserRouter(
        [
            {
                path:'/',
                element:(
                    <>
                    <LeftPanel/>
                    <RightPanel/>,
                    </>
                ),
                children:[
                    {
                        index:true,
                        element:<DashBoard/>
                    },
                    {
                        path:'/Career',
                        element:<CareerTracker/>
                    },
                    {
                        path:'/Learning',
                        element:<Learning/>
                    },
                    {
                        path:'/Projects',
                        element:<Project/>
                    },
                    {
                        path:'/DsaTracker',
                        element:<DsaTracker/>
                    },
                ]
            }
        ]
    )

 export const ApplicationsContext= createContext(null);
 export const problemDifficultyContext= createContext(null);
 export const ProjectsContext= createContext(null);
 export const LearningContext= createContext(null);

function MainComponent(){

    const [ApplicationsArr,updateApplications]= useState([
                {
            company: "Vercel",
            role: "Software Engineer",
            status: "Interview",
            applied: "Sep 2, 2026",
            location: "Remote",
            source: "LinkedIn",
            salary: "$140k-$170k",
            link: "https://vercel.com/careers",
            notes: "Technical interview scheduled for next week."
        },
        {
            company: "Microsoft",
            role: "Software Engineer Intern",
            status: "Assessment",
            applied: "Sep 4, 2026",
            location: "Hyderabad",
            source: "College Portal",
            salary: "₹60k/month",
            link: "https://careers.microsoft.com",
            notes: "Online assessment pending."
        },
        {
            company: "Google",
            role: "Frontend Developer",
            status: "Applied",
            applied: "Sep 6, 2026",
            location: "Bangalore",
            source: "Company Website",
            salary: "₹18-25 LPA",
            link: "https://careers.google.com",
            notes: "Application submitted successfully."
        }
    ]);

    const [problemDifficultyArr,updateproblemDifficultyArr]=useState(
        [
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
    )

    const [LearningObj,updateLearningObj]=useState(
        {
            "Neetcode 150":{
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

            "Designing Data-Intensive Applications":{
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

            "TypeScript Handbook":{
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

            "The Complete React Developer":{
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

            "System Design Primer":{
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

            "The Pragmatic Programmer":{
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
        }
    );

    const [projectsObj,updateProjectsObj]=useState(
        {
            DevBoard:{
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

            CodeFlow:{
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

            'HireTrack API':{
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

            AlgoViz:{
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

            PromptVault:{
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

            PeerReview:{
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
        }
    );


    return (
        <LearningContext.Provider value={[LearningObj,updateLearningObj]}>
        <ProjectsContext.Provider value={[projectsObj,updateProjectsObj]}>
        <problemDifficultyContext.Provider value={[problemDifficultyArr,updateproblemDifficultyArr]}>
        <ApplicationsContext.Provider value={[ApplicationsArr,updateApplications]}>
        <RouterProvider router={router}/>
        </ApplicationsContext.Provider>
        </problemDifficultyContext.Provider>
        </ProjectsContext.Provider>
        </LearningContext.Provider>
    )
}



root.render(
        <MainComponent/>
    )
;


