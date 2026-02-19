import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Info from "@/components/Info";
import MainTitle from "@/components/MainTitle";
import Projects from "@/components/Projects";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    BriefcaseIcon,
    FolderDotIcon,
    HomeIcon,
    InfoIcon,
    SchoolIcon,
} from "lucide-react";
import { useState } from "react";

export function App() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
            <Card className="h-[75vh] w-[75vw] p-4 sm:p-6 md:p-8 xl:p-12 2xl:p-16 bg-white flex justify-bottom">
                <Tabs
                    defaultValue="home"
                    className="h-full flex flex-col"
                    onValueChange={setActiveTab}
                >
                    <MainTitle />
                    <Info />
                    <Education key={`education-${activeTab}`} />
                    <Experience key={`experience-${activeTab}`} />
                    <Projects key={`projects-${activeTab}`} />
                    <TabsList className="mt-2 grid w-full grid-cols-5 shrink-0 bg-gray-50 2xl:h-20 [&_svg]:2xl:size-8">
                        <TabsTrigger value="home">
                            <HomeIcon />
                        </TabsTrigger>
                        <TabsTrigger value="info">
                            <InfoIcon />
                        </TabsTrigger>
                        <TabsTrigger value="education">
                            <SchoolIcon />
                        </TabsTrigger>
                        <TabsTrigger value="experience">
                            <BriefcaseIcon />
                        </TabsTrigger>
                        <TabsTrigger value="projects">
                            <FolderDotIcon />
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </Card>
        </div>
    );
}

export default App;
