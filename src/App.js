import './App.css';
import Header from './components/Header';
import Section from './components/Section';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back Guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-panel.jpg"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof."
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-roof.jpg"
      />

      <Section
        title="Accessories"
        description="Solar Roof Costs Less Than a New Roof"
        leftBtnText="Shop Now"
        backgroundImg="accessories.jpg"
      />
    </div>
  );
}

export default App;
