import TemplateTab from "@/components/TemplateTab";

export default function MainTitle() {
    return (
        <TemplateTab tabName="home">
            <h1 className="text-3xl/8 sm:text-6xl/16 md:text-7xl/20 lg:text-8xl/24 font-stretch-ultra-expanded tracking-tighter mb-4 sm:mb-6 md:mb-8 bg-gradient-to-br from-stone-800 to-stone-500 bg-clip-text text-transparent">
                ZAIDAN
                <br />
                SANI
            </h1>
            <p className="font-stretch-expanded tracking-loose font-light text-xs/4 sm:text-sm/4 md:text-md/4 lg:text-lg/4">
                aspiring software engineer; final year compsci undergraduate @
                nus
            </p>
        </TemplateTab>
    );
}
