import logo from '../../../assets/logo (2).png';

const Footer = () => {
    return (
        <div>
  <footer className="footer footer-center p-4 bg-purple-500 text-primary-content rounded-2xl">
  <aside>
    <img src={logo} alt="" />
    <p className="font-bold">
      ACME Industries Ltd. <br/>Providing reliable tech since 1992
    </p> 
    <p>FIVE Jumeirah Village © 2024 - All right reserved</p>
  </aside> 
 
</footer>
        </div>
    );
};

export default Footer;