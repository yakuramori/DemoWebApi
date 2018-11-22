using System.ComponentModel.DataAnnotations;
using System.Net;
using DemoWebApi.Service.Processors;
using Microsoft.AspNetCore.Mvc;

namespace DemoWebApi.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormatController : ControllerBase
    {
        private readonly IMoneyFormattingProcessor _moneyFormattingProcessor;

        public FormatController(IMoneyFormattingProcessor moneyFormattingProcessor)
        {
            _moneyFormattingProcessor = moneyFormattingProcessor;
        }

        /// <summary>
        /// Convert money amount to formated string
        /// </summary>
        /// <param name="moneyAmount"></param>
        /// <returns></returns>
        [HttpGet("{moneyAmount}")]
        [ProducesResponseType(typeof(string), (int) HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int) HttpStatusCode.BadRequest)]
        public ActionResult<string> FormatMoney([Required] string moneyAmount)
        {
            if (!decimal.TryParse(moneyAmount, out var amount))
            {
                return new BadRequestObjectResult($"Invalid input: [{moneyAmount}]");
            }

            return _moneyFormattingProcessor.FormatMoney(amount);
        }
    }
}