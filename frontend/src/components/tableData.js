const TableData = ({content , align , w }) => {
    return (
        <td className="pt-4 p-3" style={{alignItems: align ? "center" : "start", width: w ? w : "auto"}}>
            {content}
        </td>
    )
}

export default TableData