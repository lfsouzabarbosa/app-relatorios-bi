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

            <Box maxHeight="100px" padding="1em" marginY="10px" marginX="15px" flex flexDirection="row" justifyContent="center">
                <Text fontSize="h3" color="black"><strong>FLASH REPORT</strong></Text>
            </Box>
            <Box padding="2em" margin="20px" display={["block", "flex"]} backgroundColor="#ffffff" boxShadow="card" flexDirection="row" justifyContent="center" maxHeight="800px">
            <Box justifyContent="center" margin="10px 30px" alignItems="center" maxHeight="200px" maxWidth="300px" display={["flex", "inline-flex"]} flexDirection="row">
                <Box><img width="30px" height="30px"
                    src="https://image.flaticon.com/icons/png/512/5502/5502145.png"></img></Box>
                    <Box padding="10px">
                        <Link href="suhaidaily.jsx">
                        <Text color="black" fontSize="h4">Últimas 24 horas</Text></Link>
                    </Box>
                 </Box>
                <Box justifyContent="center" margin="10px 30px" alignItems="center" maxHeight="200px" maxWidth="300px" display={["flex", "inline-flex"]} flexDirection="row">
                    <Box><img width="30px" height="30px"
                    src="https://image.flaticon.com/icons/png/512/5502/5502145.png"></img></Box>
                    <Box padding="10px">
                        <Text color="black" fontSize="h4">Última semana</Text>
                    </Box>
                 </Box>
                 <Box justifyContent="center" margin="10px 30px" alignItems="center" maxHeight="200px" maxWidth="300px" display={["flex", "inline-flex"]} flexDirection="row">
                    <Box><img width="30px" height="30px"
                    src="https://image.flaticon.com/icons/png/512/5502/5502145.png"></img></Box>
                    <Box padding="10px">
                        <Text color="black" fontSize="h4">Último mês</Text>
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
            <Box padding="2em" margin="20px" display={["block", "flex"]} backgroundColor="#ffffff" boxShadow="card" flexDirection="row" justifyContent="center" maxHeight="800px">
                <Box margin="10px 30px" alignItems="center" maxHeight="200px" display={["flex", "inline-flex"]}>
                    <Box><img width="80px" height="80px"
                     src="https://image.flaticon.com/icons/png/512/4985/4985048.png"></img></Box>
                    <Box>
                        <Text color="black" fontSize="h2">45,6K</Text>
                        <Text color="black" fontSize="h3">INVESTIDO</Text>
                    </Box>
                </Box>
                <Box display={["flex", "inline-flex"]} margin="10px 30px" alignItems="center" maxHeight="200px">
                    <Box><img width="80px" height="80px"
                     src="https://image.flaticon.com/icons/png/512/31/31624.png"></img></Box>
                    <Box paddingLeft="10px">
                        <Text color="black" fontSize="h2">1M</Text>
                        <Text color="black" fontSize="h3">VIEWS</Text>
                    </Box>
                </Box>
                <Box display={["flex", "inline-flex"]} margin="10px 30px" alignItems="center" maxHeight="200px">
                    <Box><img width="80px" height="80px"
                     src="https://image.flaticon.com/icons/png/512/1908/1908669.png"></img></Box>
                    <Box paddingLeft="10px">
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
                <Box margin="10px 30px" alignItems="center" justifyContent="start" maxHeight="200px" display={["block", "block"]}>
                        <Box ><img width="80px" height="80px"
                        src="https://image.flaticon.com/icons/png/512/445/445569.png"></img></Box>
                        <Text textAlign="center" color="black" fontSize="h2">Display/Vídeo</Text>
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
                <Box margin="10px 30px" alignItems="center" justifyContent="start" maxHeight="200px" display={["block", "block"]}>
                        <Box ><img width="80px" height="80px"
                        src="https://image.flaticon.com/icons/png/512/49/49084.png"></img></Box>
                        <Text textAlign="center" color="black" fontSize="h2">Youtube</Text>
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
                <Box margin="10px 30px" alignItems="start" justifyContent="center" maxHeight="200px" display={["block", "block"]}>
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

            <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google News</Text>
            <Box maxWidth="900px" maxHeight="850px" padding="20px" margin="0 10% 7%" display="inline-list-item" flexDirection="column">

            <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.segs.com.br/seguros/305573-suhai-seguradora-lanca-cobertura-de-terceiros" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Suhai Seguradora lança cobertura de terceiros / SEGS - Portal Nacional de Seguros, Saúde, Info, TI...</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Portal nacional de Seguros • 10 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://propmark.com.br/anunciantes/suhai-chama-ele-para-mostrar-democratizacao-do-seguro/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Suhai chama 'Ele' para mostrar democratização do seguro</Text>
                            <Text textAlign="star" fontSize="x1" fontWeight="200" color="grey">Terra • 6 horas atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.segs.com.br/seguros/306998-clube-dos-seguradores-da-bahia-recebe-executivo-da-sompo-seguros" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Clube dos seguradores da Bahia recebe executivo da SOMPO SEGUROS / SEGS - Portal Nacional de Seguros</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Portal Nacional de Seguros • 14 horas atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://noticias.uol.com.br/internacional/ultimas-noticias/2021/08/23/eua-acreditam-poder-evacuar-todos-os-americanos-do-afeganistao-ate-3108.htm" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">EUA acreditam poder evacuar todos os americanos do Afeganistão até 31/08</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">UOL Notícias • 5 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google Trends</Text>

                <Box boxShadow="card" border="2px solid #ffffff" backgroundColor="#ffffff" borderRadius="10px" maxWidth="800px" minHeight="300px" margin=" 10px auto 30px" >
                    <a href="http://vps23593.publiccloud.com.br:3007/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                        <Box display="inline-flex" flexDirection="row" justifyContent="center" width="740px" >
                            <img width="700" height="250px" src="https://i.pinimg.com/564x/c0/31/9f/c0319f95faa07bec813e6b66d8ef6912.jpg" alt="Imagem Trends"></img>
                        </Box>
                    </a>
                </Box>
            </div>


    </Box>
    )
}

export default Dashboard