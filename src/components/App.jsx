// import data
import user from './configs/user.json';
import data from './configs/data.json';
import friends from './configs/friends.json';
import transactions from './configs/transactions.json';
// import component
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
//import for styles
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './App.styled';

export const App = () => {
  return (
  
    <AppContainer>
      <GlobalStyle/>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </AppContainer>
  );
};
