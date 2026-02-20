import TemplateTab from "@/components/TemplateTab";
import { Link } from "@/components/Utilities";

export default function MainTitle() {
    return (
        <TemplateTab tabName="home">
            <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-4 2xl:gap-8 mb-4 sm:mb-6 md:mb-8 2xl:mb-12">
                <div className="relative size-12 sm:size-32 md:size-40 lg:size-48 2xl:size-72 shrink-0">
                    <img
                        src="zaidan.png"
                        alt="zaidan"
                        className="size-full rounded-full object-cover"
                    />
                </div>
                <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[10rem] font-stretch-ultra-expanded tracking-tightest font-bold bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-transparent">
                    ZAIDAN
                    <br />
                    SANI
                </h1>
            </div>
            <p className="font-stretch-expanded tracking-wider font-light text-xs sm:text-sm md:text-md lg:text-lg 2xl:text-2xl leading-none">
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
