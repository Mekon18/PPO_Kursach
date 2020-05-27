using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataAccessLayer.Models;

namespace PPO_Kursach.Controllers.AdminControllers
{
	public class DoctorController : AdminController
	{
		// GET: Doctor
		public ActionResult Index()
		{
			return View(dataAccess.GetDoctors());
		}

		// GET: Doctor/Details/5
		public ActionResult Details(int id)
		{
			return View(dataAccess.GetDoctor(id));
		}

		// GET: Doctor/Create
		public ActionResult Create()
		{
			ViewBag.Departments = dataAccess.GetDepartments();
			return View();
		}

		// POST: Doctor/Create
		[HttpPost]
		public ActionResult Create(Doctor doctor)
		{
			try
			{
				dataAccess.AddDoctor(doctor);
				return RedirectToAction("Index");
			}
			catch
			{
				return View();
			}
		}

		// GET: Doctor/Edit/5
		public ActionResult Edit(int id)
		{
			ViewBag.Departments = dataAccess.GetDepartments();
			return View(dataAccess.GetDoctor(id));
		}

		// POST: Doctor/Edit/5
		[HttpPost]
		public ActionResult Edit(int id, Doctor doctor)
		{
			try
			{
				dataAccess.EditDoctor(id, doctor);

				return RedirectToAction("Index");
			}
			catch
			{
				return View();
			}
		}

		// GET: Doctor/Delete/5
		public ActionResult Delete(int id)
		{
			dataAccess.DeleteDoctor(id);
			return RedirectToAction("Index");
		}		
	}
}
