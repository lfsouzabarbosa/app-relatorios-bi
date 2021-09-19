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
                <img width="170px" src="https://logodownload.org/wp-content/uploads/2014/10/mitsubish-logo-1.png"
                alt="Logo Mitsubishi"></img>
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
                            <Text fontSize="h2" fontWeight="900">2.201.125</Text>
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
                            <Text fontSize="h2" fontWeight="900">1.908</Text>
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
                                    <Text fontSize="h2" fontWeight="900">548.029</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                alt="Posts"></img>
                            </Box>
                            <Box padding="10px" paddingRight="50px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">5</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#FF1493" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                alt="Alcance"></img>
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">56.370</Text>
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

</Box>
    )
}

export default Dashboard