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
                    <img width="170px" src="https://i.pinimg.com/564x/f8/93/7c/f8937c03276bda678ed858dc63d9dadd.jpg"
                    alt="Logo ObraJa"></img>
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
                                <Text fontSize="h2" fontWeight="900">408</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                alt="Posts"></img>
                            </Box>
                            <Box padding="10px" paddingRight="70px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">2</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                alt="Alcance"></img>
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">89</Text>
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
                                        <Text fontSize="h2" fontWeight="900">5.672</Text>
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
                                    <Text fontSize="h2" fontWeight="900">776</Text>
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
    </Box>
    )
}

export default Dashboard