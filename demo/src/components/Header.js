import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <Link to="/jokes"> Jokes </Link>
                <br />
                <br />
                <br />
                <Link to="/charts"> Charts </Link>
            </header>
        )
    }
}