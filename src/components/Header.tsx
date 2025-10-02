import styled from 'styled-components';

const HeaderContainer = styled.header`
   background: linear-gradient(
    to bottom,
    rgba(18, 0, 61, 1),     /* sólido */
    rgba(27, 0, 126, 0.5),   /* semi-transparente */
    rgba(255, 255, 0, 0)      /* totalmente transparente */
  );
    padding: 24px;
    text-align: center;
`;

const Titulo = styled.h1`
    font-size: 3rem;
    margin: 0px;
    font-family: "Nabla", sans-serif;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: default;
`;

const InputBusca = styled.input`
  margin-top: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  width: 250px;
  text-align: center;
`;


function Header({
   onBuscarPorNome } : {
    onBuscarPorNome: (nome: string) => void;
  }) {
    

    return (
      <HeaderContainer>
        <Titulo>Mini Books</Titulo>
      <InputBusca
        type="text"
        placeholder="Buscar livro"
        onChange={(e) => onBuscarPorNome(e.target.value)}
      />
    </HeaderContainer>
  );
}


export default Header
