FROM microsoft/dotnet:2.1-aspnetcore-runtime
EXPOSE 80
COPY /src/DemoWebApi.Service/bin/Release/netcoreapp2.1 .
ENTRYPOINT ["dotnet", "DemoWebApi.Service.dll"]