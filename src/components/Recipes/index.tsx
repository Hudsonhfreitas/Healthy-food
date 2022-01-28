import { RecipeItem } from '../RecipeItem'

import comida1 from '../../assets/comida_1.svg'
import comida2 from '../../assets/comida_2.svg'
import comida3 from '../../assets/comida_3.svg'
import comida4 from '../../assets/comida_4.svg'

import * as S from './styles'

export function Recipes() {
    return (
        <S.Container>
            <S.Content>
                <h2>Our Best Recipes</h2>
                <p>
                    Far far away, behind the world mountains, far from the countries 
                    <br /> 
                    Vokalia and Consonantia there live the blind texts.
                </p>
                <S.RecipesList>
                   <RecipeItem imageSrc={comida1}>
                       Broccoli Salad with Bacon
                   </RecipeItem> 
                   <RecipeItem imageSrc={comida2}>
                       Classic Beef Burgers
                   </RecipeItem> 
                   <RecipeItem imageSrc={comida3}>
                       Classic Beef Burgers
                   </RecipeItem> 
                   <RecipeItem imageSrc={comida4}>
                       Classic Beef Burgers
                   </RecipeItem> 
                </S.RecipesList>
            </S.Content>
        </S.Container>
    )
}