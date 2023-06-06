import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
  }));


export default Item