import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import {
    Brush, LineChart, Line,
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { LogoFacebook32 } from '@carbon/icons-react'

const rsInsta = [
  {
    impressões: 228,
    curtidas: 50,
    data: "13/08"
  },
  {
    impressões: 12554,
    curtidas: 508,
    data: "14/08"
  },
  {
    impressões: 239,
    curtidas: 53,
    data: "16/08"
  },
  {
    impressões: 10099,
    curtidas: 349,
    data:"16/08"
  },
  {
    impressões: 116,
    curtidas: 12,
    data:"18/08"
  },
  {
    impressões: 174,
    curtidas: 38,
    data:"19/08"
  },
  {
    impressões: 4131,
    curtidas: 140,
    data: "19/08"
  },
  {
    impressões: 11824,
    curtidas: 310,
    data: "20/08"
  },
  {
    impressões: 172,
    curtidas: 28,
    data: "23/08"
  },
  {
    impressões: 10127,
    curtidas: 297,
    data:"24/08"
  },
  {
    impressões: 6361,
    curtidas: 268,
    data: "26/08"
  },
  {
    impressões: 207,
    curtidas: 56,
    data: "27/08"
  },
  {
    impressões: 7639,
    curtidas: 204,
    data: "28/08"
  },
  {
    impressões: 184,
    curtidas: 41,
    data: "31/08"
  },
  {
    impressões: 2235,
    curtidas: 75,
    data: "01/09"
  },
  {
    impressões: 7818,
    curtidas: 266,
    data: "02/09"
  },
  {
    impressões: 1003,
    curtidas: 38,
    data: "02/09"
  },
  {
    impressões: 134,
    curtidas: 28,
    data: "03/09"
  },
  {
    impressões: 9748,
    curtidas: 265,
    data: "03/09"
  },
  {
    impressões: 4179,
    curtidas: 112,
    data: "08/09"
  },
  {
    impressões: 72,
    curtidas: 10,
    data: "09/09"
  },

];

const rsFace = [
    {
      alcance: 4,
      compartilhamento: 0,
      data: "13/08"
    },
    {
      alcance: 4816,
      compartilhamento: 11,
      data: "13/08"
    },
    {
      alcance: 9,
      compartilhamento: 0,
      data: "16/08"
    },
    {
      alcance: 4307,
      compartilhamento: 26,
      data:"16/08"
    },
    {
      alcance: 10,
      compartilhamento: 0,
      data:"18/08"
    },
    {
      alcance: 5,
      compartilhamento: 0,
      data:"19/08"
    },
    {
      alcance: 1567,
      compartilhamento: 1,
      data: "19/08"
    },
    {
      alcance: 6716,
      compartilhamento: 29,
      data: "20/08"
    },
    {
        alcance: 9,
        compartilhamento: 0,
        data: "23/08"
      },
    {
      alcance: 1422,
      compartilhamento: 6,
      data: "24/08"
    },
    {
      alcance: 1554,
      compartilhamento: 5,
      data:"26/08"
    },
    {
      alcance: 1133,
      compartilhamento: 0,
      data: "26/08"
    },
    {
      alcance: 7,
      compartilhamento: 0,
      data: "27/08"
    },
    {
      alcance: 1860,
      compartilhamento: 2,
      data: "28/08"
    },
    {
      alcance: 4,
      compartilhamento: 0,
      data: "31/08"
    },
    {
      alcance: 823,
      compartilhamento: 5,
      data: "02/09"
    },
    {
      alcance: 1295,
      compartilhamento: 2,
      data: "02/09"
    },
    {
      alcance: 0,
      compartilhamento: 0,
      data: "03/09"
    },
    {
      alcance: 1661,
      compartilhamento: 3,
      data: "03/09"
    },
    {
      alcance: 983,
      compartilhamento: 2,
      data: "07/09"
    },
    {
      alcance: 4,
      compartilhamento: 0,
      data: "09/09"
    }
  
];
  
const api = new ApiClient()

const Dashboard = () => {

    return (
        <Box  flex flexDirection="column" variant="grey">
            <Box paddingBottom="20px" maxHeight="150px" padding="1em" margin="10px">
                <Box width="200px"  minHeight="20px">
                    <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDDAk7HNLdKCcV0QoZfZkOZoR5Z0IcZXgiojUM7iYt1noMg3wI7_UGXv9ESvbSMtFTw&usqp=CAU"
                    alt="Logo Suhai"></img>
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

              <Box paddingX="40px" width="100%" display={["block", "flex"]} flexDirection="row" justifyContent="center">
                  <Link href="./suhaiFlashReport">
                    <Button fontSize="h2" size="lg">
                        Flash Report</Button>
                  </Link>
              </Box>

              <Box marginY="10px" display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding="3em" >
                  <Box>
                      <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                  </Box>
                  <Box paddingLeft="10px">
                    <Text color="black" fontSize="h3">GOOGLE NEWS</Text>
                  </Box>
              </Box>

              <Box maxWidth="900px" maxHeight="1000px" padding="20px" marginX="45px" marginBottom="50px" justifyContent="center" display="inline-list-item" flexDirection="column">

                <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                    backgroundColor="#ffffff" boxShadow="card">
                        <Box marginTop="10px">
                            <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                        </Box>
                        <Box>
                            <Link href="https://www.segs.com.br/seguros/305573-suhai-seguradora-lanca-cobertura-de-terceiros" >
                                <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Suhai Seguradora lança cobertura de terceiros / SEGS - Portal Nacional de Seguros, Saúde, Info, TI...</Text>
                                <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Portal nacional de Seguros • 10 dias atrás</Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                    backgroundColor="#ffffff" boxShadow="card">
                        <Box marginTop="10px">
                            <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                        </Box>
                        <Box>
                            <Link href="https://propmark.com.br/anunciantes/suhai-chama-ele-para-mostrar-democratizacao-do-seguro/" >
                                <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Suhai chama 'Ele' para mostrar democratização do seguro</Text>
                                <Text textAlign="star" fontSize="x1" fontWeight="200" color="grey">Terra • 6 horas atrás</Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                    backgroundColor="#ffffff" boxShadow="card">
                        <Box marginTop="10px">
                            <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                        </Box>
                        <Box>
                            <Link href="https://www.segs.com.br/seguros/306998-clube-dos-seguradores-da-bahia-recebe-executivo-da-sompo-seguros" >
                                <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">Clube dos seguradores da Bahia recebe executivo da SOMPO SEGUROS / SEGS - Portal Nacional de Seguros</Text>
                                <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">Portal Nacional de Seguros • 14 horas atrás</Text>
                            </Link>
                        </Box>
                    </Box>

                    <Box margin="7px auto" padding="22px" display="flex" flexDirection="column"
                    backgroundColor="#ffffff" boxShadow="card">
                        <Box marginTop="10px">
                            <img margin="auto" width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1042/1042782.png"></img>
                        </Box>
                        <Box>
                            <Link href="https://noticias.uol.com.br/internacional/ultimas-noticias/2021/08/23/eua-acreditam-poder-evacuar-todos-os-americanos-do-afeganistao-ate-3108.htm" >
                                <Text textAlign="start" fontSize="xl" fontWeight="400" color="black">EUA acreditam poder evacuar todos os americanos do Afeganistão até 31/08</Text>
                                <Text textAlign="start" fontSize="x1" fontWeight="200" color="grey">UOL Notícias • 5 dias atrás</Text>
                            </Link>
                        </Box>
                    </Box>

                </Box>
            
            <Box display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding="3em" >
                <Box>
                    <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                </Box>
                <Box paddingLeft="10px">
                    <Text color="black" fontSize="h3">GOOGLE TRENDS</Text>
                </Box>
            </Box>
            
            <Box boxShadow="card" backgroundColor="#ffffff" margin="30px" padding="20px" display={["block", "flex"]} flexDirection="column" justifyContent="center">
                <div style={{ width: '100%' }}>
                    <h4>Impressões Instagram</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart
                            width={500}
                            height={200}
                            data={rsInsta}
                            syncId="anyId"
                            margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="data" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="impressões" stroke="#ffa338" fill="#ffa338" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <p>Curtidas Instagram</p>

                    <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={rsInsta}
                        syncId="anyId"
                        margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="data" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="curtidas" stroke="#ffa338" fill="#ffa338" />
                    </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div style={{ width: '100%' }}>
                    <h4>Alcance Facebook</h4>

                    <ResponsiveContainer width="100%" height={200}>
                        
                        <LineChart
                            width={500}
                            height={200}
                            data={rsFace}
                            syncId="anyId"
                            margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="data" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="alcance" stroke="#6da8ff" fill="#6da8ff" />
                        </LineChart>
                        </ResponsiveContainer>
                        <p>Compartilhamento Facebook</p>

                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart
                                width={500}
                                height={200}
                                data={rsFace}
                                syncId="anyId"
                                margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="data" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="compartilhamento" stroke="#6da8ff" fill="#6da8ff" />
                            </LineChart>
                        </ResponsiveContainer>

                        <ResponsiveContainer width="100%" height={200}>
                            <AreaChart
                                width={500}
                                height={200}
                                data={rsFace}
                                syncId="anyId"
                                margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="data" />
                                <YAxis />
                                <Tooltip />
                                <Brush />
                                <Area type="monotone" dataKey="alcance" stroke="#6da8ff" fill="#6da8ff" />
                            </AreaChart>
                    </ResponsiveContainer>
                 </div>
                
                 <Box marginY="20px" paddingX="45px" width="100%" display={["block", "flex"]} flexDirection="row" justifyContent="center">
                  <Link href="./suhaiFlashReport">
                    <Button fontSize="h2" size="lg">
                        Mais Detalhes </Button>
                  </Link>
              </Box>
            </Box>

    </Box>
    )
}

export default Dashboard;
