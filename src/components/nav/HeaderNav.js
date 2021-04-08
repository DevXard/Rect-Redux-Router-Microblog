import {Link} from 'react-router-dom';

const HeaderNav = () => {

    return (
        <div className="bg-gray-100 h-40 w-3/4 flex justify-center flex-col m-2 rounded-md">
            <h1 className="text-4xl mx-3 my-1">Microblog</h1>
            <div>
            <p className="mx-3">Get in the Rithum of bloging</p>
            </div>
            <div className='mt-3'>
                <Link className='mx-3 text-blue-400' to='/'>Blog</Link>
                <Link className='mx-3 text-blue-400' to='/new'>Add new post</Link>
            </div>
        </div>
    )
}

export default HeaderNav;