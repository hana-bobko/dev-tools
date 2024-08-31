import Layout from "@/layouts/main";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import style from "./tools.module.css";
import React, { useState } from "react";

interface LayoutProps {
    code: any;
}
const CodeSnippet = ({ code }: LayoutProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative bg-gray-900 text-white font-mono rounded-lg shadow-lg p-6 mb-4 mx-6">
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Copie e cole em seu arquivo CSS</span>
                <button
                    onClick={handleCopy}
                    className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-400 py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    {copied ? "Copiado!" : "Copiar"}
                </button>
            </div>
            <pre className="whitespace-pre-wrap break-all">
                <code>{code}</code>
            </pre>
        </div>
    );
};

const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    { name: "Material", description: "Solid walnut base with rare earth magnets and powder coated steel card cover" },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    { name: "Finish", description: "Hand sanded and finished with natural oil" },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    { name: "Considerations", description: "Made from natural materials. Grain and color vary with each item." },
];

export default function Tools() {
    const [bash, setBash] = useState(`Clique nas animações para obter o código em CSS`);
    const bashCode = `yarn create next-app@latest my-next-app`;
    const bashCss = [
        {
            className: style?.boxGrow,
            code: `
            .boxGrow {
                cursor: pointer;
                margin: 25px 0px 0px 25px;
                height: 100px;
                width: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: lightslategray;
            }
                        
            .boxGrow:hover {
                transform: scale(1.1);
                transition: 0.4s;
            }
            `,
            title: `grow`,
        },
        {
            className: style?.boxFade,
            code: `.boxFade {
              opacity: 1;
              transition: 0.6s ease-out;
              cursor: pointer;
              margin: 25px 0px 0px 25px;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: lightslategray;
          }
                    
          .boxFade:hover {
              opacity: 0.2;
          }`,
            title: `fade`,
        },
        {
            className: style?.boxSpaceOut,
            code: `.boxSpaceOut {
              transition: 0.6s;
              cursor: pointer;
              margin: 25px 0px 0px 25px;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: lightslategray;
          }
          
          .boxSpaceOut:hover {
              letter-spacing: 15px;
              font-size: 1.2em;
              transition: 0.8s;
          }`,
            title: `spaceout`,
        },
        {
            className: style?.boxResize,
            code: `.boxResize {
              transition: 0.5s ease;
              cursor: pointer;
              margin: 25px 0px 0px 25px;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: lightslategray;
          }
          
          .boxResize:hover {
              width: 350px;
              height: 70px;
              box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.5);
          }`,
            title: `resize`,
        },
        {
            className: style?.boxRotate,
            code: `.boxRotate {
              cursor: pointer;
              margin: 25px 0px 0px 25px;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: lightslategray;
          }
          
          .boxRotate:hover {
              animation: infinite-spinning 2s infinite;
          }
          
          @keyframes infinite-spinning {
              from {
                  transform: rotate(0deg);
              }
              to {
                  transform: rotate(360deg);
              }
          }
          `,
            title: `rotate`,
        },
        {
            className: style?.boxColChange,
            code: `.boxColChange {
              animation-name: colorChange;
              cursor: pointer;
              margin: 25px 0px 0px 25px;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: lightslategray;
              animation: colorChange 5s ease infinite alternate;
          }
          
          @keyframes colorChange {
              0% {
                  background-color: lightslategray;
              }
              50.0% {
                  background-color: #efd1ff;
              }
              100.0% {
                  background-color: #493d4f;
              }
          }`,
            title: `change`,
        },
        {
            className: style?.loader,
            code: `.loader {
              margin: 25px 0px 0px 25px;
              border: 16px solid lightgray;
              border-top: 16px solid #493d4f;
              border-radius: 50%;
              width: 120px;
              height: 120px;
              animation: spin 2s ease infinite;
          }

          
          @keyframes spin {
              0% {
                  transform: rotate(0deg);
              }
              100% {
                  transform: rotate(360deg);
              }
          }`,
            title: ``,
        },
        {
            className: style?.boxPulse,
            code: `.boxPulse {
              animation: pulse 2s infinite;
              cursor: pointer;
              margin: 25px 0px 0px 25px;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: lightslategray;
          }
          
          @keyframes pulse {
              25% {
                  transform: scale(1.1);
              }
              75% {
                  transform: scale(0.9);
              }
          }`,
            title: `pulse`,
        },
        {
            className: style?.slideOut,
            code: `.slideOut {
              animation-duration: 1.5s;
              cursor: pointer;
              margin: 25px 0px 0px 25px;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: lightslategray;
          }
          
          .slideOut:hover {
              animation-name: slideOut;
          }`,
            title: `slide-out`,
        },
    ];

    return (
        <Layout>
            <div className="flex flex-col h-36 items-center overflow-y-hidden justify-between ">
                <div className={style?.wrapper}>
                    {bashCss.map((item) => (
                        <div key={item?.title} onClick={() => setBash(item?.code)} className={item?.className}>
                            {item?.title}
                        </div>
                    ))}
                </div>
            </div>
            <CodeSnippet code={bash} />
        </Layout>
    );
}
