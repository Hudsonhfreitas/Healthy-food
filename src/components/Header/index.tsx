import * as S from './styles';

import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import {GiHamburgerMenu} from 'react-icons/gi';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen(isMenuOpen: boolean): void;
}

export function Header({setIsMenuOpen, isMenuOpen}: HeaderProps) {

    const isTabletMobile = useMediaQuery({
        query: '(max-width: 630px)'
      })

    function handleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <S.Container>
            <S.Content>
                <S.Logo to="/">
                    Healthy Food
                </S.Logo>
                {
                    isTabletMobile ? 
                    <S.Toggle onClick={handleMenu}>
                        <GiHamburgerMenu />
                    </S.Toggle>
                    :
                    <S.NavBar>
                    <ul>
                        <li>
                            <Link to='recipes' duration={500} smooth={true}>
                                healthy recipes
                            </Link>
                        </li>
                        <li>
                            <Link to='blog' duration={500} smooth={true}>
                                blog
                            </Link>
                        </li>
                        <li>
                            <Link to='join' duration={500} smooth={true}>
                                join
                            </Link>
                        </li>
                    </ul>
                    <S.RegisterButton as='a' href="/register">
                        register
                    </S.RegisterButton>
                    </S.NavBar>
                }
                
            </S.Content>
        </S.Container>
    )
}