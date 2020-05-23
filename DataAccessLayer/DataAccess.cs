using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
	public class DataAccess
	{
		public IEnumerable<Department> GetDepartments()
		{
			using (Context db = new Context())
			{
				return db.Departments.Include("Doctors").ToList();
			}
		}

		public Department GetDepartment(int id)
		{
			using (Context db = new Context())
			{
				return db.Departments.Include("Doctors").Where(x => x.Id == id).FirstOrDefault();
			}
		}

		public IEnumerable<Doctor> GetDoctors()
		{
			using (Context db = new Context())
			{
				return db.Doctors.Include("Experiences").Include("AdditionalEducations").ToList();
			}
		}

		public Doctor GetDoctor(int id)
		{
			using (Context db = new Context())
			{
				return db.Doctors.Where(x => x.Id == id).FirstOrDefault();
			}
		}

		public void AddDoctorsExperience(DoctorsExperience experience)
		{
			using(Context db = new Context())
			{
				//int lastId = db.DoctorsExperiences.Max(x => x.Id);
				//experience.Id = ++lastId;
				db.DoctorsExperiences.Add(experience);
				db.SaveChanges();
			}
		}
	}
}
