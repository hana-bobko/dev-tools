import React from "react";

interface CardProps {
    image: string; // URL da imagem
    title: string; // Título do Card
    description: string; // Descrição do Card
    buttonText: string; // Texto do botão
    onClick: () => void; // Função chamada ao clicar no botão
}

const CardWImage: React.FC<CardProps> = ({ image, title, description, buttonText, onClick }) => {
    return (
        <div className="w-md flex-col rounded overflow-hidden shadow-lg bg-white m-3 py-3">
            <img className="w-full h-48 object-cover" src={image} alt={title} />

            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <p className="text-gray-700 text-base">{description}</p>
            </div>

            <div className="px-6 pt-4 pb-2">
                <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default CardWImage;
