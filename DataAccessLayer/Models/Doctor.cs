using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
	public class Doctor
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Specialty { get; set; }
		public string Category { get; set; }
		public double Experience { get; set; }
		public int? DepartmentId { get; set; }		
		
	}
}
