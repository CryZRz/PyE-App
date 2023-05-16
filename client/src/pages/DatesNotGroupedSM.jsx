import { useState } from 'react'

import { HeaderTables } from "../Components/HeaderTables"
import { TableDates } from '../Components/Second-moment/TableDatesNotGrouped'

export function DatesNotGroupedSM() {

  const [numRows, setNumRows] = useState()

  return (
    <div className="Main-sm-dng">
        <HeaderTables
          title={"Segundo Momento"} 
          subtitle={"Datos no agrupados"}
          setNumRows={setNumRows}
          />
        <TableDates
          numRows={numRows}
        />
    </div>
  )
}

