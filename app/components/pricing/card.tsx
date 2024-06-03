import type {FC} from "react";
import {Button} from "flowbite-react";

type IProps = {
    title: string;
    desc: string;
    price: string;
    term: 'month' | 'year' | 'forever';
    cta: string;
    benefits: string[];
    link: string;
    highlighted?: boolean;
}

const PricingCard: FC<IProps> = function ({title, desc, price, term, cta, benefits, link, highlighted = false }) {
    return (
        <div
            className="relative mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 sm:text-lg">{desc}</p>
            <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">{price}</span>
                <span className="text-gray-500 dark:text-gray-400">/{term}</span>
            </div>
            <ul className="mb-8 space-y-4 text-left">
                {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center space-x-3">
                        <svg
                            className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
            <Button
                outline={!highlighted}
                href={link}
                // className="bg-blue-700 hover:bg-cyan-700 dark:hover:bg-cyan-700"
                color="blue"
            >
                {cta}
            </Button>
        </div>
    );
}

export default PricingCard;
