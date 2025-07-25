import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ExperiencePageProps {
    highlightStyle: string;
}

const ExperiencePage = ({ highlightStyle }: ExperiencePageProps) => {
    const cardStyle: string =
        "w-7/10 mt-5 my-5 bg-gradient-to-r from-slate-50/50 to-slate-100/75";
    const highlight: string = "font-medium " + highlightStyle;
    return (
        <div className="flex-col justify-items-center w-full gap-10 text-sm/4">
            <h1
                className={`text-xl font-extrabold whitespace-nowrap text-left`}
            >
                Experience
            </h1>
            <Card className={cardStyle}>
                <CardHeader className="w-full">
                    <div className="w-full flex justify-between items-end">
                        <CardTitle
                            className={`text-xl font-medium whitespace-nowrap`}
                        >
                            Teaching Assistant
                        </CardTitle>
                        <CardTitle
                            className={`text-lg font-medium whitespace-nowrap`}
                        >
                            National University of Singapore
                        </CardTitle>
                    </div>
                    <div className="w-full flex justify-between items-start">
                        <CardDescription
                            className={`text-sm/4 font-medium whitespace-nowrap`}
                        >
                            CS2030S: Programming Methodology II
                        </CardDescription>
                        <CardDescription
                            className={`text-xs/4 font-medium whitespace-nowrap`}
                        >
                            Jan 25 - May 25
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    Taught 24 students (alongside another TA) fundamental OOP
                    and FP concepts in Java, attaining a{" "}
                    <span className={highlight}>4.7/5</span> feedback score
                    (faculty average 4.2).
                </CardContent>
            </Card>
            <Card className={cardStyle}>
                <CardHeader className="w-full">
                    <div className="w-full flex flex-wrap justify-between items-end">
                        <CardTitle
                            className={`text-xl font-medium whitespace-nowrap`}
                        >
                            Teaching Assistant
                        </CardTitle>
                        <CardTitle
                            className={`text-lg font-medium whitespace-nowrap`}
                        >
                            National University of Singapore
                        </CardTitle>
                    </div>
                    <div className="w-full flex flex-wrap justify-between items-start">
                        <CardDescription
                            className={`text-sm/4 font-medium whitespace-nowrap`}
                        >
                            CS1101S: Programming Methodology II
                        </CardDescription>
                        <CardDescription
                            className={`text-xs/4 font-medium whitespace-nowrap`}
                        >
                            Aug 24 - Dec 24
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    Taught 7 students fundamental FP, using SICP JS and Source
                    Academy, attaining a{" "}
                    <span className={highlight}>4.8/5</span> feedback score
                    (faculty average 4.3).
                </CardContent>
            </Card>
            <Card className={cardStyle}>
                <CardHeader className="w-full">
                    <div className="w-full flex flex-wrap justify-between items-end">
                        <CardTitle
                            className={`text-xl font-medium whitespace-nowrap`}
                        >
                            Student Researcher
                        </CardTitle>
                        <CardTitle
                            className={`text-lg font-medium whitespace-nowrap`}
                        >
                            Institute for InfoComm Research
                        </CardTitle>
                    </div>
                    <div className="w-full flex flex-wrap justify-between items-start">
                        <CardDescription
                            className={`text-sm/4 font-medium whitespace-nowrap`}
                        >
                            Cybersecurity Department
                        </CardDescription>
                        <CardDescription
                            className={`text-xs/4 font-medium whitespace-nowrap`}
                        >
                            Sep 20 - Feb 21
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    Participated in a research project with regards to Malware
                    Analysis, contributing with feature engineering as well as
                    machine learning, attaining a Distinction grade from Ngee
                    Ann Polytechnic.
                </CardContent>
            </Card>
        </div>
    );
};

export default ExperiencePage;
