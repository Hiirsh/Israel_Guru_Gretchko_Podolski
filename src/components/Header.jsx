import React from 'react';

export default function Header() {
    return (
        <div>
            <div>
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
                    <img src="#" />
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
        </div>
    );
}
