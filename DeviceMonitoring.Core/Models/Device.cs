namespace DeviceMonitoring.Core.Models
{
    public class Device : Entity

    {
    public string Name { get; set; }

    public string Model { get; set; }

    public string Location { get; set; }

    public string ConStat { get; set; }

    public bool IsOnline { get; set; }

    }
}
