import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {

    return (
        <section>
                <Box margin="30px 0 20px 45px" width="200px"  minHeight="20px">
                    <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDDAk7HNLdKCcV0QoZfZkOZoR5Z0IcZXgiojUM7iYt1noMg3wI7_UGXv9ESvbSMtFTw&usqp=CAU"
                    alt="Logo Telhanorte"></img>
                </Box> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>  
                <Box display="inline-flex" flexDirection="row" verticalAlign="center" variant="grey">
            
                    <section class="sc-dIsAE fbPpRS admin-bro_Box">
                        <section width="auto" class="sc-dIsAE cQyBfq admin-bro_Box">

                            <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">
                                <a class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                                    <div class="sc-jrsJCI exBroz admin-bro_Text">
                                        <img width="auto" height="90" src="https://image.flaticon.com/icons/png/512/1384/1384053.png" alt="Icone Facebook"></img>
                                        <div class="sc-jrsJCI bJANQE admin-bro_Text"></div>
                                    </div>
                                    <div>
                                        <Box display="flex" flexDirection="row" verticalAlign="center">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                                    alt="Fãs"></img>
                                                <Text fontSize="15px" fontWeight="3px">Fãs</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">471.120</Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                    <br></br>
                                    <div>
                                        <Box display="inline-flex">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                                    alt="Posts"></img>
                                                <Text fontSize="15px" fontWeight="3px">Posts</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">3
                                                </Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                    <br></br>
                                    <div>
                                        <Box display="inline-flex">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                                    alt="Alcance"></img>
                                                <Text fontSize="15px" fontWeight="3px">Interações</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">289
                                                </Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                </a>
                            </section>


                            <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">
                                <a class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                                    <div class="sc-jrsJCI exBroz admin-bro_Text">
                                        <img width="auto" height="90" src="https://image.flaticon.com/icons/png/512/1384/1384063.png" alt="Icone Instagram"></img>
                                        <div class="sc-jrsJCI bJANQE admin-bro_Text"></div>
                                    </div>
                                    <div>
                                        <Box display="inline-flex">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                                    alt="Fãs"></img>
                                                <Text fontSize="15px" fontWeight="3px">Seguidores</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">119.113</Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                    <br></br>
                                    <div>
                                        <Box display="inline-flex">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                                    alt="Posts"></img>
                                                <Text fontSize="15px" fontWeight="3px">Posts</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">4
                                                </Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                    <br></br>
                                    <div>
                                        <Box display="inline-flex">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                                    alt="Alcance"></img>
                                                <Text fontSize="15px" fontWeight="3px">Interações</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">879
                                                </Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                </a>
                            </section>

                            <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">                   <a class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">

                                    <div class="sc-jrsJCI exBroz admin-bro_Text">
                                        <img width="auto" height="90" src="https://image.flaticon.com/icons/png/512/733/733579.png" alt="Icone Twitter"></img>
                                        <div class="sc-jrsJCI bJANQE admin-bro_Text"></div>
                                    </div>
                                    <div>
                                        <Box display="inline-flex">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                                    alt="Fãs"></img>
                                                <Text fontSize="15px" fontWeight="3px">Seguidores</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">11.125</Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                    <br></br>
                                    <div>
                                        <Box display="inline-flex">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                                    alt="Posts"></img>
                                                <Text fontSize="15px" fontWeight="3px">Posts</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">14
                                                </Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                    <br></br>
                                    <div>
                                        <Box display="inline-flex">
                                            <Box width="110px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                                    alt="Alcance"></img>
                                                <Text fontSize="15px" fontWeight="3px">Engajamento</Text>
                                            </Box>
                                            <Box width="140px">
                                                <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">19
                                                </Text>
                                            </Box>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </div>
                                </a>
                            </section>

                            </section>
                    </section>
                </Box>

                <Box paddingX="45px" width="100%" display={["block", "flex"]} flexDirection="row" justifyContent="center">
                    <Link href="./SuhaiFlashReport">
                    <Button fontSize="h2" size="lg">
                        Flash Report</Button>
                    </Link>
                </Box>

                <Box marginY="10px" display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding="3em" >
                    <Box>
                        <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                    </Box>
                    <Box paddingLeft="10px">
                        <Text color="black" fontSize="h3">GOOGLE NEWS</Text>
                    </Box>
                </Box>
                <Box maxWidth="900px" maxHeight="1000px" padding="20px" marginX="45px" marginBottom="50px" justifyContent="center" display="inline-list-item" flexDirection="column">

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

                <Box display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding="3em" >
                    <Box>
                        <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                    </Box>
                    <Box paddingLeft="10px">
                        <Text color="black" fontSize="h3">GOOGLE TRENDS</Text>
                    </Box>
                </Box>

                    <Box boxShadow="card" border="2px solid #ffffff" backgroundColor="#ffffff" borderRadius="10px" maxWidth="800px" minHeight="300px" margin=" 10px auto 30px" >
                        <a href="http://vps23593.publiccloud.com.br:3007/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                            <Box display="inline-flex" flexDirection="row" justifyContent="center" width="740px" >
                                <img width="700" height="250px" src="https://i.pinimg.com/564x/c0/31/9f/c0319f95faa07bec813e6b66d8ef6912.jpg" alt="Imagem Trends"></img>
                            </Box>
                        </a>
                    </Box>
        </section>
    )
}

export default Dashboard