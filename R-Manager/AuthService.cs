namespace R_Manager
{
    internal class AuthService
    {
        public bool Login(string user, string pass)
        {
            //FUTURE: LOGIN CONECTION TO DB
            return user == "admin" && pass == "12345";
        }
    }
}