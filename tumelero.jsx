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
                    alt="Logo Tumelero"></img>
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
                                    <Text fontSize="h2" fontWeight="900">63.747</Text>
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
                                    <Text fontSize="h2" fontWeight="900">623</Text>
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
                                <Text fontSize="h2" fontWeight="900">20.189</Text>
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
                                <Text fontSize="h2" fontWeight="900">948</Text>
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
                                <Text fontSize="h2" fontWeight="900">540</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center">
                            <Box paddingX="14px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px" >
                                <SendAltFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">0</Text>
                            </Box>
                        </Box>
                        <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" >
                            <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                <FavoriteFilled32 aria-label="Add" color="white" />
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="2px" fontSize="h4" fontWeight="3px">Engajamento</Text>
                                <Text fontSize="h2" fontWeight="900">0</Text>
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
                            <img width="100%" height="20%" src="https://i.pinimg.com/564x/72/cb/3d/72cb3dfd961250c6b9fead03d1257e74.jpg" alt="Imagem Trends"></img>
                        </Box>
                        <Box flex marginBottom="15px" justifyContent="center" verticalAlign="center">
                            <Botao>
                                <StyledLink href="http://vps23593.publiccloud.com.br:3002/">
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
                                        <TableCell>Tumelero materiais d
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Tumelero rio grande</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3</TableCell>
                                        <TableCell>Tumelero gravatai</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>4</TableCell>
                                        <TableCell>Tumelero cachoeirinha</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell>Tumelero novo hamburgo</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>6</TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>7</TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8</TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>9</TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
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
                                        <TableCell>Esmalte
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Ralo</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>3</TableCell>
                                        <TableCell>Mixing tap</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>4</TableCell>
                                        <TableCell>Brasilit Telha Fibrocimento Ondulada</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>5</TableCell>
                                        <TableCell>Meber Metais</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>6</TableCell>
                                        <TableCell>Costaneira</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>7</TableCell>
                                        <TableCell>Amauri Tintas</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>8</TableCell>
                                        <TableCell>Concreto</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>9</TableCell>
                                        <TableCell>Torneira</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>10</TableCell>
                                        <TableCell>Alumíno</TableCell>
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