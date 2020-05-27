using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataAccessLayer;
using DataAccessLayer.Models;

namespace PPO_Kursach.Controllers.AdminControllers
{
    [Authorize]    
    public class AdminController : Controller
    {
        protected DataAccess dataAccess = new DataAccess();
    }
}