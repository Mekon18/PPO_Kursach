using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
	public class DoctorsExperience
	{
		public int Id { get; set; }
		public DateTime Beginning { get; set; }
		public DateTime Ending { get; set; }
		public string Name { get; set; }
		public int DoctorId { get; set; }
	}
}
