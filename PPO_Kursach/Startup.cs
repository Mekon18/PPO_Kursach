using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PPO_Kursach.Startup))]
namespace PPO_Kursach
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
