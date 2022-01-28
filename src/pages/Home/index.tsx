import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Recipes } from '../../components/Recipes';

export function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Recipes />
            </main>
        </>
    )
}