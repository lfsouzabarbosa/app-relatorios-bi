import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import styled from 'styled-components'

const Valor = styled(Box)` 
    height: 200px;
    min-width: 200px; 
    display: flex;
    background-image: url('https://64.media.tumblr.com/0e24ae7e408aa7f1314b440ce2bc0370/c61207b5f77c7aae-4a/s400x600/2c1908f476181c2ae3acebdce779cbc3647f8916.gifv');
    background-repeat: repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 200px, contain;
    padding-bottom: 5px
`;
   

const api = new ApiClient()

const Dashboard = () => {

    return (
        <>
            <div>
                <Box display={["block", "flex"]} padding="2%" flexDirection="row" justifyContent="space-between" backgroundColor="white" boxShadow="cardHover" borderRadius="7px" flexDirection="row" margin="2%">
                    <Box backgroundColor="black" padding="2%" borderRadius="7px">
                        <Text fontSize="h4" color="white" fontWeight="3px">Período</Text>
                    </Box>
                    <Box padding="2%">
                        <Text textAlign="center" alignSelf="center" fontSize="h4" fontWeight="3px">2021-11-01 00:00 2021-11-22 00:00</Text>
                    </Box>
                </Box>
            </div>
            <div>
                <Box marginX="1%" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="90%" minHeight="70%">
                    <Box backgroundColor="#ffffff" margin="1%" boxShadow="cardHover" padding="1%" borderRadius="7px" display={["block", "flex"]}  flexDirection="column" justifyContent="space-between" minHeight="70%" minWidth="30%">
                         <Box backgroundColor="black" paddingX="2%" paddingY="3%" borderRadius="7px" minWidth="18%">
                            <Text textAlign="center" color="#ffffff" fontSize="h4" fontWeight="3px">Valor</Text>
                        </Box>
                        <Valor display={["block", "flex"]}  flexDirection="column" justifyContent="space-between" >
                            <br></br>
                            <Box>
                                <Text fontSize="h4" fontWeight="3px" textAlign="center">200.000</Text>
                            </Box>
                            <br></br>
                        </Valor>
                    </Box>
                    <Box  margin="1%" display={["block", "flex"]} flexDirection="column" justifyContent="space-between" minWidth="65%" minHeight="40%">
                        <Box marginY="1%" padding="2%" backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="100%">
                            <Box backgroundColor="black" padding="2%" borderRadius="7px" minWidth="18%">
                                <Text textAlign="center" color="#ffffff" fontSize="h4" fontWeight="3px">Cliente</Text>
                            </Box>
                            <Text padding="2%" fontSize="h4" fontWeight="3px">Telhanorte</Text>
                        </Box>
                        <Box marginY="1%" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" flexWrap="wrap" minWidth="65%" minHeight="70%">
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