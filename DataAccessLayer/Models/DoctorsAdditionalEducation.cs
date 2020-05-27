using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
	public class DoctorsAdditionalEducation
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public DateTime Ending { get; set; }
		public int DoctorId { get; set; }
	}
}
