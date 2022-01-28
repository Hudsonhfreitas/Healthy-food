import * as S from './styles'

interface BLogItemProps {
    image: string;
    title: string;
    user: string;
    userImage: string;
}

export function BlogSliderItem({ image, title, user, userImage }: BLogItemProps) {
    return (
        <S.Container>
            <img src={image} alt={title} />
            <S.Text>
                <h3>{title}</h3>
                <span>
                    <img src={userImage} alt={`${user} avatar`} />
                    <p>{user}</p>
                </span>
            </S.Text>
        </S.Container>
    )
}