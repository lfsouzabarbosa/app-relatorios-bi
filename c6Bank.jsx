import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {

    return (
        <section>
            <Box margin="30px 0 20px 45px" width="200px"  minHeight="20px" > 
                <img width="170" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Logo_C6_Bank.svg/2560px-Logo_C6_Bank.svg.png"></img>
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
                                    <Box display="inline-flex" flexDirection="row" verticalAlign="center">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                                alt="Fãs"></img>
                                            <Text fontSize="15px" fontWeight="3px">Fãs</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">75.625</Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px" >
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1146/1146404.png" alt="Icone Crescimento"
                                                alt="Crescimento"></img>
                                            <Text fontSize="15px" fontWeight="3px">Crescimento</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">0.8%</Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/31/31624.png" alt="Icone Impressões"
                                                alt="Impressões"></img>
                                            <Text fontSize="15px" fontWeight="3px">Impressões</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">000.000
                                            </Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1250/1250999.png" alt="Icone Alcance"
                                                alt="Alcance"></img>
                                            <Text fontSize="15px" fontWeight="3px">Alcance</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">9.220
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">1.745
                                            </Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <br></br>
                                    <Box display="inline-flex" flexDirection="row" justifyContent="center" width="250px">
                                        <Box>
                                        <Button fontSize="xl" fontWeight="400" size="300px" backgroundColor="ffffff">+ Detalhes
                                        </Button></Box>
                                    </Box>
                            </a>
                        </section>


                        <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">
                            <a  class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">415.326</Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1146/1146404.png" alt="Icone Crescimento"
                                                alt="Crescimento"></img>
                                            <Text fontSize="15px" fontWeight="3px">Crescimento</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">0.1%</Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/31/31624.png" alt="Icone Impressões"
                                                alt="Impressões"></img>
                                            <Text fontSize="15px" fontWeight="3px">Impressões</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">000.000
                                            </Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1250/1250999.png" alt="Icone Alcance"
                                                alt="Alcance"></img>
                                            <Text fontSize="15px" fontWeight="3px">Alcance</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">18.023
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
                                            <Text fontSize="15px" fontWeight="3px">6.688</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">1.745
                                            </Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <br></br>
                                <Box display="inline-flex" flexDirection="row" justifyContent="center" width="250px">
                                        <Box>
                                        <Button fontSize="xl" fontWeight="400" size="300px" backgroundColor="ffffff">+ Detalhes
                                        </Button></Box>
                                    </Box>
                            </a>
                        </section>

                        <section width="auto" class="sc-dIsAE cHuGUn admin-bro_Box">
                            <a  class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">39.125</Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px" >
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1146/1146404.png" alt="Icone Crescimento"
                                                alt="Crescimento"></img>
                                            <Text fontSize="15px" fontWeight="3px">Crescimento</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">0.1%</Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/31/31624.png" alt="Icone Impressões"
                                                alt="Impressões"></img>
                                            <Text fontSize="15px" fontWeight="3px">Impressões</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">000.000
                                            </Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <div>
                                    <Box display="inline-flex">
                                        <Box width="110px">
                                            <img width="25px" height="25px" src="https://image.flaticon.com/icons/png/512/1250/1250999.png" alt="Icone Alcance"
                                                alt="Alcance"></img>
                                            <Text fontSize="15px" fontWeight="3px">Alcance</Text>
                                        </Box>
                                        <Box width="140px">
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">4.429
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">1.832
                                            </Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
                                <br></br>
                                <br></br>
                                <Box display="inline-flex" flexDirection="row" justifyContent="center" width="250px">
                                        <Box>
                                        <Button fontSize="xl" fontWeight="400" size="300px" backgroundColor="ffffff">+ Detalhes
                                        </Button></Box>
                                    </Box>
                            </a>
                        </section>

                    </section>
                </section>
            </Box>

            <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google News</Text>
            <Box maxWidth="900px" maxHeight="850px" padding="20px" margin="0 10% 7%" display="inline-list-item" flexDirection="column">

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box>
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://fdr.com.br/2021/08/26/c6-bank-anuncia-recurso-no-app-que-permite-pagamento-de-combustivel/" >
                            <Text marginLeft="7px" textAlign="start" fontSize="xl" fontWeight="400" color="black">C6 Bank anuncia recurso no app que permite pagamento de combustível</Text>
                            <Text marginLeft="7px" textAlign="start" fontSize="x1" fontWeight="200" color="grey">FDR -Terra • 4 horas atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box>
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.terra.com.br/noticias/tecnologia/c6-lanca-techinvest-carteira-de-investimentos-personalizada-e-automatica,7ed662496b6615c569cee7d74ac46af1kvppy0g0.html" >
                            <Text marginLeft="7px" textAlign="start" fontSize="xl" fontWeight="400" color="black">C6 lança TechInvest, carteira de investimentos personalizada e automática</Text>
                            <Text marginLeft="7px" textAlign="star" fontSize="x1" fontWeight="200" color="grey">Terra • 6 horas atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box>
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.moneytimes.com.br/c6-bank-lanca-plataforma-de-investimentos/" >
                            <Text marginLeft="7px" textAlign="start" fontSize="xl" fontWeight="400" color="black">C6 Bank lança plataforma de investimentos</Text>
                            <Text marginLeft="7px" textAlign="start" fontSize="x1" fontWeight="200" color="grey">Money Times • 3 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box>
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://seucreditodigital.com.br/c6-bank-parceria-com-shell-box/" >
                            <Text marginLeft="7px" textAlign="start" fontSize="xl" fontWeight="400" color="black">C6 Bank faz parceria com a Shell Box para
                                pagar a gasolina direto do app</Text>
                            <Text marginLeft="7px" textAlign="start" fontSize="x1" fontWeight="200" color="grey">Seu Crédito Digital • Ontem</Text>
                        </Link>
                    </Box>
                </Box>

            </Box>

            <div>
                <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google Trends</Text>

                <Box boxShadow="card" border="2px solid #ffffff" backgroundColor="#ffffff" borderRadius="10px" maxWidth="800px" minHeight="300px" margin=" 10px auto 30px" >
                    <a href="http://vps23593.publiccloud.com.br:8080/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                        <Box display="flex" justifyContent="center" width="740px" >
                            <img width="700" height="250px" display="flex" src="https://i.pinimg.com/564x/c6/29/60/c62960676402ce3d38ed42271bd6d3b7.jpg" alt="Imagem Trends"></img>
                        </Box>
                    </a>
                </Box>
            </div>

        </section>
    )
}

export default Dashboard