using JWTAuthenticationAPI.Models;
using JWTAuthenticationAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace JWTAuthenticationAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ITokenService _tokenService;

    public AuthController(ITokenService tokenService)
    {
        _tokenService = tokenService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel loginModel)
    {
        if (loginModel.Username == "admin" && loginModel.Password == "admin123")
        {
            var token = _tokenService.GenerateToken(loginModel);

            return Ok(new
            {
                Token = token,
                Role = "Admin"
            });
        }

        return Unauthorized(new { Message = "Invalid username or password." });
    }
}