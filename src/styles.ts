import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  place-content: center;
  margin-bottom: 3rem;
`;

export const Loader = styled.div`
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top: 6px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


export const Card = styled.div`
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
`;

export const Imagem = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
`;

export const SecondTittle = styled.h2`
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 3px;
`;

export const Description = styled.p`
  font-weight: 400;
  margin-top: 3px;
  margin-bottom: 12px;
  text-align: justify;
  padding: 6px;
`;

export const Button = styled.a`
  cursor:pointer;
  text-decoration: none;
  color: #ffffffff;
  background-color: rgba(145, 12, 138, 0.81);
  padding: 12px;
  margin-top: auto;
  border-radius: 18px;
  font-size: 1.1rem;
  font-family: "Inter", sans-serif;
  transform: translateY(1px);

  background: linear-gradient(135deg, #521586ff, #d8133eff);
  transition: background-position 0.5s ease;
  background-size: 200% 200%;

  &:hover {
    transform: translate(-1px);
    background-position: right center;
    box-shadow: 0 0 15px #ff6ec4;

  }

`;