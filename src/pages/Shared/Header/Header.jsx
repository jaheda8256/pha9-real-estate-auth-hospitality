import logo from '../../../assets/logo (2).png'

const Header = () => {
    return (
        <div className='flex items-center justify-center my-6'>
           <img src={logo} alt="" />
           <h1 className='text-6xl font-extrabold bg-gradient-to-r bg-300% from-purple-800 via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient'> FIVE Jumeirah Village</h1>
        </div>
    );
};

export default Header;