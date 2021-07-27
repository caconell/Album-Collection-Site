export default function Album(album)
{
    return`

    <h1>Album Information</h1>

    <div><strong>Album Name:</strong> ${album.name}</div>
    <div><strong>Artist:</strong> ${album.artist.name}</div>
    
    <div><strong>Songs: </strong>
    
    <ul>${album.songs.map(song => {
        return `
            <li class="song_page" id="${song.id}">
            ${song.name}</li>
        
        `;
    }).join('')}
    </ul></div>

    <section class="AlbumForm">
            <button id="EditAlbumButton">Edit album</button>
            <button id="DeleteAlbumButton">Delete album</button>
        </section>
    `;
}