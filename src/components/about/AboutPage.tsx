import { TypingText } from "@/components/animate-ui/text/typing";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface AboutPageProps {
    highlightStyle: string;
}

export default function AboutPage({ highlightStyle }: AboutPageProps) {
    const highlight: string = "font-medium " + highlightStyle;
    return (
        <div className="p-6 mt-10 my-10 w-7/10 text-base/4">
            <div className="flex items-center gap-10">
                <Avatar className="size-1/10">
                    <AvatarImage src="/profile.jpeg" />
                </Avatar>{" "}
                <TypingText
                    text={"hi, i'm zaidan!"}
                    className={`text-xl font-extrabold whitespace-nowrap ${highlightStyle}`}
                    inViewOnce={false}
                />
            </div>

            <p className="my-5">
                i'm a <span className={highlight}>compsci undergrad</span> with
                a <span className={highlight}>cybersecurity diploma</span>. my
                interests generally tend towards{" "}
                <span className={highlight}>software engineering</span> and{" "}
                <span className={highlight}>data analytics</span>.
            </p>
            <p className="my-5">
                i have research experience, interning at{" "}
                <span className={highlight}>
                    A*STAR's Institute of InfoComm Research{" "}
                </span>{" "}
                back in 2021, and in my time at NUS CS, i've taught 2
                programming modules (CS1101S, CS2030S) as a{" "}
                <span className={highlight}>teaching assistant.</span>
            </p>
            <p className="my-5">
                outside of my time in school, i like to do easy covers (aka
                songs with 4 chords) and watch FPS esports! unfortunately, i am
                also a manchester united supporter.
            </p>
            <p>
                i haven't yet found my niche to hyper-fixate on yet, so i'm just
                going around to try different things to see what i enjoy and
                what i want to learn. i'd like to document all of these
                experiences, so i created a{" "}
                <span className={highlight}>digital garden</span> of the things
                i've learned that you can find{" "}
                <span className={highlight}>
                    {" "}
                    <a href="https://zaidansani.github.io/thevault">here!</a>
                </span>
            </p>
        </div>
    );
}
