import { Badge } from "@/components/ui/badge";
import { CodeIcon, ToolCaseIcon } from "lucide-react";
import type { ReactNode } from "react";

export function UnorderedList({ children }: { children: ReactNode }) {
    return <ul className="font-light text-xs list-disc pl-4">{children}</ul>;
}

export function OrderedList({ children }: { children: ReactNode }) {
    return <ol className="font-light text-xs list-decimal pl-4">{children}</ol>;
}

export function Strong({ children }: { children: ReactNode }) {
    return (
        <strong className="font-medium font-stretch-extra-expanded">
            {children}
        </strong>
    );
}

export function Link({
    href,
    children,
    target = "_blank",
}: {
    href: string;
    children: ReactNode;
    target?: string;
}) {
    return (
        <a
            href={href}
            className="hover:underline bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-transparent"
            target={target}
        >
            {children}
        </a>
    );
}

const tagColours: Record<string, string> = {
    data: "!bg-gradient-to-r from-red-100 to-amber-200",
    security: "!bg-gradient-to-r from-purple-100 to-pink-200",
    research: "!bg-gradient-to-r from-green-100 to-cyan-200",
    swe: "!bg-gradient-to-r from-sky-100 to-blue-200",
};

const tagIcons: Record<string, any> = {
    skill: <ToolCaseIcon />,
    technology: <CodeIcon />,
};

function getTagColour(category: TagCategory) {
    if (!category.name || tagColours[category.name] == undefined) {
        return "";
    }
    return tagColours[category.name];
}

function getTagIcon(category: TagCategory) {
    if (!category.type || tagIcons[category.type] == undefined) {
        return <></>;
    }
    return tagIcons[category.type];
}

interface TagCategory {
    name?: string;
    type?: string;
}

export interface TagEntry {
    name: string;
    category: TagCategory;
}

export function Tag(tag: TagEntry) {
    return (
        <Badge
            variant="neutral"
            className={getTagColour(tag.category)}
        >
            {getTagIcon(tag.category)}
            {tag.name}
        </Badge>
    );
}
