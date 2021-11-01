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
    { interesse: 9, data: "04/01" },
    { interesse: 39, data: "04/02" },
    { interesse: 10, data: "04/03" },
    { interesse: 10, data: "04/04" },
    { interesse: 47, data: "04/05" },
    { interesse: 22, data: "04/06" },
    { interesse: 30, data: "04/07" },
    { interesse: 47, data: "04/08" },
    { interesse: 16, data: "04/09" },
    { interesse: 20, data: "04/10" },
    { interesse: 20, data: "04/11" },
    { interesse: 70, data: "04/12" },
    { interesse: 73, data: "04/13" },
    { interesse: 23, data: "04/14" },
    { interesse: 22, data: "04/15" },
    { interesse: 8, data: "04/16" },
    { interesse: 19, data: "04/17" },
    { interesse: 0, data: "04/18" },
    { interesse: 45, data: "04/19" },
    { interesse: 54, data: "04/20" },
    { interesse: 0, data: "04/21" },
    { interesse: 69, data: "04/22" },
    { interesse: 32, data: "04/23" },
    { interesse: 48, data: "04/24" },
    { interesse: 50, data: "04/25" },
    { interesse: 29, data: "04/26" },
    { interesse: 29, data: "04/27" },
    { interesse: 36, data: "04/28" },
    { interesse: 15, data: "04/29" },
    { interesse: 31, data: "04/30" },
    { interesse: 10, data: "05/01" },
    { interesse: 10, data: "05/02" },
    { interesse: 30, data: "05/03" },
    { interesse: 14, data: "05/04" },
    { interesse: 36, data: "05/05" },
    { interesse: 39, data: "05/06" },
    { interesse: 17, data: "05/07" },
    { interesse: 31, data: "05/08" },
    { interesse: 0, data: "05/09" },
    { interesse: 41, data: "05/10" },
    { interesse: 15, data: "05/11" },
    { interesse: 23, data: "05/12" },
    { interesse: 56, data: "05/13" },
    { interesse: 33, data: "05/14" },
    { interesse: 10, data: "05/15" },
    { interesse: 0, data: "05/16" },
    { interesse: 54, data: "05/17" },
    { interesse: 16, data: "05/18" },
    { interesse: 23, data: "05/19" },
    { interesse: 16, data: "05/20" },
    { interesse: 16, data: "05/21" },
    { interesse: 0, data: "05/22" },
    { interesse: 0, data: "05/23" },
    { interesse: 79, data: "05/24" },
    { interesse: 32, data: "05/25" },
    { interesse: 31, data: "05/26" },
    { interesse: 46, data: "05/27" },
    { interesse: 25, data: "05/28" },
    { interesse: 10, data: "05/29" },
    { interesse: 10, data: "05/30" },
    { interesse: 39, data: "05/31" },
    { interesse: 31, data: "06/01" },
    { interesse: 31, data: "06/02" },
    { interesse: 0, data: "06/03" },
    { interesse: 44, data: "06/04" },
    { interesse: 50, data: "06/05" },
    { interesse: 10, data: "06/06" },
    { interesse: 77, data: "06/07" },
    { interesse: 22, data: "06/08" },
    { interesse: 61, data: "06/09" },
    { interesse: 60, data: "06/10" },
    { interesse: 49, data: "06/11" },
    { interesse: 20, data: "06/12" },
    { interesse: 28, data: "06/13" },
    { interesse: 78, data: "06/14" },
    { interesse: 46, data: "06/15" },
    { interesse: 54, data: "06/16" },
    { interesse: 8, data: "06/17" },
    { interesse: 33, data: "06/18" },
    { interesse: 20, data: "06/19" },
    { interesse: 20, data: "06/20" },
    { interesse: 78, data: "06/21" },
    { interesse: 38, data: "06/22" },
    { interesse: 31, data: "06/23" },
    { interesse: 24, data: "06/24" },
    { interesse: 58, data: "06/25" },
    { interesse: 20, data: "06/26" },
    { interesse: 0, data: "06/27" },
    { interesse: 53, data: "06/28" },
    { interesse: 86, data: "06/29" },
    { interesse: 23, data: "06/30" },
    { interesse: 23, data: "07/01" },
    { interesse: 43, data: "07/02" },
    { interesse: 0, data: "07/03" },
    { interesse: 10, data: "07/04" },
    { interesse: 88, data: "07/05" },
    { interesse: 47, data: "07/06" },
    { interesse: 16, data: "07/07" },
    { interesse: 41, data: "07/08" },
    { interesse: 27, data: "07/09" },
    { interesse: 30, data: "07/10" },
    { interesse: 20, data: "07/11" },
    { interesse: 41, data: "07/12" },
    { interesse: 48, data: "07/13" },
    { interesse: 71, data: "07/14" },
    { interesse: 31, data: "07/15" },
    { interesse: 25, data: "07/16" },
    { interesse: 10, data: "07/17" },
    { interesse: 0, data: "07/18" },
    { interesse: 49, data: "07/19" },
    { interesse: 49, data: "07/20" },
    { interesse: 40, data: "07/21" },
    { interesse: 32, data: "07/22" },
    { interesse: 43, data: "07/23" },
    { interesse: 41, data: "07/24" },
    { interesse: 20, data: "07/25" },
    { interesse: 72, data: "07/26" },
    { interesse: 31, data: "07/27" },
    { interesse: 78, data: "07/28" },
    { interesse: 32, data: "07/29" },
    { interesse: 34, data: "07/30" },
    { interesse: 20, data: "07/31" },
    { interesse: 0, data: "08/01" },
    { interesse: 24, data: "08/02" },
    { interesse: 39, data: "08/03" },
    { interesse: 32, data: "08/04" },
    { interesse: 48, data: "08/05" },
    { interesse: 17, data: "08/06" },
    { interesse: 30, data: "08/07" },
    { interesse: 31, data: "08/08" },
    { interesse: 48, data: "08/09" },
    { interesse: 24, data: "08/10" },
    { interesse: 38, data: "08/11" },
    { interesse: 61, data: "08/12" },
    { interesse: 59, data: "08/13" },
    { interesse: 10, data: "08/14" },
    { interesse: 10, data: "08/15" },
    { interesse: 63, data: "08/16" },
    { interesse: 38, data: "08/17" },
    { interesse: 23, data: "08/18" },
    { interesse: 38, data: "08/19" },
    { interesse: 55, data: "08/20" },
    { interesse: 0, data: "08/21" },
    { interesse: 10, data: "08/22" },
    { interesse: 28, data: "08/23" },
    { interesse: 59, data: "08/24" },
    { interesse: 70, data: "08/25" },
    { interesse: 39, data: "08/26" },
    { interesse: 33, data: "08/27" },
    { interesse: 20, data: "08/28" },
    { interesse: 39, data: "08/29" },
    { interesse: 23, data: "08/30" },
    { interesse: 41, data: "08/31" },
    { interesse: 18, data: "09/01" },
    { interesse: 28, data: "09/02" },
    { interesse: 50, data: "09/03" },
    { interesse: 39, data: "09/04" },
    { interesse: 13, data: "09/05" },
    { interesse: 21, data: "09/06" },
    { interesse: 23, data: "09/07" },
    { interesse: 0, data: "09/08" },
    { interesse: 10, data: "09/09" },
    { interesse: 49, data: "09/10" },
    { interesse: 0, data: "09/11" },
    { interesse: 23, data: "09/12" },
    { interesse: 36, data: "09/13" },
    { interesse: 70, data: "09/14" },
    { interesse: 44, data: "09/15" },
    { interesse: 18, data: "09/16" },
    { interesse: 39, data: "09/17" },
    { interesse: 49, data: "09/18" },
    { interesse: 0, data: "09/19" },
    { interesse: 55, data: "09/20" },
    { interesse: 36, data: "09/21" },
    { interesse: 44, data: "09/22" },
    { interesse: 64, data: "09/23" },
    { interesse: 20, data: "09/24" },
    { interesse: 58, data: "09/25" },
    { interesse: 0, data: "09/26" },
    { interesse: 46, data: "09/27" },
    { interesse: 62, data: "09/28" },
    { interesse: 35, data: "09/29" },
    { interesse: 46, data: "09/30" },
    { interesse: 59, data: "10/01" },
    { interesse: 12, data: "10/02" },
    { interesse: 11, data: "10/03" },
    { interesse: 17, data: "10/04" },
    { interesse: 18, data: "10/05" },
    { interesse: 54, data: "10/06" },
    { interesse: 36, data: "10/07" },
    { interesse: 30, data: "10/08" },
    { interesse: 24, data: "10/09" },
    { interesse: 24, data: "10/10" },
    { interesse: 10, data: "10/11" },
    { interesse: 0, data: "10/12" },
    { interesse: 47, data: "10/13" },
    { interesse: 54, data: "10/14" },
    { interesse: 10, data: "10/15" },
    { interesse: 12, data: "10/16" },
    { interesse: 12, data: "10/17" },
    { interesse: 44, data: "10/18" },
    { interesse: 18, data: "10/19" },
    { interesse: 54, data: "10/20" },
    { interesse: 28, data: "10/21" },
    { interesse: 60, data: "10/22" },
    { interesse: 57, data: "10/23" },
    { interesse: 0, data: "10/24" },
    { interesse: 55, data: "10/25" },
    { interesse: 26, data: "10/26" },
    { interesse: 54, data: "10/27" },
    { interesse: 9, data: "10/28" },
    { interesse: 29, data: "10/29" },
    { interesse: 34, data: "10/30" },
];

const crono = [
    { nome: 'TV Aberta', total: '172.3691,74', tempo: '27/06 a 11/07' },
    { nome: 'Pay TV', total: '256.116,80', tempo: '18/07 a 03/10' },
    { nome: 'OOH', total: '838.278,29', tempo: '04/07 a 26/09' },
    { nome: 'Digital', total: '119.3197,32', tempo: '27/07 a 10/10' }
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

        <Box flex flexDirection="column" variant="grey">
            <Box paddingBottom="20px" maxHeight="150px" padding="1em" margin="10px">
                <Box width="200px" minHeight="20px">
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
                                <SendAltFilled32 aria-label="Add" color="white" />
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
                                <SendAltFilled32 aria-label="Add" color="white" />
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

                <Box display="flex" justifyContent="center" marginTop="2%" verticalAlign="center">
                    <Botao >
                        <StyledLink href="http://vps23593.publiccloud.com.br:3007/">
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
