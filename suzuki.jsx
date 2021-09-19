import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link, LinkProps } from '@admin-bro/design-system'
import { ContentDeliveryNetwork32 } from '@carbon/icons-react';

const api = new ApiClient()

const Dashboard = () => {

    return (
        <Box  flex flexDirection="column" variant="grey">
        <Box paddingBottom="20px" maxHeight="150px" padding="1em" margin="10px">
            <Box width="200px"  minHeight="20px">
                <img width="170px" src="data:image/png;base64,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"
                alt="Logo Suzuki"></img>
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
                            <Text fontSize="h2" fontWeight="900">360.253</Text>
                        </Box>
                    </Box>
                    <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                        <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                            <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                            alt="Posts"></img>
                        </Box>
                        <Box padding="10px" paddingRight="70px">
                            <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                            <Text fontSize="h2" fontWeight="900">0</Text>
                        </Box>
                    </Box>
                    <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                        <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                            <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                            alt="Alcance"></img>
                        </Box>
                        <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
                            <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                            <Text fontSize="h2" fontWeight="900">0</Text>
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
                                    <Text fontSize="h2" fontWeight="900">43.315</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                alt="Posts"></img>
                            </Box>
                            <Box padding="10px" paddingRight="50px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">1</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                alt="Alcance"></img>
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">422</Text>
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
                                    <Text fontSize="h2" fontWeight="900">-</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#14b1ff" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                alt="Posts"></img>
                            </Box>
                            <Box padding="10px" paddingRight="50px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">-</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#14b1ff" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                alt="Alcance"></img>
                            </Box>
                            <Box padding="10px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Engajamento</Text>
                                <Text fontSize="h2" fontWeight="900">-</Text>
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
                        <Link href="https://www.uol.com.br/carros/colunas/infomoto/2021/08/21/suzuki-v-strom-1050-chega-ao-brasil-em-outubro-conheca-a-nova-aventureira.htm" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Suzuki V-Strom 1050 chega ao Brasil em outubro; conheça a nova aventureria</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">UOL • 7 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="]https://www.noticiasautomotivas.com.br/latin-ncap-zerou-renault-duster-e-suzuki-swift/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Latin NCAP "zerou" Renault Duster e Suzuki Swift</Text>
                            <Text textAlign="star" fontSize="x1" fontWeight="200" color="grey">Notícias Automotivas • Ontem</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.grandepremio.com.br/motogp/noticias/lider-saida-davide-brivio-deixou-suzuki-sobrecarregada-substituto-2022/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Líder diz que saída de Brivio deixou Suzuki sobrecarregada e promete substituto em 2022</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Grande Prêmio • 3 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                backgroundColor="#ffffff" boxShadow="card">
                    <Box marginTop="10px">
                         <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                    </Box>
                    <Box>
                        <Link href="https://www.motonline.com.br/noticia/motos-suzuki-no-brasil/" >
                            <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Motos Suzuki no Brasil: preços e modelos 2021</Text>
                            <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Motoline • 21 dias atrás</Text>
                        </Link>
                    </Box>
                </Box>

            </Box>

            <div>
                <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google Trends</Text>

                <Box boxShadow="card" border="2px solid #ffffff" backgroundColor="#ffffff" borderRadius="10px" maxWidth="800px" minHeight="300px" margin=" 10px auto 30px" >
                    <a href="http://vps23593.publiccloud.com.br:3008/" class="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
                        <Box display="inline-flex" flexDirection="row" justifyContent="center" width="740px" >
                            <img width="700" height="250px" src="https://i.pinimg.com/564x/d6/24/cd/d624cdbca9f85ea5154abf09de2ad26d.jpg" alt="Imagem Trends"></img>
                        </Box>
                    </a>
                </Box>
            </div>

</Box>
    )
}

export default Dashboard