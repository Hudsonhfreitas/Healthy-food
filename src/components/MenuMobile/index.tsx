import * as S from './styles'

import { Link } from 'react-scroll'
import {AiOutlineClose} from 'react-icons/ai';

interface MenuMobileProps {
    setIsMenuOpen(isMenuOpen: boolean): void;
}

export function MenuMobile({setIsMenuOpen}: MenuMobileProps) {

    function handleCloseMenu() {
        setIsMenuOpen(false)
    }

    return (
        <S.Container>
            <S.CloseButton onClick={handleCloseMenu}>
                <AiOutlineClose />
            </S.CloseButton>
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
        </S.Container>
    )
}