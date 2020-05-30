using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PPO_Kursach.AdminControllers
{
    public class DepartmentController : AdminController
    {
        // GET: Department
        public ActionResult Index()
        {
            return View(dataAccess.GetDepartments());
        }        

        // GET: Department/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Department/Create
        [HttpPost]
        public ActionResult Create(Department department)
        {
            try
            {
                dataAccess.AddDepartment(department);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Department/Edit/5
        public ActionResult Edit(int id)
        {
            return View(dataAccess.GetDepartment(id));
        }

        // POST: Department/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, Department department)
        {
            try
            {
                dataAccess.EditDepartment(id, department);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Department/Delete/5
        public ActionResult Delete(int id)
        {
            dataAccess.DeleteDepartment(id);
            return RedirectToAction("Index");
        }       
    }
}
