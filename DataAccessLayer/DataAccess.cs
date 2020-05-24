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
				return db.Departments.Include("Doctors").Include("Services").Where(x => x.Id == id).FirstOrDefault();
			}
		}

		public IEnumerable<Doctor> GetDoctors()
		{
			using (Context db = new Context())
			{
				return db.Doctors.ToList();
			}
		}

		public Doctor GetDoctor(int id)
		{
			using (Context db = new Context())
			{
				return db.Doctors.Include("Experiences").Include("AdditionalEducations").Where(x => x.Id == id).FirstOrDefault();
			}
		}
		public IEnumerable<Registration> GetRegistrations()
		{
			using (Context db = new Context())
			{
				return db.Registrations.ToList();
			}
		}

		public IEnumerable<Registration> GetUserRegistrations(string UserId)
		{
			using (Context db = new Context())
			{
				return db.Registrations.Include("Doctor").Include("Service").Where(x => x.UserId == UserId).ToList();
			}
		}
		public void AddRegistration(Registration registration)
		{
			using (Context db = new Context())
			{
				db.Registrations.Add(registration);
				db.SaveChanges();
			}
		}

		public void AddDoctorsExperience(DoctorsExperience experience)
		{
			using(Context db = new Context())
			{
				db.DoctorsExperiences.Add(experience);
				db.SaveChanges();
			}
		}

		public void AddDoctorsAdditionalEducation(DoctorsAdditionalEducation AdditionalEducation)
		{
			using (Context db = new Context())
			{
				db.DoctorsAdditionalEducations.Add(AdditionalEducation);
				db.SaveChanges();
			}
		}
		public void AddService(Service service)
		{
			using (Context db = new Context())
			{
				db.Services.Add(service);
				db.SaveChanges();
			}
		}
	}
}
