import { useEffect, useState } from "react";

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://localhost:5001/api/login")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setToken(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {"feil"}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <ul>correct</ul>
        // <ul>
        //   {user.map(users => (
        //     <li key={user.id}>
        //       {item.name} {item.price}
        //     </li>
        //   ))}
        // </ul>
      );
    }
  }