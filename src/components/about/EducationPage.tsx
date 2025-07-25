import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface EducationPageProps {
    highlightStyle: string;
}

const EducationPage = ({ highlightStyle }: EducationPageProps) => {
    const cardStyle: string =
        "w-7/10 mt-5 my-5 bg-gradient-to-r from-slate-50/50 to-slate-100/75";
    const highlight: string = "font-bold " + highlightStyle;
    return (
        <div className="flex-col justify-items-center w-full gap-10 text-sm/4">
            <h1
                className={`text-xl font-extrabold whitespace-nowrap text-left`}
            >
                Education
            </h1>
            <Card className={cardStyle}>
                <CardHeader className="w-full">
                    <div className="w-full flex justify-between items-end">
                        <CardTitle
                            className={`text-xl font-medium whitespace-nowrap`}
                        >
                            Bachelor in Computing (Computer Science)
                        </CardTitle>
                        <CardTitle
                            className={`text-lg font-medium whitespace-nowrap`}
                        >
                            4.8/5.0
                        </CardTitle>
                    </div>
                    <div className="w-full flex justify-between items-start">
                        <CardDescription
                            className={`text-sm/4 font-medium whitespace-nowrap`}
                        >
                            National University of Singapore
                        </CardDescription>
                        <CardDescription
                            className={`text-xs/4 font-medium whitespace-nowrap`}
                        >
                            Aug 23 - now
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>
                        Undertaking a focus area in{" "}
                        <span className={highlight}>Software Engineering</span>.
                    </p>
                </CardContent>
            </Card>
            <Card className={cardStyle}>
                <CardHeader className="w-full">
                    <div className="w-full flex justify-between items-end">
                        <CardTitle
                            className={`text-xl font-medium whitespace-nowrap`}
                        >
                            Diploma with Merit in Information Security and
                            Forensics
                        </CardTitle>
                        <CardTitle
                            className={`text-lg font-medium whitespace-nowrap`}
                        >
                            3.99/4.00
                        </CardTitle>
                    </div>
                    <div className="w-full flex justify-between items-start">
                        <CardDescription
                            className={`text-sm/4 font-medium whitespace-nowrap`}
                        >
                            Ngee Ann Polytechnic
                        </CardDescription>
                        <CardDescription
                            className={`text-xs/4 font-medium whitespace-nowrap`}
                        >
                            Apr 18 - Apr 21
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="my-2">
                        <span className={highlight}>Silver Medalist</span>, and{" "}
                        <span className={highlight}>Valedictorian</span> of
                        School of InfoComm Technology, Class of 2021.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default EducationPage;
