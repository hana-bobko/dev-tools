import React, { useState } from "react";
import Layout from "@/layouts/main";
const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

        let charset = "";
        if (includeUppercase) charset += uppercaseChars;
        if (includeLowercase) charset += lowercaseChars;
        if (includeNumbers) charset += numberChars;
        if (includeSymbols) charset += symbolChars;

        if (!charset) {
            setPassword("Selecione pelo menos um tipo de caractere.");
            return;
        }

        let generated = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generated += charset[randomIndex];
        }

        setPassword(generated);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() => {
            alert("Senha copiada para a área de transferência!");
        });
    };

    return (
        <Layout>
            <div className="mt-24 mx-6 max-w-xl">
                <p class="font-mono text-xl mb-4">Gerador de Senhas Seguras</p>
                <div className="mb-4">
                    <label className="block mb-1">Tamanho da senha:</label>
                    <input
                        type="number"
                        min="4"
                        max="64"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full p-2 rounded border border-gray-300"
                    />
                </div>

                <div className="mb-4 space-y-2">
                    <label className="block">
                        <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="mr-2" />
                        Incluir letras maiúsculas
                    </label>
                    <label className="block">
                        <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="mr-2" />
                        Incluir letras minúsculas
                    </label>
                    <label className="block">
                        <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="mr-2" />
                        Incluir números
                    </label>
                    <label className="block">
                        <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="mr-2" />
                        Incluir símbolos
                    </label>
                </div>

                <button onClick={generatePassword} className="bg-indigo-900 text-white px-4 py-2 rounded mr-2">
                    Gerar senha
                </button>
                <button onClick={copyToClipboard} className="bg-green-600 text-white px-4 py-2 rounded">
                    Copiar senha
                </button>

                {password && (
                    <div className="mt-4 p-4 bg-gray-800 text-white rounded">
                        <p className="break-words">{password}</p>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default PasswordGenerator;
