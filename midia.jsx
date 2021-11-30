import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import styled from 'styled-components'

const api = new ApiClient()

const Dashboard = () => {

    return (
        <>
            <Box display={["block", "flex"]} padding="2%" flexDirection="row" justifyContent="space-between" backgroundColor="white" boxShadow="cardHover" borderRadius="7px" flexDirection="row" margin="2%">
                <Box backgroundColor="black" padding="2%" borderRadius="7px">
                    <Text fontSize="h4" color="white" fontWeight="3px">Período</Text>
                </Box>
                <Box padding="2%">
                    <Text textAlign="center" alignSelf="center" fontSize="h4" fontWeight="3px">2021-11-01 00:00 2021-11-22 00:00</Text>
                </Box>
            </Box>
            <div>
                <Box display={["block", "flex"]} margin="2%" flexDirection="row" justifyContent="space-between" minWidth="90%" minHeight="60%">
                    <Box display={["block", "flex"]} paddingX="2%" backgroundColor="black" boxShadow="cardHover" borderRadius="7px" flexDirection="column" justifyContent="space-between" minWidth="32%">
                        <Text paddingY="3%" color="#ffffff" textAlign="center" fontSize="h3" fontWeight="3px">Valor</Text>
                        <Box display={["block", "flex"]} flexDirection="column" paddingX="10%" borderRadius="8px" margin="2%" backgroundColor="#ffffff" minWidth>
                            <img width="220px" height="220px" src="https://64.media.tumblr.com/6cfb1dece9bd27bdd34dd2ea4a03337c/209080a84854ea7e-c6/s400x600/8d80b4d7479ba78a0e5934935996822475eea476.gifv"></img>
                            <Text textAlign="center" fontSize="h4" fontWeight="3px">200.000</Text>
                        </Box>
                    </Box>
                    
                    <Box  margin="1%" display={["block", "flex"]} flexDirection="column" justifyContent="space-between" minWidth="65%" minHeight="40%">
                        <Box marginY="1%" padding="2%" backgroundColor="white" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="100%">
                            <Box backgroundColor="black" padding="2%" borderRadius="7px" minWidth="18%">
                                <Text textAlign="center" color="#ffffff" fontSize="h4" fontWeight="3px">Cliente</Text>
                            </Box>
                            <Text padding="2%" fontSize="h4" fontWeight="3px">Telhanorte</Text>
                        </Box>
                        <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-between" flexWrap="wrap" minWidth="65%" minHeight="70%">
                            <Box marginY="1%" padding="2%" backgroundColor="white" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="48%" maxHeight="43%">
                                <Box backgroundColor="black" paddingY="5%" paddingX="8%" borderRadius="7px" minWidth="40%">
                                    <Text textAlign="center" color="#ffffff" fontSize="h4" fontWeight="3px">Tipo</Text>
                                </Box>
                                <Text textAlign="center" paddingY="5%" paddingX="8%" fontSize="h4" fontWeight="3px">TV Aberta</Text>
                            </Box>
                            <Box marginY="1%" padding="2%" backgroundColor="white" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="48%" maxHeight="43%">
                                <Box backgroundColor="black" paddingY="5%" paddingX="8%" borderRadius="7px" minWidth="40%">
                                    <Text textAlign="center"  color="#ffffff" fontSize="h4" fontWeight="3px">Veículo</Text>
                                </Box>
                                <Text textAlign="center" paddingY="5%" paddingX="8%" fontSize="h4" fontWeight="3px">TV Aberta</Text>
                            </Box>
                            <Box marginY="1%" padding="2%" backgroundColor="white" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="48%" maxHeight="43%">
                                <Box backgroundColor="black" paddingTop="6%" paddingBottom="4%" paddingX="5%" borderRadius="7px" minWidth="40%">
                                    <Text textAlign="center" color="#ffffff" fontSize="h4" fontWeight="3px">Formato</Text>
                                </Box>
                                <Text textAlign="center" paddingTop="6%" paddingBottom="4%" paddingX="5%" fontSize="h4" fontWeight="3px">TV Aberta</Text>
                            </Box>
                            <Box marginY="1%" padding="2%" backgroundColor="white" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="48%" maxHeight="43%">
                                <Box backgroundColor="black" paddingTop="6%" paddingBottom="4%" paddingX="5%" borderRadius="7px" minWidth="40%">
                                    <Text textAlign="center" color="#ffffff" fontSize="h4" fontWeight="3px">Inserções</Text>
                                </Box>
                                <Text textAlign="center" paddingTop="6%" paddingBottom="4%" paddingX="5%" fontSize="h4" fontWeight="3px">TV Aberta</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </>
    )
};

export default Dashboard;