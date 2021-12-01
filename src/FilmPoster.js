import React, { Component } from 'react'

export default class FilmPoster extends Component {
    render() {
        const prefix = 'https://image.tmdb.org/t/p/w780/'
        const posterPath = this.props.filmInfo.poster_path
        const posterUrl = prefix + posterPath
        // console.log('this is the posterUrl\n', posterUrl)
        const intro = 'official movie poster of '
        const title = this.props.filmInfo.title
        const imgAlt = intro + title
        // console.log(imgAlt)
        return (
            <img src={posterUrl} alt={imgAlt} />
        )
    }
}