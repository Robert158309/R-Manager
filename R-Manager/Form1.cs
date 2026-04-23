namespace R_Manager
{
    public partial class Form1 : Form
    {
        private string basePath;
        private AuthService authService;
        private NavigationService navigationService;

        public Form1()
        {
            InitializeComponent();

            this.MinimumSize = new Size(1024, 590);
            this.WindowState = FormWindowState.Maximized;

            this.Load += Form1_Load;
        }

        private async void Form1_Load(object sender, EventArgs e)
        {
            await webView21.EnsureCoreWebView2Async();

            basePath = Directory.GetParent(Application.StartupPath)
                .Parent.Parent.Parent.FullName;

            authService = new AuthService();
            navigationService = new NavigationService(basePath);

            webView21.CoreWebView2.WebMessageReceived += CoreWebView2_WebMessageReceived;

            navigationService.LoadLogin(webView21);

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
            var data = System.Text.Json.JsonDocument.Parse(e.WebMessageAsJson);
            string type = data.RootElement.GetProperty("type").GetString();

            if (type == "login")
            {
                string user = data.RootElement.GetProperty("user").GetString();
                string pass = data.RootElement.GetProperty("pass").GetString();

                if (authService.Login(user, pass))
                {
                    navigationService.LoadApp(webView21);
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
                navigationService.LoadView(webView21, view);
            }
        }
    }
}