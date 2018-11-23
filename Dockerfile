FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln .
COPY src/DemoWebApi.Service/*.csproj ./src/DemoWebApi.Service/
RUN dotnet restore

# copy everything else and build app
COPY src/DemoWebApi.Service/. ./src/DemoWebApi.Service/
WORKDIR /app/src/DemoWebApi.Service
RUN dotnet publish -c Release -o out


FROM microsoft/dotnet:2.1-aspnetcore-runtime
WORKDIR /app
EXPOSE 80
COPY --from=build /app/src/DemoWebApi.Service/out ./
ENTRYPOINT ["dotnet", "DemoWebApi.Service.dll"]