﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Song
	{
		public int Id {get;set;}

		//

		public string Name {get;set;}
		public int Duration {get;set;}
		public string Link {get;set;}

		//

		public virtual Album Album {get;set;}
		public int AlbumId {get;set;}
	}
}
