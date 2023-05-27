import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src="/public/logo.png" className="h-24 w-auto" alt="" />
          <p>
            MUSIKIDDOS Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
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
