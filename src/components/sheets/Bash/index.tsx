import { useState } from "react";

interface CodeSnippetProps {
    codeJS: string; // Código em JavaScript
    codeTS: string; // Código em TypeScript
    language?: string; // Linguagem inicial selecionada
    customMessage?: string; // Mensagem personalizada
    buttonLabel?: string; // Rótulo personalizado para o botão de cópia
    successLabel?: string; // Rótulo personalizado para quando o código for copiado
}

const Bash = ({
    codeJS,
    codeTS,
    language = "JavaScript", // Valor padrão como "JavaScript"
    customMessage = "Copie e cole em seu arquivo",
    buttonLabel = "Copiar",
    successLabel = "Copiado!",
}: CodeSnippetProps) => {
    const [copied, setCopied] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(language);

    const handleCopy = () => {
        const code = selectedLanguage === "JavaScript" ? codeJS : codeTS;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className=" bg-gray-900  text-white font-mono rounded-lg shadow-lg p-6 mb-4 mx-6">
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">
                    {customMessage} {selectedLanguage}
                </span>
                <div className="flex items-center">
                    <button
                        onClick={() => setSelectedLanguage("JavaScript")}
                        className={`text-sm py-1 px-2 rounded-l focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            selectedLanguage === "JavaScript" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                        }`}
                    >
                        JS
                    </button>
                    <button
                        onClick={() => setSelectedLanguage("TypeScript")}
                        className={`text-sm py-1 px-2 rounded-r focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            selectedLanguage === "TypeScript" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                        }`}
                    >
                        TS
                    </button>
                    <button
                        onClick={handleCopy}
                        className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-400 py-1 px-2 ml-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        {copied ? successLabel : buttonLabel}
                    </button>
                </div>
            </div>
            <pre className="whitespace-pre-wrap break-all">
                <code>{selectedLanguage === "JavaScript" ? codeJS : codeTS}</code>
            </pre>
        </div>
    );
};

export default Bash;
