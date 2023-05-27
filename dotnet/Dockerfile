FROM mcr.microsoft.com/dotnet/sdk:7.0.302-alpine3.17 AS build
WORKDIR /app

# Copy everything
COPY . ./

# Restore as distinct layers
RUN dotnet restore

# Build and publish a release
RUN dotnet publish -o out --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:7.0.5-alpine3.17
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "MyBudget.Application.dll"]