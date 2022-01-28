import { FiSearch } from 'react-icons/fi'

import * as S from './styles'

export function HeroSection() {
    return (
        <S.Container >
            <S.Content>
                <S.LeftArea>
                    <h1>Ready for <br/> Trying a new <br/> recipe?</h1>
                    <S.Search>
                        <input type="text" placeholder='Search healthy recipes' />
                        <button>
                            <FiSearch></FiSearch>
                        </button>
                    </S.Search>
                </S.LeftArea>
            </S.Content>
        </S.Container>
    )
}