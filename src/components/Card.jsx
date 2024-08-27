import { StyledCard } from './styles/Card.styled'


export default function Card({ item: { id, title, body, image } }) {
    return (
        <StyledCard 
            layout={id % 2 === 0 ? 'row-reverse' : null}
        >
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt='representation of each item' />
            </div>
        </StyledCard>
    )
}