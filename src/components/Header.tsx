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

function Header() {

  return (
    <HeaderContainer>
        <Titulo>
            Mini Books
        </Titulo>
    </HeaderContainer>
  )
}

export default Header
