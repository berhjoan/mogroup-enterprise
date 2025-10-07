using System.Security.Cryptography.X509Certificates;
namespace Mogroup.DGI.DigitalSignature;
public static class DgiSigner {
  public static string Sign(string xml, X509Certificate2 cert) {
    // Implementar firma XMLDSIG según requisitos locales
    return xml;
  }
}
