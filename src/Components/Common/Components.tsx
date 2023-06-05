import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(255, 255, 255, 0.8)',
    textAlign: 'center',
    outline: '2px solid #94191b',
    display: 'flex',
    flexDirection: 'row',
  }));


export default Item