import type { CardTabEntry } from "@/components/CardTab";
import CardTab from "@/components/CardTab";
import { Link, UnorderedList } from "@/components/Utilities";

const entries: CardTabEntry[] = [
    {
        title: "MLviz",
        subtitle: "Interactive machine learning visualisations for education",
        children: (
            <div className="flex flex-col gap-2">
                <div className="text-sm font-light">
                    Infusing interactive visualisations for machine learning
                    with narrative-driven stories and possible gamification to
                    help teach intuition behind algorithms. Final Year
                    Dissertation Project for my Bachelors at NUS.
                </div>
                <div>
                    <UnorderedList>
                        <li>
                            Focused on fundamental algorithms: Decision Tree,
                            Linear Models, SVM, KMeans, KNN
                        </li>
                        <li>
                            Gamification and narrative functionality to allow
                            utilisation as interactive "slides" for
                            self-learning or as a guide for teaching.
                        </li>
                    </UnorderedList>
                </div>
            </div>
        ),
        tags: [
            {
                name: "React",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "d3.js",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "FastAPI",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "GCP",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "Decision Tree",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
            {
                name: "K-Nearest Neighbours",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
            {
                name: "K-Means Clustering",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
            {
                name: "Linear Models",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
        ],
    },
    {
        title: "ScholarRAG",
        subtitle: "GraphRAG + automated ontology derivation for research",
        children: (
            <div className="flex flex-col gap-2">
                <div className="text-sm font-light">
                    Using LLMs to automatically derive ontologies of research
                    papers to generate a graph knowledge base for GraphRAG.
                    Inspired by{" "}
                    <Link href="https://arxiv.org/abs/2506.00664">OntoRAG</Link>
                </div>
                <div className="text-xs font-light">
                    Presented at the{" "}
                    <Link href="https://uvents.nus.edu.sg/event/26th-steps">
                        26th STEPS
                    </Link>
                    , winning Best Project for the Retrieval Augmented
                    Generation.
                </div>
            </div>
        ),
        tags: [
            {
                name: "GraphRAG",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
            {
                name: "FastAPI",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "Neo4J",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "Pydantic AI",
                category: {
                    name: "data",
                    type: "technology",
                },
            },
        ],
    },
    {
        title: "MathBuddy",
        subtitle:
            "Multimodal LLMs + Digital Whiteboard for Primary School Math education",
        children: (
            <div className="flex flex-col gap-2">
                <div className="text-sm font-light">
                    Multimodal (text, audio, drawing) system that allows
                    students to draw on a digital whiteboard, ask questions on
                    audio or on text.
                </div>
                <div>
                    Technical highlights:
                    <UnorderedList>
                        <li>
                            RAG on{" "}
                            <Link href="https://drawedumath.org/">
                                DrawEduMath
                            </Link>{" "}
                            (K-12 annotated working dataset)
                        </li>
                        <li>OCR using Tesseract</li>
                        <li>Shape Recognition using OpenCV</li>
                        <li>
                            Prompt Chaining using LangGraph, used for infusing
                            educational pedagogy like Cognitive Load Theory
                        </li>
                    </UnorderedList>
                </div>
            </div>
        ),
        tags: [
            {
                name: "RAG",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
            {
                name: "Multimodal LMs",
                category: {
                    name: "data",
                    type: "skill",
                },
            },
            {
                name: "React",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "FastAPI",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "Tesseract",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
            {
                name: "OpenCV",
                category: {
                    name: "swe",
                    type: "technology",
                },
            },
        ],
    },
];

export default function Projects({ activeTab }: { activeTab?: string }) {
    return (
        <CardTab
            tabName="projects"
            heading="projects"
            entries={entries}
            activeTab={activeTab}
        />
    );
}
