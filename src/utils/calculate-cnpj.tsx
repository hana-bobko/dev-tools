export default function calculateCnpj(): string {
    while (true) {
        const cnpj = [];
        for (let i = 0; i < 12; i++) {
            cnpj.push(Math.floor(Math.random() * 10));
        }
        const dv1 = calculateDv(cnpj, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
        cnpj.push(dv1);
        const dv2 = calculateDv(cnpj, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
        cnpj.push(dv2);
        console.log("passei aqui");
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
