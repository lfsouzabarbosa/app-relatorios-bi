import React, { Component } from 'react'
import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import apiSheets from './api'
import { Link } from '@admin-bro/design-system'

const api = new ApiClient()

class Dashboard extends Component {
    state={
        dados: [],
    }
    async componentDidMount(){
        const response = await apiSheets.get('');
        console.log(response.data)
        this.setState({ dados: response.data });
    }
    render() {

        const { dados } = this.state;
        return (
            <Box flex flexDirection="column" variant="grey">
                <Box maxHeight="100px" padding="1em" margin="10px">
                    <Box width="200px" minHeight="20px">
                        <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDDAk7HNLdKCcV0QoZfZkOZoR5Z0IcZXgiojUM7iYt1noMg3wI7_UGXv9ESvbSMtFTw&usqp=CAU"
                            alt="Logo Suhai"></img>
                    </Box>
                </Box>
                <Box padding="2em" margin="20px" display={["block", "flex"]} backgroundColor="#ffffff" boxShadow="card" flexDirection="row" justifyContent="center" maxHeight="800px">
                    <Box justifyContent="center" margin="10px 20px" alignItems="center" maxHeight="200px" maxWidth="300px" display={["flex", "inline-flex"]} flexDirection="row">
                        <Box padding="5px"><img width="35px" height="35px"
                            src="https://image.flaticon.com/icons/png/512/5502/5502145.png"></img></Box>
                        <Box padding="10px">
                            <Link href="" >
                                <Text color="black" fontSize="h4">Últimas 24 horas</Text></Link>
                        </Box>
                    </Box>
                    <Box justifyContent="center" margin="10px 20px" alignItems="center" maxHeight="200px" maxWidth="300px" display={["flex", "inline-flex"]} flexDirection="row">
                        <Box padding="5px"><img width="35px" height="35px"
                            src="https://image.flaticon.com/icons/png/512/5502/5502145.png"></img></Box>
                        <Box padding="10px" paddingRight="25px">
                            <Link href="">
                                <Text color="black" fontSize="h4">Última semana</Text></Link>
                        </Box>
                    </Box>
                    <Box justifyContent="center" margin="10px 20px" alignItems="center" maxHeight="200px" maxWidth="300px" display={["flex", "inline-flex"]} flexDirection="row">
                        <Box padding="5px"><img width="35px" height="35px"
                            src="https://image.flaticon.com/icons/png/512/5502/5502145.png"></img></Box>
                        <Box padding="10px" paddingRight="62px">
                            <Link href="">
                                <Text color="black" fontSize="h4">Último mês</Text></Link>
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding=" 1em 3em" >
                    <Box>
                        <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                    </Box>
                    <Box paddingLeft="10px">
                        <Text color="black" fontSize="h3">BIG NUMBERS</Text>
                    </Box>
                </Box>
                <Box padding="1em" margin="10px" display={["block", "flex"]} flexDirection="row" justifyContent="center" maxHeight="800px">
                    <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" minWidth="290px" margin="10px" alignItems="center" minHeight="120px" display={["flex", "inline-flex"]}>
                        <Box paddingRight="20px" paddingLeft="7px" paddingRight="9px" marginX="15px" ><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/4985/4985048.png"></img></Box>
                        <Box paddingY="15px" paddingLeft="7px" paddingRight="35px" minHeight="70px">
                            <Text color="black" fontSize="h2">{ dados.investido }</Text>
                            <Text color="black" fontSize="h3">INVESTIDO</Text>
                        </Box>
                    </Box>
                    <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" minWidth="290px" margin="10px" alignItems="center" minHeight="120px" display={["flex", "inline-flex"]}>
                        <Box paddingLeft="7px" paddingRight="14px" marginX="15px"><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/31/31624.png"></img></Box>
                        <Box paddingY="15px" paddingRight="60px" paddingLeft="7px" minHeight="70px">
                            <Text color="black" fontSize="h2">{ dados.views }</Text>
                            <Text color="black" fontSize="h3">VIEWS</Text>
                        </Box>
                    </Box>
                    <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" minWidth="290px" margin="10px" alignItems="center" minHeight="120px" display={["flex", "inline-flex"]}>
                        <Box borderRadius="5px" paddingRight="20px" paddingLeft="5px" marginX="15px" ><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/1908/1908669.png"></img></Box>
                        <Box paddingY="15px" paddingRight="40px" paddingLeft="7px" minHeight="70px">
                            <Text color="black" fontSize="h2">{ dados.impressoes }</Text>
                            <Text color="black" fontSize="h3">IMPRESSÕES</Text>
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding=" 1em 3em" >
                    <Box>
                        <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                    </Box>
                    <Box paddingLeft="10px">
                        <Text color="black" fontSize="h3">PROGRAMÁTICA</Text>
                    </Box>
                </Box>
                <Box padding="2em" margin="20px" backgroundColor="#ffffff" display={["block", "flex"]} flexDirection="row" boxShadow="card" justifyContent="center" maxHeight="800px">
                    <Box paddingX="25px" margin="10px 30px" alignItems="center" justifyContent="start" maxHeight="200px" display={["block", "block"]}>
                        <Box ><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/445/445569.png"></img></Box>
                        <Text paddingRight="20px" paddingTop="10px" textAlign="center" color="black" fontSize="h2">Display/Vídeo</Text>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.impressoesPD }</Text>
                            <Text padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                        </Box>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.CPMD }</Text>
                            <Text padding="5px" color="black" fontSize="h3">CPM</Text>
                        </Box>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.CTRDP }</Text>
                            <Text padding="5px" color="black" fontSize="h3">VCR</Text>
                        </Box>
                    </Box>
                </Box>

                <Box padding="2em" margin="20px" backgroundColor="#ffffff" display={["block", "flex"]} flexDirection="row" boxShadow="card" justifyContent="center" maxHeight="800px">
                    <Box paddingRight="100px" paddingLeft="25px" paddingY="15px" margin="10px 30px" alignItems="center" justifyContent="center" maxHeight="200px" display={["block", "block"]}>
                        <Box ><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/49/49084.png"></img></Box>
                        <Text paddingRight="20px" paddingTop="10px" textAlign="center" color="black" fontSize="h2">Youtube</Text>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.impressoesYT }</Text>
                            <Text padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                        </Box>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.CPMYT }</Text>
                            <Text padding="5px" color="black" fontSize="h3">CPM</Text>
                        </Box>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.VCRYT }</Text>
                            <Text padding="5px" color="black" fontSize="h3">VCR</Text>
                        </Box>
                    </Box>
                </Box>

                <Box padding="2em" margin="20px" backgroundColor="#ffffff" display={["block", "flex"]} flexDirection="row" boxShadow="card" justifyContent="center" maxHeight="800px">
                    <Box paddingRight="150px" paddingLeft="25px" paddingY="15px" margin="10px 30px" alignItems="center" justifyContent="center" maxHeight="200px" display={["block", "block"]}>
                        <Box ><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/732/732141.png"></img></Box>
                        <Text textAlign="center" color="black" fontSize="h2">Waze</Text>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.impressoesW }</Text>
                            <Text padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                        </Box>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.CPMW }</Text>
                            <Text padding="5px" color="black" fontSize="h3">CPM</Text>
                        </Box>
                    </Box>
                    <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                        <Box padding="10px">
                            <Text padding="5px" color="black" fontSize="h2">{ dados.ERW }</Text>
                            <Text padding="5px" color="black" fontSize="h3">VCR</Text>
                        </Box>
                    </Box>
                </Box>

            </Box>
        );
    }
}

export default Dashboard;