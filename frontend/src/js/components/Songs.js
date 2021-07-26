export default function Songs(songs)
{
    return `
        <h1>Songs list</h1>
        <ol>
            ${songs.map(song => {
                return `
                    <li>${song.name}</li>
                    <ul>
                        <li>Duration: ${song.duration}</li>
                        <li>Link: ${song.link}</li>
                    </ul>
                `;
            }).join('')}
        </ol>

        <section class="SongForm">
            <label>Song Name: </label>
            <input type="text" id="AddSong_Name_TextField" placeholder="Type here son."/><br/>
            <button id="AddSongButton">Create a song</button>
        </section>
    `;
}