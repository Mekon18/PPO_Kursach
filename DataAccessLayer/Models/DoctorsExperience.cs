using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
	public class DoctorsExperience
	{
		public int Id { get; set; }

		[NotMapped]
		public string BeginningString
		{
			get
			{
				return Beginning.ToString("dd.MM.yyyy");
			}
			set
			{
				var date = value.Split('.').Select(x=>int.Parse(x)).ToArray();
				Beginning = new DateTime(date[2],date[1],date[0]);
			}
		}
		[NotMapped]
		public string EndingString
		{
			get
			{
				return Ending.ToString("dd.MM.yyyy");
			}
			set
			{
				var date = value.Split('.').Select(x => int.Parse(x)).ToArray();
				Ending = new DateTime(date[2], date[1], date[0]);
			}
		}
		public DateTime Beginning { get; set; }
		public DateTime Ending { get; set; }
		public string Name { get; set; }
		public int DoctorId { get; set; }
	}
}
