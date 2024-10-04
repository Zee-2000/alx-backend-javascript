export default function  handleREsponseFromAPI(promise){
    return promise 
    .then(()=>({staus : 200, body : success}))
    .catch(() => new Error())
    .finally(() => console.log("Got REsponse from API"))

}