import {
	ImageContainer,
	Pleksa,
	StarImage,
	Title,
	Header,
	Rating,
	RatingValues,
	RatingValue,
	RatingTotal,
} from './styled'
import pleksa from '../img/Pleksa.png'
import star from '../../../common/images/Vector.svg'

const MovieBanner = () => {
	return (
		<>
			<ImageContainer>
				<Pleksa src={pleksa} />
				<Header>
					<Title>Mulan Long Title</Title>
					<Rating>
						<StarImage src={star} alt='Star'></StarImage>
						<RatingValues>
							<RatingValue>7,8 </RatingValue>
							<RatingTotal>/ 10</RatingTotal>
						</RatingValues>
						<span>335 votes</span>
					</Rating>
				</Header>
			</ImageContainer>
		</>
	)
}

export default MovieBanner