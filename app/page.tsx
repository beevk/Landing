import AlternateImageWithFeatureListSection from "./components/alternate";
import AppScreenshotWithCTAsHero from "./components/cta-app-preview";
import DefaultPricingTable from "./components/default-pricing";
import DescriptionWithFeatureListIconsSection from "./components/description-icon-list";
import GridLayoutTestimonialCards from "./components/grid-layout-cards";
import IllustrationWithStatisticsSocialProof from "./components/illustration";
import ContactForm from "@/app/components/contact";

export default function Home() {
    return (
        <main>
            <AppScreenshotWithCTAsHero/>
            <AlternateImageWithFeatureListSection/>
            <GridLayoutTestimonialCards/>
            <DescriptionWithFeatureListIconsSection/>
            <IllustrationWithStatisticsSocialProof/>
            <DefaultPricingTable/>
            <ContactForm/>
        </main>
    );
}
