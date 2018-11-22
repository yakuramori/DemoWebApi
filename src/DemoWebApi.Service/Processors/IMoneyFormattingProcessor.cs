namespace DemoWebApi.Service.Processors
{
    public interface IMoneyFormattingProcessor
    {
        string FormatMoney(decimal moneyAmount);
    }
}