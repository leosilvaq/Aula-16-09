import express from 'express'

const app = express()

app.use(express.json())

const veiculos = [
    {
        id: 1,
        modelo: 'Civic',
        marca: 'Honda',
        ano: 2012,
        cor: 'Azul',
        preco: 40000
    },
    {
        id: 2,
        modelo: 'Fiesta',
        marca: 'Ford',
        ano: 2012,
        cor: 'Preto',
        preco: 35000
    },
    {
        id: 3,
        modelo: 'Type',
        marca: 'Fiat',
        ano: 2001,
        cor: 'Rosa',
        preco: 25000
    }
]

//puxar veiculos
app.get('/veiculos', (req, res) => {
    const { filtro } = req.query

    let veiculosFiltrados

    if (filtro === 'honda'.toLocaleLowerCase()) {
        veiculosFiltrados = veiculos.filter(veiculo => veiculo.marca === 'Honda')
    } else if (filtro === 'ford') {
        veiculosFiltrados = veiculos.filter(veiculo => veiculo.marca === 'Ford')
    } else if (filtro === 'fiat') {
        veiculosFiltrados = veiculos.filter(veiculo => veiculo.marca === 'Fiat')
    } else {
        veiculosFiltrados = veiculos
    }

    if (veiculosFiltrados.length === 0) {
        return res.status(404).json({
            message: 'nenhum veiculo encontrado.'
        })
    }

    return res.status(200).json({
        message: 'lista de veiculos',
        veiculosFiltrados
    })
})

app.listen(3333, () => {
    console.log('server rodando na porta 3333')
})

//Criar veiculos
app.post('/veiculos', (request, response) => {
    const { modelo, marca, ano, cor, preco } = request.body

    if (!modelo || !marca || !ano || !cor || !preco) {
        return response.status(400).json({
            message: 'Preechas todos os campos.'
        })
    }
    const newCar = {
        id: veiculos.length + 1,
        modelo,
        marca,
        ano,
        cor,
        preco
    }
    veiculos.push(newCar)


    return response.status(201).json({
        message: 'Carro cadastrado com sucesso.',
        user: newCar
    })
}
)