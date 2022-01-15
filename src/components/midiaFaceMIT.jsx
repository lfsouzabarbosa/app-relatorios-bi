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
                    <Text textAlign="left" paddingX="1%" paddingY="2%" fontSize="h1" color="white" fontWeight="4px">Instagram</Text>
                </Box>
                <Box backgroundColor="white" borderRadius="7px" display={["block", "flex"]}  margin="2%" maxWidth="95%" justifyContent="center" flexDirection="column">
                    <Box flexDirection="row" display={["block", "flex"]} justifyContent="center">
                        <Box>
                            <iframe width="400" height="300" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1546967219&amp;format=interactive"></iframe>
                        </Box>
                        <Box paddingX="8%">
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <FavoriteFilled32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Curtidas</Text>
                                    <Text fontSize="h2" fontWeight="900">1.908</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <Forum32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Comentários</Text>
                                    <Text fontSize="h2" fontWeight="900">1.908</Text>
                                </Box>
                            </Box>
                            <Box justifyContent="left" padding="15px" display={["block", "flex"]} marginY="7px" alignItems="center" maxHeight="200px">
                                <Box paddingLeft="14px" paddingRight="15px" paddingY="10px" backgroundColor="#1C1C1C" borderRadius="7px">
                                    <Course32 aria-label="Add" color="white" />
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="2px" fontSize="h4" fontWeight="3px">Salvos</Text>
                                    <Text fontSize="h2" fontWeight="900">1.908</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box flexDirection="row" display={["block", "flex"]} justifyContent="center">
                        <Box>
                            <iframe width="375" height="230" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1775788338&amp;format=interactive"></iframe>                    </Box>
                        <Box>
                            <iframe width="375" height="230" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1012779837&amp;format=interactive"></iframe>
                        </Box>
                    </Box>
                    <Box flexDirection="row" display={["block", "flex"]} justifyContent="center">
                        <Box>
                            <iframe width="375" height="230" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=1620063117&amp;format=interactive"></iframe>
                        </Box>
                        <Box>
                            <iframe width="375" height="230" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7u6yBmFzu2aUNj00mUVvnFzs7TNV33XJh8bRW4nOvrhgDYHgyu2iQZzafUi9YdOQZ18gur2UQ1j3u/pubchart?oid=249153611&amp;format=interactive"></iframe>
                        </Box>
                    </Box>
                </Box>
            </div>
            </Box>
        </>
    )
};

export default Dashboard

