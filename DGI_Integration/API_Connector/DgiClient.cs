using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
namespace Mogroup.DGI.APIConnector;
public class DgiClient {
  private readonly HttpClient _http;
  public DgiClient(HttpClient http) { _http = http; }
  public async Task<string> SubmitAsync(string signedXml, string endpoint) {
    var content = new StringContent(signedXml, Encoding.UTF8, "application/xml");
    var res = await _http.PostAsync(endpoint, content);
    res.EnsureSuccessStatusCode();
    return await res.Content.ReadAsStringAsync();
  }
}
