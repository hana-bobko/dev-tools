// src/components/Json.js
import React, { useState } from "react";
import Layout from "@/layouts/main";
import { faker } from "@faker-js/faker";

type JsonItem = {
    id: number;
    nome: string;
    email: string;
    ativo: boolean;
    nascimento: string;
};

const Json = () => {
    const [numItems, setNumItems] = useState(2);
    const [jsonOutput, setJsonOutput] = useState<JsonItem[]>([]);

    const generateJson = () => {
        const generatedData = Array.from({ length: numItems }, (_, index) => ({
            id: index + 1,
            nome: faker.name.firstName() + " " + faker.name.lastName(),
            email: faker.internet.email(),
            ativo: faker.datatype.boolean(),
            nascimento: faker.date.past({ years: 30 }).toISOString().split("T")[0],
        }));
        console.log(generatedData);
        setJsonOutput(generatedData);
    };

    const copyToClipboard = () => {
        const jsonString = JSON.stringify(jsonOutput, null, 2);
        navigator.clipboard.writeText(jsonString).then(() => {
            alert("JSON copiado para a área de transferência!");
        });
    };

    return (
        <Layout>
            <div className="mt-6 mx-6 flex-col max-h-screen min max-w-screen-3xl py-3 gap-x-4 justify-start align-baseline">
                <p className="font-mono text-xl">Gerador de JSON</p>
                <div className="controls flex w-full justify-evenly p-6">
                    <div className="controls flex-col w-full justify-evenly">
                        <label>
                            <p className="my-1 text-sm text-neutral-900"> Número de itens: </p>
                            <input
                                type="number"
                                value={numItems}
                                onChange={(e) => setNumItems(Number(e.target.value))}
                                min="1"
                                className="min-w-0 text-neutral-900 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1  ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </label>
                    </div>
                    <div className="controls flex-col w-full justify-evenly">
                        <button
                            className=" h-11 mx-3 mt-6 rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={generateJson}
                        >
                            Gerar JSON
                        </button>
                        <button
                            className=" h-11 mx-3 mt-6 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={copyToClipboard}
                        >
                            Copiar JSON
                        </button>
                    </div>
                    <div className="controls flex-col w-full justify-evenly"></div>
                </div>
                <div className=" bg-gray-900 h-full text-white font-mono rounded-lg shadow-lg p-6 mb-4 mx-6">
                    <div className="flex justify-between items-center mb-4">
                        <pre className="whitespace-pre-wrap break-all">
                            <div className="json-output min-h-96 max-h-screen">
                                {jsonOutput.length > 0 ? (
                                    <div className="json-output max-h-[70vh] overflow-auto rounded-md border border-gray-700 p-4 bg-gray-800">
                                        <pre className="whitespace-pre-wrap break-words text-sm">{JSON.stringify(jsonOutput, null, 2)}</pre>
                                    </div>
                                ) : (
                                    <div className="json-output max-h-[70vh] overflow-auto rounded-md border border-gray-700 p-4 bg-gray-800">
                                        <pre className="whitespace-pre-wrap break-words text-sm">Seu JSON aparecerá aqui</pre>
                                    </div>
                                )}
                            </div>
                        </pre>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Json;
