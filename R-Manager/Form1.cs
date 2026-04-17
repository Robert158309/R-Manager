namespace R_Manager
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            this.MinimumSize = new Size(1024, 590);

            this.Load += Form1_Load;

            this.WindowState = FormWindowState.Maximized;

        }

        private async void Form1_Load(object sender, EventArgs e)
        {
            await webView21.EnsureCoreWebView2Async();

            /*
            // SECURITY / DEVTOOLS LIMITS 
            webView21.CoreWebView2.Settings.AreDevToolsEnabled = false;
            webView21.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
            webView21.CoreWebView2.Settings.IsStatusBarEnabled = false;
            webView21.CoreWebView2.Settings.AreBrowserAcceleratorKeysEnabled = false;
            */

            webView21.CoreWebView2.WebMessageReceived += CoreWebView2_WebMessageReceived;

            var basePath = Directory.GetParent(Application.StartupPath)
                .Parent.Parent.Parent.FullName;

            var path = Path.Combine(basePath, "frontend/auth", "login.html");

            webView21.CoreWebView2.Navigate(new Uri(path).AbsoluteUri);

            ConfigWebView();
        }

        private void ConfigWebView()
        {
            var s = webView21.CoreWebView2.Settings;

            s.IsZoomControlEnabled = false;
            s.IsPinchZoomEnabled = false;
            s.IsSwipeNavigationEnabled = false;

            webView21.ZoomFactor = 1.0;
        }

        private void CoreWebView2_WebMessageReceived(object sender, Microsoft.Web.WebView2.Core.CoreWebView2WebMessageReceivedEventArgs e)
        {
            string message = e.WebMessageAsJson;

            // LOGIN 
            var data = System.Text.Json.JsonDocument.Parse(message);
            string type = data.RootElement.GetProperty("type").GetString();

            if (type == "login")
            {
                string user = data.RootElement.GetProperty("user").GetString();
                string pass = data.RootElement.GetProperty("pass").GetString();

                if (user == "admin" && pass == "1234")
                {
                    webView21.CoreWebView2.ExecuteScriptAsync(
                        $"localStorage.setItem('user', '{user}'); window.location.href = 'app.html';"
);
                }
                else
                {
                    webView21.CoreWebView2.ExecuteScriptAsync(
                        "document.getElementById('error').innerText = 'Login incorrecto';"
                    );
                }
            }
            else if (type == "view")
            {
                string view = data.RootElement.GetProperty("data").GetString();

                var basePath = Directory.GetParent(Application.StartupPath)
                    .Parent.Parent.Parent.FullName;

                string path = Path.Combine(basePath, "frontend", "views", view);

                if (!File.Exists(path))
                {
                    webView21.CoreWebView2.ExecuteScriptAsync(
                        "document.getElementById('right').innerHTML = '<h2>Vista no encontrada</h2>';"
                    );
                    return;
                }

                string html = File.ReadAllText(path).Replace("`", "\\`");

                webView21.CoreWebView2.ExecuteScriptAsync(
                    $"document.getElementById('right').innerHTML = `{html}`;"
                );
            }
        }

    }
}
