import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Variants, TargetAndTransition } from "framer-motion";
interface CarouselItem {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
}

interface CarouselProps {
    items: CarouselItem[];
    visibleCount?: number; // default: 3
}
type Direction = "left" | "right";
export const Carousel: React.FC<CarouselProps> = ({ items, visibleCount = 3 }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const handlePrev = () => {
        setDirection("left");
        setStartIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setDirection("right");
        setStartIndex((prev) => (prev + 1) % items.length);
    };

    const visibleItems = Array.from({ length: visibleCount }).map((_, i) => {
        const index = (startIndex + i) % items.length;
        return items[index];
    });

    const variants: {
        enter: (dir: Direction) => TargetAndTransition;
        center: TargetAndTransition;
        exit: (dir: Direction) => TargetAndTransition;
    } = {
        enter: (dir) => ({
            x: dir === "right" ? 300 : -300,
            opacity: 0,
            position: "absolute",
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "static",
        },
        exit: (dir) => ({
            x: dir === "right" ? -300 : 300,
            opacity: 0,
            position: "absolute",
        }),
    };

    return (
        <div className="relative flex items-center justify-center w-full h-96 overflow-hidden">
            <button onClick={handlePrev} className="absolute left-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full">
                <ChevronLeft size={24} />
            </button>

            <div className="relative flex items-center justify-center w-full max-w-5xl overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={startIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-6 w-full h-screen justify-center"
                    >
                        {visibleItems.map((item, index) => {
                            const isCenter = index === Math.floor(visibleCount / 2);
                            return (
                                <a
                                    href={item.href}
                                    key={item.id}
                                    className={`flex flex-col items-center h-60 justify-center text-white bg-white/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-500 w-80 shrink-0 ${
                                        isCenter ? "scale-110 z-10" : "scale-90 opacity-50"
                                    }`}
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-center">{item.description}</p>
                                    <button className="mt-4 px-4 py-1 text-xs bg-white/20 rounded-full hover:bg-white/30 transition">Conhecer ferramenta</button>
                                </a>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>

            <button onClick={handleNext} className="absolute right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full">
                <ChevronRight size={24} />
            </button>
        </div>
    );
};
