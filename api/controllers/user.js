import { db } from '../db.js'

export const getRecords = (_, res) => {
    const q = "SELECT * FROM registro"

    db.query(q, (err, data) =>{
        if (err) {
            return res.json(err)
        }

        return res.status(200).json(data)
    })
}

export const addRecord = (req, res) => {
    const q = "INSERT INTO registro(`nome`, `email`, `endereco`, `telefone`, `dt_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.endereco,
        req.body.telefone,
        req.body.dt_nascimento,
    ]

    db.query(q, [values], (err) => {
        if (err) {
            return res.json(err)
        }

        return res.status(200).json("Registro criado com sucesso.")
    })
}

export const updateRecord = (req, res) => {
    const q = "UPDATE registro SET `nome` = ?, `email` = ?, `endereco` = ?, `telefone` = ?, `dt_nascimento` = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.endereco,
        req.body.telefone,
        req.body.dt_nascimento,
        req.params.id,
    ]

    db.query(q, [...values], (err) => {
        if (err) {
            console.log("o erro ta aqui fi")
            return res.json(err)
        }

        return res.status(200).json("Registro atualizado com sucesso.")
    })
}

export const deleteRecord = (req, res) => {
    const q = "DELETE FROM registro WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if (err) {
            return res.json(err)
        }

        return res.status(200).json("Registro deletado com sucesso.")
    })
}