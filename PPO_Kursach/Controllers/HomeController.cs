using DataAccessLayer;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PPO_Kursach.Controllers
{
	public class HomeController : Controller
	{
		private DataAccess dataAccess = new DataAccess();
		public ActionResult Index()
		{
			return View();
		}
		[HttpGet]
		public ActionResult About()
		{
			return GetDoctors();
		}

		[HttpGet]
		public ActionResult GetDepartments()
		{
			return Json(dataAccess.GetDepartments(), JsonRequestBehavior.AllowGet);
		}
		[HttpGet]
		public ActionResult GetDepartment(int id)
		{
			return Json(dataAccess.GetDepartment(id), JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public ActionResult GetDoctors()
		{
			return Json(dataAccess.GetDoctors(), JsonRequestBehavior.AllowGet);
		}
		[HttpGet]
		public ActionResult GetDoctor(int id)
		{
			return Json(dataAccess.GetDoctor(id), JsonRequestBehavior.AllowGet);
		}

		public ActionResult AddDoctorsExperience(/*DoctorsExperience experience*/)
		{
			DoctorsExperience experience = new DoctorsExperience()
			{
				Id	= 1,
				Beginning = new DateTime(1901, 1, 1),
				Ending = new DateTime(1902, 1, 1),
				Name = "some1",
				DoctorId = 1
			};
			dataAccess.AddDoctorsExperience(experience);

			return GetDoctor(1);
		}

		public ActionResult Contact()
		{
			ViewBag.Message = "Your contact page.";

			return View();
		}
	}
}