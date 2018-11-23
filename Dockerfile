FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /app

# copy everything else and build app
COPY . .
RUN dotnet restore
WORKDIR /app/src/DemoWebApi.Service
RUN dotnet publish -c Release -o out


FROM microsoft/dotnet:2.1-aspnetcore-runtime
WORKDIR /app
EXPOSE 80
COPY --from=build /app/src/DemoWebApi.Service/out ./
ENTRYPOINT ["dotnet", "DemoWebApi.Service.dll"]