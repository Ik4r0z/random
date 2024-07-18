import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
app.use(express.json())

const prisma = new PrismaClient()

//criar user
app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(200).json(req.body)
})

//listar user
app.get('/users', async (req, res) => {
    let users = []
    
    if(req.query) {
        users = await prisma.user.findMany({
            where: {
                email: req.query.email,
                nome: req.query.nome,
                idade: req.query.idade
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    res.status(201).json(users)
})

//editar um user
app.put('/users/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(202).json(req.body)
})

//deletar um user
app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(203).json({ message: 'Ok, delete!' })
})

app.listen(3000)