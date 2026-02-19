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

export function App() {
    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
            <Card className="h-30/40 w-30/40 p-4 sm:p-6 md:p-8 bg-white flex justify-bottom">
                <Tabs
                    defaultValue="home"
                    className="h-full flex flex-col"
                >
                    <MainTitle />
                    <Info />
                    <Education />
                    <Experience />
                    <Projects />
                    <TabsList className="mt-2 grid w-full grid-cols-5 shrink-0 bg-gray-50">
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
