import Layout from "@/layouts/main";
import React, { useState } from "react";
import Bash from "@/components/sheets/Bash";
import { PaperClipIcon, CheckIcon } from "@heroicons/react/24/outline";
import calculateDev from "@/utils/calculate-dev";
export default function Cpf() {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);
    async function generate() {
        const result = calculateDev();
        setText(result);
    }
    async function handleCopy() {
        const code = text;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    const codeTypescript = `
function generateCpf(): string {
    const cpf = [];
    for (let i = 0; i < 9; i++) {
        cpf.push(Math.floor(Math.random() * 10));
    }

    cpf.push(calculateDv(cpf, 10));
    cpf.push(calculateDv(cpf, 11));

    return cpf.join("").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function calculateDv(cpf: number[], weight: number): number {
    let sum = 0;
    for (let i = 0; i < cpf.length; i++) {
        sum += cpf[i] * (weight - i);
    }
    let rest = sum % 11;
    if (rest < 2) {
        rest = 0;
    } else {
        rest = 11 - rest;
    }
    return rest;
}
`;
    const codeJavascript = `
function generateCpf() {
    const cpf = [];
    for (let i = 0; i < 9; i++) {
        cpf.push(Math.floor(Math.random() * 10));
    }

    cpf.push(calculateDv(cpf, 10));
    cpf.push(calculateDv(cpf, 11));

    return cpf.join("").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function calculateDv(cpf, weight) {
    let sum = 0;
    for (let i = 0; i < cpf.length; i++) {
        sum += cpf[i] * (weight - i);
    }
    let rest = sum % 11;
    if (rest < 2) {
        rest = 0;
    } else {
        rest = 11 - rest;
    }
    return rest;
}

    `;
    return (
        <Layout>
            <div className="bg-white  mt-9 w-full overflow-auto ">
                <div className="mt-6 flex max-w-md py-3 gap-x-4 justify-center align-baseline">
                    <button
                        onClick={() => generate()}
                        type="submit"
                        className=" h-11 mt-6 rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Gerar CPF
                    </button>
                    <div className="flex-col justify-center align-baseline">
                        <p className="my-1 text-sm text-neutral-900">CPF gerado</p>
                        <input
                            id="cpf-gerado"
                            name="cpf"
                            type="text"
                            required
                            readOnly
                            value={text}
                            placeholder="CPF gerado..."
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
            </div>
        </Layout>
    );
}
