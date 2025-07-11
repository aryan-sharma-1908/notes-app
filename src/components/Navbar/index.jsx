import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <header className='flex items-center border-b-2 border-gray-200 py-3'>
            <div className='h-15 w-15  rounded-full p-2 border-2 mx-2 hover:bg-indigo-800'>
                <img className='w-full h-full' src={logo} alt="logo" />
            </div>
            <h1 className="text-indigo-800 text-3xl font-bold">Notes</h1>
        </header>
    )
}

export default Navbar;