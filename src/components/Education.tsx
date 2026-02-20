import CardTab from "@/components/CardTab";
import type { CardTabEntry } from "@/components/CardTab";

const entries: CardTabEntry[] = [
    {
        title: "Bachelors in Computing",
        subtitle: "Computer Science",
        institution: "National University of Singapore",
        period: "Aug 23 - Aug 26",
        children: (
            <div className="flex flex-col gap-2">
                <div>
                    <p className="font-medium text-sm">GPA: 4.81/4</p>
                    <p className="text-xs">
                        (on track for Honours (Highest Distinction)
                    </p>
                </div>
                <div>
                    <p className="font-light text-sm">Achievements</p>
                    <ul className="font-light text-xs list-disc pl-4">
                        <li>Honour List of Student Tutors (2024-2025)</li>
                        <li>Best Project (STEPS' 2025) for GraphRAG</li>
                    </ul>
                </div>
                <div>
                    <p className="font-light text-sm">Coursework</p>
                    <ul className="font-light text-xs list-disc pl-4">
                        <li>
                            Designed and created a machine learning
                            visualisation web application as a learning
                            companion for beginners.
                        </li>
                        <li>
                            Designed a GraphRAG system using automated ontology
                            derivation
                        </li>
                        <li>
                            Designed and created a multimodal system to teach
                            mathematics, with a focus on Human Computer
                            Interaction.
                        </li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Diploma with Merit",
        subtitle: "Information Security and Forensics",
        institution: "Ngee Ann Polytechnic",
        period: "Apr 18 - Apr 21",
        children: (
            <div className="flex flex-col gap-2">
                <p className="font-medium text-sm">GPA: 3.99/4</p>
                <div>
                    <p className="font-light text-sm">Achievements</p>
                    <ul className="font-light text-xs list-disc pl-4">
                        <li>Valedictorian for the academic year 2021/22</li>
                        <li>
                            Silver Medalist for second most outstanding
                            performance
                        </li>
                        <li>A*STAR Science Award recipient</li>
                    </ul>
                </div>
                <div>
                    <p className="font-light text-sm">Coursework</p>
                    <ul className="font-light text-xs list-disc pl-4">
                        <li>
                            Designed a SIEM for SOHO using Splunk for Capstone
                        </li>
                        <li>
                            Analysed malware using static and dynamic analysis
                        </li>
                    </ul>
                </div>
            </div>
        ),
    },
];

export default function Education({ activeTab }: { activeTab?: string }) {
    return (
        <CardTab tabName="education" heading="education" entries={entries} activeTab={activeTab} />
    );
}
