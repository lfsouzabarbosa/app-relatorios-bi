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
                <img width="170px" src="https://i.pinimg.com/564x/f8/93/7c/f8937c03276bda678ed858dc63d9dadd.jpg"
                alt="Logo ObraJá"></img>
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <br></br> 
            <Box display="inline-flex" flexDirection="row" verticalAlign="center" variant="grey">
             
                <section class="sc-dIsAE fbPpRS admin-bro_Box">
                    <section width="auto" class="sc-dIsAE cQyBfq admin-bro_Box">

                        <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">
                            <a  class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                                <div class="sc-jrsJCI exBroz admin-bro_Text">
                                    <img width="auto" height="90" src="https://image.flaticon.com/icons/png/512/1384/1384053.png" alt="Icone Facebook"></img>
                                    <div class="sc-jrsJCI bJANQE admin-bro_Text"></div>
                                </div>
                                <div>
                                    <Box display="inline-flex" flexDirection="row" verticalAlign="center">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                                alt="Fãs"></img>
                                            <Text fontSize="15px" fontWeight="3px">Fãs</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">408</Text>
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">2
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">89
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">5.672</Text>
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">776
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">-</Text>
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">-
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">-
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
            
            <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google News</Text>
            <Box maxWidth="900px" maxHeight="850px" padding="20px" margin="0 10% 7%" display="inline-list-item" flexDirection="column">

            <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.araxa.mg.gov.br/noticia/4689/projeto-maos-a-obra-ja-tem-92-cadastros-aprovados-e-continua-com-vagas-disponiveis" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Notícia</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Notícia / Prefeitura de Araxá • 4 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://radioalianca.com.br/regiao/quartel-dos-bombeiros-de-piratuba-sera-ampliado-recursos-para-obra-ja-estao-sendo-captados" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Quartel dos Bombeiros de piratuba será ampliado. Recursos para obra já estão sendo captados</Text>
                            <Text textAlign="star" fontSize="x1" fontWeight="200" color="grey">Rádio Aliança 750khz • 3 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://mercadoeconsumo.com.br/2021/01/13/com-a-bandeira-obra-ja-saint-gobain-investe-em-atacado-da-construcao/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Com a bandeira Obra Já! Saint-Gobain investe em atacado da construção</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Mercado e Consumo • 13 de jan</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.folhadaregiao.com.br/2021/08/28/arte-em-homenagem-a-ex-deputada-marielle-franco-e-apagada-de-muro/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Arte em homenagem à ex-deputada Marielle Franco é apagada de muro</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Folha da Região • 3 horas atrás</Text>
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
                    <a href="http://vps23593.publiccloud.com.br:3003/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                        <Box display="inline-flex" flexDirection="row" justifyContent="center" width="740px" >
                            <img width="700" height="250px" src="https://i.pinimg.com/564x/04/08/11/040811d931d20dcac9953bc55c3ced1c.jpg" alt="Imagem Trends"></img>
                        </Box>
                    </a>
                </Box>
            </div>


    </section>
    )
}

export default Dashboard