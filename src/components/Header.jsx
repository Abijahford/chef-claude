import chefLogo from "../assets/Chef.png";
export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img id="logo" src={chefLogo} alt="Chef Claude" />
        <span>Chef Claude</span>
      </div>
    </header>
  );
}
