import React, { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
    text: string;
    speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    speed = 100,
}) => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
    const intervalRef = useRef<number | null>(null);
    // Using a ref to store the current character index.
    // This helps ensure `charIndex` is consistent across interval ticks
    // even if React re-renders or batches state updates.
    const charIndexRef = useRef<number>(0);

    useEffect(() => {
        // Always clear any existing interval first to prevent overlaps.
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        // Reset state ONLY if the 'text' prop has actually changed,
        // or if this is the very first mount (charIndexRef.current is 0).
        // The `text` in dependencies will trigger this if `text` changes.
        // For Strict Mode's double-invocation, this won't re-reset if text is same.
        if (
            displayedText !== "" ||
            isTypingComplete ||
            text.length === 0 ||
            charIndexRef.current !== 0
        ) {
            setDisplayedText("");
            setIsTypingComplete(false);
            charIndexRef.current = 0; // Reset index for a fresh start
        }

        if (text.length === 0) {
            setIsTypingComplete(true);
            return; // Exit early
        }

        intervalRef.current = window.setInterval(() => {
            const currentIdx = charIndexRef.current;

            if (currentIdx < text.length) {
                const nextChar = text.charAt(currentIdx);
                // Using `setDisplayedText` with a functional update ensures we get the most
                // up-to-date `prev` state, even with potential React batching.
                setDisplayedText((prev) => {
                    const newText = prev + nextChar;
                    return newText;
                });

                charIndexRef.current++; // Increment the ref, not a local `let` variable
            } else {
                // All characters have been processed

                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                setIsTypingComplete(true);
            }
        }, speed);

        // Cleanup function: This runs when the component unmounts
        // OR when dependencies (`text`, `speed`) change for a new effect run.
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [text, speed]); // Dependencies

    // Effect to observe final displayedText state (good for debugging)
    useEffect(() => {
        if (isTypingComplete) {
            if (displayedText.length !== text.length) {
                console.error(
                    `[Typewriter Debug] ERROR: Mismatch! Displayed text length (${displayedText.length}) does not match original text length (${text.length}).`
                );
            }
        }
    }, [displayedText, isTypingComplete, text.length]);

    return (
        <div className="flex items-center text-lg font-mono">
            <span className="min-h-[1em]">{displayedText}</span>
            {isTypingComplete && (
                <span
                    className={`ml-1 inline-block w-2 bg-foreground animate-blink`}
                    style={{ height: "1em", verticalAlign: "middle" }}
                ></span>
            )}
        </div>
    );
};

export default TypewriterText;
