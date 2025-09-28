import styled from 'styled-components';
import './App.css'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  place-content: center;
  margin-bottom: 3rem;
`;

const Card = styled.div`
  background-color: white;
  width: 230px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 30px;
  text-align: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: black 12px 12px 12px;
  font-family: "Inter", sans-serif;
  cursor:default;
  color: #272727ff;

  img {
    width: 200px;
    heigth: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
`;
const SecondTittle = styled.h2`
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const Description = styled.p`
  font-weight: 400;
  margin-top: 3px;
  margin-bottom: 12px;
`;

const Button = styled.a`
  cursor:pointer;
  font-family: "Inter", sans-serif;
  background-color: rgba(61, 0, 58, 0.31);
  padding: 12px;
  border-radius: 18px;
  font-weight: bold;
`;

function App() {

  return (
    <Container>
      <Card>
        <img src="https://i.pinimg.com/736x/2e/d8/82/2ed882694fd3a93d3a96e08c0cf785ee.jpg" alt="" />
        <SecondTittle> Nome </SecondTittle>
        <Description> descrição </Description>
        <Button>View Details</Button>
      </Card>
      <Card>
        <img src="https://i.pinimg.com/736x/2e/d8/82/2ed882694fd3a93d3a96e08c0cf785ee.jpg" alt="" />
        <SecondTittle> Nome </SecondTittle>
        <Description> descrição </Description>
        <Button>View Details</Button>
      </Card>
      <Card>
        <img src="https://i.pinimg.com/736x/2e/d8/82/2ed882694fd3a93d3a96e08c0cf785ee.jpg" alt="" />
        <SecondTittle> Nome </SecondTittle>
        <Description> descrição </Description>
        <Button>View Details</Button>
      </Card>
      <Card>
        <img src="https://i.pinimg.com/736x/2e/d8/82/2ed882694fd3a93d3a96e08c0cf785ee.jpg" alt="" />
        <SecondTittle> Nome </SecondTittle>
        <Description> descrição </Description>
        <Button>View Details</Button>
      </Card>
      <Card>
        <img src="https://i.pinimg.com/736x/2e/d8/82/2ed882694fd3a93d3a96e08c0cf785ee.jpg" alt="" />
        <SecondTittle> Nome </SecondTittle>
        <Description> descrição </Description>
        <Button>View Details</Button>
      </Card>
      <Card>
        <img src="https://i.pinimg.com/736x/2e/d8/82/2ed882694fd3a93d3a96e08c0cf785ee.jpg" alt="" />
        <SecondTittle> Nome </SecondTittle>
        <Description> descrição </Description>
        <Button>View Details</Button>
      </Card>
    </Container>
  )
}

export default App
