import React from "react";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import HouseIcon from '@mui/icons-material/House';
const Content = styled.div`
  display: grid;
  font-size: 1rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr;
`;
const GridContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const List = styled.div`
  height:6rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Item = styled.li`
  list-style: none;
`;
const Profile = () => {
  return (
    <Content>
      <GridContainer>
        <SchoolIcon fontSize="large"></SchoolIcon>
        <List>
          <Item>KSVS CS</Item>
          <Item>NFU CSIE</Item>
          <Item>CCU CSIE</Item>
        </List>
      </GridContainer>
      <GridContainer>
        <HouseIcon fontSize="large" />
          <List>
            <Item>Kaosiung</Item>
            <Item>Chiayi</Item>
          </List>
      </GridContainer>
      <div>2</div>
      <div>3</div>
    </Content>
  );
};

export default Profile;