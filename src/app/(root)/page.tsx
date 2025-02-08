import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar";
import Link from "next/link";

export default function Home() {
  const loggednIn = {
    firstName: "Anan",
    lastName: "MMP",
    email: "nut999anan@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggednIn?.firstName || "Guest"}
            subtext="Access and manage your account and trnsactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
      <RightSideBar
        user={loggednIn}
        transactions={[]}
        banks={[{ currentBalance: 12123.5 }, { currentBalance: 5234.5 }]}
      />
    </section>
  );
}
