import TemplateTab from "@/components/TemplateTab";
import { Link } from "@/components/Utilities";

export default function MainTitle() {
    return (
        <TemplateTab tabName="home">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 xl:gap-10 mb-4 md:mb-8 2xl:mb-12">
                <div className="relative size-24 md:size-32 lg:size-40 2xl:size-56 shrink-0">
                    <img
                        src="zaidan.png"
                        alt="zaidan"
                        className="size-full rounded-full object-cover"
                    />
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl leading-[0.8] font-stretch-ultra-expanded tracking-tightest font-bold bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-transparent text-center md:text-left">
                    ZAIDAN
                    <br />
                    SANI
                </h1>
            </div>
            <p className="font-stretch-expanded tracking-wider font-light text-xs md:text-sm lg:text-base 2xl:text-lg leading-none text-center md:text-left">
                aspiring software engineer; final year compsci undergraduate @
                nus. <br />
                <Link href="https://zaidansani.github.io/thevault">
                    nus notes
                </Link>{" "}
                //{" "}
                <Link href="https://github.com/zaidansani/helpsheets">
                    helpsheet repo
                </Link>
            </p>
        </TemplateTab>
    );
}
