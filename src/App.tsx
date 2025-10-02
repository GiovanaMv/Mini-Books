import { useEffect, useState, type SetStateAction } from 'react';
import styled from 'styled-components';
import { fetchBooks } from "./services/api";
import Header from './components/Header';

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
  margin-top: 1rem;
  margin-bottom: 3px;
`;

const Description = styled.p`
  font-weight: 400;
  margin-top: 3px;
  margin-bottom: 12px;
  text-align: justify;
  padding: 6px;
`;

const Button = styled.a`
  cursor:pointer;
  text-decoration: none;
  color: white;
  background-color: rgba(145, 12, 138, 0.81);
  padding: 12px;
  margin-top: auto;
  border-radius: 18px;
  font-weight: bold;
  // transition: transform 0.3s ease;
  transform: translateY(1px);

  &:hover {
    transform: translate(-1px);
    box-shadow: black 2px 8px 13px;
  }
`;

type Book = {
  id: string;
  titulo: string;
  descricao: string;
  link: string;
};

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [nomeBusca, setNomeBusca] = useState<string>("");

  useEffect(() => {
    fetchBooks()
      .then((data) => {
        setBooks(data);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  const livrosFiltrados =  books.filter((book) =>
    book.titulo.toLowerCase().startsWith(nomeBusca.toLowerCase())
  );

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <>
     <Header onBuscarPorNome={(nome: SetStateAction<string>) => setNomeBusca(nome)} />
      {livrosFiltrados.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '2rem' }}>
          Livro não encontrado <span style={{ fontSize: '1.5rem' }}>😢</span>
        </p>
      ) : (
        <Container>
          {livrosFiltrados.map((book) => (
            <Card key={book.id}>
              <img
                src="https://i.pinimg.com/736x/2e/d8/82/2ed882694fd3a93d3a96e08c0cf785ee.jpg"
                alt={book.titulo}
              />
              <SecondTittle>{book.titulo}</SecondTittle>
              <Description>{book.descricao}</Description>
              <Button target="blank" href={book.link}>
                Ver detalhes
              </Button>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default App
