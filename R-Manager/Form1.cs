namespace R_Manager
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            this.MinimumSize = new Size(890, 590);
        }

        private async void Form1_Load(object sender, EventArgs e)
        {
            await webView21.EnsureCoreWebView2Async();

            webView21.CoreWebView2.Settings.IsZoomControlEnabled = false;
            webView21.CoreWebView2.Settings.IsPinchZoomEnabled = false;
            webView21.ZoomFactor = 1.0;
            webView21.CoreWebView2.Settings.IsSwipeNavigationEnabled = false;

            var basePath = Directory.GetParent(Application.StartupPath).Parent.Parent.Parent.FullName;

            var path = Path.Combine(
                basePath,
                "frontend",
                "index.html"
            );

            var uri = new Uri(path).AbsoluteUri;

            webView21.CoreWebView2.Navigate(uri);
        }

    }
}
