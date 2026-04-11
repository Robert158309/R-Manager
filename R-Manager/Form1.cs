namespace R_Manager
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private async void Form1_Load(object sender, EventArgs e)
        {
            await webView21.EnsureCoreWebView2Async();

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
