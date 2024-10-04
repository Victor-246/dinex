import React from "react";
import {useRouteError} from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <>
        <h1>Error</h1>
        </>
    )
}