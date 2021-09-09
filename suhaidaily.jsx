import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {

    return (
        <Box  flex flexDirection="column" variant="grey">
            <Box maxHeight="100px" padding="1em" margin="10px">
                <Box width="200px"  minHeight="20px">
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
                        <Text color="black" fontSize="h2">45,6K</Text>
                        <Text color="black" fontSize="h3">INVESTIDO</Text>
                    </Box>
                </Box>
            <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" minWidth="290px" margin="10px" alignItems="center" minHeight="120px" display={["flex", "inline-flex"]}>
                <Box paddingLeft="7px" paddingRight="9px" marginX="15px"><img width="80px" height="80px"
                 src="https://image.flaticon.com/icons/png/512/31/31624.png"></img></Box>
                <Box paddingY="15px" paddingRight="90px" paddingLeft="7px" minHeight="70px">
                    <Text color="black" fontSize="h2">1M</Text>
                    <Text color="black" fontSize="h3">VIEWS</Text>
                </Box>
            </Box>
            <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" minWidth="290px" margin="10px" alignItems="center" minHeight="120px" display={["flex", "inline-flex"]}>
                <Box borderRadius="5px" paddingRight="20px" paddingLeft="5px" marginX="15px" ><img width="80px" height="80px"
                 src="https://image.flaticon.com/icons/png/512/1908/1908669.png"></img></Box>
                <Box paddingY="15px" paddingRight="20px" paddingLeft="7px" minHeight="70px">
                    <Text color="black" fontSize="h2">9,8M</Text>
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
                        <Text padding="5px" color="black" fontSize="h2">4,3M</Text>
                        <Text padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                    </Box>
                </Box>
                <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                    <Box padding="10px">
                        <Text padding="5px" color="black" fontSize="h2">R$1,42</Text>
                        <Text padding="5px" color="black" fontSize="h3">CPM</Text>
                    </Box>
                </Box>
                <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                    <Box padding="10px">
                        <Text padding="5px" color="black" fontSize="h2">0,02%</Text>
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
                        <Text padding="5px" color="black" fontSize="h2">478K</Text>
                        <Text padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                    </Box>
                </Box>
                <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                    <Box padding="10px">
                        <Text padding="5px" color="black" fontSize="h2">R$21,60</Text>
                        <Text padding="5px" color="black" fontSize="h3">CPM</Text>
                    </Box>
                </Box>
                <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                    <Box padding="10px">
                        <Text padding="5px" color="black" fontSize="h2">47%</Text>
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
                        <Text padding="5px" color="black" fontSize="h2">1,3M</Text>
                        <Text padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                    </Box>
                </Box>
                <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                    <Box padding="10px">
                        <Text padding="5px" color="black" fontSize="h2">R$8,86</Text>
                        <Text padding="5px" color="black" fontSize="h3">CPM</Text>
                    </Box>
                </Box>
                <Box display={["flex", "inline-flex"]} margin="10px 40px" alignItems="center" maxHeight="200px">
                    <Box padding="10px">
                        <Text padding="5px" color="black" fontSize="h2">62%</Text>
                        <Text padding="5px" color="black" fontSize="h3">VCR</Text>
                    </Box>
                </Box>
            </Box>

    </Box>
    )
}

export default Dashboard