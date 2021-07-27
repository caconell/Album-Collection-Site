export default function Song(song)
{
    return`

    <h1>Song Information</h1>

    <div ><strong>Song Name:</strong> ${song.name}</div>
    <div><strong>Album:</strong> ${song.album.name}</div>
    <div><strong>Artist:</strong> ${song.album.artist.name}</div>
    <div><strong>Duration:</strong> ${song.duration}</div>
    <div><strong>Link:</strong> ${song.link}</div>

    <section class="SongForm">
            <button id="EditSongButton">Edit Song</button>
            <button id="DeleteSongButton">Delete Song</button>
        </section>
    `;
}