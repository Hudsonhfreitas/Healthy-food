import { BlogSection } from '../../components/BlogSection';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
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
            </main>
        </>
    )
}