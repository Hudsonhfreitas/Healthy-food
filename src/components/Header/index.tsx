import * as S from './styles';

import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import {GiHamburgerMenu} from 'react-icons/gi';

export function Header() {

    const isTabletMobile = useMediaQuery({
        query: '(max-width: 630px)'
      })

    return (
        <S.Container>
            <S.Content>
                <S.Logo to="/">
                    Healthy Food
                </S.Logo>
                {
                    isTabletMobile ? 
                    <S.Toggle>
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