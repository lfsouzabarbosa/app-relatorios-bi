import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link, LinkProps } from '@admin-bro/design-system'
import { ContentDeliveryNetwork32 } from '@carbon/icons-react';

const api = new ApiClient()

function trendsRedirecionamento(){
    window.location.href="http://vps23593.publiccloud.com.br:3001/"
}

const Dashboard = () => {

    return (

        <section>
            <Box margin="30px 0 20px 45px" width="200px"  minHeight="20px">
                <img width="170px" src="https://logodownload.org/wp-content/uploads/2020/11/telhanorte-logo-1.png"
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
                                    <Box display="inline-flex" flexDirection="row" verticalAlign="center">
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

            <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google News</Text>
            <Box maxWidth="900px" maxHeight="850px" padding="20px" margin="0 10% 7%" display="inline-list-item" flexDirection="column">

            <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.segs.com.br/demais/305860-crise-hidrica-como-reduzir-o-consumo-de-agua-e-de-quebra-economizar-no-bolso" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Crise hídrica: Como reduzir o consumo de água e, de quebra, economizar no bolso...</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Portal Nacional de Seguros • 8 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.segs.com.br/demais/302446-5-dicas-para-utilizar-quadros-decorativos-com-elegancia-e-estilo" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">5 dicas para utilizar quadros decorativos com elegância e estilo...</Text>
                            <Text textAlign="star" fontSize="x1" fontWeight="200" color="grey">Portal Nacional de Seguros • 30 de jul</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://valor.globo.com/carreira/noticia/2021/08/19/iniciativa-conecta-presidentes-com-universitarios.ghtml" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Iniciativa conecta presidentes com universitários</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Valor Econômico • 9 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.bonde.com.br/casa-e-decoracao/dicas/como-reduzir-o-consumo-de-agua-e-ainda-economizar-no-bolso-544302.html" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Como reduzir o consumo de água e, ainda, economizar no bolso</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Portal Bonde • 8 dias atrás</Text>
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
                    <a onClick="http://vps23593.publiccloud.com.br:3001/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                        <Box display="inline-flex" flexDirection="row" justifyContent="center" width="740px" >
                            <img width="700" height="250px" src="https://i.pinimg.com/564x/9b/13/e1/9b13e1d5be334bf935021f4ebbc8ffbb.jpg" alt="Imagem Trends"></img>
                        </Box>
                    </a>
                </Box>
            </div>

    </section>
    )
}

export default Dashboard