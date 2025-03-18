//Axios
// powerful HTTP client that simplifies API calls in JavaScript applications

// post
//axios.post(URL, data)

//ex=
const useData = { name: "asasd", email: "asdasdd" };

const response = await axios.post("url link", userData); // i learnt here await can be used without async
console.log(response.data) 

//most of the time it is used in try catch block for error handling

const addUser = async (userData) => {
    try {
      const response = await axios.post("https://api.example.com/users", userData);
      console.log("User added:", response.data);
    } catch (error) {
      console.error("Error adding user:", error.response?.data || error.message);
    }
  };
  
  addUser({ name: "John Doe", email: "john@example.com" });

