import React, { Component } from "react"

export default class FilmListing extends Component {
    
    render() {
        let allFilms = this.props.films.map(f => {
            return
        })
        return (
            <div className="film-list"> 
          <h1 className="section-title">FILMS</h1>
          {this.props.films[0].title}
        </div>
        )
    }
}