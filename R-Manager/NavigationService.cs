using Microsoft.Web.WebView2.WinForms;

namespace R_Manager
{
    internal class NavigationService
    {
        private string basePath;

        public NavigationService(string basePath)
        {
            this.basePath = basePath;
        }

        public void LoadLogin(WebView2 webView)
        {
            var path = Path.Combine(basePath, "frontend/auth", "login.html");
            webView.CoreWebView2.Navigate(new Uri(path).AbsoluteUri);
        }

        public void LoadApp(WebView2 webView)
        {
            var path = Path.Combine(basePath, "frontend", "app.html");
            webView.CoreWebView2.Navigate(new Uri(path).AbsoluteUri);
        }

        public void LoadView(WebView2 webView, string view)
        {
            string path = Path.Combine(basePath, "frontend", "views", view);

            if (!File.Exists(path))
            {
                webView.CoreWebView2.ExecuteScriptAsync(
                    "document.getElementById('right').innerHTML = '<h2>Vista no encontrada</h2>';"
                );
                return;
            }

            string html = File.ReadAllText(path).Replace("`", "\\`");

            webView.CoreWebView2.ExecuteScriptAsync(
                $"document.getElementById('right').innerHTML = `{html}`;"
            );
        }

        public void LoadForm(WebView2 webView, string view) {

            string path = Path.Combine(basePath, "frontend", "views", view);

            if (!File.Exists(path))
            {
                webView.CoreWebView2.ExecuteScriptAsync(
                    "document.getElementById('right').innerHTML = '<h2>Vista no encontrada</h2>';"
                );
                return;
            }

            string html = File.ReadAllText(path).Replace("`", "\\`");

            webView.CoreWebView2.ExecuteScriptAsync(
                $"document.getElementById('right').innerHTML = `{html}`;"
            );
        }

    }
}