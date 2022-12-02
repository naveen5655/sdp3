import naveen from "../images/naveen.jpg";

const AboutUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3">
      <h1><u>Owner Details</u></h1>
      <img src={naveen} height={150} width={150}></img><h5>Name: Badisa Naveen</h5>
      <a href="https://www.linkedin.com/in/badisanaveen/">Linkedin</a> <span></span>
      <a href="https://github.com/naveen5655">Github</a>
     <h4>Stock Management is the complete Guide to Managing Your Ecommerce Products.</h4>
     <h4>
     Stock management involves:</h4>
       <h5>1.Tracking fluctuations in your stock</h5>
       <h5>2.Monitoring the condition of your stock</h5>
       <h5>3.Understanding customer demand for stock</h5>
       <h5>4.Determining costs for materials</h5>
       <h5>5.Calculating shipping, handling, and storage costs</h5>
     <br/>
    <h5>
      "Stock management is crucial for ecommerce companies for many reasons. First, it guarantees that goods are offered when clients wish to buy them. Second, it helps prevent overstocking, which can waste money and cause storage and logistical issues"
    </h5>
    </div>
  );
};

export default AboutUs;