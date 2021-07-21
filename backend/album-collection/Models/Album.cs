using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Album
	{
		public int Id{get;set;}

		//

		public string Name{get;set;}
		public string Image{get;set;}

		//

		public virtual Artist Artist{get;set;}
		public int ArtistId{get;set;}
		public virtual List<Song> Song{get;set;}
		public virtual List<Review> Review{get;set;}
	}
}
