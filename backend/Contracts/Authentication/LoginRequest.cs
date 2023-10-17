namespace Contracts.Authentication;

public record LoginRequest(

    /// <summary>
    /// User email address
    /// </summary>
    string Email,

    /// <summary>
    /// User password
    /// </summary>
    string Password,

    /// <summary>
    /// Indication if the user should auto login or not
    /// </summary>
    bool AutoLogin
);
