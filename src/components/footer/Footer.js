import FooterLegalLinks from "./FooterLegalLinks";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="h-[250px] flex justify-around items-center">
      <FooterSocial />
      <div className="w-[680px] h-[120px] flex flex-col items-end px-10 mt-28">
        <FooterLinks />
        <FooterLegalLinks /> 
      </div>
    </footer>
  );
}

export default Footer;
