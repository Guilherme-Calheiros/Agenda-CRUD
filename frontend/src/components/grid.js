import React from "react"
import axios from "axios"
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"
import TableHeader from "./tableHeader"
import TableData from "./tableData"


const Grid = ({ records, setRecords, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item)
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/" + id)
            .then(({data}) => {
                const newArray = records.filter((record) => record.id !== id)
                
                setRecords(newArray)
                toast.success(data)
            })
            .catch(({data}) => toast.error(data))
        setOnEdit(null)
    }

    return (
        <div className="w-full bg-white p-5 shadow rounded max-w-4xl mx-auto my-5 overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        <TableHeader content="Nome"/>
                        <TableHeader content="Email"/>
                        <TableHeader content="Endereço"/>
                        <TableHeader content="Telefone"/>
                        <TableHeader content=""/>
                        <TableHeader content=""/>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, i) => (
                        <tr key={i}>
                            <TableData content={item.nome} w="25%"/>
                            <TableData content={item.email} w="25%"/>
                            <TableData content={item.endereco} w="25%"/>
                            <TableData content={item.telefone} w="15%"/>
                            <TableData onclick={() => handleEdit(item)} content={<FaEdit/>} align="center" w="5%" cursor="pointer"/>
                            <TableData onclick={() => handleDelete(item.id)} content={<FaTrash/>} align="center" w="5%" cursor="pointer"/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Grid