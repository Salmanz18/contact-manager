import { useContactsQuery, useGetContactDetailsByIdMutation } from './services/Api/Api';

const App = () => {
  const { data, error, isLoading, isSuccess } = useContactsQuery();
  const [getContactDetails, getContactDetailsStatus] = useGetContactDetailsByIdMutation();

  const onViewDetailsClick = (id: string) => {
    getContactDetails(id);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="font-extrabold">Contact Manager 🎮</div>
      <div className="mt-5 font-semibold">Contact List</div>
      {isLoading && <h2>...Loading</h2>}
      {error && <h2>Something went wrong!</h2>}
      {isSuccess && (
        <div className="mt-2">
          {data?.map((contact) => {
            return (
              <div className="flex" key={contact.id}>
                <p>{contact.name}</p>
                <button
                  id={contact.id}
                  className="border border-gray-400 rounded shadow ml-2"
                  onClick={() => onViewDetailsClick(contact.id)}
                >
                  view detaills
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-5 font-semibold">Contact Details</div>
      <div>{getContactDetailsStatus.data?.name}</div>
    </div>
  );
};

export default App;
