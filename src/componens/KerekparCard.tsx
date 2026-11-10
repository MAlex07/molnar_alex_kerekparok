import { useState } from "react";
import type { Kerekparok } from "../type/Kerekparok";

type KerekparProps = {
  bicikli: Kerekparok;
};

function KerekparCard({ bicikli }: KerekparProps) {
  const [reszek, setReszek] = useState(true);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              {reszek && (
                <>
                  <h3>{bicikli.nev}</h3>
                  <p>
                    <em>{bicikli.tipus}</em>
                  </p>
                  <p>
                    <u>{bicikli.napiDij}</u>
                  </p>
                </>
              )}

              <button onClick={() => setReszek(!reszek)}>
                {reszek ? "Részletek elrejtese" : "Részletek megjelenítése"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KerekparCard;
