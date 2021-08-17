import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {
  return (
    <Box variant="grey">
      <h5 font-size="xl" class="sc-dIvqjp lbrNjM sc-fKgIGh admin-bro_Header admin-bro_H5" font-weight="normal">Google News - Power BI</h5>
      <br></br>
      <br></br>
      <iframe width="1000" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiZWFhODZkNzItZDc0YS00YTJlLThmMmEtYzk1OTY0MDg0MzY1IiwidCI6Ijg3ZTcxOWVhLTg0MGUtNDFiMy05Y2NkLTM5MDg2YzllY2NiNiIsImMiOjR9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
    </Box>
  )
}

export default Dashboard