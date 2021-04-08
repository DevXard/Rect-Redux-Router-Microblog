import {useState} from "react";

const Form = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        body: ''
    });

    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return(
        <div className="shadow rounded-lg">
            
            <form className=" p-8">
            <h1 className="text-2xl">New Post</h1>
            <label htmlFor="title">Title</label>
                <input
                onChange={handleChange}
                id="title"
                name="title"
                value={formData.title}
                className="border rounder-lg leading-tight focus:outline-none focus:shadow-outline py-2 px-3 m-1 text-gray-500 shadow appearance-none w-full"
                type="text"/>
                <label htmlFor="description">Description</label>
                <input 
                onChange={handleChange}
                id='description'
                name='description'
                value={formData.description}
                className="border rounder-lg leading-tight focus:outline-none focus:shadow-outline py-2 px-3 m-1 text-gray-500 shadow appearance-none w-full"
                type="text"/>
                <label htmlFor="body">Body</label>
                <textarea 
                onChange={handleChange}
                id='body'
                name="body"
                value={formData.body}
                className="border rounder-lg leading-tight focus:outline-none focus:shadow-outline py-2 px-3 m-1 text-gray-500 shadow appearance-none w-full"
                rows="10"
                cols="50"
                />
                <button className='bg-blue-400 px-3 py-1 rounded mx-1'>Save</button>
                <button className='bg-gray-400 px-3 py-1 rounded mx-1'>Cancel</button>
            </form>
        </div>
    )
}

export default Form;