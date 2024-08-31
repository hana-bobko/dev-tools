import { Bars3Icon, BellIcon, XMarkIcon, FilmIcon, IdentificationIcon, Bars3CenterLeftIcon, PaintBrushIcon } from "@heroicons/react/24/outline";

export const sideNavItem = [
    {
        id: 0,
        title: "Animações CSS",
        path: "/animations/",
        icon: <FilmIcon className="h-6 w-6" />,
    },
    {
        id: 1,
        title: "Gerador de CPF",
        path: "/cpf/",
        icon: <IdentificationIcon className="h-6 w-6" />,
    },
    {
        id: 2,
        title: "Gerador de CNPJ",
        path: "/cnpj",
        icon: <IdentificationIcon className="h-6 w-6" />,
    },
    {
        id: 3,
        title: "Gerador de Texto (em breve)",
        path: "/cpf",
        icon: <Bars3CenterLeftIcon className="h-6 w-6" />,
    },
    {
        id: 4,
        title: "Paleta de cores (em breve)",
        path: "/cpf",
        icon: <PaintBrushIcon className="h-6 w-6" />,
    },
];
export const headerItem = [
    { name: "Ferramentas de desenvolvedor", href: "#", current: true },
    { name: "Nosso time", href: "#", current: false },
    { name: "Projetos", href: "#", current: false },
    { name: "Quero apoiar", href: "#", current: false },
    { name: "Ajuda", href: "#", current: false },
];

export const userItem = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
];

export const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: "/dev-tools/public/dev-tools.png",
};
