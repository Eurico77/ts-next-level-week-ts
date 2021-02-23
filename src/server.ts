import express from 'express'
const server = express();
const PORT = 4040


server.listen(PORT, () => {
    console.log(`server iniciado na porta ${PORT}`);
    
})
