namespace R_Manager
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            this.MinimumSize = new Size(890, 590);

            this.Load += Form1_Load;

        }

        private async void Form1_Load(object sender, EventArgs e)
        {
            await webView21.EnsureCoreWebView2Async();

            webView21.CoreWebView2.WebMessageReceived += CoreWebView2_WebMessageReceived;

            var basePath = Directory.GetParent(Application.StartupPath)
                .Parent.Parent.Parent.FullName;

            var path = Path.Combine(basePath, "frontend", "index.html");

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
            string view = e.TryGetWebMessageAsString();

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

            string initFunction = Path.GetFileNameWithoutExtension(view) + "Init";

            webView21.CoreWebView2.ExecuteScriptAsync($"{initFunction}()");
        }
    }
}
