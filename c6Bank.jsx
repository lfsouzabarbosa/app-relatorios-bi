import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {

    return (
        <Box  flex flexDirection="column" variant="grey">
            <Box paddingBottom="20px" maxHeight="150px" padding="1em" margin="10px">
                <Box width="200px"  minHeight="20px">
                    <img width="170px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Logo_C6_Bank.svg/2560px-Logo_C6_Bank.svg.png"
                    alt="Logo C6Bank"></img>
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
                                <Text fontSize="h2" fontWeight="900">76.160</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                alt="Posts"></img>
                            </Box>
                            <Box padding="10px" paddingRight="70px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                <Text fontSize="h2" fontWeight="900">5</Text>
                            </Box>
                        </Box>
                        <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                            <Box backgroundColor="#05ff7a" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                alt="Alcance"></img>
                            </Box>
                            <Box paddingY="10px" paddingLeft="10px" paddingRight="35px">
                                <Text paddingY="5px" fontSize="h4" fontWeight="3px">Interações</Text>
                                <Text fontSize="h2" fontWeight="900">938</Text>
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
                                        <Text fontSize="h2" fontWeight="900">418.238</Text>
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
                                    <Text fontSize="h2" fontWeight="900">39.680</Text>
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
                                        <Text fontSize="h2" fontWeight="900">418.238</Text>
                                </Box>
                            </Box>
                            <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="50px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#14b1ff" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="18px">
                                    <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/3388/3388668.png" alt="Icone Posts"
                                    alt="Posts"></img>
                                </Box>
                                <Box padding="10px" paddingRight="50px">
                                    <Text paddingY="5px" fontSize="h4" fontWeight="3px">Posts</Text>
                                    <Text fontSize="h2" fontWeight="900">4</Text>
                                </Box>
                            </Box>
                            <Box backgroundColor="#ffffff" boxShadow="cardHover" borderRadius="7px" padding="15px" display={["block", "flex"]} marginX="10px" marginY="35px" alignItems="center" maxHeight="200px">
                                <Box backgroundColor="#14b1ff" borderRadius="7px" marginTop="-30%" padding="15px" paddingTop="17px">
                                    <img width="35px" height="35px" src="https://image.flaticon.com/icons/png/512/32/32557.png" alt="Icone Interações"
                                    alt="Alcance"></img>
                                </Box>
                                <Box padding="10px">
                                    <Text paddingY="5px" fontSize="h4" fontWeight="3px">Engajamento</Text>
                                    <Text fontSize="h2" fontWeight="900">39.680</Text>
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

    </Box>
    )
}

export default Dashboard