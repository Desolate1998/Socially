namespace api.Contracts
{
    public class RegisterDTO
    {
        /// <summary>
        /// The email address the user would Like to use
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// The username the user would like to be known as
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// The password the user would like to use
        /// </summary>
        public string Password { get; set; }
    }
}
