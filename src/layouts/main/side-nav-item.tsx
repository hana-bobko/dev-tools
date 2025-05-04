import { Bars3Icon, BellIcon, XMarkIcon, FilmIcon, IdentificationIcon, Bars3CenterLeftIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import { Braces, Palette, KeyRound } from "lucide-react";
export const sideNavItem = [
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
        title: "Gerador de JSON",
        path: "/json",
        icon: <Braces className="h-6 w-6" />,
    },
    {
        id: 4,
        title: "Gerador de Senhas",
        path: "/passwords",
        icon: <KeyRound className="h-6 w-6" />,
    },
    {
        id: 5,
        title: "Animações CSS",
        path: "/animations/",
        icon: <FilmIcon className="h-6 w-6" />,
    },
];
export const headerItem = [
    { name: "Ferramentas de desenvolvedor", href: "#", current: true },
    { name: "Página inicial", href: "/", current: false },
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
