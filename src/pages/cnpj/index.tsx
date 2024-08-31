import Layout from "@/layouts/main";
import React, { useState } from "react";
import Bash from "@/components/sheets/Bash";
import { PaperClipIcon, CheckIcon } from "@heroicons/react/24/outline";
import calculateDev from "@/utils/calculate-cpf";
import calculateCnpj from "@/utils/calculate-cnpj";
export default function Cpf() {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);
    async function generate() {
        const result = calculateCnpj();
        console.log("passei na função");
        setText(result);
    }
    async function handleCopy() {
        const code = text;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    const codeTypescript = `
function generateCpnj(): string {
    while (true) {
        const cnpj = [];
        for (let i = 0; i < 12; i++) {
            cnpj.push(Math.floor(Math.random() * 10));
        }
        const dv1 = calculateDv(cnpj, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
        cnpj.push(dv1);
        const dv2 = calculateDv(cnpj, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
        cnpj.push(dv2);

        if (isValidCnpj(cnpj)) {
            return cnpj.join("").replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }
    }
}

function isValidCnpj(cnpj: number[]): boolean {
    const calculatedDv1 = calculateDv(cnpj.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    const calculatedDv2 = calculateDv(cnpj.slice(0, 13), [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);

    return cnpj[12] === calculatedDv1 && cnpj[13] === calculatedDv2;
}

function calculateDv(cnpj: number[], weights: number[]): number {
    let sum = 0;
    for (let i = 0; i < cnpj.length; i++) {
        sum += cnpj[i] * weights[i];
    }
    let rest = sum % 11;
    if (rest < 2) {
        return 0;
    } else {
        return 11 - rest;
    }
}
`;
    const codeJavascript = `
function calculateCnpj() {
    while (true) {
        const cnpj = [];
        for (let i = 0; i < 12; i++) {
            cnpj.push(Math.floor(Math.random() * 10));
        }
        const dv1 = calculateDv(cnpj, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
        cnpj.push(dv1);
        const dv2 = calculateDv(cnpj, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
        cnpj.push(dv2);

        if (isValidCnpj(cnpj)) {
            return cnpj.join("").replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }
    }
}

function isValidCnpj(cnpj) {
    const calculatedDv1 = calculateDv(cnpj.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    const calculatedDv2 = calculateDv(cnpj.slice(0, 13), [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);

    return cnpj[12] === calculatedDv1 && cnpj[13] === calculatedDv2;
}

function calculateDv(cnpj, weights) {
    let sum = 0;
    for (let i = 0; i < cnpj.length; i++) {
        sum += cnpj[i] * weights[i];
    }
    let rest = sum % 11;
    if (rest < 2) {
        return 0;
    } else {
        return 11 - rest;
    }
}
    `;
    return (
        <Layout>
            <div className="mt-6 flex max-w-md py-3 gap-x-4 justify-center align-baseline">
                <button
                    onClick={() => generate()}
                    type="submit"
                    className=" h-11 mt-6 rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Gerar CNPJ
                </button>
                <div className="flex-col justify-center align-baseline">
                    <p className="my-1 text-sm text-neutral-900">CNPJ gerado</p>
                    <input
                        id="cnpj-gerado"
                        name="cpf"
                        type="text"
                        required
                        readOnly
                        value={text}
                        placeholder="CNPJ gerado..."
                        autoComplete=""
                        className="min-w-0 text-neutral-900 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                </div>
                {copied ? (
                    <CheckIcon className="text-green-600 h-6 w-6 mt-8 cursor-pointer" />
                ) : (
                    <PaperClipIcon onClick={handleCopy} className="text-zinc-600 h-6 w-6 mt-8 cursor-pointer" />
                )}
            </div>
            <Bash codeJS={codeJavascript} codeTS={codeTypescript} language={""} customMessage={"Copie e cole em seu código"} buttonLabel={"Copiar"} successLabel={"Copiado!"} />
        </Layout>
    );
}
