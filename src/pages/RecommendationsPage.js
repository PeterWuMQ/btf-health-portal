import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Heading from '../components/text/Heading';
import NormalText from '../components/text/NormalText';
import Table from '../components/table/Table';


function RecommendationsPage ({tables, resultsDQ, recommendations}) {
    const [recommendationsTable, setRecommendationsTable] = useState(null)
    useEffect(() => {
      console.log(resultsDQ)

      let tempRec = recommendations
      const tempRes = resultsDQ
      const tempTab = tables

      if(tempRes[5].value === "0000") {
        tempRec = tempRec.filter(r => r.postcode === "0000")
      } else if (tempRes[5].value === "1111") {
        tempRec = tempRec.filter(r => r.postcode === "1111")
      }
      
      if(tables) {
        tempTab[2].rows = []
      }
  
      if(tempRes.length !== 0 && tables) {
        if(tempRes[0].value === "GP") {
          if(tempRes[1].value === "Male") {
            const gp = tempRec.filter(r => r.tag === "Male") 
            tempTab[2].rows.push([gp[0].tag, gp[0].body])
          } else if(tempRes[1].value === "Female") {
            const gp = tempRec.filter(r => r.tag === "Female") 
            tempTab[2].rows.push([gp[0].tag, gp[0].body])
          } else {
            const gp = tempRec.filter(r => r.tag === "GP") 
            tempTab[2].rows.push([gp[0].tag, gp[0].body])
          }
        }
  
        if(tempRes[2].value === "Therapist") {
          const thera = tempRec.filter(r => r.tag === "Therapist") 
          tempTab[2].rows.push([thera[0].tag, thera[0].body])    
        }
        if(tempRes[3].value === "Online") {
          const online = tempRec.filter(r => r.tag === "Online") 
          tempTab[2].rows.push([online[0].tag, online[0].body])    
        }
        if(tempRes[4].value === "Telephone") {
          const tele = tempRec.filter(r => r.tag === "Telephone") 
          tempTab[2].rows.push([tele[0].tag, tele[0].body])    
        }
  
        setRecommendationsTable(tempTab[2])
      }
    }, [resultsDQ, tables, recommendations])

    return (
        <div>
            <Heading>
                Services For You
            </Heading>

            <NormalText>
                Based on your answers, we have generated a list of services which are most relevant to you: {"\n"}{"\n"}
                (for the purpose of demonstrating a User Interface Diagram, let us assume that this particular 
                user has selected that they are between the ages of 18-24, female, speaks Mandarin, and is 
                single, as well as that they would like to see a GP and use an online service)
            </NormalText>

            {recommendationsTable ? <Table headings={recommendationsTable.headings} rows={recommendationsTable.rows}/>
            : <></>}

            <Link to="/">
                <Button> Back Home </Button>
            </Link>
        </div>
    )
}

export default RecommendationsPage