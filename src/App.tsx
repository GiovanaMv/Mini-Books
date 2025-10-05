import { useEffect, useState, type SetStateAction } from 'react';
import { Container, Card, Imagem, SecondTittle, Description, Button, Loader, LoaderWrapper } from "./styles"
import { fetchBooks } from "./services/api";
import Header from './components/Header';

type Book = {
  id: string;
  image: string;
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

 
  if (carregando) {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
}
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <>
     <Header onBuscarPorNome={(nome: SetStateAction<string>) => setNomeBusca(nome)} />
      {livrosFiltrados.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '2rem', color: 'white' }}>
          Livro não encontrado <span style={{ fontSize: '1.5rem' }}>😢</span>
        </p>
      ) : (
        <Container>
          {livrosFiltrados.map((book) => (
            <Card key={book.id}>
              <Imagem src={book.image} alt={book.titulo} />
              <SecondTittle>{book.titulo}</SecondTittle>
              <Description>{book.descricao}</Description>
              <Button target="blank" href={book.link}> ver detalhes </Button>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default App
