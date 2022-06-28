import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
    webGLContextAttributes: {
        alpha: true,
        antialias: true,
        depth: true,
        failIfMajorPerformanceCaveat: true,
        powerPreference: "high-performance",
        premultipliedAlpha: true,
        preserveDrawingBuffer: true,
        stencil: true,
        desynchronized: true,
        xrCompatible: true,
    },
});

function App() {
    return <Unity unityContext={unityContext} />;
}