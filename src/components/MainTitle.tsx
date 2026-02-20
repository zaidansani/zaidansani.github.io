import TemplateTab from "@/components/TemplateTab";

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
                <h1 className="text-3xl/8 sm:text-6xl/16 md:text-7xl/20 lg:text-8xl/24 2xl:text-[10rem]/[10rem] font-stretch-ultra-expanded tracking-tighter bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-transparent">
                    ZAIDAN
                    <br />
                    SANI
                </h1>
            </div>
            <p className="font-stretch-expanded tracking-loose font-light text-xs/4 sm:text-sm/4 md:text-md/4 lg:text-lg/4 2xl:text-2xl/8">
                aspiring software engineer; final year compsci undergraduate @
                nus
            </p>
        </TemplateTab>
    );
}
