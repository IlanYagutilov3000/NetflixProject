import { FunctionComponent } from "react";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <>
            <div className="container text-center">
                <img src="profilePicture.png" alt="developer pciture" style={{ width: "150px" }} />
                <h3>Ilan Yagotilov</h3>
                <span>software engineer</span>
                <p>Ilanyagotilov191@gmail.com</p>
                <p>	&copy; All rights resvered</p>
            </div>
        </>);
}

export default About;