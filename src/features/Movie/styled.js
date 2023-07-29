import styled from 'styled-components'

export const ImageContainer = styled.div`
	background-image: url(https://s3-alpha-sig.figma.com/img/2449/42e0/eddf959494fe088465c438055af49223?Expires=1691366400&Signature=Kbpi-kGHe5C9C6rxkZhY14PmkaDO9zBOBupLpaYtpWKqQqK-e9lMGrH5EjPMc8UJ-m5RD7vdEbk3xyMrkp2lK8Ceq5gZ8ltzwrlm7evH2bmt1YzNv4A-Ws60FaF6tSDW0lE0Gp19kcdbvKDiuMehC~QvyqETxaWOo4ShJ-V9dQXWeq6zHVxdF4IVUAnJmU0S03D80sMKTOGdkyIur2YrPPHpK0vykcHN2bCXRXspvTwxBwyfNCqYf7X7qNGcF~tLuklh-7YYmjm5xuolySrJIC9FQJVCzvwUQQ~7d0j7wMfGa5A0cctMlgUq8sU~uyzSorCmoaZtm-jTAfc~wBh76A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4);
	background-size: contain;
	background-position-x: center;
	position: relative;
`

export const Pleksa = styled.img`
	display: block;
	width: 100%;
`

export const StarImage = styled.img`
	width: 16px;
	height: 16px;

	@media (min-width: 768px) {
		width: 40px;
		height: 40px;
	}
`

export const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	line-height: 120%;

	@media (min-width: 768px) {
		font-size: 44px;
	}

	@media (min-width: 1200px) {
		font-size: 64px;
	}
`

export const Header = styled.div`
	position: absolute;
	bottom: 10px;
	margin: 0 16px;
	color: white;

	@media (min-width: 768px) {
		bottom: 56px;
		margin: 0 150px;
	}

	@media (min-width: 1200px) {
		margin: 0 200px;
	}

	@media (min-width: 1600px) {
		margin: 0 276px;
	}
`
export const Rating = styled.div``
