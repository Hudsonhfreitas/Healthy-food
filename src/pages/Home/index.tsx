import { BlogSection } from '../../components/BlogSection';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { JoinSection } from '../../components/JoinSection';
import { RecipesSection } from '../../components/RecipesSection';
import { ServicesSection } from '../../components/ServicesSection';

export function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <RecipesSection />
                <ServicesSection />
                <BlogSection />
                <JoinSection />
            </main>
        </>
    )
}