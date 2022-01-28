import { Link } from 'react-router-dom'
import * as S from './styles'

export function Footer() {
    return (
        <S.Container>
            <S.Content>
                <span>© Copyrights 2019 Stack. All Rights Reserved.</span>
                <S.FooterNav>
                    <Link to=''>Privacy Policy</Link>
                    <Link to=''>Terms and Conditions</Link>
                </S.FooterNav>
            </S.Content>
        </S.Container>
    )
}