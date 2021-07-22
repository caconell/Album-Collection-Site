using album_collection.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection
{
    public class ACDbContext : DbContext
    {

        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Song> Songs { get; set; }
        public DbSet<Review> Reviews { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=ACDB;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString).UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Artist>().HasData(
                new Artist()
                {
                    Id = 1,
                    Name = "ACDC",
                    Image = "",
                    Biography = "AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. Their music has been variously described as hard rock, blues rock, and heavy metal, but the band themselves call it simply \"rock and roll\".",
                    Age = 48,
                    Hometown = "Sydney, Australia",
                    RecordLabel = "Columbia"
                },
                new Artist()
                {
                    Id = 2,
                    Name = "Pearl Jam",
                    Image = "",
                    Biography = "Pearl Jam is an American rock band formed in Seattle, Washington, in 1990. The band's line up consists of founding members Jeff Ament, Stone Gossard, Mike McCready, and Eddie Vedder, as well as Matt Cameron, who joined in 1998. Keyboardist Boom Gaspar has also been a touring/session member with the band since 2002.",
                    Age = 31,
                    Hometown = "Seattle, Washington",
                    RecordLabel = "Monkeywrench"
                },
                new Artist()
                {
                    Id = 3,
                    Name = "Rolling Stones",
                    Image = "",
                    Biography = "The Rolling Stones are an English rock band formed in London in 1962. Diverging from the pop rock of the early-1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock.",
                    Age = 59,
                    Hometown = "London, United Kingdom",
                    RecordLabel = "Polydor"
                }
                );
            modelBuilder.Entity<Album>().HasData(
                new Album()
                {
                    Id = 1,
                    Name = "Back in Black",
                    Image = "",
                    ArtistId = 1
                },

                new Album()
                {
                    Id = 2,
                    Name = "Highway to Hell",
                    Image = "",
                    ArtistId = 1
                },

                new Album()
                {
                    Id = 3,
                    Name = "No Code",
                    Image = "",
                    ArtistId = 2
                },

                new Album()
                {
                    Id = 4,
                    Name = "Riot Act",
                    Image = "",
                    ArtistId = 2
                },

                new Album()
                {
                    Id = 5,
                    Name = "It's Only Rock 'n Roll",
                    Image = "",
                    ArtistId = 3
                }
                );
            modelBuilder.Entity<Song>().HasData(
                new Song()
                {
                    Id = 1,
                    Name = "Hells Bells",
                    Duration = 310,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 2,
                    Name = "Shoot to Thrill",
                    Duration = 317,
                    Link = "",
                    AlbumId = 1,
                },
                new Song()
                {
                    Id = 3,
                    Name = "What Do You Do for Money Honey",
                    Duration = 213,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 4,
                    Name = "Given the Dog a Bone",
                    Duration = 210,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 5,
                    Name = "Let Me Put My Love into You",
                    Duration = 256,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 6,
                    Name = "Back in Black",
                    Duration = 255,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 7,
                    Name = "You Shook Me All Night Long",
                    Duration = 210,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 8,
                    Name = "Have a Drink on Me",
                    Duration = 237,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 9,
                    Name = "Shake a Leg",
                    Duration = 246,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 10,
                    Name = "Rock and Roll Ain't Noise Pollution",
                    Duration = 255,
                    Link = "",
                    AlbumId = 1
                },
                new Song()
                {
                    Id = 11,
                    Name = "Highway to Hell",
                    Duration = 209,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 12,
                    Name = "Girls Got Rhythm",
                    Duration = 204,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 13,
                    Name = "Walk Over You",
                    Duration = 310,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 14,
                    Name = "Touch Too Much",
                    Duration = 268,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 15,
                    Name = "Beating Around the Bush",
                    Duration = 235,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 16,
                    Name = "Shot Down in Flames",
                    Duration = 203,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 17,
                    Name = "Get It Hot",
                    Duration = 155,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 18,
                    Name = "If You Want Blood (You've Got It)",
                    Duration = 278,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 19,
                    Name = "Love Hungry Man",
                    Duration = 258,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 20,
                    Name = "Night Prowler",
                    Duration = 378,
                    Link = "",
                    AlbumId = 2
                },
                new Song()
                {
                    Id = 21,
                    Name = "Sometimes",
                    Duration = 160,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 22,
                    Name = "Hail, Hail",
                    Duration = 221,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 23,
                    Name = "Who You Are",
                    Duration = 230,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 24,
                    Name = "In My Tree",
                    Duration = 239,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 25,
                    Name = "Smile",
                    Duration = 232,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 26,
                    Name = "Off He Goes",
                    Duration = 362,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 27,
                    Name = "Habit",
                    Duration = 215,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 28,
                    Name = "Red Mosquito",
                    Duration = 243,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 29,
                    Name = "Lukin'",
                    Duration = 62,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 30,
                    Name = "Present Tense",
                    Duration = 346,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 31,
                    Name = "Mankind",
                    Duration = 208,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 32,
                    Name = "I'm Open",
                    Duration = 177,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 33,
                    Name = "Around the Bend",
                    Duration = 275,
                    Link = "",
                    AlbumId = 3
                },
                new Song()
                {
                    Id = 34,
                    Name = "Can't Keep",
                    Duration = 219,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 35,
                    Name = "Save You",
                    Duration = 230,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 36,
                    Name = "Love Boat Captain",
                    Duration = 276,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 37,
                    Name = "Cropduster",
                    Duration = 231,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 38,
                    Name = "Ghost",
                    Duration = 195,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 39,
                    Name = "I Am Mine",
                    Duration = 215,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 40,
                    Name = "Thumbing My Way",
                    Duration = 250,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 41,
                    Name = "You Are",
                    Duration = 270,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 42,
                    Name = "Get Right",
                    Duration = 158,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 43,
                    Name = "Green Disease",
                    Duration = 161,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 44,
                    Name = "Help Help",
                    Duration = 215,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 45,
                    Name = "Bu$hleaguer",
                    Duration = 237,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 46,
                    Name = "1/2 Full",
                    Duration = 250,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 47,
                    Name = "Arc",
                    Duration = 65,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 48,
                    Name = "All or None",
                    Duration = 277,
                    Link = "",
                    AlbumId = 4
                },
                new Song()
                {
                    Id = 49,
                    Name = "If You Can't Rock Me",
                    Duration = 226,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 50,
                    Name = "Ain't Too Proud to Beg",
                    Duration = 210,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 51,
                    Name = "It's Only Rock 'n Roll (But I Like It)",
                    Duration = 307,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 52,
                    Name = "Till the Next Goodbye",
                    Duration = 277,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 53,
                    Name = "Time Waits for No One",
                    Duration = 397,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 54,
                    Name = "Luxury",
                    Duration = 300,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 55,
                    Name = "Dance Little Sister",
                    Duration = 251,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 56,
                    Name = "If You Really Want to Be My Friend",
                    Duration = 376,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 57,
                    Name = "Short and Curlies",
                    Duration = 163,
                    Link = "",
                    AlbumId = 5
                },
                new Song()
                {
                    Id = 58,
                    Name = "Fingerprint File",
                    Duration = 393,
                    Link = "",
                    AlbumId = 5
                }
                );
        }
    }
}
