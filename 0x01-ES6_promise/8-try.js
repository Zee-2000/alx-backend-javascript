export default function divideFunction(numerator, denomiantor){
    if(denomiantor == 0){
        throw Error("Can't divide by zero")
    }
    else{
        return numerator / denomiantor;
    }
}