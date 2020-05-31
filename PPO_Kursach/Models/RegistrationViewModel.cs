using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PPO_Kursach.Models
{
	public class RegistrationViewModel
	{
		public int DoctorId { get; set; }
		public int ServiceId { get; set; }
		public string UserName { get; set; }
	
		public DateTime Date { get; set; }
		public TimeSpan time { get; set; }
	}
}