import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {

    return (
        <section>
            <Box margin="30px 0 20px 45px" width="200px"  minHeight="20px">
                <img width="170px" src="data:image/png;base64,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"
                alt="Logo Tumelero"></img>
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
            
            <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google Trends</Text>
            <Box border="2px solid #ffffff" borderRadius="10px" maxWidth="800px" minHeight="600px" backgroundColor="#ffffff" margin=" 10px auto 30px">
            </Box>

            <Text margin="0 0 20px 47px" fontSize="xl" fontWeight="400">Google News</Text>
            <Box border="2px solid #ffffff" borderRadius="10px" maxWidth="800px" minHeight="600px" backgroundColor="#ffffff" margin=" 10px auto 30px">
            </Box>

    </section>
    )
}

export default Dashboard