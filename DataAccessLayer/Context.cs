using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer.Models;

namespace DataAccessLayer
{
	public class Context:DbContext
	{
		public Context() : base("DefaultConnection")
		{ }

		public DbSet<Department> Departments { get; set; }
		public DbSet<Doctor> Doctors { get; set; }
	}
}
