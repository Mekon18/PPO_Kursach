using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
	public class Registration
	{
		public DateTime AppointmentDateTime { get; set; }
		public int Id { get; set; }
		public int DoctorId { get; set; }
		public int ServiceId { get; set; }
		public Doctor Doctor { get; set; }
		public Service Service { get; set; }
		public string UserName { get; set; }
	}
}
