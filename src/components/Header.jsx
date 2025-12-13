import chefLogo from "../assets/Chef.png";
export default function Header(props) {
  return (
    <header>
      <div className="logo-container">
        <img id="logo" src={chefLogo} alt="Chef Jah" />
        <span>Chef Jah</span>
      </div>
      <button onClick={props.getResume}>
        <img
          src="https://img.icons8.com/?size=100&id=77&format=png&color=000000"
          alt="instructions icon"
        />
      </button>
    </header>
  );
}
