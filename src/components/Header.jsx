import React from 'react';
import user from '../images/user.png';
import style from '../componentStyles/Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header_name">
                <h2>Israel Guru</h2>
            </div>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img className="user-icon" src={user} />
                </button>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li>
                        <a className="dropdown-item" href="#">
                            Sign in
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Sign up
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
