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
                <img width="170px" src="data:image/png;base64,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"
                    alt="Logo LocalWeb"></img>
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
                                    <Text fontSize="h2" fontWeight="900">173.890</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                    <SendAltFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">1</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <FavoriteFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Interações</Text>
                                    <Text fontSize="h2" fontWeight="900">25</Text>
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
                                <Text fontSize="h2" fontWeight="900">27.315
                                </Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                            <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                <SendAltFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">2</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                            <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                <FavoriteFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="2px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">478</Text>
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
                                <Text fontSize="h2" fontWeight="900">26.159</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                            <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                <SendAltFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">3</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                            <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                <FavoriteFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="2px" fontSize="h4" fontWeight="3px">Engajamento</Text>
                                <Text fontSize="h2" fontWeight="900">463</Text>
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
                            <img width="100%" height="20%" src="https://i.pinimg.com/originals/7f/4f/26/7f4f2632504f399ee2f849c4ac582b7a.jpg" alt="Imagem Trends"></img>
                        </Box>
                        <Box flex marginBottom="15px" justifyContent="center" verticalAlign="center">
                            <Botao>
                                <StyledLink href="http://vps23593.publiccloud.com.br:3005/">
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
                                        <TableCell>Webmail
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Webmail localweb</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3</TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>4</TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell> </TableCell>
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
                                        <TableCell>Servidor virtual privado
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>HostGator</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3</TableCell>
                                        <TableCell>Sítio eletrónico</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>4</TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell> </TableCell>
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