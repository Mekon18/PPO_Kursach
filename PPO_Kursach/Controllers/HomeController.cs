using DataAccessLayer;
using DataAccessLayer.Models;
using Microsoft.AspNet.Identity;
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
			return Json(new { UserId = User.Identity.GetUserId() }, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public ActionResult GetDepartmentsDoctors(int departmentId)
		{
			return Json(dataAccess.GetDepartment(departmentId).Doctors, JsonRequestBehavior.AllowGet);
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

		public void AddDoctorsExperience(DoctorsExperience experience)
		{
			dataAccess.AddDoctorsExperience(experience);
		}

		public ActionResult AddDoctorsAdditionalEducation(DoctorsAdditionalEducation AdditionalEducation)
		{
			dataAccess.AddDoctorsAdditionalEducation(AdditionalEducation);
			return GetDoctor(1);
		}
		public ActionResult AddService(Service service)
		{
			dataAccess.AddService(service);
			return GetDepartment(1);
		}
		public ActionResult AddRegistration(Registration registration)
		{
			dataAccess.AddRegistration(registration);
			return GetUserRegistrations();
		}

		[HttpGet]
		public ActionResult GetUserRegistrations()
		{
			return Json(dataAccess.GetUserRegistrations(User.Identity.GetUserId()), JsonRequestBehavior.AllowGet);
		}
		public ActionResult Contact()
		{
			ViewBag.Message = "Your contact page.";

			return View();
		}
	}
}