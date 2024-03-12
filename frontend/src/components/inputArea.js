const inputArea = ({ labelName, inputName, type='text' }) => {
    return (
        <div className="flex flex-col">
            <label>{labelName}</label>
            <input className="w-52 p-3 border divide-solid border-[#bbb]" name={inputName} type={type} />
        </div>
    )
}

export default inputArea