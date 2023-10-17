using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Utils;

public interface IErrorHandler
{
    public Task ConveyError(string message, string additionalDetail = "", Exception? exception = null);
}

public class ErrorHandler : IErrorHandler
{
    Task IErrorHandler.ConveyError(string message, string additionalDetail, Exception? exception)
    {
        return Task.CompletedTask;
    }
}
