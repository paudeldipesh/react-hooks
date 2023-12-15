import useFetch from "./hooks/useFetch";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export default function App() {
  const fetchUsers = "https://jsonplaceholder.typicode.com/users";

  const users = useFetch(fetchUsers) as User[];

  return (
    <>
      {users.map((response) => {
        return (
          <h4 key={response.id}>
            {response.id}. {response.name}
          </h4>
        );
      })}
    </>
  );
}
