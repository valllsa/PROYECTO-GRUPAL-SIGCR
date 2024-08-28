import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";

library.add(faTrash);
library.add(faPenToSquare);
library.add(faSquarePlus);

const Reporte = ({item, currentRecords, apiS}) => {

    const total = (currentRecords) => {
        let sum = 0
        currentRecords.forEach((cur => {
            const sal = cur.MesesAtrasados * 60000
            sum = sum + sal
        }))
        return sum
    }

    const generatePDF = (currentRecords) => {
      const doc = new jsPDF();

       const pageWidth = doc.internal.pageSize.getWidth();

       const textCenter = "Reporte saldo de deuda";
       const nombreConjunto = "Torres de Santa Isabel"

       const textWidth = doc.getTextWidth(textCenter);
       const textWidth2 = doc.getTextWidth(nombreConjunto);

       const x = (pageWidth - textWidth) / 2;
       const x2 = (pageWidth - textWidth2) / 2;
       
      // Agregar texto al PDF
      doc.text(textCenter, x, 20);
      doc.text(nombreConjunto, x2, 30);

      // Agregar una tabla de ejemplo
      doc.text("Codigo de Vivienda", 10, 40);
      doc.text("Nombre", 40, 40);
      doc.text("Edad", 100, 40);

      currentRecords.map((item, index) => {
        doc.text(item.CodigoVivienda, 10, 50 + index * 10);
      });

      // Guardar el PDF
      doc.save("reporte.pdf");
    };

  return (
    <div className="d-flex flex-column align-items-end">
      <div
        className="border border-primary rounded overflow-auto"
        style={{ width: "100%", height: "500px" }}
      >
        <table
          id="example2"
          className="table table-bordered table-hover dataTable dtr-inline"
          aria-describedby="example2_info"
        >
          <thead>
            <tr>
              {item.map((item, index) => (
                <th
                  className="sorting"
                  tabIndex="0"
                  aria-controls="example2"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Rendering engine: activate to sort column ascending"
                  key={index}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.CodigoVivienda}</td>
                <td>{record.Nombre}</td>
                <td>$ {record.MesesAtrasados * 60000}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2">Total saldo de Deuda</th>
              <th rowSpan="1" colSpan="1">
                $ {total(currentRecords)}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="my-2 w-25">
        <button
          type="button"
          className="btn btn-success p-0 m-0"
          onClick={() => generatePDF(currentRecords)}
        >
          Generar reporte <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </div>
    </div>
  );
};
export default Reporte;