using Microsoft.Data.Sqlite;

namespace R_Manager
{
    internal class Database
    {
        private string dbPath;

        public Database()
        {
            string folder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "AppData");
            Directory.CreateDirectory(folder);

            dbPath = Path.Combine(folder, "R-Manager.db");
        }

        public SqliteConnection GetConnection()
        {
            return new SqliteConnection($"Data Source={dbPath}");
        }
    }
}
