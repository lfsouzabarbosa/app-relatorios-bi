import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link} from '@admin-bro/design-system'
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
                <img width="170px" src="data:image/png;base64,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"
                    alt="Logo Klabin"></img>
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
                                    <Text fontSize="h4" fontWeight="3px">Fãs</Text>
                                    <Text fontSize="h2" fontWeight="900">40.921</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                    <SendAltFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">5</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <FavoriteFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text fontSize="h4" fontWeight="3px">Interações</Text>
                                    <Text fontSize="h2" fontWeight="900">1.305</Text>
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
                                <Text fontSize="h4" fontWeight="3px">Seguidores</Text>
                                <Text fontSize="h2" fontWeight="900">28.843
                                </Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                            <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                <SendAltFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">6</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                            <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                <FavoriteFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">10.237</Text>
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
                                <Text fontSize="h4" fontWeight="3px">Seguidores</Text>
                                <Text fontSize="h2" fontWeight="900">-</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                            <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                <SendAltFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">-</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                            <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                <FavoriteFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text fontSize="h4" fontWeight="3px">Engajamento</Text>
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
                            <img width="70%" height="20%" src="https://i.pinimg.com/564x/ed/27/ba/ed27baa8b3795bb831bb1c2308884e20.jpg" alt="Imagem Trends"></img>
                        </Box>
                        <Box flex marginBottom="15px" justifyContent="center" verticalAlign="center">
                            <Botao>
                                <StyledLink href="http://vps23593.publiccloud.com.br:3004/">
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
                                        <TableCell>Padaria fiorella klabin
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Klabin dividendos 2021</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3</TableCell>
                                        <TableCell>Minha klabin</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>4</TableCell>
                                        <TableCell>Minha klabin holerite</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell>Wolff klabin</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>6</TableCell>
                                        <TableCell>Klabin beach sports</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>7</TableCell>
                                        <TableCell>Carreiras klabin</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8</TableCell>
                                        <TableCell>Ema klabin</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>9</TableCell>
                                        <TableCell>Klabin telêmaco borba</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
                                        <TableCell>Klabin goiania</TableCell>
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
                                        <TableCell>Holerite
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Rio Verde</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3</TableCell>
                                        <TableCell>Iguatemi Empresa de Shopping Centers</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>4</TableCell>
                                        <TableCell>BVMF:SAPR11</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell>Kimberly-Clark</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>6</TableCell>
                                        <TableCell>Paulínia - Município em São Paulo</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>7</TableCell>
                                        <TableCell>Employer</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8</TableCell>
                                        <TableCell>BVMF:PETR3</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>9</TableCell>
                                        <TableCell>Companhia de Estágios PPM Human Resources - Consultoria em São Paulo</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
                                        <TableCell>Klabin ForYou</TableCell>
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