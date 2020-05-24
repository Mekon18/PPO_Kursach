using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
	public class Department
	{
		public int Id { get; set; }
        public string Name { get; set; }
		public ICollection<Doctor> Doctors { get; set; }

		public ICollection<Service> Services { get; set; }

		public Department()
		{
			Doctors = new List<Doctor>();
			Services = new List<Service>();
		}
	}
}
