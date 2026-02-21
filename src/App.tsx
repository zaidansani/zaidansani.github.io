import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Info from "@/components/Info";
import MainTitle from "@/components/MainTitle";
import Projects from "@/components/Projects";
import WhoAmI from "@/components/WhoAmI";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@/components/Utilities";
import {
    BriefcaseIcon,
    FolderDotIcon,
    HomeIcon,
    InfoIcon,
    SchoolIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

export function App() {
    const [launched, setLaunched] = useState(false);
    const [visible, setVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("home");
    const tabs = ["education", "experience", "home", "info", "projects"];

    function handleComplete() {
        setLaunched(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setVisible(true));
        });
    }

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
            setActiveTab((current) => {
                const i = tabs.indexOf(current);
                if (e.key === "ArrowRight") return tabs[(i + 1) % tabs.length];
                return tabs[(i - 1 + tabs.length) % tabs.length];
            });
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    if (!launched) {
        return <WhoAmI onComplete={handleComplete} />;
    }

    return (
        <div
            className={`w-screen h-screen overflow-hidden flex justify-center items-center transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
        >
            <div className="flex flex-col items-center gap-2">
                <Card className="h-[75vh] w-[75vw] p-4 sm:p-6 xl:p-8 bg-white flex justify-bottom">
                    <Tabs
                        value={activeTab}
                        className="h-full flex flex-col"
                        onValueChange={setActiveTab}
                    >
                        <MainTitle />
                        <Info />
                        <Education activeTab={activeTab} />
                        <Experience activeTab={activeTab} />
                        <Projects activeTab={activeTab} />
                        <TabsList className="mt-2 grid w-full grid-cols-5 shrink-0 bg-gray-50 2xl:h-20 [&_svg]:2xl:size-8">
                            <TabsTrigger value="education">
                                <SchoolIcon />
                            </TabsTrigger>
                            <TabsTrigger value="experience">
                                <BriefcaseIcon />
                            </TabsTrigger>
                            <TabsTrigger value="home">
                                <HomeIcon />
                            </TabsTrigger>
                            <TabsTrigger value="info">
                                <InfoIcon />
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
                            <Link href="https://github.com/zaidansani">
                                @zaidansani
                            </Link>
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
                            <Link href="https://neobrutalism.dev">
                                neobrutalism
                            </Link>{" "}
                            components
                        </span>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default App;
