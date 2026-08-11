# JWTAuthenticationAPI

JWTAuthenticationAPI is a .NET 8 Web API that demonstrates JSON Web Token authentication with role-based authorization. It includes a login endpoint that issues a JWT, a protected endpoint for authenticated users, and an admin-only endpoint that requires the `Admin` role.

## Features

- JWT bearer authentication
- Role-based authorization with `Admin`
- Swagger UI with bearer token support
- Protected sample endpoints for authenticated and role-restricted access

## Tech Stack

- ASP.NET Core Web API (.NET 8)
- JWT Bearer Authentication
- Swagger / Swashbuckle

## Project Structure

- `Program.cs` configures controllers, Swagger, JWT authentication, and authorization.
- `Controllers/AuthController.cs` exposes the login endpoint and returns a JWT.
- `Controllers/SecureController.cs` exposes an authenticated endpoint.
- `Controllers/AdminController.cs` exposes an admin-only endpoint.
- `Services/TokenService.cs` generates JWT tokens.
- `Models/LoginModel.cs` represents the login request body.
- `Models/JwtSettings.cs` binds JWT settings from configuration.

## Configuration

JWT settings are defined in `appsettings.json`:

- `Jwt:Key`
- `Jwt:Issuer`
- `Jwt:Audience`
- `Jwt:Duration`

The default values in this project are:

- Key: `ThisIsASecretKeyForJwtToken`
- Issuer: `MyAuthServer`
- Audience: `MyApiUsers`
- Duration: `60` minutes

## Running the Project

### Prerequisites

- .NET 8 SDK

### Start the API

```bash
dotnet run --project JWTAuthenticationAPI/JWTAuthenticationAPI.csproj
```

By default, the app is available at:

- `http://localhost:5192`
- `https://localhost:7122`

Swagger is available at:

- `http://localhost:5192/swagger`

## API Endpoints

### 1. Login and get a token

- Method: `POST`
- URL: `/api/Auth/login`
- Body:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Successful response:

```json
{
  "token": "<jwt-token>",
  "role": "Admin"
}
```

### 2. Get protected data

- Method: `GET`
- URL: `/api/Secure/data`
- Authorization: Bearer token required

Successful response:

```text
This is protected data.
```

### 3. Get admin dashboard

- Method: `GET`
- URL: `/api/Admin/dashboard`
- Authorization: Bearer token required with `Admin` role

Successful response:

```text
Welcome to the admin dashboard.
```

## Swagger Usage

1. Run the application.
2. Open `/swagger` in the browser.
3. Call `POST /api/Auth/login` with the credentials above.
4. Copy the returned JWT token.
5. Click `Authorize` in Swagger.
6. Paste the token in the format `Bearer <your-token>`.
7. Call the protected endpoints.

## Validation Details

- Invalid login returns `401 Unauthorized`.
- Missing or invalid token on protected routes returns `401 Unauthorized`.
- The login flow always issues an `Admin` token, so the admin route succeeds with the token returned by `/api/Auth/login`.

## Suggested Submission Screenshots

- Swagger home page
- Successful login response with JWT token
- Failed login response for invalid credentials
- Unauthorized response from `/api/Secure/data` without a token
- Successful authenticated response from `/api/Secure/data`
- Successful admin response from `/api/Admin/dashboard`
- Unauthorized response from `/api/Admin/dashboard` without a token, if you want to show the protection boundary explicitly

## Notes

The login credentials are hard-coded for demonstration purposes only:

- Username: `admin`
- Password: `admin123`

This project is designed as a compact hands-on example of JWT authentication and role-based access control.