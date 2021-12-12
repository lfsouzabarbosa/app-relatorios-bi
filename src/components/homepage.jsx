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

function trendsRedirecionamento(){
    window.location.href="http://vps23593.publiccloud.com.br:3001/"
}

const Dashboard = () => {

    return (
        <><Box flex flexDirection="column" variant="grey">
        <Box paddingBottom="20px" maxHeight="150px" paddingX="1em" paddingY="1%" margin="10px">
            <Box width="200px" minHeight="20px">
                <img width="170px" src="https://logodownload.org/wp-content/uploads/2020/11/telhanorte-logo-1.png"
                    alt="Logo Telhanorte"></img>
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
                                    <Text fontSize="h2" fontWeight="900">471.120</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                    <SendAltFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">3</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <FavoriteFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Interações</Text>
                                    <Text fontSize="h2" fontWeight="900">289</Text>
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
                                <Text fontSize="h2" fontWeight="900">119.113</Text>
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
                                <Text fontSize="h2" fontWeight="900">879</Text>
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
                                <Text fontSize="h2" fontWeight="900">11.125</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                            <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                <SendAltFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">14</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                            <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                <FavoriteFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="2px" fontSize="h4" fontWeight="3px">Engajamento</Text>
                                <Text fontSize="h2" fontWeight="900">19</Text>
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
                            <img width="100%" height="20%" src="https://i.pinimg.com/564x/9b/13/e1/9b13e1d5be334bf935021f4ebbc8ffbb.jpg" alt="Imagem Trends"></img>
                        </Box>
                        <Box flex marginBottom="15px" justifyContent="center" verticalAlign="center">
                            <Botao>
                                <StyledLink href="http://vps23593.publiccloud.com.br:3001/">
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
                                        <TableCell>Telhanorte praia grande telefone
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Telhanorte sorocaba</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3</TableCell>
                                        <TableCell>Telhanorte taboão</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>4</TableCell>
                                        <TableCell>Telhanorte taubaté</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell>Telhanorte marginal tiete</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>6</TableCell>
                                        <TableCell>Telhanorte shopping taboão</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>7</TableCell>
                                        <TableCell>Telhanorte maringa</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8</TableCell>
                                        <TableCell>Cartao telhanorte</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>9</TableCell>
                                        <TableCell>Telhanorte aricandura ii são paulo</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
                                        <TableCell>Telhanorte pereira barreto</TableCell>
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
                                        <TableCell>Retífica
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Lapa - Bairro em São Paulo</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3</TableCell>
                                        <TableCell>Interruptor</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>4</TableCell>
                                        <TableCell>Comercial Ivaiporã</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell>Lustre</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>6</TableCell>
                                        <TableCell>Massa corrida</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>7</TableCell>
                                        <TableCell>Tinta acrílica</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8</TableCell>
                                        <TableCell>Calha</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>9</TableCell>
                                        <TableCell>Santa Cruz Acabamentos</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
                                        <TableCell>Ferramenta</TableCell>
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