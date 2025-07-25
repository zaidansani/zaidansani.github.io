/// <reference types="vite/client" />

// src/vite-env.d.ts or src/custom.d.ts

/// <reference types="vite/client" />

// This declares the module for SVG files imported with the '?react' suffix
// so TypeScript knows they resolve to a React component.
declare module "*.svg?react" {
    import * as React from "react";
    const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default Component;
}

// Optional: If you also use the '?url' suffix for image sources
declare module "*.svg?url" {
    const content: string;
    export default content;
}

// Optional: If you also use the '?raw' suffix for raw SVG content
declare module "*.svg?raw" {
    const content: string;
    export default content;
}
