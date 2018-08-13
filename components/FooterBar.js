import NetworkSelector from "../components/NetworkSelector";

const NavigationBar = () => (
  <div className="bg-info d-flex p-1 m-0">
    <div className="ml-auto p-1">
      <NetworkSelector />
    </div>
  </div>
);

export default NavigationBar;