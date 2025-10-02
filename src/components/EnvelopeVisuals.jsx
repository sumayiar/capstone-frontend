import React, {useEffect, useState} from "react";
import "../styles/EnvelopeVisuals.css";
import ThemeToggle from "./ThemeToggle.jsx";

const bills = [1, 5, 10, 20, 50, 100];

export default function EnvelopeVisuals({setCurrentPage}){
    return(

        <div className="container">
            <header className = "header">
                <div
                    className="brand"
                    onClick={() => setCurrentPage("home")}
                >
                    <img
                        src="/cat-envelope.jpg"
                        alt="Cashvelo logo"
                        className="logo-img"
                        style={{height: "40px",width:"40px",borderRadius:"8px"}}
                    />
                    <div>Cashvelo</div>
                </div>
                <ThemeToggle/>
            </header>

            <main className="main">
                <div className="envelope-visuals-container">
                    <h1 className="page-title">Select a Bill</h1>
                    <div className="bills-grid">
                        {bills.map((bill) =>(
                            <div key={bill} className="bill-card">
                                 <p className="bill-amount">${bill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
        );
    }
