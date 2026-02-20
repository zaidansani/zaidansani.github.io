import TemplateTab from "@/components/TemplateTab";
import type { ReactNode } from "react";

function Strong({ children }: { children: ReactNode }) {
    return (
        <strong className="font-medium font-stretch-extra-expanded">
            {children}
        </strong>
    );
}

export default function MainTitle() {
    return (
        <TemplateTab tabName="info">
            <h1 className="text-xl/8 sm:text-2xl/16 md:text-4xl/20 lg:text-6xl/24 font-stretch-extra-expanded tracking-tighter bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-transparent">
                about me!
            </h1>
            <div className="flex flex-col gap-2 justify-start overflow-y-auto font-stretch-expanded font-light min-h-0 flex-1 text-xs sm:text-sm md:text-md lg:text-lg">
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
            </div>
        </TemplateTab>
    );
}
