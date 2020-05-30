using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PPO_Kursach.AdminControllers
{
	public class DoctorExperienceController : AdminController
	{

		// GET: DoctorExperience/Create
		public ActionResult Create(int doctorId)
		{
			return View(new DoctorsExperience() { DoctorId = doctorId });
		}

		// POST: DoctorExperience/Create
		[HttpPost]
		public ActionResult Create(DoctorsExperience doctorsExperience)
		{
			try
			{
				dataAccess.AddDoctorsExperience(doctorsExperience);

				return RedirectToAction("Edit", "Doctor", new { id = doctorsExperience.DoctorId });
			}
			catch
			{
				return View();
			}
		}

		// GET: DoctorExperience/Edit/5
		public ActionResult Edit(int id)
		{
			return View(dataAccess.GetDoctorsExperience(id));
		}

		// POST: DoctorExperience/Edit/5
		[HttpPost]
		public ActionResult Edit(int id, DoctorsExperience doctorsExperience)
		{
			try
			{
				dataAccess.EditDoctorsExperience(id, doctorsExperience);

				return RedirectToAction("Edit", "Doctor", new { id = doctorsExperience.DoctorId });
			}
			catch
			{
				return View();
			}
		}

		// GET: DoctorExperience/Delete/5
		public ActionResult Delete(int id, int doctorId)
		{
			dataAccess.DeleteDoctorsExperience(id);
			return RedirectToAction("Edit", "Doctor", new { id = doctorId });
		}		
	}
}
