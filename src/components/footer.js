const Footer = () => {
  return (
    <footer className="footer-shadow sticky bottom-0 h-20 bg-gray-500 flex justify-around items-center">
      <FooterLogo imageName="house.svg" text="ראשי" alt="main page" />
      <FooterLogo imageName="card.svg" text="מפות" alt="payment page" />
      <FooterLogo
        imageName="right-arrow.svg"
        text="תרגומים"
        alt="transfers page"
      />
      <FooterLogo
        imageName="wallet.svg"
        text="גיוס כספים"
        alt="fundraising page"
      />
    </footer>
  );
};

const FooterLogo = ({ imageName, text = "", isActive = false, alt }) => {
  return (
    <div className="flex flex-col justify-between items-center h-full pt-5 pb-3">
      <img
        className="relative top-1 max-w-[26px] max-h-[24px]"
        src={`/${imageName}`}
        alt={alt}
      />
      <span className={`${isActive ? "text-blue" : "text-gray"}`}>{text}</span>
    </div>
  );
};

export default Footer;
