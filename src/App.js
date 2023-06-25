import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const Header = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #232323;
  color: #fff;
  font-size: 1rem;
`;

const MobileWrapper = styled.div`
  width: 100%;
  height: calc(100% - 4rem);
  background-color: #c8c8c8;
  color: #fff;
  position: relative;
`;

const SideBar = styled.div`
  width: 6rem;
  height: 100%;
  background-color: #aaa;
  text-align: center;
  font-size: 1.375rem;
  font-weight: bold;
`; 

const TicketArea = styled.div`
  width: 20rem;
  height: auto;
  background-color: beige;
  color: #000;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2.5rem;
`;

const Ticket = styled.div`
  width: 100%;
  height: 8rem;
  background-color: pink;
  border-radius: 1.125rem;
  padding: .625rem
`;
function App() {
  return (
    <Wrapper>
      <Header>
        My Ticket Diary
      </Header>
      <MobileWrapper>
        <SideBar>
          2023
        </SideBar>
        <TicketArea>
          <Ticket>
            티켓이에요
          </Ticket>
        </TicketArea>
      </MobileWrapper>
    </Wrapper>
  );
}

export default App;
