import { createContext,useReducer } from "react";
import githubReducer from "./GitHubReducer";

const GitHubContext = createContext();

export const GitHubProvider = ({children}) => {
    // const [users,setUsers] = useState([])
    // const [loading,setLoading] = useState(true)
    const initialState = {
        users : [],
        user: {},
        repos : [],
        loading : false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    

    //Get initial users (testing purposes)
    // const fetchUsers = async () =>{
    //     setLoading();
    //     let response = await fetch(`${GITHUB_URL}/users`,{
    //         headers: {
    //             Authorization : `token ${GITHUB_TOKEN}`,
    //         }
    //     })

    //     let data = await response.json();
    //     // setUsers(data);
    //     // setLoading(false);
    //     dispatch({
    //         type : "GET_USERS",
    //         payload : data,
    //     })
    // }


   

    //Set Loading
    // const setLoading = () => {
    //     dispatch({type:'SET_LOADING'})
    // }

    //Clear Users
    // const clearUsers = () =>{
    //     dispatch({
    //         type : "CLEAR_USERS"
    //     })
    // }


    return <GitHubContext.Provider value={{...state, dispatch}}>
        {children}
    </GitHubContext.Provider>

}

export default GitHubContext;