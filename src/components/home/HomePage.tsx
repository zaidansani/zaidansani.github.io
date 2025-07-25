import LogoSVGComponent from "@/assets/logo.svg?react";
import { TypingText } from "@/components/animate-ui/text/typing";
import { Button } from "@/components/ui/button";
import {
    IconAppWindowFilled,
    IconBrandGithubFilled,
    IconBrandLinkedinFilled,
    IconFileCvFilled,
} from "@tabler/icons-react";

interface HomepageProps {
    buttonStyle: string;
}

const Homepage = ({ buttonStyle = "" }: HomepageProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen max-w-4xl mx-auto p-4">
            {" "}
            <LogoSVGComponent
                className="w-md"
                role="img"
                aria-label="zaidan sani"
            />
            <div className="text-center p-4">
                {" "}
                <TypingText
                    text="final year compsci undergraduate"
                    className="p-6 text-xl/6 font-bold font-serif tracking-tighter whitespace-nowrap" // Add whitespace-nowrap
                />
                <br />
                <TypingText
                    text="@ the national university of singapore"
                    className="p-6 text-xl/6 font-bold font-serif tracking-tighter whitespace-nowrap" // Add whitespace-nowrap
                    delay={1500}
                />
            </div>
            <div className="flex items-center gap-4 motion-preset-fade motion-duration-1000">
                <Button
                    className={`size-1/4 ${buttonStyle}`}
                    asChild
                >
                    <a
                        href="https://github.com/zaidansani"
                        target="_blank"
                    >
                        <IconBrandGithubFilled /> GitHub
                    </a>
                </Button>

                <Button
                    className={`size-1/4 ${buttonStyle}`}
                    asChild
                >
                    <a
                        href="/CV.pdf"
                        target="_blank"
                    >
                        <IconFileCvFilled /> CV
                    </a>
                </Button>

                <Button
                    className={`size-1/4 ${buttonStyle}`}
                    asChild
                >
                    <a
                        href="https://linkedin.com/in/mzaidanbsani"
                        target="_blank"
                    >
                        <IconBrandLinkedinFilled /> LinkedIn
                    </a>
                </Button>

                <Button
                    className={`size-1/4 ${buttonStyle}`}
                    asChild
                >
                    <a
                        href="https://zaidansani.github.io/thevault"
                        target="_blank"
                    >
                        <IconAppWindowFilled /> Vault
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default Homepage;
