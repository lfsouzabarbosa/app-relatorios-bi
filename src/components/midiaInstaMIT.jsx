import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import { UserFollow32, FavoriteFilled32, Forum32 , Course32, SendAltFilled32 } from '@carbon/icons-react'
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

const Celula = styled(TableCell)`

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
                    <Text textAlign="left" paddingX="1%" paddingY="3%" fontSize="h1" color="white" fontWeight="4px">Instagram</Text>
                </Box>
                <Box backgroundColor="white" borderRadius="7px" display={["block", "flex"]}  margin="2%" maxWidth="96%" justifyContent="center" flexDirection="column">
                    <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-evenly">
                        <Box paddingX="8%">
                            <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <FavoriteFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Curtidas</Text>
                                    <Text fontSize="h2" fontWeight="900">161161</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <Forum32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Comentários</Text>
                                    <Text fontSize="h2" fontWeight="900">9100</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <Course32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Salvos</Text>
                                    <Text fontSize="h2" fontWeight="900">4084</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box justifyContent="center" display={["block", "flex"]} verticalAlign="center" alignItems="center">
                            <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=249153611&amp;format=interactive"></iframe>                        </Box>
                    </Box>
                    <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-evenly">
                        <Box>
                            <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1775788338&amp;format=interactive"></iframe>
                        </Box>
                        <Box>
                            <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1012779837&amp;format=interactive"></iframe>
                        </Box>
                    </Box>
                    <br></br>
                    <div>
                        <Box flexDirection="column" minWidth="90%" minHeight="2%" display={["block", "flex"]} justifyContent="center">
                            <Text textAlign="center" fontSize="h3" fontWeight="15px">Instagram Posts</Text>
                            <img width="98%" src="https://64.media.tumblr.com/dcfc30f284393560cc4a582a09688dab/2a6e499303170517-f3/s540x810/a6faeca0f716cb4e942c93f8590fc9c8e084e927.png"></img>
                        </Box>
                        <Box flexDirection="row" display={["block", "flex"]} justifyContent="center">
                            <Box>
                                <iframe width="359" height="269" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1546967219&amp;format=interactive"></iframe>                            </Box>
                            <Box flexDirection="column" justifyContent="center" display={["block", "flex"]} verticalAlign="center" alignItems="center">
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <SendAltFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Posts</Text>
                                        <Text fontSize="h2" fontWeight="900">168</Text>
                                    </Box>
                                </Box>
                            <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1620063117&amp;format=interactive"></iframe>                            </Box>
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
                                    <TableCell>CAROUSEL_ALBUM</TableCell>
                                    <TableCell>IMAGE</TableCell>
                                    <TableCell>VIDEO</TableCell>
                                </TableRow>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Quantidade de Posts</TableCell>
                                        <TableCell>61 (36,31%)</TableCell>
                                        <TableCell>39 (23,21%)</TableCell>
                                        <TableCell>68 (40,48%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Curtidas</TableCell>
                                        <TableCell>91565 (56,83%)</TableCell>
                                        <TableCell>36302 (22,53%)</TableCell>
                                        <TableCell>33249 (20,64%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Salvos</TableCell>
                                        <TableCell>2072 (50,73%)</TableCell>
                                        <TableCell>907 (22,21%)</TableCell>
                                        <TableCell>1105 (27,06%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Comentários</TableCell>
                                        <TableCell>4160 (45,71%)</TableCell>
                                        <TableCell>1788 (19,65%)</TableCell>
                                        <TableCell>3152 (34,64%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Impressões</TableCell>
                                        <TableCell>1725719 (49,57%)</TableCell>
                                        <TableCell>822071 (23,61%)</TableCell>
                                        <TableCell>933756 (26,82%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Interações</TableCell>
                                        <TableCell>97797 (56,11%)</TableCell>
                                        <TableCell>38997 (22,37%)</TableCell>
                                        <TableCell>37506 (21,52%)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Alcance</TableCell>
                                        <TableCell>1458501 (47,41%)</TableCell>
                                        <TableCell>758864 (24,67%)</TableCell>
                                        <TableCell>859241 (27,93%)</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                    <div>
                        <Box flexDirection="column" minWidth="90%" minHeight="2%" display={["block", "flex"]} justifyContent="center">
                            <Text textAlign="center" fontSize="h3" fontWeight="15px">Instagram Stories</Text>
                            <img width="98%" src="https://64.media.tumblr.com/dcfc30f284393560cc4a582a09688dab/2a6e499303170517-f3/s540x810/a6faeca0f716cb4e942c93f8590fc9c8e084e927.png"></img>
                        </Box>
                        <Box>
                            <Box flexDirection="row" display={["block", "flex"]} justifyContent="center">
                                <Box>
                                    <iframe width="360" height="255" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1398585178&amp;format=interactive"></iframe>                                    </Box>
                                <Box flexDirection="column" justifyContent="center" display={["block", "flex"]} verticalAlign="center" alignItems="center">
                                    <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                        <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                            <SendAltFilled32 aria-label="Add" color="white" />
                                        </Box>
                                        <Box padding="10px">
                                            <Text paddingY="2px" fontSize="h4" fontWeight="3px">Stories</Text>
                                            <Text fontSize="h2" fontWeight="900">883</Text>
                                        </Box>
                                    </Box>
                                    <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=550791621&amp;format=interactive"></iframe>                                    
                                </Box>
                            </Box>     
                        </Box>
                
                    </div>
                </Box>
            </div>
           
            </Box>
        </>
    )
};

export default Dashboard

