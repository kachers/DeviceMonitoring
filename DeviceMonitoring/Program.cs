using DeviceMonitoring.Core.Services;
using DeviceMonitoring.Services;
using DeviceMonitoring.Data;

using Microsoft.EntityFrameworkCore;

namespace DeviceMonitoring
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddDbContext<DeviceMonitoringDbContext>(options =>
                options
                    .UseSqlite(builder.Configuration.GetConnectionString("DeviceMonitoring")));
            builder.Services.AddTransient<IDeviceMonitoringDbContext, DeviceMonitoringDbContext>();
            builder.Services.AddTransient<IDbService, DbService>();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowLocalhost", builder =>
                {
                    builder.WithOrigins("http://localhost:3000",
                                        "http://localhost:8080")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("AllowLocalhost");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}