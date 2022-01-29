import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BlogSection } from '../../components/BlogSection';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { JoinSection } from '../../components/JoinSection';
import { MenuMobile } from '../../components/MenuMobile';
import { RecipesSection } from '../../components/RecipesSection';
import { ServicesSection } from '../../components/ServicesSection';

export function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isTabletMobile = useMediaQuery({
        query: '(max-width: 630px)'
      })

    return (
        <>
            <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
            {isMenuOpen && isTabletMobile && <MenuMobile setIsMenuOpen={setIsMenuOpen} /> }
            <main>
                <HeroSection />
                <RecipesSection />
                <ServicesSection />
                <BlogSection />
                <JoinSection />
            </main>
            <Footer />
        </>
    )
}