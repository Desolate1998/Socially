namespace Contracts.Authentication;

public record RegisterRequest(
    /// <summary>
    /// The email address the user would Like to use
    /// </summary>
    string Email,

    /// <summary>
    /// The username the user would like to be known as
    /// </summary>
    string Username,

    /// <summary>
    /// The password the user would like to use
    /// </summary>
    string Password
);
