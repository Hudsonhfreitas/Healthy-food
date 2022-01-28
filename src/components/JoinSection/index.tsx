import * as S from './styles'

export function JoinSection() {
    return (
        <S.Container id="join">
            <S.Content>
                <S.LeftArea>
                    <h2>Join our membership</h2>
                    <S.Search>
                        <input type="email" placeholder='Enter your email address' />
                        <button>
                            Join
                        </button>
                    </S.Search>
                </S.LeftArea>
            </S.Content>
        </S.Container>
    )
}