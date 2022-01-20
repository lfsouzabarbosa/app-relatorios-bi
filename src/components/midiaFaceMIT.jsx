import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import { UserFollow32, FavoriteFilled32, Forum32, Share32 , ThumbsUp32, Course32, SendAltFilled32 } from '@carbon/icons-react'
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
height: 40px;
color: black;
`;

const Tabela = styled(Table)`
max-width: 60%;
`;


const api = new ApiClient()

const Dashboard = () => {

    return (
        <><Box flex flexDirection="column" variant="grey">
                <Box paddingBottom="20px" maxHeight="150px" paddingX="1em" paddingY="1%" margin="10px">
                    <Box width="200px" minHeight="20px">
                        <img width="170px" src="https://logodownload.org/wp-content/uploads/2014/10/mitsubish-logo-1.png"
                            alt="Logo Mitsubishi"></img>
                    </Box>
                </Box>

                <div>
                    <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-evenly">
                        <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="96%" margin="2%" justifyContent="space-evenly" >
                            <Text textAlign="left" paddingX="1%" paddingY="2%" fontSize="h1" color="white" fontWeight="4px">Instagram</Text>
                        </Box>
                    </Box>
                    <Box backgroundColor="white" borderRadius="7px" display={["block", "flex"]}  margin="2%" maxWidth="96%" justifyContent="center" flexDirection="column">                    
                        <Box flexDirection="column" display={["block", "flex"]} justifyContent="space-between">
                            <Box paddingX="3px" flexDirection="row" justifyContent="space-between" display={["block", "flex"]}>
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="11px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <SendAltFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="8px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                        <Text fontSize="h3" fontWeight="900">103</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="11px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <FavoriteFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="8px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Curtidas</Text>
                                        <Text fontSize="h3" fontWeight="900">32617</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="11px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <Forum32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="8px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Comentários</Text>
                                        <Text fontSize="h3" fontWeight="900">2880</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="11px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <Course32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="8px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Compartilhados</Text>
                                        <Text fontSize="h3" fontWeight="900">1197</Text>
                                    </Box>
                                </Box>
                        </Box>
                        <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-evenly" marginY="2%">
                            <Box flexDirection="column" display={["block", "flex"]} justifyContent="center" margin="2%" paddingY="2%">
                                <Text textAlign="center" paddingBottom="10px" fontSize="50px" fontWeight="900" color="#1E90FF">+510</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="3px" >Fãs</Text>
                            </Box>
                            <Box flexDirection="column" display={["block", "flex"]} justifyContent="center" margin="2%" paddingY="2%">
                                <Text textAlign="center" paddingBottom="10px" fontSize="50px" fontWeight="900" color="#1E90FF">220</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="3px">Interações</Text>
                            </Box>
                            <Box flexDirection="column" display={["block", "flex"]} justifyContent="center" margin="2%" paddingY="2%">
                                <Text textAlign="center" paddingBottom="10px" fontSize="50px" fontWeight="900" color="#1E90FF">0,03%</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="3px">Engajamento</Text>
                            </Box>
                        </Box>
                        <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-evenly" flexWrap="wrap">
                            <Box>
                                <iframe width="360" height="224" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1585287785&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="359" height="224" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=865225343&amp;format=interactive"></iframe>
                            </Box>                            
                            <Box>
                                <iframe width="360" height="224" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=439257606&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="360" height="224" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1879116500&amp;format=interactive"></iframe> </Box>                            <Box>
                            </Box>
                            <Box>
                                <iframe width="359" height="286" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1991720913&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="359" height="286" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=206026820&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="359" height="314" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=231794851&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="359" height="314" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=38089934&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="359" height="286" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1168967049&amp;format=interactive"></iframe>                            </Box>
                        </Box>
                        <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-between" flexWrap="wrap" margin="2%">
                            <Box marginY="1%" minWidth="24%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Impressões</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">1951008</Text>
                            </Box>
                            <Box marginY="1%" minWidth="24%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Taxa de<br></br>crescimento</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">-0,04%</Text>
                            </Box>
                            <Box marginY="1%" minWidth="24%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Média de Alcance</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">116453</Text>
                            </Box>
                            <Box marginY="1%" minWidth="24%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Visualização de<br></br> Vídeo</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">84830</Text>
                            </Box>
                            <Box marginY="1%" minWidth="24%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Applause Rate</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">0,29%</Text>
                            </Box>
                            <Box marginY="1%" minWidth="24%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Alcance de Post<br></br> Pago</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">1133037</Text>
                            </Box>
                            <Box marginY="1%" minWidth="24%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Impressões de<br></br>Post Pago</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">1268296</Text>
                            </Box>
                            <Box alignItems="center" marginY="1%" minWidth="24%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Likes da Página</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">999615</Text>
                            </Box>
                        </Box>
                    </Box>
                    </Box>
                </div>
            </Box>
        </>
    )
};

export default Dashboard

