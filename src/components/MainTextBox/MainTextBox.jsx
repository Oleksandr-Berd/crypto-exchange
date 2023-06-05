import illustration from "../../assets/images/ILUSTRATION.png"

const MainTextBox = () => {
    return (
      <div>
        <h1>Electronic currency exchange</h1>
        <p>
          A fast way to exchange your money online from anywhere in the world
          and from any device
        </p>
        <img src={illustration} alt="illustration" />
      </div>
    );
}
 
export default MainTextBox;