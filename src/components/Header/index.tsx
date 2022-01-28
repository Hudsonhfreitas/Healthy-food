import { Link } from 'react-scroll';
import * as S from './styles';

export function Header() {
    return (
        <S.Container>
            <S.Content>
                <S.Logo to="/">
                    Healthy Food
                </S.Logo>
                <S.NavBar>
                    <ul>
                        <li>
                            <Link to='recipes' duration={500} smooth={true}>
                                healthy recipes
                            </Link>
                        </li>
                        <li>
                            <Link to='' duration={300} smooth={true}>
                                blog
                            </Link>
                        </li>
                        <li>
                            <Link to='' duration={300} smooth={true}>
                                join
                            </Link>
                        </li>
                    </ul>
                    <S.RegisterButton as='a' href="/register">
                        register
                    </S.RegisterButton>
                </S.NavBar>
            </S.Content>
        </S.Container>
    )
}