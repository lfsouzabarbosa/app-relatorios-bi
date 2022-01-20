import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import { UserFollow32, FavoriteFilled32, Forum32 , Course32, SendAltFilled32, RecentlyViewed32 } from '@carbon/icons-react'
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
                                        <Text fontSize="h3" fontWeight="900">168</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="11px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <FavoriteFilled32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="8px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Curtidas</Text>
                                        <Text fontSize="h3" fontWeight="900">161161</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="11px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <Forum32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="8px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Comentários</Text>
                                        <Text fontSize="h3" fontWeight="900">9100</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="11px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <Course32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="8px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Salvos</Text>
                                        <Text fontSize="h3" fontWeight="900">4084</Text>
                                    </Box>
                                </Box>
                                <Box justifyContent="left" padding="8px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                    <Box paddingLeft="12px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                        <RecentlyViewed32 aria-label="Add" color="white" />
                                    </Box>
                                    <Box padding="8px">
                                        <Text paddingY="2px" fontSize="h4" fontWeight="3px">Stories</Text>
                                        <Text fontSize="h3" fontWeight="900">883</Text>
                                    </Box>
                                </Box>
                        </Box>
                        <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-evenly" marginY="2%">
                            <Box flexDirection="column" display={["block", "flex"]} justifyContent="center" margin="2%" paddingY="2%">
                                <Text textAlign="center" paddingBottom="10px" fontSize="50px" fontWeight="900" color="#FF1493">+4448</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="3px" >Seguidores</Text>
                            </Box>
                            <Box flexDirection="column" display={["block", "flex"]} justifyContent="center" margin="2%" paddingY="2%">
                                <Text textAlign="center" paddingBottom="10px" fontSize="50px" fontWeight="900" color="#FF1493">5,2%</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="3px">Concl. stories</Text>
                            </Box>
                            <Box flexDirection="column" display={["block", "flex"]} justifyContent="center" margin="2%" paddingY="2%">
                                <Text textAlign="center" paddingBottom="10px" fontSize="50px" fontWeight="900" color="#FF1493">5,43%</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="3px">Engajamento</Text>
                            </Box>
                        </Box>
                        <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-evenly" flexWrap="wrap">
                            <Box>
                                <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1775788338&amp;format=interactive"></iframe>
                            </Box>
                            <Box>
                                <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=249153611&amp;format=interactive"></iframe>                        </Box>
                            <Box>
                                <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1012779837&amp;format=interactive"></iframe>
                            </Box>
                            <Box>
                                <iframe width="360" height="222" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1620063117&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="360" height="261" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=78153878&amp;format=interactive"></iframe>
                            </Box>
                            <Box>
                                <iframe width="360" height="255" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1398585178&amp;format=interactive"></iframe>                                    </Box>
                            <Box>
                                <iframe width="359" height="281" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=615578176&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="359" height="281" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=88687517&amp;format=interactive"></iframe>                            </Box>
                            <Box>
                                <iframe width="359" height="263" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=647772648&amp;format=interactive"></iframe>
                            </Box>
                            <Box>
                                <iframe width="359" height="265" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=706353679&amp;format=interactive"></iframe>                        </Box>
                        </Box>
                        <Box flexDirection="row" display={["block", "flex"]} justifyContent="space-between" flexWrap="wrap" margin="2%">
                            <Box marginY="1%" minWidth="22%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Impressões</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">57498</Text>
                            </Box>
                            <Box marginY="1%" minWidth="22%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Taxa de conclusão</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">0</Text>
                            </Box>
                            <Box marginY="1%" minWidth="22%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Média de Alcance</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">2459</Text>
                            </Box>
                            <Box marginY="1%" minWidth="22%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Respostas</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">93</Text>
                            </Box>
                            <Box marginY="1%" minWidth="22%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Saídas</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">2994</Text>
                            </Box>
                            <Box marginY="1%" minWidth="22%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Toque para avançar</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">21283</Text>
                            </Box>
                            <Box marginY="1%" minWidth="22%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Toque para voltar</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">680</Text>
                            </Box>
                            <Box marginY="1%" minWidth="22%" display={["block", "flex"]} padding="2%" flexDirection="column" backgroundColor="#7B68EE" borderRadius="7px">
                                <Text textAlign="center" paddingY="3%" fontSize="h4" fontWeight="3px" color="white">Stories</Text>
                                <Text textAlign="center" fontSize="h3" fontWeight="2px" color="white">23</Text>
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

