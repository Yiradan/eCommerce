import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from "./Navbar";

export default function About(props){

    const navbarStyle = {backgroundColor: "rgb(13,13,13)"}

    return (
        <>
            <div className="about">
                <div className="aboutContent">
                    <div className="images">
                        <img style={{top: "0", left: "0"}} src='/img/me1.jpg' alt='me1' />
                        <img style={{right: "0", bottom: "0"}} src='/img/me2.jpg' alt='me2' />
                    </div>
                    <div className="text">
                        <h2 style={{color: "white", paddingLeft: "15px"}}>Hiii.</h2>
                        <br />
                        <h4 className='bemutatkozo'>I'm Beni. First of all, I'm really glad you came across this little project, which I designed to make my job search easier. This year (in 2023) I completed a three-year training course at a private university called "UVVG". With this simple project, I wanted to reflect the little bit of knowledge I have recently acquired while learning React.JS. You may find things in it that could have been done nicer, more thoroughly or more simply, please overlook these for me as a beginner. :)</h4>
                        <br/>
                        <h4>Below are some of my contact details, feel free to click on them:</h4>
                        <br/>
                        <div className="contact">
                            <a rel='noopener noreferrer' target="_blank" href="https://api.whatsapp.com/send?phone=40775205011"><img alt='snapchat' src='/img/whatsapp.png'></img></a>
                            <a rel='noopener noreferrer' target="_blank" href="https://github.com/Yiradan"><img alt='github' src='/img/github.png'></img></a>
                            <a rel='noopener noreferrer' target="_blank" href="https://www.snapchat.com/add/kaaywyth?share_id=yODBae1DuPQ&locale=en-US"><img alt='snapchat' src='/img/snapchat.png'></img></a>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar
                cart={props.cart}
                favoritesList={props.favoritesList}
                navbarStyle={navbarStyle}
            />
        </>
    )
}