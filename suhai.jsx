import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link, LinkProps } from '@admin-bro/design-system'
import { ContentDeliveryNetwork32 } from '@carbon/icons-react';


const api = new ApiClient()

const Dashboard = () => {

    return (
        <section>
            <Box margin="30px 0 20px 45px" width="200px"  minHeight="20px">
                <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDDAk7HNLdKCcV0QoZfZkOZoR5Z0IcZXgiojUM7iYt1noMg3wI7_UGXv9ESvbSMtFTw&usqp=CAU"
                alt="Logo Suhai"></img>
            </Box>
            <Box variant="grey">        
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <section class="sc-dIsAE fbPpRS admin-bro_Box">
                    <section width="auto" class="sc-dIsAE cQyBfq admin-bro_Box">
                    
                        <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">
                            <a href="http://vps23593.publiccloud.com.br:3004/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                                <div class="sc-jrsJCI exBroz admin-bro_Text">
                                    <img  width="auto" height="90" src="https://image.flaticon.com/icons/png/512/1384/1384053.png" alt="Icone Facebook"></img>
                                    <div class="sc-jrsJCI bJANQE admin-bro_Text"></div>
                                </div>
                                <div>
                                    <Box>
                                        <Box flex  margin="0 10px">
                                            <Box marginRight="70px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                                alt="Fãs"></img>
                                                <Text fontSize="15px" fontWeight="3px">Fãs</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">1.345.845
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">12%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1146/1146404.png" alt="Icone Fãs"
                                                alt="Taxa de Crescimento"></img>
                                                <Text fontSize="15px" fontWeight="3px">Crescimento</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">1.345.845
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">12%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="30px" height="30px" src="https://image.flaticon.com/icons/png/512/31/31624.png" 
                                                alt="Impressoes"></img>
                                                <Text fontSize="15px" fontWeight="3px">Impressões</Text>
                                            </Box>
                                            <Text marginTop="33px" fontSize="xl" fontWeight="900">4.896.365
                                            </Text>
                                            <Text marginTop="33px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">8%
                                            </Text> 
                                        </Box>
                                         <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1250/1250999.png" alt="Icone Alcance"></img>
                                                <Text fontSize="15px" fontWeight="3px">Alcance</Text>
                                            </Box>
                                                <Text marginTop="27px" fontSize="xl" fontWeight="900">5.109.041
                                                </Text>
                                                <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">3%
                                                </Text>
                                            </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                                alt="Interaçoes"></img>
                                            <Text fontSize="15px" fontWeight="3px">Interações</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">5.109.041
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">3%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <br></br>
                                <Button marginLeft="50px" fontSize="xl" fontWeight="400" size="300px" backgroundColor="ffffff">
                                    + Detalhes
                                </Button>
                            </a>
                        </section>


                        <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">
                            <a href="http://vps23593.publiccloud.com.br:3004/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                                <div class="sc-jrsJCI exBroz admin-bro_Text">
                                    <img width="auto" height="90" src="https://image.flaticon.com/icons/png/512/1384/1384063.png" alt="Icone Instagram"></img>
                                    <div class="sc-jrsJCI bJANQE admin-bro_Text"></div>
                                </div>
                                <div>
                                    <Box>
                                        <Box flex  margin="0 10px">
                                            <Box marginRight="70px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                                alt="Fãs"></img>
                                                <Text fontSize="15px" fontWeight="3px">Seguidores</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">1.345.845
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">12%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1146/1146404.png" alt="Icone Fãs"
                                                alt="Taxa de Crescimento"></img>
                                                <Text fontSize="15px" fontWeight="3px">Crescimento</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">1.345.845
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">12%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="30px" height="30px" src="https://image.flaticon.com/icons/png/512/31/31624.png" 
                                                alt="Impressoes"></img>
                                                <Text fontSize="15px" fontWeight="3px">Impressões</Text>
                                            </Box>
                                            <Text marginTop="33px" fontSize="xl" fontWeight="900">4.896.365
                                            </Text>
                                            <Text marginTop="33px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">8%
                                            </Text> 
                                        </Box>
                                         <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1250/1250999.png" alt="Icone Alcance"></img>
                                                <Text fontSize="15px" fontWeight="3px">Alcance</Text>
                                            </Box>
                                                <Text marginTop="27px" fontSize="xl" fontWeight="900">5.109.041
                                                </Text>
                                                <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">3%
                                                </Text>
                                            </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                                alt="Interaçoes"></img>
                                            <Text fontSize="15px" fontWeight="3px">Interações</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">5.109.041
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">3%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <br></br>
                                <Button marginLeft="50px" fontSize="xl" fontWeight="400" size="300px" backgroundColor="ffffff">
                                    + Detalhes
                                </Button>
                            </a>
                        </section>

                        <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">
                            <a href="http://vps23593.publiccloud.com.br:3004/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                                <div class="sc-jrsJCI exBroz admin-bro_Text">
                                    <img width="auto" height="90" src="https://image.flaticon.com/icons/png/512/733/733579.png" alt="Icone Twitter"></img>
                                    <div class="sc-jrsJCI bJANQE admin-bro_Text"></div>
                                </div>
                                <div>
                                    <Box>
                                        <Box flex  margin="0 10px">
                                            <Box marginRight="70px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                                alt="Fãs"></img>
                                                <Text fontSize="15px" fontWeight="3px">Seguidores</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">1.345.845
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">12%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1146/1146404.png" alt="Icone Fãs"
                                                alt="Taxa de Crescimento"></img>
                                                <Text fontSize="15px" fontWeight="3px">Crescimento</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">1.345.845
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">12%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="30px" height="30px" src="https://image.flaticon.com/icons/png/512/31/31624.png" 
                                                alt="Impressoes"></img>
                                                <Text fontSize="15px" fontWeight="3px">Impressões</Text>
                                            </Box>
                                            <Text marginTop="33px" fontSize="xl" fontWeight="900">4.896.365
                                            </Text>
                                            <Text marginTop="33px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">8%
                                            </Text> 
                                        </Box>
                                         <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1250/1250999.png" alt="Icone Alcance"></img>
                                                <Text fontSize="15px" fontWeight="3px">Alcance</Text>
                                            </Box>
                                                <Text marginTop="27px" fontSize="xl" fontWeight="900">5.109.041
                                                </Text>
                                                <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">3%
                                                </Text>
                                            </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <div>
                                    <Box>
                                        <Box flex margin="0 10px">
                                            <Box marginRight="60px">
                                                <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                                alt="Interaçoes"></img>
                                            <Text fontSize="15px" fontWeight="3px">Engajamento</Text>
                                            </Box>
                                            <Text marginTop="27px" fontSize="xl" fontWeight="900">5.109.041
                                            </Text>
                                            <Text marginTop="27px" marginLeft="10px"fontSize="xl" fontWeight="900" color="#00a500">3%
                                            </Text>
                                        </Box>
                                        <hr color="black" size="2" width="100%" ></hr>
                                    </Box>
                                </div>
                                <br></br>
                                <br></br>
                                <Button marginLeft="50px" fontSize="xl" fontWeight="400" size="300px" backgroundColor="ffffff">
                                    + Detalhes
                                </Button>
                            </a>
                        </section>

                    </section>
                </section>
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
                            <img width="700" height="250px" src="https://64.media.tumblr.com/3a48170cc3ce37252ec6e5d84b3a4abc/2c5fe4201d328713-92/s540x810/7c055dc02ac6b2ef5fec40477bb482fd9c67fc1a.png" alt="Imagem Trends"></img>
                        </Box>
                        <Box display="inline-flex" flexDirection="row" justifyContent="center" width="740px">
                            <Button fontSize="xl" fontWeight="400" size="300px" href="http://localhost:8080" backgroundColor="ffffff">+ Detalhes</Button>
                        </Box>
                    </a>
                </Box>
            </div>


    </section>
    )
}

export default Dashboard