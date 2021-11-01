import React, { useCallback, useState } from "react";
import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import {
    PieChart, Pie, Sector, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Brush, Tooltip
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
max-width: 50%;
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
    {interesse: 23, data:"09/08"},
    {interesse: 33, data:"10/08"},
    {interesse: 43, data: "11/08"},
    {interesse: 54, data:"12/08"},
    {interesse: 47, data:"13/08"},
    {interesse: 14, data:"14/08"},
    {interesse: 28, data:"15/08"},
    {interesse: 98, data:"16/08"},
    {interesse: 21, data:"17/08"},
    {interesse: 52, data:"18/08"},
    {interesse: 53, data:"19/08"},
    {interesse: 33, data:"20/08"},
    {interesse: 28, data:"21/08"},
    {interesse: 0, data:"22/08"},
    {interesse: 52, data:"23/08"},
    {interesse: 99, data:"24/08"},
    {interesse: 32, data:"25/08"},
    {interesse: 54, data:"26/08"},
    {interesse: 69, data:"27/08"},
    {interesse: 27, data:"28/08"},
    {interesse: 0, data:"29/08"},
    {interesse: 22, data:"30/08"},
    {interesse: 58, data:"31/08"},
    {interesse: 95, data:"01/09"},
    {interesse: 33, data:"02/09"},
    {interesse: 23, data:"03/09"},
    {interesse: 15, data:"04/09"},
    {interesse: 0, data:"05/09"},
    {interesse: 49, data:"06/09"},
    {interesse: 27, data:"07/09"},
    {interesse: 21, data:"08/09"},
    {interesse: 42, data:"09/09"},
    {interesse: 23, data:"10/09"},
    {interesse: 54, data:"11/09"},
    {interesse: 27, data:"12/09"},
    {interesse: 21, data:"13/09"},
    {interesse: 40, data:"14/09"},
    {interesse: 30, data:"15/09"},
    {interesse: 32, data:"16/09"},
    {interesse: 57, data:"17/09"},
    {interesse: 42, data:"18/09"},
    {interesse: 55, data:"19/09"},
    {interesse: 74, data:"20/09"},
    {interesse: 41, data:"21/09"},
    {interesse: 50, data:"22/09"},
    {interesse: 32, data:"23/09"},
    {interesse: 46, data:"24/09"},
    {interesse: 14, data:"25/09"},
    {interesse: 13, data:"26/09"},
    {interesse: 11, data:"27/09"},
    {interesse: 51, data:"28/09"},
    {interesse: 41, data:"29/09"},
    {interesse: 31, data:"30/09"},
    {interesse: 56, data:"01/10"},
    {interesse: 0, data:"02/10"},
    {interesse: 13, data:"03/10"},
    {interesse: 29, data:"04/10"},
    {interesse: 52, data:"05/10"},
    {interesse: 93, data:"06/10"},
    {interesse: 31, data:"07/10"},
    {interesse: 35, data:"08/10"},
    {interesse: 14, data:"09/10"},
    {interesse: 14, data:"10/10"},
    {interesse: 12, data:"11/10"},
    {interesse: 28, data:"12/10"},
    {interesse: 96, data:"13/10"},
    {interesse: 31, data:"14/10"},
    {interesse: 66, data:"15/10"},
    {interesse: 14, data:"16/10"},
    {interesse: 40, data:"17/10"},
];

const crono = [
    {nome: 'TV Aberta', total: 1723691.74 , tempo:'27/06 a 11/07'},
    {nome: 'Pay TV', total: 256116.80, tempo: '18/07 a 03/10' },
    {nome: 'OOH', total: 838278.29, tempo: '04/07 a 26/09' },
    {nome: 'Digital', total: 1193197.32, tempo: '27/07 a 10/10'}
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={10} textAnchor="middle" fill={fill}>
          {payload.nome}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >Total: {`${payload.total}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#333"
        >{`${payload.tempo}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={34}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
};

const api = new ApiClient()

const Dashboard = () => {

    
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
        setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (

        <Box  flex flexDirection="column" variant="grey">
            <Box paddingBottom="20px" maxHeight="150px" padding="1em" margin="10px">
                <Box width="200px"  minHeight="20px">
                    <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDDAk7HNLdKCcV0QoZfZkOZoR5Z0IcZXgiojUM7iYt1noMg3wI7_UGXv9ESvbSMtFTw&usqp=CAU"
                    alt="Logo Suhai"></img>
                </Box>
            </Box>

        <Box display={["block", "flex"]} flexDirection="column" justifyContent="center">
            <Box padding="20px" alignItems="center" margin="10px" display={["flex"]} flexDirection="column" justifyContent="center" minHeight="650px">
                <Box backgroundColor="#ffffff" boxShadow="card" borderRadius="5px" padding="10px" alignItems="center" justifyContent="start" maxHeight="100px" minWidth="100%" display={["inline-flex"]}>
                      <Text paddingY="5px" paddingX="5px" fontSize="h1" fontWeight="4px">Facebook</Text>
                </Box>
                <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="row" justifyContent="space-evenly" marginY="5%" minWidth="100%" minHeight="100px">
                    <Box justifyContent="center" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                        <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="10px">
                            <UserFollow32 color="white" aria-label="Add" />
                        </Box>
                        <Box paddingY="10px" paddingLeft="10px" paddingRight="30px">
                            <Text paddingY="5px" fontSize="h4" fontWeight="3px">Fãs</Text>
                            <Text fontSize="h2" fontWeight="900">76.160</Text>
                        </Box>
                    </Box>
                    <Box justifyContent="center" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                        <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="10px">
                            <SendAltFilled32 aria-label="Add" color="white"/>
                        </Box>
                        <Box padding="10px">
                            <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                            <Text fontSize="h2" fontWeight="900">5</Text>
                        </Box>
                    </Box>
                    <Box justifyContent="center" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="10px">
                                <FavoriteFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">938</Text>
                            </Box>
                        </Box>
                </Box>

                    <Box backgroundColor="#ffffff" boxShadow="card" borderRadius="5px" padding="10px" alignItems="center" justifyContent="start" maxHeight="100px" minWidth="100%" display={["inline-flex"]}>
                        <Text paddingY="5px" paddingX="5px" fontSize="h1" fontWeight="4px">Instagram</Text>
                    </Box>
                    <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="row" justifyContent="space-evenly" marginY="5%" minWidth="100%" minHeight="100px">
                        <Box justifyContent="center" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="10px">
                                <UserFollow32 color="white" aria-label="Add" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Seguidores</Text>
                                <Text fontSize="h2" fontWeight="900">418.238</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="center" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="10px">
                                <SendAltFilled32 aria-label="Add" color="white"/>
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">4</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="center" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                        <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="10px">
                                <FavoriteFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">39.680</Text>
                            </Box>
                        </Box>   

                    </Box> 

                    <Botao>
                        <StyledLink href="./suhaiFlashReport">
                            <Text textAlign="center" fontSize="h2" fontWeight="900" >Flash Report</Text>
                        </StyledLink>
                    </Botao>

            </Box>
        </Box>

        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="column" justifyContent="space-evenly" marginY="3%" marginX="3%" minWidth="30%" minHeight="5%" maxHeight="20%">
            <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" justifyContent="space-evenly" marginTop="-1%">
                <Text paddingY="20px" paddingX="20px" fontSize="h1" color="white" fontWeight="4px">Mídia</Text>
            </Box>
               <Box display={["block"]} flexDirection="column" justifyContent="center" paddingBottom="3%" >
                    <ResponsiveContainer width="100%" height="80%" aspect={3, 3}>
                        <PieChart width={413} height={200}>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={crono}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#1C1C1C"
                            dataKey="total"
                            onMouseEnter={onPieEnter}
                        />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
        </Box>


        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="column" justifyContent="space-evenly" marginX="3%" minWidth="90%" minHeight="5%" maxHeight="25%">
            <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" justifyContent="space-evenly" marginTop="-1%">
                <Text paddingY="20px" paddingX="20px" fontSize="h1" color="white" fontWeight="4px">Google Trends</Text>
            </Box>
            <Box paddingY="3%" paddingX="2%">
                <Text textAlign="center" paddingBottom="1%" fontSize="h3" fontWeight="3px" >Interesse</Text>
               <ResponsiveContainer width="100%" height="90%" aspect={3, 3}>
                    <AreaChart
                    width={500}
                    height={400}
                    data={Trds}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="data" />
                    <YAxis />
                    <Tooltip />
                    <Brush />
                    <Area type="monotone" dataKey="interesse" stroke="#1C1C1C" fill="#1C1C1C" />
                    </AreaChart>
                </ResponsiveContainer></Box>

                <Box display="flex" justifyContent="center"  marginTop="2%" verticalAlign="center">
                        <Botao >
                                <StyledLink href="./suhaiFlashReport">
                                    <Text textAlign="center" fontSize="h2" fontWeight="900">Mais Detalhes</Text>
                                </StyledLink>
                        </Botao>
                </Box>
        </Box>

            
            <Box display={["block", "flex"]} padding="10px" flexDirection="row" margin="10px" justifyContent="center">
                <Box minWidth="45%" marginTop="5%" marginBottom="4%" marginX="30px" boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" padding="20px" display={["block", "flex"]} >
                    <Table>
                        <Topo minHeight="70px">
                            <Text paddingTop="2%" fontSize="h2">Pesquisas relacionadas</Text>
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

                <Box minWidth="45%" marginTop="5%" marginBottom="4%" marginX="30px" boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" padding="20px" display={["block", "flex"]} >
                    <Table>
                        <Topo>
                            <Text paddingTop="2%" paddingBottom="1%" fontSize="h2">Assuntos relacionados</Text>
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
    )
}

export default Dashboard;
