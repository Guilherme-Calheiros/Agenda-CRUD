const TableData = ({content , align , w, cursor, onclick }) => {
    return (
        <td className="pt-4 p-3" style={{alignItems: align ? "center" : "start", width: w ? w : "auto", cursor: cursor ? cursor : "defalt"}} onClick={onclick}>
            {content}
        </td>
    )
}

export default TableData