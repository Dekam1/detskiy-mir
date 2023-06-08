import React from "react";
import axios from "axios";
import Header from "../containers/header/Header";

export default function Main() {
    return (
        <>
            <Header />
            <main className="main">
                <ul className="cards">
                    <li className="card">
                        <article>

                        </article>
                    </li>
                </ul>
            </main>
        </>
    )
}