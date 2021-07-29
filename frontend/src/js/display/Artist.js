export function DisplayArtistList(artists)
{
    return `
        <h1>Artists list</h1>
        <ol>
            ${artists.map(artist => {
                return `
                    <li class="artist_page" id="${artist.id}">
                    ${artist.name}</li>
                `;
            }).join('')}
        </ol>

        <section class="ArtistForm">
            <button id="CreateArtistButton">Create an artist</button>
            <div id="CreateArtistDiv"></div>
        </section>
    `;
}
export function DisplaySingleArtist(artist)
{
    //console.log(((artist===undefined)?"Yes":"No"));
    if(artist.albums == null){
        artist.albums = [];
    }

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
        <button id="UpdateArtistButton">Edit artist</button>
        <button id="DeleteArtistButton">Delete artist</button>
    </section>

    <div id="UDArtistDiv"></div>
    `;
}