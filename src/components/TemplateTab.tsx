import { TabsContent } from "@/components/ui/tabs";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface TemplateTabProps {
    tabName: string;
    children?: ReactNode;
    className?: string;
}

export default function TemplateTab({
    tabName,
    className,
    children,
}: TemplateTabProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(false);
        const t = requestAnimationFrame(() => {
            requestAnimationFrame(() => setVisible(true));
        });
        return () => cancelAnimationFrame(t);
    }, [tabName]);

    return (
        <TabsContent
            value={tabName}
            className={`flex-1 flex flex-col overflow-hidden justify-center ${className}`}
        >
            <div
                className={`flex-1 flex flex-col overflow-hidden justify-center transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
            >
                {children}
            </div>
        </TabsContent>
    );
}
