import video from "/public/about blank video.mp4"
import Logo from "/public/1percentLogo.png"
import Button from "./components/Button";
function Welcome({ handleClick }) {
  return (
    <div className="welcome grid place-items-center">
      <video autoPlay muted loop id="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content grid place-items-center">
        <img className="h-[55px] sm:h-[70px] md:h-[80px]" src={Logo} alt="1percent logo" />
        <a href="/Home">
         <Button handleClick={handleClick}/>
        </a>
      </div>
      <p className="absolute bottom-2 text-center text-xl font-Truculenta font-bold">© 2024  1percent everyday</p>
    </div>
  );
}

export default Welcome;
