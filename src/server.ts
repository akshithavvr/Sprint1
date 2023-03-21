
// import bodyParser from 'body-parser'
import express from 'express';

const PORT = 2571;
//@ts-ignore
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Admin@1234",
    database: "hederadummydatabase",
    synchronize: true,
    logging: false,
    entities: [
        
    ],
})

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello everyone')
})

AppDataSource.initialize()
    .then(() => {
            console.log("Connection has been established successfully.");    
            app.listen(PORT, () => {
                console.log(`Server is running on port http://localhost:${PORT}`);
            })
    })
    .catch((error: any) => console.log(error))



 