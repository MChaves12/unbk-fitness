import logo from "../../assets/images/UNBK-removebg-preview.png";
import insta from "../../assets/images/instagram.png";
import face from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.png";
import appleStore from "../../assets/images/appleStore.png";
import googlePlay from "../../assets/images/googlePlay.png";

function FooterSocial() {
  return (
    <div className="w-[465px] h-[192px] flex flex-col justify-between px-10">
      <img className="w-[125px] h-[56px]" src={logo} alt="Unbk logo" />
      <div className="w-[120px] h-[32px] flex justify-around">
        <div className="w-[32px] h-[32px] bg-cover border-2 border-black rounded-2xl">
          <img src={insta} alt="instagram logo" />
        </div>
        <div className="w-[32px] h-[32px] bg-cover border-2 border-black rounded-2xl">
          <img src={face} alt="facebook logo" />
        </div>
        <div className="w-[32px] h-[32px] bg-cover border-2 border-black rounded-2xl">
          <img src={youtube} alt="youtube logo" />
        </div>
      </div>
      <div className=" w-[315px] flex justify-between">
        <div className="w-[150px] h-[72px] bg-cover">
          <img src={googlePlay} alt="Google Play" />
        </div>
        <div className="w-[150px] h-[72px] bg-cover">
          <img src={appleStore} alt="Apple Store" />
        </div>
      </div>
    </div>
  );
}

export default FooterSocial;
