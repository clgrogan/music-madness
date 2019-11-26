import React from 'react'

import data from './data/performers.json'

const Performers = props => {
  const band = data.performers.filter(item => {
    return item.performer === props.match.params.performer
  })[0]
  console.log(band)
  return (
    <>
      <main className="main-section">
        <section className="title-section">
          <h1>One of the Top Bands Ever is...</h1>
          <h1 className="band-title">{band.performer}</h1>
          <h2 className="quick-bio">{band.quickbio}</h2>
          <img
            src={band.albums[0].imageurl}
            className="band-image"
            alt={band.albums[0].imageinfo}
          />
        </section>
        <section className="album-info">
          <h1 className="album-title">Best Album: {band.albums[0].title}</h1>
          <ul className="album-details">
            <li>Release Date: {band.albums[0].released}</li>
            <li>Label: {band.albums[0].label}</li>
            <li>Release Formats: {band.albums[0].formats}</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Performers
