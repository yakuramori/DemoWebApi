# DemoWebApi
* dotnet new sln -n DemoWebApi
* dotnet new webapi -n DemoWebApi.Service
* dotnet new xunit -n DemoWebApi.Service.Tests
* dotnet sln DemoWebApi.sln add src/DemoWebApi.Service/DemoWebApi.Service.csproj
* dotnet sln DemoWebApi.sln add tests/DemoWebApi.Service.Tests/DemoWebApi.Service.Tests.csproj
* dotnet new nugetconfig

# Run via Docker
* docker run --name demo --rm -it -p 8000:80 yakuramori/demo:27
