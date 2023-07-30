import { useContactsQuery } from './services/Api/Api';

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();

  return (
    <div className="flex flex-column justify-center">
      <h1>Contact Manager - 🎮</h1>
      <p>Contact List</p>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Loading</h2>}
      {error && <h2>Something went wrong!</h2>}
      {isSuccess && (
        <div>
          console.log(data)
          {data?.map((contact) => {
            return <p key={contact.id}>{contact.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
