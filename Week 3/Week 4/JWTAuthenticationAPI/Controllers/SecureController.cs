using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JWTAuthenticationAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class SecureController : ControllerBase
{
    [HttpGet("data")]
    public IActionResult GetData()
    {
        return Content("This is protected data.");
    }
}