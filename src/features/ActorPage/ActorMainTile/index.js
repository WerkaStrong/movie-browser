import { useEffect, useState } from 'react'
import customPoster from '../../Movie/img/Profile.svg'
import {
	DateOfBirth,
	Description,
	Details,
	Image,
	ImageContainer,
	Name,
	PlaceOfBirth,
	TileWrapper,
	Title,
} from './styled'
import { useParams } from 'react-router-dom'
import useActor from './useActor'

const ActorMainTile = () => {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768)
	const { id } = useParams()
	const actorId = id

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 768)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const actorData = useActor(actorId)
	if (!actorData) {
		return <div>Loading...</div>
	}

	const { birthday, biography, name, place_of_birth, profile_path } = actorData

	const posterUrl = profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : customPoster

	return (
		<>
			<TileWrapper>
				<ImageContainer>
					<Image src={posterUrl} alt='' $isCustom={posterUrl === customPoster}></Image>
				</ImageContainer>
				<Details>
					<Title>{name}</Title>
					<DateOfBirth>
						<Name>Birth:</Name>
						{birthday ? new Date(birthday).toLocaleDateString('pl-PL', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
						}) : "-"}
					</DateOfBirth>
					<PlaceOfBirth>
						<Name>Place of birth:</Name>
						{place_of_birth ? place_of_birth : "-"}
					</PlaceOfBirth>
					{isWideScreen && <Description>{biography}</Description>}
				</Details>
				{!isWideScreen && <Description>{biography}</Description>}
			</TileWrapper>
		</>
	)
}

export default ActorMainTile

