using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PPO_Kursach.AdminControllers
{
    public class ServiceController : AdminController
    {        

        

        // GET: Service/Create
        public ActionResult Create(int departmentId)
        {
            return View(new Service() { DepartmentId = departmentId });
        }

        // POST: Service/Create
        [HttpPost]
        public ActionResult Create(Service service)
        {
            try
            {
                dataAccess.AddService(service);

                return RedirectToAction("Edit", "Department", new { id = service.DepartmentId });
            }
            catch
            {
                return View();
            }
        }

        // GET: Service/Edit/5
        public ActionResult Edit(int id)
        {
            return View(dataAccess.GetService(id));
        }

        // POST: Service/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, Service service)
        {
            try
            {
                dataAccess.EditService(id, service);

                return RedirectToAction("Edit", "Department", new { id = service.DepartmentId });
            }
            catch
            {
                return View();
            }
        }

        // GET: Service/Delete/5
        public ActionResult Delete(int id, int departmentId)
        {
            dataAccess.DeleteService(id);
            return RedirectToAction("Edit", "Department", new { id = departmentId });
        }       
    }
}
