using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Review //only for Album.
	{
		public int Id {get;set;}

		//

		public string UserName {get;set;}
		public string Content {get;set;}
		public DateTime PostDate {get;set;}
		public DateTime EditDate {get;set;}
		public int Rating {get;set;}

		//

		public virtual Album Album {get;set;}
		public int AlbumId {get;set;}
	}
}
