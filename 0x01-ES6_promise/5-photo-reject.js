export default function uploadphoto(fileName){
    return Promise.reject(new Error(`${fileName} cannot be processed`));
}