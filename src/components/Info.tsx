import TemplateTab from "@/components/TemplateTab";
import { Strong } from "./Utilities";

export default function MainTitle() {
    return (
        <TemplateTab tabName="info">
            <h1 className="bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-transparent text-xl sm:text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl leading-[0.8] font-stretch-extra-expanded tracking-tighter mb-2">
                about me!
            </h1>
            <div className="flex flex-col gap-2 justify-start overflow-y-auto tracking-wide font-stretch-expanded font-light min-h-0 flex-1 text-xs sm:text-sm md:text-md lg:text-lg leading-[1.2em]">
                <p>
                    i'm a 24 year old with a educational background within{" "}
                    <Strong>computer science</Strong> spanning{" "}
                    <Strong>cybersecurity</Strong>,{" "}
                    <Strong>software engineering</Strong>, and hopefully in the
                    future <Strong>artificial intelligence</Strong>.
                </p>
                <p>
                    i like building stuff, specifically small little
                    personalised knickknacks that make my life marginally
                    easier, and i generally pick up skillsets around that.
                </p>
                <p>
                    outside the professional capacity, you'll find me either
                    making music/doing covers, watching and playing football or
                    fps esports or just enjoying a good show!
                </p>
            </div>
        </TemplateTab>
    );
}
