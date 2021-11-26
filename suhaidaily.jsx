import React, { Component } from 'react'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import apiSheetsSuhai30 from './apiSheetsSuhai30'
import apiSheetsSuhai7 from './apiSheetsSuhai7'
import apiSheetsSuhai24 from './apiSheetsSuhai24'
import { Link } from '@admin-bro/design-system'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: []
        };

        this.UltimoDia = this.UltimoDia.bind(this);
        this.UltimaSemana = this.UltimaSemana.bind(this);
        this.UltimoMes = this.UltimoMes.bind(this);

    }
    async UltimaSemana() {
        let responseapiSheetsSuhai7 = await apiSheetsSuhai7.get('');
        console.log(responseapiSheetsSuhai7.data)
        this.setState({ dados: responseapiSheetsSuhai7.data });
    };

    async UltimoDia() {
        let responseapiSheetsSuhai24 = await apiSheetsSuhai24.get('');
        console.log(responseapiSheetsSuhai24.data)
        this.setState({ dados: responseapiSheetsSuhai24.data });
    }
    async UltimoMes() {
        let responseapiSheetsSuhai30 = await apiSheetsSuhai30.get('');
        console.log(responseapiSheetsSuhai30.data)
        this.setState({ dados: responseapiSheetsSuhai30.data });
    }

    async componentDidMount() {
        let responseapiSheetsSuhai30 = await apiSheetsSuhai30.get('');
        console.log(responseapiSheetsSuhai30.data)
        this.setState({ dados: responseapiSheetsSuhai30.data });
    };

    render() {
        const { dados } = this.state;
        return (
            <><Box flex flexDirection="column" variant="grey">
                <Box maxHeight="100px" padding="1em" margin="10px">
                    <Box width="200px" minHeight="20px">
                        <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDDAk7HNLdKCcV0QoZfZkOZoR5Z0IcZXgiojUM7iYt1noMg3wI7_UGXv9ESvbSMtFTw&usqp=CAU"
                            alt="Logo Suhai"></img>
                    </Box>
                </Box>
                <div>
                    <Box display={["block", "flex"]} flexDirection="row" verticalAlign="center" justifyContent="space-between" alignItems="center" backgroundColor="#ffffff" boxShadow="card" borderRadius="5px" minWidth="90%" margin="2%" minHeight="90%" >
                        <Box display={["flex", "flex"]} flexDirection="row" justifyContent="center" paddingY="2%" minWidth="30%">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="5%" maxHeight="60%" maxWidth="60%">
                                <img width="37px" height="37px" src="https://64.media.tumblr.com/a0dea01aac01e1ddf3c130eef5f943e3/a1d5d8b48c9e21f9-3c/s540x810/a3152792a6007432671f1eb845a447e6872e02d4.png"></img>
                            </Box>
                            <Box marginLeft="1%" alignSelf="center" minWidth="50%">
                                <Link color="black" onClick={this.UltimoDia}>
                                    <Text color="black" fontSize="h4">Últimas 24 horas</Text></Link>
                            </Box>
                        </Box>
                        <Box display={["flex", "flex"]} flexDirection="row" justifyContent="center" paddingY="1%" minWidth="30%">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="5%" maxHeight="60%" maxWidth="60%">
                                <img width="37px" height="37px" src="https://64.media.tumblr.com/a0dea01aac01e1ddf3c130eef5f943e3/a1d5d8b48c9e21f9-3c/s540x810/a3152792a6007432671f1eb845a447e6872e02d4.png"></img>
                            </Box>
                            <Box marginLeft="1%" alignSelf="center" minWidth="50%" >
                                <Link color="black" onClick={this.UltimaSemana}>
                                    <Text color="black" fontSize="h4">Última semana</Text></Link>
                            </Box>
                        </Box>
                        <Box display={["flex", "flex"]} flexDirection="row" justifyContent="center" paddingY="1%" minWidth="30%">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" padding="5%" maxHeight="60%" maxWidth="60%">
                                <img width="37px" height="37px" src="https://64.media.tumblr.com/a0dea01aac01e1ddf3c130eef5f943e3/a1d5d8b48c9e21f9-3c/s540x810/a3152792a6007432671f1eb845a447e6872e02d4.png"></img>
                            </Box>
                            <Box marginLeft="1%" alignSelf="center" minWidth="50%" >
                                <Link color="black" onClick={this.UltimoMes}>
                                    <Text color="black" fontSize="h4">Total investido</Text></Link>
                            </Box>
                        </Box>
                    </Box>
                </div>
                <br></br>
                <div>
                    <Box display="flex" flexDirection="row" alignItems="center" maxHeight="20px" marginX="2%" marginTop="3%" >
                        <Box>
                            <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                        </Box>
                        <Box paddingLeft="10px">
                            <Text color="black" fontSize="h3">BIG NUMBERS</Text>
                        </Box>
                    </Box>
                    <br></br>
                    <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" margin="2%" display={["block", "flex"]} flexDirection="row" justifyContent="space-between" alignItems="center" paddingY="1%" maxHeight="95%" minWidth="90%">
                        <Box padding="1%" minWidth="30%" minHeight="90%" display={["flex", "flex"]} justifyContent="center">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" paddingLeft="4%" paddingRight="4%" paddingTop="3%" mminHeight="10%" maxHeight="30%" maxWidth="60%"><img width="80px" height="80px"
                                src="https://64.media.tumblr.com/c39820edfa29154e95c97fc93f0ff142/a5af1ad2e1a2f53f-d4/s540x810/ea7208ce872e4120020af15e7cb9d04eb60de273.png"></img></Box>
                            <Box paddingY="15px" paddingLeft="7px" alignSelf="self-end" maxWidth="50%">
                                <Text paddingBottom="2%" color="black" fontSize="h2">{dados.investido}</Text>
                                <Text color="black" fontSize="h3">INVESTIDO</Text>
                            </Box>
                        </Box>
                        <Box padding="1%" minWidth="30%" minHeight="90%" display={["flex", "flex"]} justifyContent="center">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" paddingLeft="4%" paddingRight="4%" paddingY="3%" maxHeight="80%" maxWidth="60%"><img width="80px" height="80px"
                                src="https://64.media.tumblr.com/1c856e21d16c57127d27f0c46e8ee71a/898ced3754308402-fb/s540x810/514e554fc0e667b8224ea62d403c794028735942.png"></img></Box>
                            <Box paddingY="15px" paddingLeft="7px" alignSelf="self-end" minWidth="50%">
                                <Text paddingBottom="2%" color="black" fontSize="h2">{dados.views}</Text>
                                <Text color="black" fontSize="h3">VIEWS</Text>
                            </Box>
                        </Box>
                        <Box padding="1%" paddingRight="3%" minWidth="30%" minHeight="90%" display={["flex", "flex"]} justifyContent="center">
                            <Box backgroundColor="#1C1C1C" borderRadius="7px" paddingLeft="3%" paddingRight="5%" paddingY="3%" maxHeight="80%" maxWidth="60%"><img width="80px" height="80px"
                                src="https://64.media.tumblr.com/1f756e8650d4da630561798a866c1f22/139abaa599e23fa4-14/s500x750/550cbc2de53e7e7d68a183bbd910bd57137816f2.png"></img></Box>
                            <Box paddingY="15px" paddingLeft="7px" alignSelf="self-end" minWidth="48%">
                                <Text paddingBottom="2%" color="black" fontSize="h2">{dados.impressoesBigNumbers}</Text>
                                <Text color="black" fontSize="h3">IMPRESSÕES</Text>
                            </Box>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box display="flex" flexDirection="row" alignItems="center" maxHeight="20px" marginX="2%" marginTop="3%" >
                        <Box>
                            <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                        </Box>
                        <Box paddingLeft="10px">
                            <Text color="black" fontSize="h3">PROGRAMÁTICA</Text>
                        </Box>
                    </Box>
                    <br></br>
                    <Box margin="2%" backgroundColor="#ffffff" borderRadius="7px" display={["block", "flex"]} flexDirection="row" boxShadow="card" justifyContent="center" alignItems="center" padding="2%" maxHeight="90%" minWidth="90%">
                        <Box flexDirection="column" justifyContent="center" backgroundColor="#1C1C1C" borderRadius="7px" minWidth="25%" minHeight="15%" marginX="2%" padding="2%">
                            <Box display="flex" flexDirection="row" justifyContent="center">
                                <Box ><img width="80px" height="80px" src="https://64.media.tumblr.com/8fdee088d87010113acfabc364310e3e/38cffac007850ccd-49/s540x810/428963eba9e60a46cc79345273fbae61d56f6e38.png"></img>
                                </Box></Box>
                            <Text textAlign="center" fontSize="h2" color="white" marginTop="6%" >Display/Vídeo</Text>
                        </Box>
                        <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="70%">
                            <Box display={["block"]} paddingY="2%">
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.impressoesPD}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                            </Box>
                            <Box paddingY="2%" >
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.CPMD}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">CPM</Text>
                            </Box>
                            <Box paddingY="2%">
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.CTRDP}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">VCR</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box margin="2%" backgroundColor="#ffffff" borderRadius="7px" display={["block", "flex"]} flexDirection="row" boxShadow="card" justifyContent="center" alignItems="center" padding="2%" maxHeight="90%" minWidth="90%">
                        <Box flexDirection="column" justifyContent="center" backgroundColor="#1C1C1C" borderRadius="7px" minWidth="25%" minHeight="15%" marginX="2%" padding="2%">
                            <Box display="flex" flexDirection="row" justifyContent="center">
                                <Box ><img width="80px" height="80px" src="https://64.media.tumblr.com/9b1eb2e80d47f5d02a87a2564126ad3c/87e1fffbdcbc0b32-94/s500x750/4feb0d1bfd301e45c38cc13809c97ede2a3c3ea6.png"></img>
                                </Box></Box>
                            <Text textAlign="center" fontSize="h2" color="white" marginTop="6%">Youtube</Text>
                        </Box>
                        <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="70%">
                            <Box display={["block"]} paddingY="2%">
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.impressoesYT}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                            </Box>
                            <Box paddingY="2%" >
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.CPMYT}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">CPM</Text>
                            </Box>
                            <Box paddingY="2%">
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.VCRYT}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">VCR</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box margin="2%" backgroundColor="#ffffff" borderRadius="7px" display={["block", "flex"]} flexDirection="row" boxShadow="card" justifyContent="center" alignItems="center" padding="2%" maxHeight="90%" minWidth="90%">
                        <Box flexDirection="column" justifyContent="center" backgroundColor="#1C1C1C" borderRadius="7px" minWidth="25%" minHeight="15%" marginX="2%" padding="2%">
                            <Box display="flex" flexDirection="row" justifyContent="center">
                                <Box><img width="80px" height="80px" src="https://64.media.tumblr.com/e5783fc820ea4001bc043f5256d3187e/9732955d1461a242-1d/s540x810/66ba6355d24de106f3f5f6546b3efb249209ce8d.png"></img>
                                </Box></Box>
                            <Text textAlign="center" fontSize="h2" color="white" marginTop="6%">Waze</Text>
                        </Box>
                        <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="70%">
                            <Box display={["block"]} paddingY="2%">
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.impressoesW}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                            </Box>
                            <Box paddingY="2%" >
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.CPMW}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">CPM</Text>
                            </Box>
                            <Box paddingY="2%">
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.ERW}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">VCR</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box margin="2%" backgroundColor="#ffffff" borderRadius="7px" display={["block", "flex"]} flexDirection="row" boxShadow="card" justifyContent="center" alignItems="center" padding="2%" maxHeight="90%" minWidth="90%">
                        <Box flexDirection="column" justifyContent="center" backgroundColor="#1C1C1C" borderRadius="7px" minWidth="25%" minHeight="15%" marginX="2%" padding="2%">
                            <Box display="flex" flexDirection="row" justifyContent="center">
                                <Box><img width="80px" height="80px"
                                    src="https://64.media.tumblr.com/bd7e3dfbc06ca65aed4f5a30546abd6b/c64de876650629fa-83/s540x810/5bd3ff4bb1fa16e2f5419b6d34f9ba2241adc6c2.png"></img></Box>
                                <Box marginLeft="-2%"><img width="80px" height="80px"
                                    src="https://64.media.tumblr.com/8db1fdad66724edf4ed2e9cffccacc01/52600e848acf1114-6f/s540x810/f5a86950206dee524277e5cd8196265bb9b862ee.png"></img></Box>
                            </Box>
                            <Text textAlign="center" fontSize="h2" color="white" marginTop="6%">Social</Text>
                        </Box>
                        <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-between" minWidth="70%">
                            <Box display={["block"]} paddingY="2%">
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.impressoes}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">IMPRESSÕES</Text>
                            </Box>
                            <Box paddingY="2%" >
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.CPMFBIT}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">CPM</Text>
                            </Box>
                            <Box paddingY="2%">
                                <Text textAlign="center" padding="5px" color="black" fontSize="h2">{dados.ERFBIT}</Text>
                                <Text textAlign="center" padding="5px" color="black" fontSize="h3">VCR</Text>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box></>
        );
    }
}

export default Dashboard;

