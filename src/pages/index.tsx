import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { Music, Gift, Star, IdCard, Braces, KeyRound, Film } from "lucide-react";

export default function App() {
    const items = [
        {
            id: "1",
            icon: <IdCard />,
            href: "/cpf",
            title: "Gerador de CPF",
            description: "Gerador de CPFs fictícios válidos.",
        },
        {
            id: "2",
            icon: <IdCard />,
            href: "/cnpj",
            title: "Gerador de CNPJ",
            description: "Gerador de CNPJs fictícios válidos.",
        },
        {
            id: "3",
            icon: <Braces />,
            href: "/json",
            title: "Gerador de JSONs",
            description: "Gere JSONs para testes na quantidade que quiser.",
        },
        {
            id: "4",
            icon: <KeyRound />,
            href: "/passwords",
            title: "Gerador de senhas",
            description: "Gere senhas aleatórias e seguras.",
        },
        {
            id: "5",
            icon: <Film />,
            href: "/animations",
            title: "Animações CSS",
            description: "Animações prontas para serem utilizadas em qualquer lugar.",
        },
    ];

    return (
        <div className="absolute w-full h-full isolate overflow-hidden bg-sky-950 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
                <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#6093c4" />
                        <stop offset={1} stopColor="#364792" />
                    </radialGradient>
                </defs>
            </svg>
            <div className="mx-auto w-full text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Criada por desenvolvedores, para desenvolvedores.
                    <br />
                    Aumente sua produtividade.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Transforme seu código, seus projetos e sua carreira com a nossa ajuda. Dê o próximo passo no seu desenvolvimento.
                </p>
                <div className="mt-10 flex-col items-center justify-center">
                    <Carousel items={items} />
                    <a href="#" className="text-lg font-semibold leading-6 text-white">
                        Nos apoie<span aria-hidden="true"> →</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
