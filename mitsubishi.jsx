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
                <img width="170px" src="https://logodownload.org/wp-content/uploads/2014/10/mitsubish-logo-1.png"
                alt="Logo Mitsubishi"></img>
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">2.201.125</Text>
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">1.908
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">548.029</Text>
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">5
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">56.370
                                            </Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%" ></hr>
                                </div>
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
                                            <Text textAlign="right" marginTop="27px" fontSize="xl" fontWeight="900">-</Text>
                                        </Box>
                                    </Box>
                                    <hr color="black" size="2" width="100%"></hr>
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
                        <Link href="https://www.automotivebusiness.com.br/noticia/33468/fabricante-de-mitsubishi-hpe-agora-faz-seguro-de-carro-casa-e-vida" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Fabricante de Mitsubishi, HPE agora faz seguro de carro, casa e vida</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Automotive Business • 16 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.abcdoabc.com.br/brasil-mundo/noticia/tres-equipes-levaram-mitsubishi-ao-podio-categorias-diferentes-rally-sertoes-132269" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Três equipes levaram Mitsubishi ao pódio em categorias difererntes do Rally dos Sertões</Text>
                            <Text textAlign="star" fontSize="x1" fontWeight="200" color="grey">ABCdoABC • 4 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.jornaldooeste.com.br/esporte/mitsubishi-cup-2021-cristiano-rocha-e-roberto-spessatto-sobem-ao-podio-na-quarta-etapa/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Mitsubishi Cup 2021: Cristiano Rocha e Roberto Spessatto sobem ao pódio na quarta etapa - Jornal do Oeste</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Jornal do Oeste • 26 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.folhape.com.br/colunistas/fmotors/mitsubishi-motors-marca-presenca-na-edicao-2021-do-rally-dos-sertoes/26264/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Mitsubishi Motors marca presença na edição 2021 do Rally dos sertões</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Folha de Pernambuco • 11 dias atrás</Text>
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
                    <a href="http://vps23593.publiccloud.com.br:3006/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                        <Box display="inline-flex" flexDirection="row" justifyContent="center" width="740px" >
                            <img width="700" height="250px" src="https://i.pinimg.com/originals/30/5b/77/305b771df2542605b3ae26b0f5802d9b.jpg" alt="Imagem Trends"></img>
                        </Box>
                    </a>
                </Box>
            </div>


    </section>
    )
}

export default Dashboard