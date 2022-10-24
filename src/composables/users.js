//import { useUserCredentials } from "../stores/useUser";

const useUsers = () => {
  //const store = useUserCredentials();
  const printmess = (jsonn) => {
    console.log(jsonn);
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  const addUser = (email_, username_, password_, fistname_, lastname_) => {
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: email_,
        username: username_,
        password: password_,
        name: {
          firstname: fistname_,
          lastname: lastname_,
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    })
      .then((res) => res.json())
      .then((json) => printmess(json));
  };
  const loginUser = (username_, password_) => {
    console.log(username_, password_);
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "kevinryan",
        password: "kev02937@",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return { addUser, loginUser };
};
export default useUsers;
