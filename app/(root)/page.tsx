import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.action';

const Home = async () => {
const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'guest'}
            subtext="We're here to help you manage your account transactions and finances efficiently"
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS 
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 123.50 }, {currentBalance: 500}]}
      />
    </section>
  )
}

export default Home