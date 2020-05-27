using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PPO_Kursach.Controllers.AdminControllers
{
    public class DoctorsAdditionalEducationController : AdminController
    {

		// GET: DoctorsAdditionalEducation/Create
		public ActionResult Create(int doctorId)
		{
			return View(new DoctorsAdditionalEducation() { DoctorId = doctorId });
		}

		// POST: DoctorsAdditionalEducation/Create
		[HttpPost]
		public ActionResult Create(DoctorsAdditionalEducation doctorsAdditionalEducation)
		{
			try
			{
				dataAccess.AddDoctorsAdditionalEducation(doctorsAdditionalEducation);

				return RedirectToAction("Edit", "Doctor", new { id = doctorsAdditionalEducation.DoctorId });
			}
			catch
			{
				return View();
			}
		}

		// GET: DoctorsAdditionalEducation/Edit/5
		public ActionResult Edit(int id)
		{
			return View(dataAccess.GetDoctorsAdditionalEducation(id));
		}

		// POST: DoctorsAdditionalEducation/Edit/5
		[HttpPost]
		public ActionResult Edit(int id, DoctorsAdditionalEducation doctorsAdditionalEducation)
		{
			try
			{
				dataAccess.EditDoctorsAdditionalEducation(id, doctorsAdditionalEducation);

				return RedirectToAction("Edit", "Doctor", new { id = doctorsAdditionalEducation.DoctorId });
			}
			catch
			{
				return View();
			}
		}

		// GET: DoctorsAdditionalEducation/Delete/5
		public ActionResult Delete(int id, int doctorId)
		{
			dataAccess.DeleteDoctorsAdditionalEducation(id);
			return RedirectToAction("Edit", "Doctor", new { id = doctorId });
		}
	}
}
