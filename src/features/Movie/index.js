import React from 'react'
import { useParams } from 'react-router-dom';
import MovieBanner from './Banner/index'
import MovieTile from './MovieTile'
import { Content } from './styled'
import People from './People'
import useCredits from './People/useCredits';
import { useSelector } from 'react-redux';
import { selectStatus } from '../browserSlice';
import { Container } from '../../common/Container';
import Loader from '../States/Loader';
import Error from '../States/Error';

const Movie = () => {
	const { id } = useParams();
	const movieId = id;

	const { cast, crew } = useCredits(movieId);
	const status = useSelector(selectStatus);
	const displayedCast = cast.slice(0, 12);
	const displayedCrew = crew.slice(0, 6);

	if(status!=="loading" && (!cast.length || !crew.length)){
		return <Container>
				<Error />
			</Container>
	}

	switch (status) {
		case 'loading':
			return (
				<Container>
					<Loader />
				</Container>
			)
		case 'success':
			return (
				<>
					<MovieBanner />
					<Content>
						<MovieTile />
					</Content>
					<People title='Cast' people={displayedCast} />
					<People title='Crew' people={displayedCrew} />
				</>
			)
		default:
			return null
	}
}

export default Movie;
