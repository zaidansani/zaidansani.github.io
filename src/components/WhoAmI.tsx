import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const COMMAND = "whoami --zaidan";
const TYPING_INTERVAL = 120;
const BLINK_COUNT = 3;
const BLINK_INTERVAL = 400;
const LOADING_DURATION = 2000;

type Phase = "typing" | "blinking" | "loading" | "done";

export default function WhoAmI({ onComplete }: { onComplete: () => void }) {
    const [phase, setPhase] = useState<Phase>("typing");
    const [typed, setTyped] = useState("");
    const [caretVisible, setCaretVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    // Typing phase
    useEffect(() => {
        if (phase !== "typing") return;
        if (typed.length >= COMMAND.length) {
            setPhase("blinking");
            return;
        }
        const t = setTimeout(() => {
            setTyped(COMMAND.slice(0, typed.length + 1));
        }, TYPING_INTERVAL);
        return () => clearTimeout(t);
    }, [phase, typed]);

    // Blinking phase — blink caret BLINK_COUNT times then move to loading
    useEffect(() => {
        if (phase !== "blinking") return;
        let blinks = 0;
        const interval = setInterval(() => {
            setCaretVisible((v) => !v);
            blinks++;
            if (blinks >= BLINK_COUNT * 2) {
                clearInterval(interval);
                setCaretVisible(false);
                setPhase("loading");
            }
        }, BLINK_INTERVAL);
        return () => clearInterval(interval);
    }, [phase]);

    // Loading phase — animate progress bar then call onComplete
    useEffect(() => {
        if (phase !== "loading") return;
        setProgress(0);
        const start = performance.now();
        let raf: number;
        function tick(now: number) {
            const elapsed = now - start;
            const pct = Math.min((elapsed / LOADING_DURATION) * 100, 100);
            setProgress(pct);
            if (pct < 100) {
                raf = requestAnimationFrame(tick);
            } else {
                setPhase("done");
                onComplete();
            }
        }
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [phase, onComplete]);

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Card className="w-[75vw] p-6 bg-white flex flex-col justify-center items-start font-mono">
                <div className="flex items-center gap-1 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-800 w-full">
                    <span className="text-blue-700 font-semibold select-none mr-2">
                        $
                    </span>
                    <span>{typed}</span>
                    {phase !== "loading" && phase !== "done" && (
                        <span
                            className={`inline-block w-[0.55em] h-[1.1em] bg-gray-800 ml-0.5 align-middle transition-opacity duration-75 ${caretVisible ? "opacity-100" : "opacity-0"}`}
                        />
                    )}
                    {phase === "loading" && (
                        <Progress value={progress} className="ml-4 flex-1" />
                    )}
                </div>
            </Card>
        </div>
    );
}
