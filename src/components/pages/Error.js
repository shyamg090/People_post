import { useRouteError } from "react-router-dom";

const Error = () =>{

    const err = useRouteError();
    console.log(err);

    return (
        <>
        <h1>
            {err.statusText} OOPs seems there was a error {err.status}
        </h1>
        </>
    )
}

export default Error;