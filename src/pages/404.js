import React from "react"
import catRainbow from '../images/cat_rainbow.gif'

export default function NotFoundPage(props) {
    return (
        <div className="not-found">
            <h2>Page not found!</h2>
            <img src={catRainbow} alt="cat on a rainbow" />
            <p><a href="/">Click for home</a></p>
        </div>
    )
}