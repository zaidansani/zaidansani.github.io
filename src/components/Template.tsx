import type React from "react";

interface TemplateProps {
    children: React.ReactNode;
    style: string;
}

const Template = ({ children, style }: TemplateProps) => {
    return (
        <main
            className={`flex items-center justify-center h-screen p-4
                       snap-start ${style}`}
        >
            {children}
        </main>
    );
};

export default Template;
