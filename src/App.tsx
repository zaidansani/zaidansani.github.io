import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Info from "@/components/Info";
import MainTitle from "@/components/MainTitle";
import Projects from "@/components/Projects";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    BriefcaseIcon,
    FolderDotIcon,
    HomeIcon,
    InfoIcon,
    SchoolIcon,
} from "lucide-react";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

export function App() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
                <Card className="h-[75vh] w-[75vw] p-4 sm:p-6 xl:p-8 bg-white flex justify-bottom">
                    <Tabs
                        defaultValue="home"
                        className="h-full flex flex-col"
                        onValueChange={setActiveTab}
                    >
                        <MainTitle />
                        <Info />
                        <Education activeTab={activeTab} />
                        <Experience activeTab={activeTab} />
                        <Projects activeTab={activeTab} />
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
                <Card className="h-[5vh] w-[75vw] bg-white flex justify-center items-center">
                    <CardContent className="flex flex-row items-center gap-2 font-light italic text-xs font-stretch-expanded tracking-wider">
                        <span className="">
                            designed by{" "}
                            <a
                                className="hover:underline bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-transparent"
                                href="https://github.com/zaidansani"
                                target="_blank"
                            >
                                @zaidansani
                            </a>
                        </span>
                        <div className="flex flex-row gap-2 items-center">
                            <SocialIcon
                                url="https://linkedin.com/in/mzaidanbsani"
                                bgColor="#222222"
                                style={{ height: "1.5em", width: "1.5em" }}
                            />
                            <SocialIcon
                                url="https://github.com/zaidansani"
                                bgColor="#222222"
                                style={{ height: "1.5em", width: "1.5em" }}
                            />
                        </div>
                        <span className="hidden md:inline">
                            inspired and using{" "}
                            <a
                                className="hover:underline"
                                href="https://neobrutalism.dev"
                                target="_blank"
                            >
                                neobrutalism
                            </a>{" "}
                            components
                        </span>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default App;
