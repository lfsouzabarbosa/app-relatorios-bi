import React, { Component } from 'react'
import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Text } from '@admin-bro/design-system'
import apiSheetsSuhai30 from './apiSheetsSuhai30'
import gdisplay from './gdisplay' //
import { Link } from '@admin-bro/design-system'
import { DatePicker, DatePickerProps } from '@admin-bro/design-system'

const api = new ApiClient()

class Dashboard extends Component {
    state = {
        dados: [],
    }
    async componentDidMount() {
        var responseapiSheetsSuhai30 = await gdisplay.get('');
        console.log(responseapiSheetsSuhai30.data)
        this.setState({ dados: responseapiSheetsSuhai30.data });
    };
    render() {
        const { dados } = this.state;
        return (
            <Box flex flexDirection="column" variant="grey">
                <Box maxHeight="100px" padding="1em" margin="10px">
                    <Box width="200px" minHeight="20px">
                        <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDDAk7HNLdKCcV0QoZfZkOZoR5Z0IcZXgiojUM7iYt1noMg3wI7_UGXv9ESvbSMtFTw&usqp=CAU"
                            alt="Logo Suhai"></img>
                    </Box>
                </Box>
                <Box padding="2em" margin="20px" display={["block", "flex"]} backgroundColor="#ffffff" boxShadow="card" flexDirection="row" justifyContent="center" maxHeight="800px">
                    <Box width={1 / 2} height="50px">
                        <DatePicker onChange={(date) => console.log(date)} placeholder={'teste'}/>
                    </Box>

                    <Box width={1 / 2} height="50px">
                        <DatePicker onChange={(date) => console.log(date)} />
                    </Box>
                </Box>

                <Box display="flex" flexDirection="row" alignItems="center" maxHeight="20px" padding=" 1em 3em" >
                    <Box>
                        <img width="10px" height="10px" src="https://image.flaticon.com/icons/png/512/32/32738.png"></img>
                    </Box>
                    <Box paddingLeft="10px">
                        <Text color="black" fontSize="h3">BIG NUMBERS</Text>
                    </Box>
                </Box>
                <Box padding="1em" margin="10px" display={["block", "flex"]} flexDirection="row" justifyContent="center" maxHeight="800px">
                    <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" minWidth="290px" margin="10px" alignItems="center" minHeight="120px" display={["flex", "inline-flex"]}>
                        <Box paddingRight="20px" paddingLeft="7px" paddingRight="9px" marginX="15px" ><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/4985/4985048.png"></img></Box>
                        <Box paddingY="15px" paddingLeft="7px" paddingRight="35px" minHeight="70px">
                            <Text color="black" fontSize="h2">{dados.clicks}</Text>
                            <Text color="black" fontSize="h3">INVESTIDO</Text>
                        </Box>
                    </Box>
                    <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" minWidth="290px" margin="10px" alignItems="center" minHeight="120px" display={["flex", "inline-flex"]}>
                        <Box paddingLeft="7px" paddingRight="9px" marginX="15px"><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/31/31624.png"></img></Box>
                        <Box paddingY="15px" paddingRight="90px" paddingLeft="7px" minHeight="70px">
                            <Text color="black" fontSize="h2">{dados.clicks}</Text>
                            <Text color="black" fontSize="h3">VIEWS</Text>
                        </Box>
                    </Box>
                    <Box boxShadow="card" borderRadius="5px" backgroundColor="#ffffff" minWidth="290px" margin="10px" alignItems="center" minHeight="120px" display={["flex", "inline-flex"]}>
                        <Box borderRadius="5px" paddingRight="20px" paddingLeft="5px" marginX="15px" ><img width="80px" height="80px"
                            src="https://image.flaticon.com/icons/png/512/1908/1908669.png"></img></Box>
                        <Box paddingY="15px" paddingRight="20px" paddingLeft="7px" minHeight="70px">
                            <Text color="black" fontSize="h2">{dados.clicks}</Text>
                            <Text color="black" fontSize="h3">IMPRESSÕES</Text>
                        </Box>
                    </Box>
                </Box>


            </Box>
        );
    }
}

export default Dashboard;