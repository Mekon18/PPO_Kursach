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
		public void AddDepartment(Department department)
		{
			using (Context db = new Context())
			{
				db.Departments.Add(department);
				db.SaveChanges();
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

		public void AddDoctor(Doctor doctor)
		{
			using (Context db = new Context())
			{
				db.Doctors.Add(doctor);
				db.SaveChanges();
			}
		}
		public void EditDoctor(int id, Doctor doctor)
		{
			using (Context db = new Context())
			{
				var old = db.Doctors.Where(x => x.Id == id).FirstOrDefault();
				old.Experience = doctor.Experience;
				old.Category = doctor.Category;
				old.Specialty = doctor.Specialty;
				old.Name = doctor.Name;
				old.DepartmentId = doctor.DepartmentId;

				db.SaveChanges();
			}
		}
		public void DeleteDoctor(int id)
		{
			using (Context db = new Context())
			{
				var old = db.Doctors.Where(x => x.Id == id).FirstOrDefault();
				db.Doctors.Remove(old);
				db.SaveChanges();
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
			using (Context db = new Context())
			{
				db.DoctorsExperiences.Add(experience);
				db.SaveChanges();
			}
		}

		public DoctorsExperience GetDoctorsExperience(int id)
		{
			using (Context db = new Context())
			{
				return db.DoctorsExperiences.Where(x => x.Id == id).FirstOrDefault();
			}
		}
		public void EditDoctorsExperience(int id, DoctorsExperience doctorsExperience)
		{
			using (Context db = new Context())
			{
				var old = db.DoctorsExperiences.Where(x => x.Id == id).FirstOrDefault();
				old.Beginning = doctorsExperience.Beginning;
				old.Ending = doctorsExperience.Ending;
				old.Name = doctorsExperience.Name;
				db.SaveChanges();
			}
		}
		public void DeleteDoctorsExperience(int id)
		{
			using (Context db = new Context())
			{
				var old = db.DoctorsExperiences.Where(x => x.Id == id).FirstOrDefault();
				db.DoctorsExperiences.Remove(old);
				db.SaveChanges();
			}
		}
		public DoctorsAdditionalEducation GetDoctorsAdditionalEducation(int id)
		{
			using (Context db = new Context())
			{
				return db.DoctorsAdditionalEducations.Where(x => x.Id == id).FirstOrDefault();
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
		public void EditDoctorsAdditionalEducation(int id, DoctorsAdditionalEducation doctorsAdditionalEducation)
		{
			using (Context db = new Context())
			{
				var old = db.DoctorsAdditionalEducations.Where(x => x.Id == id).FirstOrDefault();
				old.Ending = doctorsAdditionalEducation.Ending;
				old.Name = doctorsAdditionalEducation.Name;
				db.SaveChanges();
			}
		}
		public void DeleteDoctorsAdditionalEducation(int id)
		{
			using (Context db = new Context())
			{
				var old = db.DoctorsAdditionalEducations.Where(x => x.Id == id).FirstOrDefault();
				db.DoctorsAdditionalEducations.Remove(old);
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
