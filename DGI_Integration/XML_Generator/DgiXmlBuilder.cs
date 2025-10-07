using System.Xml;
namespace Mogroup.DGI.XMLGenerator;
public static class DgiXmlBuilder {
  public static string BuildInvoiceXml(object invoice) {
    var doc = new XmlDocument();
    var root = doc.CreateElement("FacturaElectronica");
    doc.AppendChild(root);
    return doc.OuterXml;
  }
}
