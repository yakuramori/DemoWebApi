using System.Globalization;

namespace DemoWebApi.Service.Processors
{
    public class MoneyFormattingProcessor : IMoneyFormattingProcessor
    {
        public string FormatMoney(decimal moneyAmount)
        {
            return string.Format(CultureInfo.InvariantCulture, "{0:n2}", moneyAmount).Replace(",", " ");
        }
    }
}