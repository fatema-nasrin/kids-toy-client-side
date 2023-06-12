import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src="/public/logo2.png" className="h-24 w-auto" alt="" />
          <p>
            KHELNAGHOR Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Payment Methods</span>
          <div>
            <img src="/src/assets/Bkash-logo.png" className="h-20 w-auto" alt="" />
            <img src="/src/assets/Nagad.png" className="h-20 w-24" alt="" />
            <img src="/src/assets/rocket.png" className="h-12 w-auto" alt="" />
          </div>
        </div>
        <div>
          <span className="footer-title">verified by</span>
          <img src="/src/assets/adfix.png" className="h-12 w-auto" alt="" />
          <img src="/src/assets/dazzler.jpg" className="h-12 w-auto" alt="" />
          <img src="/src/assets/unilever.jpg" className="h-12 w-auto" alt="" />
        </div>
        <div>
          <span className="footer-title">Sponsors</span>
          <div className="grid grid-cols-2 items-center">
          <img src="/public/sponsor1.png" alt="" />
          <img src="/public/sponsor2.png" alt="" />
          <img src="/public/sponsor3.png" alt="" />
          <img src="/public/sponsor4.png" alt="" />
          </div>
        </div>
       
      </div>

      <div className="p-10 bg-base-200 text-base-content flex justify-center">
        <a className="mx-5" href="">
          <FaFacebook className="h-12 w-12" />{" "}
        </a>
        <a className="mx-5" href="">
          <FaInstagram className="h-12 w-12" />{" "}
        </a>
        <a className="mx-5" href="">
          <FaTwitter className="h-12 w-12"  />{" "}
        </a>
      </div>

      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
