
const Comment = ({data, handleDeleteComment, id}) => {

    const handleClick = () => {
        handleDeleteComment(id)
    }

    return(
        <div className="shadow p-5 mt-3 rounded">
            <h1>
                <button onClick={handleClick} className="mx-2 text-red-500">X</button>
                {data}</h1>
        </div>
    )
}

export default Comment;