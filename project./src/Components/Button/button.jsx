import { Component } from "react"
import './button.css'

export class button extends Component {
    render() {
        const { text, onClick, disabled } = this.props
        return (
            <button 
            className="button" 
            nClick={onClick}
            disabled={disabled}>
                {text}
            </button>
        )

    }
}