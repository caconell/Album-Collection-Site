export default function Artist(artist)
{
    return `

    <h1>Artist Information</h1>

    <div><strong>Artist Name:</strong> ${artist.name}</div>
    <div><strong>Age:</strong> ${artist.age}</div>
    <div><strong>Hometown:</strong> ${artist.hometown}</div>
    <div><strong>Biography:</strong> ${artist.biography}</div>
    <div><strong>Albums: </strong>
    
    <ul>${artist.albums.map(album => {
        return `
            <li class="album_page" id ="${album.id}">
            ${album.name}</li>
        
        `;
    }).join('')}
    </ul></div>

    <section class="ArtistForm">
            <button id="EditArtistButton">Edit artist</button>
            <button id="DeleteArtistButton">Delete artist</button>
        </section>
    `;
}