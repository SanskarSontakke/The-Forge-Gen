"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "./button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
            {/* Fixed Background Layer */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter title-glow">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600
                                        dark:from-cyan-300 dark:via-blue-500 dark:to-purple-600"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                        className="inline-block group relative cursor-pointer"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full blur-lg group-hover:blur-xl" />
                        
                        {/* Border Wrapper */}
                        <div className="relative p-[1px] rounded-full bg-gradient-to-r from-slate-700 to-slate-800 group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600 transition-all duration-500 group-hover:scale-105">
                            
                            {/* Button Content */}
                            <Button
                                variant="ghost"
                                className="relative rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-xl
                                bg-slate-950/90 hover:bg-slate-950/80
                                text-slate-100 transition-all duration-300 w-full h-full border-none shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/20"
                            >
                                <span className="relative z-10 flex items-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-100 group-hover:to-blue-100 transition-colors">
                                    Discover Excellence
                                    <span className="ml-3 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1.5 transition-all duration-300">
                                        →
                                    </span>
                                </span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
