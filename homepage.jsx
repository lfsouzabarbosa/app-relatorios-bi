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
        <Box  flex flexDirection="column" variant="grey">
            <Box paddingBottom="20px" maxHeight="150px" padding="1em" margin="10px">
                <Box width="200px"  minHeight="20px">
                    <img width="170px" src="https://logodownload.org/wp-content/uploads/2020/11/telhanorte-logo-1.png"
                    alt="Logo Telhanorte"></img>
                </Box>
            </Box>

        <Box display={["block", "flex"]} flexDirection="column" justifyContent="center">
            <Box padding="20px" alignItems="center" margin="10px" display={["flex"]} flexDirection="column" justifyContent="center" minHeight="650px">
                <Box backgroundColor="#ffffff" boxShadow="card" borderRadius="5px" padding="10px" alignItems="center" justifyContent="start" maxHeight="100px" minWidth="100%" display={["inline-flex"]}>
                        <Box ><img width="50px" height="50px"
                        src="https://image.flaticon.com/icons/png/512/747/747543.png"></img></Box>
                </Box>
                <Box display={["block", "flex"]} padding="10px" flexDirection="row" margin="10px" alignItems="center" minHeight="200px">
                        <Box backgroundColor="#ffffff" justifyContent="center" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px"  paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                alt="Fãs"></img>
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px" paddingRight="30px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Fãs</Text>
                                <Text fontSize="h2" fontWeight="900">471.120</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                alt="Posts"></img>
                            </Box>
                            <Box padding="10px" paddingRight="70px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">3</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                alt="Alcance"></img>
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">289</Text>
                            </Box>
                        </Box>
                </Box>

                    <Box backgroundColor="#ffffff" boxShadow="card" borderRadius="5px" padding="10px" alignItems="center" justifyContent="start" maxHeight="100px" minWidth="100%" display={["inline-flex"]}>
                            <Box ><img width="50px" height="50px"
                            src="https://image.flaticon.com/icons/png/512/733/733558.png"></img></Box>
                    </Box>
                    <Box display={["block", "flex"]} padding="10px" flexDirection="row" margin="10px" alignItems="center" minHeight="200px">
                            <Box backgroundColor="#ffffff" justifyContent="center" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px"  paddingTop="17px">
                                        <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                        alt="Fãs"></img>
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="5px" fontSize="h4" fontWeight="3px">Seguidores</Text>
                                        <Text fontSize="h2" fontWeight="900">119.113</Text>
                                </Box>
                            </Box>
                            <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                    <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                    alt="Posts"></img>
                                </Box>
                                <Box padding="10px" paddingRight="50px">
                                    <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">4</Text>
                                </Box>
                            </Box>
                            <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                    <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                    alt="Alcance"></img>
                                </Box>
                                <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
                                    <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                    <Text fontSize="h2" fontWeight="900">879</Text>
                                </Box>
                            </Box>   
                    </Box> 

                    <Box backgroundColor="#ffffff" boxShadow="card" borderRadius="5px" padding="10px" alignItems="center" justifyContent="start" maxHeight="100px" minWidth="100%" display={["inline-flex"]}>
                            <Box ><img width="50px" height="50px"
                            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"></img></Box>
                    </Box>
                    <Box display={["block", "flex"]} padding="10px" flexDirection="row" margin="10px" alignItems="center" minHeight="200px">
                            <Box backgroundColor="#ffffff" justifyContent="center" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#14b1ff" borderRadius="7px" marginTop="-30%" padding="15px"  paddingTop="17px">
                                        <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/2097/2097681.png" alt="Icone Fãs"
                                        alt="Fãs"></img>
                                    </Box>
                                    <Box padding="10px">
                                        <Text paddingY="5px" fontSize="h4" fontWeight="3px">Seguidores</Text>
                                        <Text fontSize="h2" fontWeight="900">11.125</Text>
                                </Box>
                            </Box>
                            <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#14b1ff" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                    <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                    alt="Posts"></img>
                                </Box>
                                <Box padding="10px" paddingRight="50px">
                                    <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">14</Text>
                                </Box>
                            </Box>
                            <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#14b1ff" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                    <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                    alt="Alcance"></img>
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="5px" fontSize="h4" fontWeight="3px">Engajamento</Text>
                                    <Text fontSize="h2" fontWeight="900">19</Text>
                                </Box>
                            </Box>   
                    </Box> 

            </Box>
        </Box>

              <Box marginY="10px" display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding="3em" >
                  <Box>
                      <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                  </Box>
                  <Box paddingLeft="10px">
                    <Text color="black" fontSize="h3">GOOGLE NEWS</Text>
                  </Box>
              </Box>

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

    </Box>
    )
}

export default Dashboard