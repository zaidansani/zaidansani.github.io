import { TabsContent } from "@/components/ui/tabs";
import type { ReactNode } from "react";

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
    return (
        <TabsContent
            value={tabName}
            className={`flex-1 flex flex-col overflow-hidden justify-center ${className}`}
        >
            {children}
        </TabsContent>
    );
}
