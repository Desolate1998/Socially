using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models.API
{
    public class APIResponse<TData>
    {
        /// <summary>
        /// Indication if the request was successful or not on an API level
        /// </summary>
        public bool IsSuccessful { get; set; }

        /// <summary>
        /// The response Data
        /// </summary>
        public TData? Result { get; set; }

        /// <summary>
        /// An error message
        /// </summary>
        public string ErrorMessage { get; set; }
    }
}
