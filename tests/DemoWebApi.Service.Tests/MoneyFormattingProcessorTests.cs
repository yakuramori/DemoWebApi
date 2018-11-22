using DemoWebApi.Service.Processors;
using System;
using Xunit;

namespace DemoWebApi.Service.Tests
{
    public class MoneyFormattingProcessorTests : IDisposable
    {
        private readonly MoneyFormattingProcessor _moneyFormatting;

        public MoneyFormattingProcessorTests()
        {
            _moneyFormatting = new MoneyFormattingProcessor();
        }

        [Theory]
        [InlineData(0, "0.00")]
        [InlineData(10000, "10 000.00")]
        public void TestFormatMoney(decimal input, string output)
        {
            Assert.Equal(output, _moneyFormatting.FormatMoney(input));
        }

        public void Dispose()
        {
        }
    }
}