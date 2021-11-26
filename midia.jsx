import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import styled from 'styled-components'

const Spinner = styled.div.attrs({
    className: 'valor'
})` & {
    margin-top: 50px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: cornflowerblue;
    border: 2px solid #999;
    animation: bounce 1s infinite alternate;
    -webkit-animation: bounce 1s infinite alternate
    };

    @keyframes bounce {
    from {
    transform: translateY(0px);
    }
    to {
    transform: translateY(-15px);
    }
    }
    @-webkit-keyframes bounce {
    from {
    transform: translateY(0px);
    }
    to {
    transform: translateY(-15px);
    }
}
`;

const api = new ApiClient()

// cliente, tipo, valor, inicio fim, veiculo, formato e inserções

const Dashboard = () => {

    return (
        <div>
            <Box display={["block", "flex"]} margin="2%">
                <Box backgroundColor="white">
                    <Text fontSize="h4" fontWeight="3px">Início-Fim</Text>
                    <Box>
                        <Text fontSize="h4" fontWeight="3px">2021-11-01 00:00 2021-11-22 00:00</Text>
                    </Box>
                </Box>
            </Box>

            <Box display={["block", "flex"]} margin="2%">
                <Box backgroundColor="white">
                    <Text fontSize="h4" fontWeight="3px">Cliente</Text>
                    <Box>
                        <Text fontSize="h4" fontWeight="3px">Telhanorte</Text>
                    </Box>
                </Box>
            </Box>

            <Box display={["block", "flex"]} margin="2%" flexDirection="row" justifyContent="space-between" minWidth="90%" minHeight="50%">
                <Box minWidth="30%" minHeight="80%">
                    <Text fontSize="h4" fontWeight="3px">Valor</Text>
                    <Spinner> <Text>200.000</Text></Spinner>
                    <Box>
                        <Text fontSize="h4" fontWeight="3px">200.000</Text>
                    </Box>
                </Box>
                <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-evenly" flexWrap="wrap" minWidth="65%" minHeight="90%">
                    <Box margin="2%" backgroundColor="white" minWidth="50%" maxHeight="46%">
                        <Text fontSize="h4" fontWeight="3px">Valor</Text>
                        <Box>
                            <Text fontSize="h4" fontWeight="3px">200.000</Text>
                        </Box>
                    </Box>

                    <Box margin="2%" backgroundColor="white" minWidth="45%" maxHeight="46%">
                        <Text fontSize="h4" fontWeight="3px">Valor</Text>
                        <Box>
                            <Text fontSize="h4" fontWeight="3px">200.000</Text>
                        </Box>
                    </Box>

                    <Box margin="2%" backgroundColor="white" minWidth="45%" maxHeight="46%">
                        <Text fontSize="h4" fontWeight="3px">Valor</Text>
                        <Box>
                            <Text fontSize="h4" fontWeight="3px">200.000</Text>
                        </Box>
                    </Box>

                    <Box margin="2%" backgroundColor="white" minWidth="45%" maxHeight="46%">
                        <Text fontSize="h4" fontWeight="3px">Valor</Text>
                        <Box>
                            <Text fontSize="h4" fontWeight="3px">200.000</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
};

export default Dashboard;