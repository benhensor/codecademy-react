import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.section`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	margin: 0 auto;
	text-align: center;
	width: 100%;
	position: relative;
`

const Form = styled.form`
  width: 100%;
  max-width: 120rem;
`

const CardInputs = styled.div`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
`

const ActionsContainer = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: fit-content;
	background: #ffffff;
	border: 1px solid #03a8d8;
	text-align: center;
	font-weight: bold;
	font-size: 14px;
	color: #03a8d8;
	padding: 10px 21px;
	text-decoration: none;
	cursor: pointer;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
	list-style: none;
	margin: 5rem 0;
	width: 100%;
`

const Item = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
  gap: 2rem;
	background: #ffffff;
	border: 1px solid #bcbcbc;
	border-radius: 3px;
	padding: 2.6rem;
	transition: 0.12s ease;
	&:hover {
		border: 1px solid #9e9e9e;
		box-shadow: 0 0 10px #00000025;
	}
`

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`

const InnerContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`

const Image = styled.img`
	width: 40px;
	margin-right: 1.5rem;
`

const Text = styled.div`
	margin-right: 1.5rem;
	font-size: 1.6rem;
`

const Delete = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: transparent;
  color: #03a8d8;
	font-size: 2rem;
	transition: 0.12s ease;
	&:hover {
		color: #ad2000;
	}
`
const CreateLink = styled(Link)`
  display: flex;
  align-items: center;
	gap: 1rem;
	width: fit-content;
	background: #ffffff;
	border: 1px solid #03a8d8;
	text-align: center;
	font-weight: bold;
	font-size: 14px;
	color: #03a8d8;
	padding: 1rem 2rem;
	text-decoration: none;
	cursor: pointer;
`

const FlipCard = styled.div`
  width: 500px;
  height: 10rem;
  margin: 25px auto;
  cursor: pointer;
  perspective: 1000px;

  .flip-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.6s;
    position: relative;
    width: 100%;
    height: 100%;
    transform: ${({ $showBack }) => ($showBack ? 'rotateY(180deg)' : 'rotateY(0)')};
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.4);
  }

  .card {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.front {
      transform: rotateY(0);
      background-color: #0c4768;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
    }

    &.back {
      transform: rotateY(180deg);
      background-color: #fff;
      color: #135d87;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
    }
  }
`

export {
	Section,
  Form,
  CardInputs,
  ActionsContainer,
	Button,
	List,
	Item,
	StyledLink,
	InnerContainer,
	Image,
	Text,
	Delete,
  CreateLink,
  FlipCard
}
