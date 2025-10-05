export type Book = {
    id: string;
    image: string;
    titulo: string;
    descricao:string;
    link: string;
};

export async function fetchBooks(): Promise<Book[]> {
    const response = await fetch (
        "https://api-books-1-33np.onrender.com/api/books"
    );
    if (!response.ok) throw new Error("Erro ao buscar livros");
    return response.json();
}