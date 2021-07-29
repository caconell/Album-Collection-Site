export function DisplaySongList(songs)
{
    return `
        <h1>Songs list</h1>
        <ol>
            ${songs.map(song => {
                return `
                    <li class="song_page" id ="${song.id}">${song.name}</li>
                   
                `;
            }).join('')}
        </ol>

        <section class="SongForm">
            `+/*<label>Song Name: </label>
            <input type="text" id="AddSong_Name_TextField" placeholder="Type here son."/><br/>*/`
            <button id="CreateSongButton">Create a song</button>
            <div id="CreateSongDiv"></div>
        </section>
    `;
}
export function DisplaySingleSong(song)
{
    return `

    <h1>Song Information</h1>

    <div><strong>Song Name:</strong> ${song.name}</div>
    <div><strong>Album:</strong> ${song.album.name}</div>
    <div><strong>Artist:</strong> ${song.album.artist.name}</div>
    <div><strong>Duration:</strong> ${Math.floor( (song.duration/3600) )+":"+TrailingZeroes(Math.floor( ((song.duration/60)%60) ),2)+":"+TrailingZeroes(Math.floor( ((song.duration/1)%60) ),2)}</div>
    <div><strong>Link:</strong> ${song.link}</div>

    <section class="SongForm">
        <button id="UpdateSongButton">Edit Song</button>
        <button id="DeleteSongButton">Delete Song</button>
    </section>

    <div id="UDSongDiv"></div>
    `;
}