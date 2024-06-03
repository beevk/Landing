import type {FC} from "react";
import PricingCard from "./pricing/card";

const DefaultPricingTable: FC = function () {
    return (
        <section id="pricing" className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Designed for business teams like yours
                    </h2>
                    <p className="mb-5 text-gray-500 dark:text-gray-400 sm:text-xl">
                        Here at ApexSudo we focus on markets where technology, innovation,
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
                <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
                    <PricingCard
                        title="Freeloader (Open Innovator)"
                        desc="Best option for open source projects."
                        price="FREE"
                        term="forever"
                        cta="Try Now"
                        benefits={["Unlimited Repositories", "Unlimited developers", "No credit card requirement", "Community support", "Free updates"]}
                        link="https://github.com/features/actions" // Link to Github Action page
                    />
                    <PricingCard
                        title="Yearly Yoda"
                        desc="Best for large scale uses and extended redistribution rights."
                        price="$200"
                        term="year"
                        cta="Get started"
                        benefits={["Everything in Freeloader plan", "Unlimited private repositories", "Unlimited team size", "Priority Email support", "90 days free trial"]}
                        highlighted={true}
                        link="https://buy.stripe.com/test_00g9BKesxcTp0nu3cc"
                    />
                    <PricingCard
                        title="Monthly Muggle"
                        desc="Relevant for multiple users, extended & premium support."
                        price="$25"
                        term="month"
                        cta="Get started"
                        benefits={["Everything in Freeloader plan", "Unlimited private repositories", "Unlimited team size", "Priority Email support", "30 days free trial"]}
                        link="https://buy.stripe.com/test_bIY29i2JP7z53zGaEG"
                    />
                </div>
            </div>
        </section>
    );
};

export default DefaultPricingTable;
