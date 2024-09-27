import { FunctionComponent } from "react";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return ( <>
        <div className="d-flex justify-content-center">
            <img src="homeImage.jpg" alt="hero image for the app" />
        </div>
    </> );
}
 
export default Home;