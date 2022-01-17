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
                <Box backgroundColor="#1C1C1C" borderRadius="7px" minWidth="80%" margin="2%" justifyContent="space-evenly" >
                    <Text textAlign="left" paddingX="1%" paddingY="3%" fontSize="h1" color="white" fontWeight="4px">Facebook</Text>
                </Box>
                <Box backgroundColor="white" borderRadius="7px" display={["block", "flex"]}  margin="2%" maxWidth="96%" justifyContent="center" flexDirection="column">
                    <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-evenly">
                        <Box paddingX="8%">
                            <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <ThumbsUp32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Curtidas</Text>
                                    <Text fontSize="h2" fontWeight="900">32617</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <Forum32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Comentários</Text>
                                    <Text fontSize="h2" fontWeight="900">2880</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <Share32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Compartilhado</Text>
                                    <Text fontSize="h2" fontWeight="900">1197</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box justifyContent="center" display={["block", "flex"]} verticalAlign="center" alignItems="center">
                        <iframe width="359" height="224" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1095971626&amp;format=interactive"></iframe>                            </Box>
                    </Box>
                    <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-evenly">
                        <Box>
                            <iframe width="360" height="224" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1585287785&amp;format=interactive"></iframe>                        </Box>
                        <Box>
                            <iframe width="360" height="224" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=439257606&amp;format=interactive"></iframe>                        </Box>
                    </Box>
                    <div>
                        <Box flexDirection="column" minWidth="90%" minHeight="2%" display={["block", "flex"]} justifyContent="center">
                            <Text textAlign="center" fontSize="h3" fontWeight="15px">Facebook Posts</Text>
                            <img width="98%" src="https://64.media.tumblr.com/dcfc30f284393560cc4a582a09688dab/2a6e499303170517-f3/s540x810/a6faeca0f716cb4e942c93f8590fc9c8e084e927.png"></img>
                        </Box>
                        <Box flexDirection="row" display={["block", "flex"]} justifyContent="center">
                            <Box>
                            <iframe width="359" height="276" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1809366515&amp;format=interactive"></iframe></Box>
                            <Box flexDirection="column" justifyContent="center" display={["block", "flex"]} verticalAlign="center" alignItems="center">
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <SendAltFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                        <Text fontSize="h2" fontWeight="900">103</Text>
                                    </Box>
                                </Box>
                                <iframe width="360" height="224" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1879116500&amp;format=interactive"></iframe>                            </Box>
                        </Box>                        
                    </div>
                    <br></br>
                    <Box display={["block"]} flexDirection="row" justifyContent="center" marginY="3%" marginX="2%">
                        <Box display={["block", "flex"]} justifyContent="center" width={[1/2, 1 ]}>
                            <Table width={[1/2,  1]}>
                                <Topo>
                                    <Text textAlign="center"  fontSize="h2">Por tipo de mídia</Text>
                                </Topo>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>ALBUM</TableCell>
                                    <TableCell>NATIVE_TEMPLATES</TableCell>
                                    <TableCell>PHOTO</TableCell>
                                    <TableCell>VIDEO_INLINE</TableCell>
                                </TableRow>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Quantidade de Posts</TableCell>
                                        <TableCell>38 (36,89%)</TableCell>
                                        <TableCell>2 (1,94%)</TableCell>
                                        <TableCell>18 (17,48%)</TableCell>
                                        <TableCell>45 (43,69%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Curtidas</TableCell>
                                        <TableCell>13248 (40,62%)</TableCell>
                                        <TableCell>204 (0,63%)</TableCell>
                                        <TableCell>4897 (15,01%)</TableCell>
                                        <TableCell>14268 (43,74%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Compartilhamento</TableCell>
                                        <TableCell>604 (30,25%)</TableCell>
                                        <TableCell>30 (1,50%)</TableCell>
                                        <TableCell>230 (11,52%)</TableCell>
                                        <TableCell>1133 (56,74%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Comentários</TableCell>
                                        <TableCell>1170 (40,62%)</TableCell>
                                        <TableCell>17 (0,59%)</TableCell>
                                        <TableCell>640 (22,22%)</TableCell>
                                        <TableCell>1053 (36,56%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Impressões</TableCell>
                                        <TableCell>19180202 (30,88%)</TableCell>
                                        <TableCell>3984258 (6,42%)</TableCell>
                                        <TableCell>4547122 (7,32%)</TableCell>
                                        <TableCell>34392341 (55,38%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Interações</TableCell>
                                        <TableCell>15022 (40,16%)</TableCell>
                                        <TableCell>251 (0,67%)</TableCell>
                                        <TableCell>5767 (15,42%)</TableCell>
                                        <TableCell>16367 (43,75%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Alcance</TableCell>
                                        <TableCell>16398181 (37,65%)</TableCell>
                                        <TableCell>3158122 (7,25%)</TableCell>
                                        <TableCell>4058518 (9,32%)</TableCell>
                                        <TableCell>19944691 (45,79%)</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </Box>
            </div>
            </Box>
        </>    
    )
};

export default Dashboard

