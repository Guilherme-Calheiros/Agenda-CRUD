import React, { useRef } from "react"
import InputArea from "./inputArea";

const Form = ({ onEdit }) => {
    const ref = useRef();

    return (
        <form className=" flex flex-col items-end gap-5 flex-wrap bg-white p-5 rounded-s-md shadow-sm shadow-[#ccc] md:flex-row" ref={ref}>
            <InputArea labelName='Nome' inputName='nome'/>
            <InputArea labelName='Email' inputName='email' type='email'/>
            <InputArea labelName='Endereço' inputName='endereco'/>
            <InputArea labelName='Telefone' inputName='telefone'/>
            <InputArea labelName='Data de nascimento' inputName='dt_nascimento' type="date"/>

            <button className="p-3 cursor-pointer rounded-md border-none bg-[#2c73d2] text-white h-11" type="submit">SALVAR</button>
        </form>
    )
}

export default Form