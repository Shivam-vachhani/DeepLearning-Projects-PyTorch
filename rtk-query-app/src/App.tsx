import "./App.css";
import { useGetbooksQuery, useGetbookByFeildQuery } from "./services/bookApi";

function App() {
  const { data } = useGetbooksQuery();
  const books = data?.data;
  return (
    <>
      {books?.map((book: any) => {
        return <p key={book._id}>{book.bookName}</p>;
      })}
      <span>{<GetBookdeatils feild="bookISBN" value={9781538732199} />}</span>
    </>
  );
}

export const GetBookdeatils = ({
  feild,
  value,
}: {
  feild: string;
  value: number | string;
}) => {
  const { data } = useGetbookByFeildQuery({ feild, value });
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
export default App;
