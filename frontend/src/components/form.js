import React, { useRef, useEffect } from "react"
import axios from "axios";
import { toast } from "react-toastify";
import InputArea from "./inputArea";

const Form = ({ onEdit, setOnEdit, getRecords }) => {
    const ref = useRef();

    useEffect(() => {
        if(onEdit){
            const record = ref.current

            record.nome.value = onEdit.nome
            record.email.value = onEdit.email
            record.endereco.value = onEdit.endereco
            record.telefone.value = onEdit.telefone
            record.dt_nascimento.value = onEdit.dt_nascimento
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const record = ref.current
        if(
            !record.nome.value ||
            !record.email.value ||
            !record.endereco.value ||
            !record.telefone.value ||
            !record.dt_nascimento.value
        ){
            return toast.warn("Preencha todos os campos.")
        }

        if(onEdit){
            await axios
                .put("http://localhost:8800/" + onEdit.id, {
                    nome: record.nome.value,
                    email: record.email.value,
                    endereco: record.endereco.value,
                    telefone: record.telefone.value,
                    dt_nascimento: record.dt_nascimento.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data))
        } else {
            await axios
                .post("http://localhost:8800", {
                    nome: record.nome.value,
                    email: record.email.value,
                    endereco: record.endereco.value,
                    telefone: record.telefone.value,
                    dt_nascimento: record.dt_nascimento.value,   
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data))
        }

        record.nome.value = ''
        record.email.value = ''
        record.endereco.value = ''
        record.telefone.value = ''
        record.dt_nascimento.value = ''

        setOnEdit(null)
        getRecords()
    }

    return (
        <form className=" flex flex-col items-end gap-5 flex-wrap bg-white p-5 rounded-s-md shadow-sm shadow-[#ccc] md:flex-row" ref={ref} onSubmit={handleSubmit}>
            <InputArea labelName='Nome' inputName='nome'/>
            <InputArea labelName='Email' inputName='email' type='email'/>
            <InputArea labelName='Endereço' inputName='endereco'/>
            <InputArea labelName='Telefone' inputName='telefone'/>
            <InputArea labelName='Data de nascimento' inputName='dt_nascimento'/>

            <button className="p-3 cursor-pointer rounded-md border-none bg-[#2c73d2] text-white h-11" type="submit">SALVAR</button>
        </form>
    )
}

export default Form