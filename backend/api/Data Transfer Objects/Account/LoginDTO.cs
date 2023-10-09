namespace api.Data_Transfer_Objects.Account
{
    public class LoginDTO
    {
        /// <summary>
        /// User email address
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// User password
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Indication if the user should auto login or not
        /// </summary>
        public bool AutoLogin { get; set; }
    }
}
