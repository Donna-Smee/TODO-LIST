export function sendServerError(error, res){
    console.log(error.message);
    res.status(500).send({message: error.message});
}