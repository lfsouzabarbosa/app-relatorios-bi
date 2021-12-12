import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import { UserFollow32, FavoriteFilled32, SendAltFilled32 } from '@carbon/icons-react'
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

const api = new ApiClient()

const Dashboard = () => {

    return (
        <><Box flex flexDirection="column" variant="grey">
            <Box paddingBottom="20px" maxHeight="150px" paddingX="1em" paddingY="1%" margin="10px">
                <Box width="200px" minHeight="20px">
                    <img width="170px" src="https://logodownload.org/wp-content/uploads/2017/04/suzuki-logo-12.png"></img>
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
                                        <Text fontSize="h2" fontWeight="900">360.253</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                        <SendAltFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                        <Text fontSize="h2" fontWeight="900">0</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <FavoriteFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Interações</Text>
                                        <Text fontSize="h2" fontWeight="900">0</Text>
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
                                    <Text fontSize="h2" fontWeight="900">43.315
                                    </Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                                <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                    <SendAltFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">1</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <FavoriteFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Interações</Text>
                                    <Text fontSize="h2" fontWeight="900">422</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <br></br>
                    <Box backgroundColor="#ffffff" minWidth="20%" marginX="2%" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} minHeight="10%" maxHeight="30%" marginTop="10px" marginY="2%" marginBottom="2%" flexDirection="column" paddingX="20px" justifyContent="space-evenly">
                        <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" marginBottom="6%" justifyContent="space-evenly" marginTop="-3%">
                            <Text textAlign="center" paddingY="15px" paddingX="8px" fontSize="h1" color="white" fontWeight="4px">Twitter</Text>
                        </Box>
                        <Box display={["block", "flex"]} flexDirection="column" justifyContent="space-evenly" marginY="1%" minWidth="90%" minHeight="15%">
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                                <Box paddingX="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <UserFollow32 color="white" aria-label="Add" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Seguidores</Text>
                                    <Text fontSize="h2" fontWeight="900">-</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                                <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                    <SendAltFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">-</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <FavoriteFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Engajamento</Text>
                                    <Text fontSize="h2" fontWeight="900">-</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
            <div>
                <Box display={["block"]} flexDirection="row" flexWrap="wrap" marginY="3%" justifyContent="space-evenly">
                        <Box backgroundColor="#ffffff" marginX="2%" marginY="2%" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="column" justifyContent="center" minWidth="93%" minHeight="5%" maxHeight="50%">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" marginX="2%" justifyContent="space-evenly" marginTop="-1%">
                                <Text textAlign="center" paddingY="20px" paddingX="20px" fontSize="h1" color="white" fontWeight="4px">Google Trends</Text>
                            </Box>
                            <Box paddingX="5%" paddingY="2%" display={["flex"]} flexDirection="space-evenly" justifyContent="center">
                                <img width="100%" height="20%" src="https://i.pinimg.com/564x/d6/24/cd/d624cdbca9f85ea5154abf09de2ad26d.jpg" alt="Imagem Trends"></img>
                            </Box>
                            <Box flex marginBottom="15px" justifyContent="center" verticalAlign="center">
                                <Botao>
                                    <StyledLink href="http://vps23593.publiccloud.com.br:3008/">
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
                                            <TableCell>Suzuki jimny 2021
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2</TableCell>
                                            <TableCell>Reação suzuki</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>3</TableCell>
                                            <TableCell>Laboratório suzuki barretos</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>4</TableCell>
                                            <TableCell>Tabela fipe suzuki yes 2008</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>5</TableCell>
                                            <TableCell>Suzuki joao pessoa</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>6</TableCell>
                                            <TableCell>Suzuki burgman 125 preço</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>7</TableCell>
                                            <TableCell>Matinas suzuki</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>8</TableCell>
                                            <TableCell>Jimny suzuki valor</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>9</TableCell>
                                            <TableCell>Laboratorio suzuki</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>10</TableCell>
                                            <TableCell>Suzuki boulevard 1500</TableCell>
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
                                            <TableCell>Malhação - Seriado de televisão
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2</TableCell>
                                            <TableCell>Chevrolet Tracker - Veículos utilitários esportivo compacto</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>3</TableCell>
                                            <TableCell>Veículo utilitário esportivo</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>4</TableCell>
                                            <TableCell>Popa</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>5</TableCell>
                                            <TableCell>Troller</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>6</TableCell>
                                            <TableCell>Suzuki S-Cross</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>7</TableCell>
                                            <TableCell>Carenagem</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>8</TableCell>
                                            <TableCell>Suzuki GSX-R</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>9</TableCell>
                                            <TableCell>Toyota Motor</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>10</TableCell>
                                            <TableCell>Suzuki GSX-R1000</TableCell>
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

export default Dashboard