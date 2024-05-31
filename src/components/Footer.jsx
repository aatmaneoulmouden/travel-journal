const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <div className="container">
        <p className="text-center text-cool-gray text-sm pb-4 font-light">&copy; {currentYear} Aatmane Oulmouden. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
