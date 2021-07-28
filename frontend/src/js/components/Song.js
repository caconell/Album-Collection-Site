export default function Song(song)
{
    return `

    <h1>Song Information</h1>

    <div><strong>Song Name:</strong> ${song.name}</div>
    <div><strong>Album:</strong> ${song.album.name}</div>
    <div><strong>Artist:</strong> ${song.album.artist.name}</div>
    <div><strong>Duration:</strong> ${Math.floor( (song.duration/3600) )+":"+TrailingZeroes(Math.floor( ((song.duration/60)%60) ),2)+":"+TrailingZeroes(Math.floor( ((song.duration/1)%60) ),2)}</div>
    <div><strong>Link:</strong> ${song.link}</div>

    <section class="SongForm">
            <button id="EditSongButton">Edit Song</button>
            <button id="DeleteSongButton">Delete Song</button>
        </section>
    `;
}