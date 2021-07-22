using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Artist
	{
		public int Id{get;set;}

		//

		public string Name {get;set;}
		public string Image {get;set;}
		public string Biography {get;set;}


		public int Age {get;set;}
		public string Hometown {get;set;}
		public string RecordLabel {get;set;}
		
		//

		public virtual List<Album> Albums {get;set;}
		public virtual List<Song> Songs {get;set;}
	}
}
