import { Calendar } from 'primereact/calendar';
import React, { useState } from "react";

const Nopage = () => {
  const defaultDate = new Date(2024, 1, 24); // Le mois est 0-indexé donc 1 représente février
  const [date, setDate] = useState(defaultDate);

  return (
    <div>
        <h1>404 PAGE NOT FOUND</h1>
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        </div>
    </div>
  )
}

export default Nopage
