import Layout from "./layout";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import style from "./tools.module.css";
const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    { name: "Material", description: "Solid walnut base with rare earth magnets and powder coated steel card cover" },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    { name: "Finish", description: "Hand sanded and finished with natural oil" },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    { name: "Considerations", description: "Made from natural materials. Grain and color vary with each item." },
];

export default function Tools() {
    return (
        <Layout>
            <div className="bg-gray-800 mt-9 w-full overflow-auto p-6">
                <div className="flex bg-white rounded-md overflow-y-scroll h-full">
                    <div className="flex flex-col items-center overflow-y-scroll justify-center h-full">
                        <div className={style?.wrapper}>
                            <div className={style?.boxGrow}>grow</div>
                            <div className={style?.boxFade}>fade</div>
                            <div className={style?.boxSpaceOut}>spaceout</div>
                            <div className={style?.boxResize}>resize</div>
                            <div className={style?.boxRotate}>rotate</div>
                            <div className={style?.boxColChange}>change</div>
                            <div className={style?.loader}></div>
                            <div className={style?.boxPulse}>pulse</div>
                            <div className={style?.slideOut}>slide-out</div>
                        </div>
                    </div>
                    <p>teste</p>
                </div>
            </div>
        </Layout>
    );
}
