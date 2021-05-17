import axios from "axios";
//const baseUrl = "https://randomuser.me/api/?results=20?exc=login",
//allow user to change results parameter?
//should I use seeds instead so it's always the same group?

const getEmployees = () => {
    return axios.get("https://randomuser.me/api/?results=20&exc=login");
};

export default getEmployees;

