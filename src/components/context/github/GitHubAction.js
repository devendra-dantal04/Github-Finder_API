import axios from "axios";


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


const github = axios.create({
    baseURL : GITHUB_URL,
    headers : {Authorization : `token ${GITHUB_TOKEN}`}
})

 //Get Search Result
 export const searchResult = async (text) =>{

    const params = new URLSearchParams({
        q:text
    })

    const response = await github.get(`/search/users?${params}`)
    return response.data.items


 
    // Old Verison : 
    // let response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
    //     headers: {
    //         Authorization : `token ${GITHUB_TOKEN}`,
    //     }
    // })

    // let {items} = await response.json();
    // setUsers(data);
    // setLoading(false);
    // dispatch({
    //     type : "GET_USERS",
    //     payload : items,
    // })
    // return items;
}




export const getUserAndRepos = async (login) =>{
    const [user,repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`),
    ])

    return { user : user.data, repos : repos.data}
}













//OLD VERSION :
 //get single user
//  export const getUser = async (login) =>{

//     let response = await fetch(`${GITHUB_URL}/users/${login}`,{
//         headers: {
//             Authorization : `token ${GITHUB_TOKEN}`,
//         }
//     })
    

//     if(response.status === 404){
//         window.location = '/notfound'
//     }else{
//         const data = await response.json();
//         return data;
//         // dispatch({
//         //     type : "GET_USER",
//         //     payload : data,
//         // })
//     }

    
// }

// //Get User Repos
// export const getUserRepos = async (login) =>{
//     let response = await fetch(`${GITHUB_URL}/users/${login}/repos`,{
//         headers: {
//             Authorization : `token ${GITHUB_TOKEN}`,
//         }
//     })
    
//     const data = await response.json();
//     // dispatch({
//     //     type : "GET_USER_REPOS",
//     //     payload : data,
//     // })
//     return data;
// }