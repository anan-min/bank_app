import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
  const loggednIn = { firstName: "Anan" };
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
          <TotalBalanceBox />
        </header>
      </div>
    </section>
  );
}
