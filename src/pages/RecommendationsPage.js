import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NormalButton from '../components/NormalButton';
import Text from '../components/Text';
import NormalTable from '../components/NormalTable';
import { Box, Grid, Paper } from '@mui/material';


function RecommendationsPage ({tables, resultsDQ, recommendations}) {
    const [recommendationsTable, setRecommendationsTable] = useState(null)
    useEffect(() => {
      console.log(resultsDQ)
      let tempRec = recommendations
      const tempRes = resultsDQ
      const tempTab = tables

      if(tempRes[7].value === "2067") {
        tempRec = tempRec.filter(r => r.postcode === "2067")
      } else if (tempRes[7].value === "2154") {
        tempRec = tempRec.filter(r => r.postcode === "2154")
      } else if (tempRes[7].value === "2220") {
        tempRec = tempRec.filter(r => r.postcode === "2220")
      } else if (tempRes[7].value === "2077") {
        tempRec = tempRec.filter(r => r.postcode === "2077")
      } else if (tempRes[7].value === "2165") {
        tempRec = tempRec.filter(r => r.postcode === "2165")
      }

      if(tempRes[3].value === "Female") {
        tempRec = tempRec.filter(r => r.gender === "Female")
      } else if (tempRes[3].value === "Male") {
        tempRec = tempRec.filter(r => r.gender === "Male")
      } 

      if(tempRes[4].value === "Mandarin") {
        tempRec = tempRec.filter(r => r.language.includes("Mandarin"))
      } else if (tempRes[4].value === "Cantonese") {
        tempRec = tempRec.filter(r => r.language.includes("Cantonese"))
      } else if (tempRes[4].value === "Malaysian") {
        tempRec = tempRec.filter(r => r.language.includes("Malaysian"))
      } else if (tempRes[4].value === "Hindi") {
        tempRec = tempRec.filter(r => r.language.includes("Hindi"))
      } else if (tempRes[4].value === "Punjabi") {
        tempRec = tempRec.filter(r => r.language.includes("Punjabi"))
      }
      
      if(tables) {
        tempTab[2].rows = []
      }
  
      if(tempRes.length !== 0 && tables) {
        if(tempRes[0].value === "GP") {
          const gp = tempRec.filter(r => r.occupation === "GP") 
          let tempGP = gp.shift()
          gp.map((g) => tempGP.body = tempGP.body + " \\n --------------------- \\n " + g.body)
          tempTab[2].rows.push([tempGP.occupation, tempGP.body])
        }
        if(tempRes[1].value === "Counsellor") {
          const coun = tempRec.filter(r => r.occupation === "Counsellor") 
          let tempCoun = coun.shift()
          coun.map((g) => tempCoun.body = tempCoun.body + " \\n --------------------- \\n " + g.body)
          tempTab[2].rows.push([tempCoun.occupation, tempCoun.body])
        }
        if(tempRes[2].value === "Psychologist") {
          const psy = tempRec.filter(r => r.occupation === "Psychologist") 
          let tempPsy = psy.shift()
          psy.map((g) => tempPsy.body = tempPsy.body + " \\n --------------------- \\n " + g.body)
          tempTab[2].rows.push([tempPsy.occupation, tempPsy.body])   
        }
        if(tempRes[2].value === "Online") {
          const on = tempRec.filter(r => r.occupation === "Online") 
          let tempON = on.shift()
          on.map((g) => tempON.body = tempON.body + " \\n --------------------- \\n " + g.body)
          tempTab[2].rows.push([tempON.occupation, tempON.body])   
        }
        if(tempRes[2].value === "Telephone") {
          const tele = tempRec.filter(r => r.occupation === "Telephone") 
          let tempTele = tele.shift()
          tele.map((g) => tempTele.body = tempTele.body + " \\n --------------------- \\n " + g.body)
          tempTab[2].rows.push([tempTele.occupation, tempTele.body])  
        }
  
        setRecommendationsTable(tempTab[2])
        console.log(tempTab[2])
      }
    }, [resultsDQ, tables, recommendations])

    return (
        <div>
          <Box pt={10} pb={10}>
            <Grid container spacing={4}>
              <Grid item>
                <Paper>
                  <Box pt={4} pb={4} pl={6} pr={6}>
                    <Box pb={3}>
                      <Text variant={"h1"}>
                        Services For You
                      </Text>
                    </Box>

                    <Box pb={3} pl={2}>
                      <Text>
                        Based on your answers, we have generated a list of services which are most relevant to you: {"\n"}{"\n"}
                        (for the purpose of demonstrating a User Interface Diagram, let us assume that this particular 
                        user has selected that they are between the ages of 18-24, female, speaks Mandarin, and is 
                        single, as well as that they would like to see a GP and use an online service)
                      </Text>
                    </Box>

                    {recommendationsTable ? <NormalTable headings={recommendationsTable.headings} rows={recommendationsTable.rows}/>
                    : <></>}
                    <Box pt={4}>
                      <Link to="/" style={{ textDecoration: 'none' }}>
                          <NormalButton variant="contained"> Back Home </NormalButton>
                      </Link>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </div>
    )
}

export default RecommendationsPage