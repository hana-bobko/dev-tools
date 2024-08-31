export default function calculateCpf(): string {
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
