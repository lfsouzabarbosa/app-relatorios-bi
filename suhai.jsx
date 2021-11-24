import React, { useCallback, useState } from "react";
import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Brush,  PieChart, Pie, Sector, Cell
} from 'recharts';
import { LogoFacebook32, UserFollow32, FavoriteFilled32, SendAltFilled32, LogoInstagram32 } from '@carbon/icons-react'
import styled from 'styled-components'
import {
    Table,
    TableRow,
    TableCell,
    TableCaption,
    TableHead,
    TableBody,
} from '@admin-bro/design-system'

const Topo = styled(TableCaption)`
background: #1C1C1C;
border: 2px solid #1C1C1C;
border-radius: 3px;
height: 60px;
color: black;
`;

const Botao = styled.button`
background: white;
color: #1C1C1CF;

&:hover {
    background: #1C1C1C;
    color: white;
    border: 2px solid #1C1C1C;
};

align: center;
max-width: 60%;
font-size: 1em;
margin-bottom: 1em;
padding: 1em;
border: 2px solid #1C1C1C;
border-radius: 3px;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: #1C1C1C;

&:hover {
   text-decoration:none;
   color: white;
};

`;

const Trds = [
    {  interesse: 11, data:"01/05", midia: 0 },
    {  interesse: 22, data:"02/05", midia: 0 },
    {  interesse: 43, data:"03/05", midia: 0 },
    {  interesse: 0,  data:"04/05", midia: 0 },
    {  interesse: 33, data:"05/05", midia: 0 },
    {  interesse: 35, data:"06/05", midia: 0},
    {  interesse: 9,  data:"07/05", midia: 0 },
    {  interesse: 12, data:"08/05", midia: 0 },
    {  interesse: 24, data:"09/05", midia: 0},
    {  interesse: 46, data:"10/05", midia: 0 },
    {  interesse: 9,  data:"11/05", midia: 0 },
    {  interesse: 60, data:"12/05", midia: 0 },
    {  interesse: 63, data:"13/05", midia: 0 },
    {  interesse: 38, data:"14/05", midia: 0},
    {  interesse: 23, data:"15/05", midia: 0},
    {  interesse: 11, data:"16/05", midia: 0},
    {  interesse: 35, data:"17/05", midia: 0},
    {  interesse: 35, data:"18/05", midia: 0 },
    {  interesse: 35, data:"19/05", midia: 0 },
    {  interesse: 18, data:"20/05", midia: 0},
    {  interesse: 46, data:"21/05", midia: 0 },
    {  interesse: 22, data:"22/05", midia: 0 },
    {  interesse: 33, data:"23/05", midia: 0},
    {  interesse: 72, data:"24/05", midia: 0 },
    {  interesse: 27, data:"25/05", midia: 0 },
    {  interesse: 27, data:"26/05", midia: 0},
    {  interesse: 26, data:"27/05", midia: 0 },
    {  interesse: 47, data:"28/05", midia: 0},
    {  interesse: 11, data:"29/05", midia: 0},
    {  interesse: 22, data:"30/05", midia: 0 },
    {  interesse: 26, data:"31/05", midia: 0},
    {  interesse: 44, data:"01/06", midia: 0 },
    {  interesse: 65, data:"02/06", midia: 0 },
    {  interesse: 21, data:"03/06", midia: 0 },
    {  interesse: 30, data:"04/06", midia: 0},
    {  interesse: 34, data:"05/06", midia: 0 },
    {  interesse: 34, data:"06/06", midia: 0 },
    {  interesse: 61, data:"07/06", midia: 0 },
    {  interesse: 17, data:"08/06", midia: 0 },
    {  interesse: 69, data:"09/06", midia: 0 },
    {  interesse: 52, data:"10/06", midia: 0 },
    {  interesse: 46, data:"11/06", midia: 0 },
    {  interesse: 23, data:"12/06", midia: 0 },
    {  interesse: 43, data:"13/06", midia: 0},
    {  interesse: 59, data:"14/06", midia: 0 },
    {  interesse: 44, data:"15/06", midia: 0 },
    {  interesse: 53, data:"16/06", midia: 0 },
    {  interesse: 35, data:"17/06", midia: 0},
    {  interesse: 29, data:"18/06", midia: 0 },
    {  interesse: 0,  data:"19/06", midia: 0 },
    {  interesse: 11, data:"20/06", midia: 0},
    {  interesse: 40, data:"21/06", midia: 0},
    {  interesse: 26, data:"22/06", midia: 0},
    {  interesse: 35, data:"23/06", midia: 0 },
    {  interesse:100, data:"24/06", midia: 0 },
    {  interesse: 47, data:"25/06", midia: 0 },
    {  interesse: 23, data:"26/06", midia: 0},
    {  interesse: 0,  data:"27/06", midia: 64.91},
    {  interesse: 26, data:"28/06", midia: 64.91 },
    {  interesse: 53, data:"29/06", midia: 64.91 },
    {  interesse: 53, data:"30/06", midia: 64.91 },
    {  interesse: 43, data:"01/07", midia: 64.91 },
    {  interesse: 49, data:"02/07", midia: 64.91 },
    {  interesse: 12, data:"03/07", midia: 64.91 },
    {  interesse: 0,  data:"04/07", midia: 72.25 },
    {  interesse: 27, data:"05/07", midia: 72.25  },
    {  interesse: 90, data:"06/07", midia: 72.25 },
    {  interesse: 26, data:"07/07", midia: 72.25 },
    {  interesse: 84, data:"08/07", midia: 72.25 },
    {  interesse: 20, data:"09/07", midia: 72.25 },
    {  interesse: 11, data:"10/07", midia: 72.25 },
    {  interesse: 23, data:"11/07", midia: 72.25 },
    {  interesse: 0,  data:"12/07", midia: 72.25 },
    {  interesse: 64, data:"13/07", midia: 72.25  },
    {  interesse: 36, data:"14/07", midia: 72.25 },
    {  interesse: 63, data:"15/07", midia: 72.25  },
    {  interesse: 57, data:"16/07", midia: 72.25 },
    {  interesse: 23, data:"17/07", midia: 72.25},
    {  interesse: 0,  data:"18/07", midia: 14.79},
    {  interesse: 65, data:"19/07", midia: 14.79 },
    {  interesse: 83, data:"20/07", midia: 14.79 },
    {  interesse: 63, data:"21/07", midia: 14.79},
    {  interesse: 92, data:"22/07", midia: 14.79 },
    {  interesse: 49, data:"23/07", midia: 14.79},
    {  interesse: 0,  data:"24/07", midia: 14.79 },
    {  interesse: 0,  data:"25/07", midia: 14.47},
    {  interesse: 72, data:"26/07", midia: 14.47 },
    {  interesse: 44, data:"27/07", midia: 14.47},
    {  interesse: 97, data:"28/07", midia: 14.47 },
    {  interesse: 64, data:"29/07", midia: 14.47},
    {  interesse: 48, data:"30/07", midia: 14.47 },
    {  interesse: 58, data:"31/07", midia: 14.47},
    {  interesse: 34, data:"01/08", midia: 24.07 },
    {  interesse: 18, data:"02/08", midia: 24.07 },
    {  interesse: 26, data:"03/08", midia: 24.07 },
    {  interesse: 9,  data:"04/08", midia: 24.07 },
    {  interesse: 36, data:"05/08", midia: 24.07  },
    {  interesse: 29, data:"06/08", midia: 24.07  },
    {  interesse: 45, data:"07/08", midia: 24.07  },
    {  interesse: 34, data:"08/08", midia: 21.76 },
    {  interesse: 73, data:"09/08", midia: 21.76 },
    {  interesse: 46, data:"10/08", midia: 21.76 },
    {  interesse: 35, data:"11/08", midia: 21.76},
    {  interesse: 53, data:"12/08", midia: 21.76 },
    {  interesse: 77, data:"13/08", midia: 21.76 },
    {  interesse: 11, data:"14/08", midia: 21.76 },
    {  interesse: 12, data:"15/08", midia: 18.78 },
    {  interesse: 62, data:"16/08", midia: 18.78 },
    {  interesse: 61, data:"17/08", midia: 18.78 },
    {  interesse: 35, data:"18/08", midia: 18.78  },
    {  interesse: 9,  data:"19/08", midia: 18.78 },
    {  interesse: 53, data:"20/08", midia: 18.78  },
    {  interesse: 11, data:"21/08", midia: 18.78 },
    {  interesse: 12, data:"22/08", midia: 20.79 },
    {  interesse: 42, data:"23/08", midia: 20.79 },
    {  interesse: 41, data:"24/08", midia: 20.79 },
    {  interesse: 61, data:"25/08", midia: 20.79},
    {  interesse: 27, data:"26/08", midia: 20.79},
    {  interesse: 56, data:"27/08", midia: 20.79 },
    {  interesse: 22, data:"28/08", midia: 20.79 },
    {  interesse: 33, data:"29/08", midia: 20.79 },
    {  interesse: 61, data:"30/08", midia: 20.79 },
    {  interesse: 75, data:"31/08", midia: 20.79 },
    {  interesse: 41, data:"01/09", midia: 20.79},
    {  interesse: 42, data:"02/09", midia: 20.79},
    {  interesse: 23, data:"03/09", midia: 20.79},
    {  interesse: 15, data:"04/09", midia: 20.79},
    {  interesse: 0,  data:"05/09", midia: 10.33 },
    {  interesse: 35, data:"06/09", midia: 10.33 },
    {  interesse: 26, data:"07/09", midia: 10.33 },
    {  interesse: 21, data:"08/09", midia: 10.33 },
    {  interesse: 72, data:"09/09", midia: 10.33 },
    {  interesse: 55, data:"10/09", midia: 10.33  },
    {  interesse: 13, data:"11/09", midia: 10.33  },
    {  interesse: 0,  data:"12/09", midia: 8.33 },
    {  interesse: 52, data:"13/09", midia: 8.33 },
    {  interesse: 60, data:"14/09", midia: 8.33 },
    {  interesse: 30, data:"15/09", midia: 8.33 },
    {  interesse: 61, data:"16/09", midia: 8.33 },
    {  interesse: 44, data:"17/09", midia: 8.33  },
    {  interesse: 42, data:"18/09", midia: 8.33 },
    {  interesse: 0,  data:"19/09", midia: 10.33 },
    {  interesse: 41, data:"20/09", midia: 10.33  },
    {  interesse: 50, data:"21/09", midia: 10.33 },
    {  interesse: 30, data:"22/09", midia: 10.33  },
    {  interesse: 10, data:"23/09", midia: 10.33  },
    {  interesse: 68, data:"24/09", midia: 10.33  },
    {  interesse: 53, data:"25/09", midia: 10.33  },
    {  interesse: 53, data:"26/09", midia: 10.33 },
    {  interesse: 42, data:"27/09", midia: 10.33  },
    {  interesse: 50, data:"28/09", midia: 10.33  },
    {  interesse: 40, data:"29/09", midia: 10.33  },
    {  interesse: 10, data:"30/09", midia: 10.33  },
    {  interesse: 78, data:"01/10", midia: 10.33  },
    {  interesse: 27, data:"02/10", midia: 10.33 },
    {  interesse: 0,  data:"03/10", midia: 9.47 },
    {  interesse: 28, data:"04/10", midia: 9.47 },
    {  interesse: 51, data:"05/10", midia: 9.47},
    {  interesse: 20, data:"06/10", midia: 9.47 },
    {  interesse: 61, data:"07/10", midia: 9.47 },
    {  interesse: 22, data:"08/10", midia: 9.47 },
    {  interesse: 26, data:"09/10", midia: 9.47 },
    {  interesse: 55, data:"10/10", midia: 7.46 },
    {  interesse: 23, data:"11/10", midia: 7.46 },
    {  interesse: 0,  data:"12/10", midia: 7.46 },
    {  interesse: 53, data:"13/10", midia: 7.46 },
    {  interesse: 61, data:"14/10", midia: 7.46 },
    {  interesse: 32, data:"15/10", midia: 7.46 },
    {  interesse: 13, data:"16/10", midia: 7.46},
    {  interesse: 0,  data:"17/10", midia: 0 },
    {  interesse: 20, data:"18/10", midia: 0 },
    {  interesse: 20, data:"19/10", midia: 0 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const crono = [
    { nome: 'TV Aberta', total: 1723691.74, tempo: '27/06 a 11/07' },
    { nome: 'Pay TV', total: 256116.80 , tempo: '18/07 a 03/10' },
    { nome: 'OOH', total: 838278.29 , tempo: '04/07 a 26/09' },
    { nome: 'Digital', total: 1193197.32, tempo: '27/07 a 10/10' }
];

const genero = [
    {genero: "Homem", valor: 295},
    {genero:"Indefinido", valor: 195},
    {genero: "Feminino", valor: 10}
]

const sentimentos = [
    {tipo: "Positivo", valor: 421},
    {tipo: "Negativo", valor: 190},
    {tipo: "Neutro", valor: 155}
]

const api = new ApiClient()

const Dashboard = () => {
    return (

        <><Box flex flexDirection="column" variant="grey">
            <Box paddingBottom="20px" maxHeight="150px" paddingX="1em" paddingY="1%" margin="10px">
                <Box width="200px" minHeight="20px">
                    <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDDAk7HNLdKCcV0QoZfZkOZoR5Z0IcZXgiojUM7iYt1noMg3wI7_UGXv9ESvbSMtFTw&usqp=CAU"
                        alt="Logo Suhai"></img>
                </Box>
            </Box>

            <div>
                <br></br>
                <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-evenly">
                    <Box backgroundColor="#ffffff" minWidth="20%" marginX="2%" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} minHeight="10%" maxHeight="30%" marginTop="10px" marginY="2%" marginBottom="2%" flexDirection="column" paddingX="20px" justifyContent="space-evenly">
                        <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" marginBottom="6%" justifyContent="space-evenly" marginTop="-4%">
                            <Text textAlign="center" paddingY="15px" paddingX="8px" fontSize="h1" color="white" fontWeight="4px">Facebook</Text>
                        </Box>
                        <Box>
                            <Box display={["block", "flex"]} flexDirection="column" justifyContent="center" marginY="1%" minWidth="45%" minHeight="100px">
                                <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingX="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <UserFollow32 color="white" aria-label="Add" />
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Fãs</Text>
                                        <Text fontSize="h2" fontWeight="900">76.160</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                        <SendAltFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                        <Text fontSize="h2" fontWeight="900">5</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <FavoriteFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Interações</Text>
                                        <Text fontSize="h2" fontWeight="900">938</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <br></br>
                    <Box backgroundColor="#ffffff" minWidth="20%" marginX="2%" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} minHeight="10%" maxHeight="30%" marginTop="10px" marginY="2%" marginBottom="2%" flexDirection="column" paddingX="20px" justifyContent="space-evenly">
                        <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" marginBottom="6%" justifyContent="space-evenly" marginTop="-3%">
                            <Text textAlign="center" paddingY="15px" paddingX="8px" fontSize="h1" color="white" fontWeight="4px">Instagram</Text>
                        </Box>
                        <Box display={["block", "flex"]} flexDirection="column" justifyContent="space-evenly" marginY="1%" minWidth="90%" minHeight="15%">
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                                <Box paddingX="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <UserFollow32 color="white" aria-label="Add" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Seguidores</Text>
                                    <Text fontSize="h2" fontWeight="900">418.238</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                                <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                    <SendAltFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">4</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <FavoriteFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Interações</Text>
                                    <Text fontSize="h2" fontWeight="900">39.680</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <br></br>
                    <Box backgroundColor="#ffffff" boxShadow="cardHover" paddingX="20px"  marginX="2%" borderRadius="7px" display={["block", "flex"]}  flexDirection="column" marginTop="10px" marginY="2%" marginBottom="2%" justifyContent="center" minWidth="33%" minHeight="30%">
                        <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" marginBottom="3%" justifyContent="space-evenly" marginTop="-3%">
                            <Text textAlign="center" paddingY="15px" paddingX="8px" fontSize="h1" color="white" fontWeight="4px">Mídia</Text>
                        </Box>
                        <div>
                            <ResponsiveContainer width="100%" height={270}>
                                <PieChart width={300} height={300}>
                                <Pie
                                    data={crono}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius="70%"
                                    fill="#8884d8"
                                    dataKey="total"
                                >
                                    {crono.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend height={5} verticalAlign="top" layout="horizontal" payload={[{value: 'TV Aberta', type: 'linear', id:'ID01', color: '#0088fe' }, 
                                {value: 'Digital', type: 'linear', id:'ID02', color: '#ff8042' }, {value: 'OOH', type: 'linear', id:'ID03', color: '#ffbb28' },
                                {value: 'Pay TV', type: 'linear', id:'ID04', color: '#00c49f' }]} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div>
                            <Box display="flex" minWidth="100%" justifyContent="center" verticalAlign="center">
                                <Botao>
                                    <StyledLink href="./suhaiFlashReport">
                                        <Text textAlign="center" fontSize="h2" fontWeight="800">Detalhes</Text>
                                    </StyledLink>
                                </Botao>
                            </Box>
                        </div>
                    </Box>
                </Box>
            </div>
            <div>
                <Box backgroundColor="#ffffff" boxShadow="cardHover"  borderRadius="7px" display={["block", "flex"]}  flexDirection="column" justifyContent="center" margin="2%" minHeight="90%">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" justifyContent="space-evenly" marginTop="-1%">
                                <Text textAlign="center" paddingY="20px" paddingX="20px" fontSize="h1" color="white" fontWeight="4px">Monitoramento de menções</Text>
                            </Box>
                    <Box display={["block", "flex"]}  flexDirection="row" justifyContent="center">
                        <Box paddingX="20px" marginX="2%" display={["block", "flex"]}  flexDirection="column" marginTop="10px" marginY="2%" marginBottom="2%" justifyContent="center" minWidth="33%" minHeight="30%">
                            <Text textAlign="center" paddingY="15px" paddingX="8px" fontSize="h1" fontWeight="4px">Gênero</Text>
                                <div>
                                    <ResponsiveContainer width="100%" height={270}>
                                        <PieChart width={300} height={300}>
                                        <Pie
                                            data={genero}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius="70%"
                                            fill="#8884d8"
                                            dataKey="valor"
                                        >
                                            {crono.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Legend height={5} verticalAlign="top" layout="horizontal" payload={[{value: 'Homem', type: 'linear', id:'ID01', color: '#0088fe' }, 
                                        {value: 'Feminino', type: 'linear', id:'ID03', color: '#ffbb28' },
                                        {value: 'Organização', type: 'linear', id:'ID04', color: '#00c49f' }]} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </Box>
                            <Box paddingX="20px"  marginX="2%" display={["block", "flex"]}  flexDirection="column" marginTop="10px" marginY="2%" marginBottom="2%" justifyContent="center" minWidth="33%" minHeight="30%">
                                    <Text textAlign="center" paddingY="15px" paddingX="8px" fontSize="h1" fontWeight="4px">Sentimento</Text>
                                <div>
                                    <ResponsiveContainer width="100%" height={270}>
                                        <PieChart width={300} height={300}>
                                        <Pie
                                            data={sentimentos}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius="70%"
                                            fill="#8884d8"
                                            dataKey="valor"
                                        >
                                            {crono.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Legend height={5} verticalAlign="top" layout="horizontal" payload={[{value: 'Positivo', type: 'linear', id:'ID01', color: '#0088fe' }, 
                                        {value: 'Negativo', type: 'linear', id:'ID03', color: '#ffbb28' },
                                        {value: 'Neutro', type: 'linear', id:'ID04', color: '#00c49f' }]} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </Box>
                        </Box>
                        <Box display={["block", "flex"]} flexDirection="row" justifyContent="center" paddingY="2%" paddingX="5%">
                            <Text textAlign="center" fontSize="h2" fontWeight="700">Publicações monitoradas: 766</Text>
                        </Box>
                    </Box>
            </div>
            <div>
                <Box display={["block"]} flexDirection="row" flexWrap="wrap" marginY="3%" justifyContent="space-evenly">
                        <Box backgroundColor="#ffffff" marginX="2%" marginY="2%" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="column" justifyContent="center" minWidth="93%" minHeight="5%" maxHeight="50%">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" justifyContent="space-evenly" marginTop="-1%">
                                <Text textAlign="center" paddingY="20px" paddingX="20px" fontSize="h1" color="white" fontWeight="4px">Google Trends</Text>
                            </Box>
                            <div>
                                <ResponsiveContainer width="100%" height={350}>
                                    <ComposedChart
                                    width="100%"
                                    height="100%"
                                    data={Trds}
                                    margin={{
                                        top: 25,
                                        right: 30,
                                        left: -17,
                                        bottom: 20,
                                      }}
                                    >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis dataKey="data" scale="band" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend verticalAlign="top"/>
                                    <Bar dataKey="interesse" barSize="50%" fill="#413ea0" />
                                    <Line type="linear" dataKey="midia" stroke="#ff7300" />
                                    <Brush />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>

                            <Box display="flex" marginBottom="15px" justifyContent="center" verticalAlign="center">
                                <Botao>
                                    <StyledLink href="http://vps23593.publiccloud.com.br:3007/">
                                        <Text textAlign="center" fontSize="h2" fontWeight="900">Mais Detalhes</Text>
                                    </StyledLink>
                                </Botao>
                            </Box>
                        </Box>
                        <br></br>
                        <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-evenly">
                            <Box minWidth="46%" margin="2%" boxShadow="card" borderRadius="7px" backgroundColor="#ffffff" padding="20px" display={["block", "flex"]}>
                                <Table>
                                    <Topo>
                                        <Text textAlign="center" paddingTop="2%" fontSize="h2">Pesquisas relacionadas</Text>
                                    </Topo>
                                    <TableRow><TableCell> </TableCell> <TableCell> </TableCell></TableRow>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>Suhai seguros
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2</TableCell>
                                            <TableCell>Suhai seguradora</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>3</TableCell>
                                            <TableCell>Suhai seguro</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>4</TableCell>
                                            <TableCell>Suhai corretor</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>5</TableCell>
                                            <TableCell>Suhai telefone</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>6</TableCell>
                                            <TableCell>Suhai reclame aqui</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>7</TableCell>
                                            <TableCell>Suhai moto suhai</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>8</TableCell>
                                            <TableCell>Suhai boleto</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>9</TableCell>
                                            <TableCell>Suhai corretor portal do corretor</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>10</TableCell>
                                            <TableCell>Suhai seguros corretor</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                            <br></br>
                            <br></br>
                            <Box minWidth="46%" margin="2%" boxShadow="card" borderRadius="7px" backgroundColor="#ffffff" padding="20px" display={["block", "flex"]}>
                                <Table>
                                    <Topo>
                                        <Text textAlign="center" paddingTop="2%" fontSize="h2">Assuntos relacionados</Text>
                                    </Topo>
                                    <TableRow><TableCell> </TableCell><TableCell> </TableCell></TableRow>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>Insurance
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2</TableCell>
                                            <TableCell>Broker</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>3</TableCell>
                                            <TableCell>Motorcycle</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>4</TableCell>
                                            <TableCell>Reclame Aqui</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>5</TableCell>
                                            <TableCell>Boleto</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>6</TableCell>
                                            <TableCell>Porto Seguro S.A.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>7</TableCell>
                                            <TableCell>Liberty Seguros</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>8</TableCell>
                                            <TableCell>Suhai Personal Security</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>9</TableCell>
                                            <TableCell>SulAmérica Seguros</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>10</TableCell>
                                            <TableCell>Bradesco Seguros</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box></>
    )
}

export default Dashboard;
