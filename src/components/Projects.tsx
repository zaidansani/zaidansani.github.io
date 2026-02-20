import type { CardTabEntry } from "@/components/CardTab";
import CardTab from "@/components/CardTab";

const entries: CardTabEntry[] = [];

export default function Projects({ activeTab }: { activeTab?: string }) {
    return (
        <CardTab
            tabName="projects"
            heading="projects"
            entries={entries}
            wip
            activeTab={activeTab}
        />
    );
}
