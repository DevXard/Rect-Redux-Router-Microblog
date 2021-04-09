
const Comment = ({data}) => {

    return(
        <div className="shadow p-5 mt-3 rounded">
            <h1>
                <button className="mx-2 text-red-500">X</button>
                {data}</h1>
        </div>
    )
}

export default Comment;