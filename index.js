import cors from 'cors'
import express, { request, response } from 'express'
import bcrypt from 'bcrypt'
import {v4 as ale} from 'uuid'
// import { validateOptions } from 'sucrase/dist/types/Options'

//instancia do express
const app = express()
app.use(express.json());

// app.get('/', (request, response) => {
//     response.send('Olá, express!')
// })

// const users = [
//     { id: 1, name: 'alice', avaliable: true },
//     { id: 2, name: 'bob', avaliable: false },
//     { id: 3, name: 'carol', avaliable: true }
// ]

// app.get('/users', (request, response) => {
//     if (users.length === 0) {
//         return response.status(404).json({
//             message: 'Nehum usurio encontrado.'
//         })
//     }

//     return response.json(users);
// })

// app.post('/users', (request, response) => {
//     // const name = request.body.name
//     // const avaliable = request.body.avaliable

//     const { name, avaliable } = request.body

//     if (!name) {
//         return response.status(400).json({
//             message: 'Nome de usuario é obrigatorio'
//         })


//     }
//     const newUser = {
//         id: users.length + 1,
//         name,
//         avaliable: avaliable ?? true
//     }
//     users.push(newUser)


//     return response.status(201).json({
//         message: 'Usuario cadastrado com sucesso.',
//         user: newUser
//     })
// }
// )

// app.put('/users/:id', (req, res) => {
//     const { id } = req.params
//     const { name, avaliable } = req.body

//     const user = users.find(user => user.id === parseInt(id))

//     if (!user) {
//         return res.status(404).json({
//             message: 'usuario nao encotrado'
//         })
//     }

//     user.name = name;
//     user.avaliable = avaliable;

//     return res.status(200).json({
//         message: 'usuario atualizado com sucesso.',
//         user;
//     })
// })


const adminUsers = [];
//Cadastrar usuario
app.post('/signup', async (request, response) => {
    try {
        const { username, password } = request.body

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = adminUsers.find(user => user.username === username);

        if (existingUser) {
            return response.status(400).json({
                message: 'Usuario já existe'
            })
        }

        const newUser = {
            id: ale(),
            username,
            password: hashedPassword
        }

        adminUsers.push(newUser);

        return response.status(201).json({
            message: 'Admin criado..',
            newUser
        })

    } catch (error) {
        response.status(500).json({
            message: 'Erro ao registrar admin.'
        })
    }
})
//Login
app.post('/login', async (request, response) => {
    try {
        const { username, password } = request.body;

        const user = adminUsers.find(user => user.username === username);

        if (!user) {
            return response.status(404).json({
                message: "Admin nao encontrado."
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return response(400).json({
                message: 'Credenciais inválidas'
            })
        }

        return response.status(200).json({
            message: 'Login efetuado'
        })

    } catch (error) {
        response.status(500).json({
            message: 'Usuario invalido.'
        })
    }
})

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})
















// app.use(cors())
// app.use(cors({
//     origin: ['http://example.com/', 'http://seufrontend.com/']
// }))