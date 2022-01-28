import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { RecipesSection } from '../../components/RecipesSection';

export function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <RecipesSection />
            </main>
        </>
    )
}