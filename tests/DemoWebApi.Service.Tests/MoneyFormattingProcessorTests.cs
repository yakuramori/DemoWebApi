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
        [InlineData(-0.0, "0.00")]
        [InlineData(10000, "10 000.00")]
        [InlineData(-10000, "-10 000.00")]
        [InlineData(123567.567, "123 567.57")]
        [InlineData(-123567.567, "-123 567.57")]
        [InlineData(1.0, "1.00")]
        [InlineData(-1.0, "-1.00")]
        [InlineData(12345678901, "12 345 678 901.00")]
        [InlineData(-12345678901.9, "-12 345 678 901.90")]
        [InlineData(999.999, "1 000.00")]
        public void TestFormatMoney(decimal input, string output)
        {
            Assert.Equal(output, _moneyFormatting.FormatMoney(input));
        }

        [Theory]
        [InlineData(12345678901234539999.123456789, "12 345 678 901 234 500 000.00")]
        [InlineData(12345678901234567890.123456789, "12 345 678 901 234 600 000.00")]
        public void TestFormatMoneyBigNumbers(decimal input, string output)
        {
            Assert.Equal(output, _moneyFormatting.FormatMoney(input));
        }

        public void Dispose()
        {
        }
    }
}