using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Utils
{
    public interface IErrorHandler
    {
        Task ConveyError(string message, string additionalDetail = "", Exception? exception = null);
    }

    public class ErrorHandler : IErrorHandler
    {
        public Task ConveyError(string message, string additionalDetail = "", Exception? exception = null)
        {
            return Task.CompletedTask;
        }
    }
}
