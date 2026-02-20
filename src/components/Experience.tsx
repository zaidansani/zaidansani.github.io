import type { CardTabEntry } from "@/components/CardTab";
import CardTab from "@/components/CardTab";
import { UnorderedList } from "@/components/Utilities";

const entries: CardTabEntry[] = [
    {
        title: "Data Analyst Intern",
        institution: "Centre for Strategic InfoComm Technologies",
        period: "May 25 - Aug 25",
        tags: [
            {
                name: "InspectAI",
                category: { name: "data", type: "technology" },
            },
            {
                name: "LLM evaluation",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
        ],
        children: (
            <div className="flex flex-col gap-2">
                <div className="text-sm font-light">
                    Implemented LLM and RAG pipelines with a focus on exploring
                    ways to optimise and evaluate inference and extraction
                    tasks.
                </div>
            </div>
        ),
    },
    {
        title: "Student Researcher",
        subtitle: "Cybersecurity",
        institution: "A*STAR Institute for InfoComm Research",
        period: "Sep 20 - Feb 21",
        tags: [
            {
                name: "Malware Analysis",
                category: { name: "security", type: "skill" },
            },
            {
                name: "Ghidra",
                category: {
                    name: "security",
                    type: "technology",
                },
            },
            {
                name: "Machine Learning",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
        ],
        children: (
            <div className="flex flex-col gap-2">
                <div className="text-sm font-light">
                    Participated in a research project under the Cybersecurity
                    department with regards to malware analysis, receiving a
                    Distinction grade from the school for the work done. The
                    project combined domain knowledge of malware with the use of
                    machine learning and data analytics. My work led to
                    significant improvement in the accuracy score of the model,
                    raising the overall accuracy score by 2% at the end of the
                    project, with comparable or better results to other models
                    published in research papers.
                </div>
            </div>
        ),
    },
    {
        title: "Teaching Assistant",
        subtitle: "CS1101S/CS2030S",
        institution: "National University of Singapore",
        period: "Aug 24 - Apr 26",
        tags: [
            {
                name: "OOP",
                category: {
                    name: "swe",
                    type: "skill",
                },
            },
            {
                name: "FP",
                category: {
                    name: "swe",
                    type: "skill",
                },
            },
            {
                name: "Java",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "Source (JS derivative)",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "Teaching",
                category: {
                    type: "skill",
                },
            },
        ],
        children: (
            <div className="flex flex-col gap-2">
                <div className="text-sm">
                    Honour List of Student Tutors for 2024-2025
                </div>
                <div className="text-sm font-light">
                    <UnorderedList>
                        <li>CS1101S: Programming Methodology</li>
                        <li>CS2030S: Programming Methodology II</li>
                    </UnorderedList>
                </div>
                <div className="text-sm font-light">
                    Planned and executed tutorial/laboratory sessions for up to
                    12 students (alone) and 24 students (with a fellow TA)
                </div>
            </div>
        ),
    },
];

export default function Experience({ activeTab }: { activeTab?: string }) {
    return (
        <CardTab
            tabName="experience"
            heading="experience"
            entries={entries}
            activeTab={activeTab}
        />
    );
}
