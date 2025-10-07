using System.Xml;
using System.Xml.Schema;
namespace Mogroup.DGI.Validators;
public static class DgiXmlValidator {
  public static (bool ok, string[] errors) Validate(string xml, string xsdPath) {
    var errors = new System.Collections.Generic.List<string>();
    var schema = new XmlSchemaSet();
    schema.Add("", xsdPath);
    var settings = new XmlReaderSettings { ValidationType = ValidationType.Schema, Schemas = schema };
    settings.ValidationEventHandler += (s, e) => errors.Add(e.Message);
    using var sr = new System.IO.StringReader(xml);
    using var xr = XmlReader.Create(sr, settings);
    while (xr.Read()) {}
    return (errors.Count == 0, errors.ToArray());
  }
}
