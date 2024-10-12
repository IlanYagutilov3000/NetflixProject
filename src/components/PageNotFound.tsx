import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface PageNotFoundProps {

}

const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
    let navigate = useNavigate()
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <button className="btn btn-primary me-3" onClick={() => navigate(-1)}>Back</button>
            <button className="btn btn-warning" onClick={() => navigate("/home")}>Home</button>
        </>);
}

export default PageNotFound;