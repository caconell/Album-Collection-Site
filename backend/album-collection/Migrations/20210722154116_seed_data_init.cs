using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace album_collection.Migrations
{
    public partial class seed_data_init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Artists",
                columns: new[] { "Id", "Age", "Biography", "Hometown", "Image", "Name", "RecordLabel" },
                values: new object[] { 1, 48, "AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. Their music has been variously described as hard rock, blues rock, and heavy metal, but the band themselves call it simply \"rock and roll\".", "Sydney, Australia", "", "ACDC", "Columbia" });

            migrationBuilder.InsertData(
                table: "Artists",
                columns: new[] { "Id", "Age", "Biography", "Hometown", "Image", "Name", "RecordLabel" },
                values: new object[] { 2, 31, "Pearl Jam is an American rock band formed in Seattle, Washington, in 1990. The band's line up consists of founding members Jeff Ament, Stone Gossard, Mike McCready, and Eddie Vedder, as well as Matt Cameron, who joined in 1998. Keyboardist Boom Gaspar has also been a touring/session member with the band since 2002.", "Seattle, Washington", "", "Pearl Jam", "Monkeywrench" });

            migrationBuilder.InsertData(
                table: "Artists",
                columns: new[] { "Id", "Age", "Biography", "Hometown", "Image", "Name", "RecordLabel" },
                values: new object[] { 3, 59, "The Rolling Stones are an English rock band formed in London in 1962. Diverging from the pop rock of the early-1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock.", "London, United Kingdom", "", "Rolling Stones", "Polydor" });

            migrationBuilder.InsertData(
                table: "Albums",
                columns: new[] { "Id", "ArtistId", "Image", "Name" },
                values: new object[,]
                {
                    { 1, 1, "", "Back in Black" },
                    { 2, 1, "", "Highway to Hell" },
                    { 3, 2, "", "No Code" },
                    { 4, 2, "", "Riot Act" },
                    { 5, 3, "", "It's Only Rock 'n Roll" }
                });

            migrationBuilder.InsertData(
                table: "Reviews",
                columns: new[] { "Id", "AlbumId", "Content", "EditDate", "PostDate", "Rating", "UserName" },
                values: new object[,]
                {
                    { 1, 1, "Greetings young or old fellow. This here album is top tier. I would highly recommend satisfying your ear holes with these fine tunes.", new DateTime(2021, 7, 22, 11, 41, 14, 828, DateTimeKind.Local).AddTicks(6311), new DateTime(2021, 7, 22, 11, 41, 14, 814, DateTimeKind.Local).AddTicks(1410), 4, "AngusLover73" },
                    { 2, 3, "OMG I LOVEZ DIS ALEBUMY! XD", new DateTime(2021, 7, 22, 11, 41, 14, 828, DateTimeKind.Local).AddTicks(9852), new DateTime(2021, 7, 22, 11, 41, 14, 828, DateTimeKind.Local).AddTicks(9824), 5, "PearlIsMyJam" }
                });

            migrationBuilder.InsertData(
                table: "Songs",
                columns: new[] { "Id", "AlbumId", "ArtistId", "Duration", "Link", "Name" },
                values: new object[,]
                {
                    { 31, 3, null, 208, "", "Mankind" },
                    { 32, 3, null, 177, "", "I'm Open" },
                    { 33, 3, null, 275, "", "Around the Bend" },
                    { 34, 4, null, 219, "", "Can't Keep" },
                    { 35, 4, null, 230, "", "Save You" },
                    { 36, 4, null, 276, "", "Love Boat Captain" },
                    { 37, 4, null, 231, "", "Cropduster" },
                    { 38, 4, null, 195, "", "Ghost" },
                    { 39, 4, null, 215, "", "I Am Mine" },
                    { 40, 4, null, 250, "", "Thumbing My Way" },
                    { 41, 4, null, 270, "", "You Are" },
                    { 42, 4, null, 158, "", "Get Right" },
                    { 43, 4, null, 161, "", "Green Disease" },
                    { 44, 4, null, 215, "", "Help Help" },
                    { 45, 4, null, 237, "", "Bu$hleaguer" },
                    { 46, 4, null, 250, "", "1/2 Full" },
                    { 47, 4, null, 65, "", "Arc" },
                    { 48, 4, null, 277, "", "All or None" },
                    { 49, 5, null, 226, "", "If You Can't Rock Me" },
                    { 50, 5, null, 210, "", "Ain't Too Proud to Beg" },
                    { 51, 5, null, 307, "", "It's Only Rock 'n Roll (But I Like It)" },
                    { 52, 5, null, 277, "", "Till the Next Goodbye" },
                    { 53, 5, null, 397, "", "Time Waits for No One" },
                    { 54, 5, null, 300, "", "Luxury" },
                    { 55, 5, null, 251, "", "Dance Little Sister" },
                    { 56, 5, null, 376, "", "If You Really Want to Be My Friend" },
                    { 30, 3, null, 346, "", "Present Tense" },
                    { 29, 3, null, 62, "", "Lukin'" },
                    { 28, 3, null, 243, "", "Red Mosquito" },
                    { 27, 3, null, 215, "", "Habit" },
                    { 1, 1, null, 310, "", "Hells Bells" },
                    { 2, 1, null, 317, "", "Shoot to Thrill" },
                    { 3, 1, null, 213, "", "What Do You Do for Money Honey" },
                    { 4, 1, null, 210, "", "Given the Dog a Bone" },
                    { 5, 1, null, 256, "", "Let Me Put My Love into You" },
                    { 6, 1, null, 255, "", "Back in Black" },
                    { 7, 1, null, 210, "", "You Shook Me All Night Long" },
                    { 8, 1, null, 237, "", "Have a Drink on Me" },
                    { 9, 1, null, 246, "", "Shake a Leg" },
                    { 10, 1, null, 255, "", "Rock and Roll Ain't Noise Pollution" }
                });

            migrationBuilder.InsertData(
                table: "Songs",
                columns: new[] { "Id", "AlbumId", "ArtistId", "Duration", "Link", "Name" },
                values: new object[,]
                {
                    { 11, 2, null, 209, "", "Highway to Hell" },
                    { 12, 2, null, 204, "", "Girls Got Rhythm" },
                    { 57, 5, null, 163, "", "Short and Curlies" },
                    { 13, 2, null, 310, "", "Walk Over You" },
                    { 15, 2, null, 235, "", "Beating Around the Bush" },
                    { 16, 2, null, 203, "", "Shot Down in Flames" },
                    { 17, 2, null, 155, "", "Get It Hot" },
                    { 18, 2, null, 278, "", "If You Want Blood (You've Got It)" },
                    { 19, 2, null, 258, "", "Love Hungry Man" },
                    { 20, 2, null, 378, "", "Night Prowler" },
                    { 21, 3, null, 160, "", "Sometimes" },
                    { 22, 3, null, 221, "", "Hail, Hail" },
                    { 23, 3, null, 230, "", "Who You Are" },
                    { 24, 3, null, 239, "", "In My Tree" },
                    { 25, 3, null, 232, "", "Smile" },
                    { 26, 3, null, 362, "", "Off He Goes" },
                    { 14, 2, null, 268, "", "Touch Too Much" },
                    { 58, 5, null, 393, "", "Fingerprint File" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 51);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 54);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
