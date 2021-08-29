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
                <img width="170px" src="data:image/png;base64,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"
                alt="Logo Klabin"></img>
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
                        <Link href="https://economia.uol.com.br/mais/ultimas-noticias/2021/08/25/acao-klabin-hoje-cotacao-ibovespa.htm" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Ações Klabin (KLB11): saiba qual o preço hoje (25/08)</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">UOL • 3 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.infomoney.com.br/mercados/acao-da-vale-tem-leve-queda-apos-salto-da-vespera-mosaico-tem-baixa-com-recomendacao-e-yduqs-cai-3-apos-tres-sessoes-de-ganhos/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Klabin reverte prejuízo e lucra R$ 719 milhões no 2ª trimestre de 2021</Text>
                            <Text textAlign="star" fontSize="x1" fontWeight="200" color="grey">InfoMoney • 18 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://valor.globo.com/empresas/noticia/2021/08/10/klabin-investe-r-40-milhoes-para-por-barreira-em-cartoes.ghtml" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Klabin investe R$ 40 milhões para pôr barreira em cartões</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Valor Econômico • 18 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://valor.globo.com/empresas/noticia/2021/08/10/klabin-investe-r-40-milhoes-para-por-barreira-em-cartoes.ghtml" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Ações de Suzano e Klabin saltam até 5,5%, Mosaico tem queda de 4% após recomendação e Braskem sobre 4%</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">InfoMoney • 3 duas atrás</Text>
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
                    <a href="http://vps23593.publiccloud.com.br:3004/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
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