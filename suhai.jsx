import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import {
    Brush,
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { LogoFacebook32 } from '@carbon/icons-react'
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
background: #1E90FF;
border: 2px solid #1E90FF;
border-radius: 3px;
height: 60px;
color: black;
`;

const Botao = styled.button`
background: white;
color: #1E90FF;

&:hover {
    background: #1E90FF;
    color: white;
    border: 2px solid #1E90FF;
};

align: center;
max-width: 50%;
font-size: 1em;
margin: 1em;
padding: 1em;
border: 2px solid #1E90FF;
border-radius: 3px;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: #1E90FF;

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
  
const api = new ApiClient()

const Dashboard = () => {

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
                      <Box ><img width="50px" height="50px"
                        src="https://image.flaticon.com/icons/png/512/747/747543.png"></img>
                      </Box>
                </Box>
                <Box display={["block", "flex"]} padding="10px" flexDirection="row" margin="10px" alignItems="center" minHeight="200px">
                  <Box display={["block", "flex"]} padding="10px" flexDirection="row" margin="10px" alignItems="center" minHeight="200px">
                        <Box backgroundColor="#ffffff" justifyContent="center" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px"  paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                alt="Fãs"></img>
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px" paddingRight="30px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Fãs</Text>
                                <Text fontSize="h2" fontWeight="900">76.160</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                alt="Posts"></img>
                            </Box>
                            <Box padding="10px" paddingRight="70px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">5</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                alt="Alcance"></img>
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">938</Text>
                            </Box>
                        </Box>
                  </Box>
                </Box>

                    <Box backgroundColor="#ffffff" boxShadow="card" borderRadius="5px" padding="10px" alignItems="center" justifyContent="start" maxHeight="100px" minWidth="100%" display={["inline-flex"]}>
                            <Box ><img width="50px" height="50px"
                            src="https://image.flaticon.com/icons/png/512/733/733558.png"></img></Box>
                    </Box>
                    <Box display={["block", "flex"]} padding="10px" flexDirection="row" margin="10px" alignItems="center" minHeight="200px">
                            <Box backgroundColor="#ffffff" justifyContent="center" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px"  paddingTop="17px">
                                        <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                        alt="Fãs"></img>
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="5px" fontSize="h4" fontWeight="3px">Seguidores</Text>
                                        <Text fontSize="h2" fontWeight="900">418.238</Text>
                                </Box>
                            </Box>
                            <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                    <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                    alt="Posts"></img>
                                </Box>
                                <Box padding="10px" paddingRight="50px">
                                    <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">4</Text>
                                </Box>
                            </Box>
                            <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                    <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                    alt="Alcance"></img>
                                </Box>
                                <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
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

            <Box display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding="3em" >
                <Box>
                    <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                </Box>
                <Box paddingLeft="10px">
                    <Text color="black" fontSize="h3">GOOGLE TRENDS</Text>
                </Box>
            </Box>
            
            <Box borderRadius="5px" boxShadow="card" backgroundColor="#ffffff" margin="30px" padding="20px" display={["block", "flex"]} flexDirection="column" justifyContent="center">
                <div style={{ width: '100%' }}>
                    <Text marginY="1%" textAlign="center" fontSize="h2" fontWeight="300" color="black">Interesse</Text>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            width={500}
                            height={300}
                            data={Trds}
                            syncId="anyId"
                            margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="data" />
                            <YAxis />
                            <Tooltip />
                            <Brush />
                            <Area type="monotone" dataKey="interesse" stroke="#1E90FF" fill="#1E90FF" />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>

                <Box display="flex" justifyContent="center" verticalAlign="center">
                    <Botao >
                            <StyledLink href="http://vps23593.publiccloud.com.br:3007/">
                                <Text textAlign="center" fontSize="h2" fontWeight="900">Mais Detalhes</Text>
                            </StyledLink>
                    </Botao>
                </Box>
            </Box>

            
            <Box display={["block", "flex"]} padding="10px" flexDirection="row" margin="10px" justifyContent="center">
                <Box minWidth="45%" marginY="2%" marginX="30px" boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" padding="20px" display={["block", "flex"]} >
                    <Table>
                        <Topo>
                            <Text paddingTop="2%" fontSize="h2">Pesquisas relacionadas</Text>
                        </Topo>
                        <TableRow><TableCell> </TableCell></TableRow>
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

                <Box minWidth="45%" marginTop="20px" marginBottom="30px" marginX="30px" boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" padding="20px" display={["block", "flex"]} >
                    <Table>
                        <Topo>
                            <Text paddingTop="2%" fontSize="h2">Assuntos relacionados</Text>
                        </Topo>
                        <TableRow><TableCell> </TableCell></TableRow>
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
