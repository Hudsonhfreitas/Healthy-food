import * as S from './styles'

import { ReactNode } from 'react'

interface RecipeItemProps {
    imageSrc: string;
    children: ReactNode;
}

export function RecipeItem({ children, imageSrc}: RecipeItemProps ) {
    return (
        <S.Container>
            <img src={imageSrc} />
            <div>
                <h3>{children}</h3>
                <S.Button to=''>See recipe</S.Button>
            </div>
        </S.Container>
    )
}