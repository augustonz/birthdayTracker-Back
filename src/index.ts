import server from './server';
import dotenv from 'dotenv';

//dotenv.config();

server.listen(process.env.PORT, () => {
    console.log(`Server Up at http://localhost:${process.env.PORT}`);
});