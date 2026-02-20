"use client";

import TemplateTab from "@/components/TemplateTab";
import { Card, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export interface CardTabEntry {
    title: string;
    subtitle?: string;
    institution?: string;
    period?: string;
    children?: React.ReactNode;
}

const cardClass =
    "p-4 2xl:p-6 shrink-0 snap-start w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-11px)] tracking-tighter flex flex-col cursor-pointer hover:bg-main transition-colors";

function SummaryCard({
    title,
    subtitle,
    institution,
    period,
    onClick,
}: Omit<CardTabEntry, "children"> & { onClick?: () => void }) {
    return (
        <Card
            className={cardClass}
            onClick={onClick}
        >
            <CardTitle className="font-stretch-extra-expanded flex flex-col gap-2 ">
                <h1 className="text-sm/6 sm:text-md/6 md:text-lg/6 lg:text-xl/6 2xl:text-3xl/10">
                    {title}
                </h1>
                <h2 className="font-light italic 2xl:text-xl">{subtitle}</h2>
            </CardTitle>
            <div className="text-sm 2xl:text-lg font-light flex flex-col flex-1">
                <div className="mt-auto">
                    {institution && <p>{institution}</p>}
                    {period && <p className="italic">{period}</p>}
                </div>
            </div>
        </Card>
    );
}

function DetailCard({
    title,
    subtitle,
    children,
    onClick,
}: Pick<CardTabEntry, "title" | "subtitle" | "children"> & {
    onClick?: () => void;
}) {
    return (
        <Card
            className={`${cardClass} overflow-y-auto bg-gradient-to-br from-blue-50 to-purple-50 `}
            onClick={onClick}
        >
            <p className="text-xs font-stretch-expanded text-center">{title}</p>
            <div className="flex-1 overflow-y-auto py-1 tracking-wider">
                {children}
            </div>
            <p className="text-xs font-stretch-expanded text-center">
                {subtitle}
            </p>
        </Card>
    );
}

interface CardTabProps {
    tabName: string;
    heading: string;
    entries: CardTabEntry[];
    wip?: boolean;
}

export default function CardTab({
    tabName,
    heading,
    entries,
    wip,
}: CardTabProps) {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <TemplateTab tabName={tabName}>
            <div className="flex flex-col mb-2">
                <h1 className="bg-gradient-to-br from-blue-800 to-purple-500 bg-clip-text text-transparent text-xl sm:text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl font-stretch-extra-expanded tracking-tighter">
                    {heading}
                </h1>
                <p className="text-xs 2xl:text-base italic font-light">
                    click on a card for more details // scroll for more
                </p>
            </div>

            {wip ? (
                <div className="flex items-center justify-center w-full h-full">
                    <p className="text-4xl italic font-light text-gray-300 text-center">
                        work in progress
                    </p>
                </div>
            ) : (
                <div className="flex flex-row gap-4 overflow-x-auto h-full mb-2 snap-x snap-mandatory">
                    {entries.map((entry, i) =>
                        expanded === i ? (
                            <DetailCard
                                key={i}
                                title={entry.title}
                                subtitle={entry.subtitle}
                                onClick={() => setExpanded(null)}
                            >
                                {entry.children}
                            </DetailCard>
                        ) : (
                            <SummaryCard
                                key={i}
                                {...entry}
                                onClick={() => setExpanded(i)}
                            />
                        ),
                    )}
                </div>
            )}
        </TemplateTab>
    );
}
